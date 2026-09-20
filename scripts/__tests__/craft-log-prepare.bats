bats_load_library 'helper'
bats_load_library 'helper-json'

# Add scripts/ to PATH, mock img-resize and img-min to record calls
setup() {
  bats_tmp_dir
  mkdir -p "$BATS_TMP_DIR/content/posts"
  mkdir -p "$BATS_TMP_DIR/dropbox"

  img-resize() { echo "$@" >> "$BATS_TMP_DIR/img-resize-calls"; }
  img-min() { echo "$@" >> "$BATS_TMP_DIR/img-min-calls"; }
  bats_mock img-resize img-min
  bats_disable_worktree_aware

  bats_mock_env "PATH" "$BATS_TEST_DIRNAME/..:$PATH"
}

# Create a fake Dropbox photo
create_photo() {
  local file="$BATS_TMP_DIR/dropbox/$1"
  echo "photo-data" > "$file"
}

@test "errors without --slug flag" {
  create_photo "2026-09-19 20.45.17.jpg"

  bats_run_zsh "cd $BATS_TMP_DIR && craft-log-prepare $BATS_TMP_DIR/dropbox/2026-09-19\ 20.45.17.jpg"
  [[ "$status" -ne 0 ]]
}

@test "creates post directory from --slug" {
  create_photo "2026-09-19 20.45.17.jpg"

  bats_run_zsh "cd $BATS_TMP_DIR && craft-log-prepare --slug testSlug '$BATS_TMP_DIR/dropbox/2026-09-19 20.45.17.jpg'"
  [[ "$status" -eq 0 ]]
  [[ -d "$BATS_TMP_DIR/content/posts/testSlug" ]]
}

@test "renames photo using Dropbox timestamp format" {
  create_photo "2026-09-19 20.45.17.jpg"

  bats_run_zsh "cd $BATS_TMP_DIR && craft-log-prepare --slug testSlug '$BATS_TMP_DIR/dropbox/2026-09-19 20.45.17.jpg'"
  [[ "$status" -eq 0 ]]
  [[ -f "$BATS_TMP_DIR/content/posts/testSlug/image-20260919204517000.jpg" ]]
}

@test "calls img-resize 1400x1400 on the copied file" {
  create_photo "2026-09-19 20.45.17.jpg"

  bats_run_zsh "cd $BATS_TMP_DIR && craft-log-prepare --slug testSlug '$BATS_TMP_DIR/dropbox/2026-09-19 20.45.17.jpg'"
  [[ "$status" -eq 0 ]]
  [[ -f "$BATS_TMP_DIR/img-resize-calls" ]]

  local call="$(cat "$BATS_TMP_DIR/img-resize-calls")"
  [[ "$call" == *"image-20260919204517000.jpg"* ]]
  [[ "$call" == *"1400x1400"* ]]
}

@test "calls img-min on the copied file" {
  create_photo "2026-09-19 20.45.17.jpg"

  bats_run_zsh "cd $BATS_TMP_DIR && craft-log-prepare --slug testSlug '$BATS_TMP_DIR/dropbox/2026-09-19 20.45.17.jpg'"
  [[ "$status" -eq 0 ]]
  [[ -f "$BATS_TMP_DIR/img-min-calls" ]]

  local call="$(cat "$BATS_TMP_DIR/img-min-calls")"
  [[ "$call" == *"image-20260919204517000.jpg"* ]]
}

@test "outputs valid JSON mapping originals to final filenames" {
  create_photo "2026-09-19 20.45.17.jpg"

  bats_run_zsh "cd $BATS_TMP_DIR && craft-log-prepare --slug testSlug '$BATS_TMP_DIR/dropbox/2026-09-19 20.45.17.jpg'"
  [[ "$status" -eq 0 ]]

  echo "$output" | jq '.' > /dev/null
  expect_json_glob '.[0].original' "*2026-09-19 20.45.17.jpg"
  expect_json '.[0].file' "image-20260919204517000.jpg"
}

@test "does not modify original Dropbox file" {
  create_photo "2026-09-19 20.45.17.jpg"
  local originalMd5="$(md5sum "$BATS_TMP_DIR/dropbox/2026-09-19 20.45.17.jpg" | cut -d' ' -f1)"

  bats_run_zsh "cd $BATS_TMP_DIR && craft-log-prepare --slug testSlug '$BATS_TMP_DIR/dropbox/2026-09-19 20.45.17.jpg'"
  [[ "$status" -eq 0 ]]

  local afterMd5="$(md5sum "$BATS_TMP_DIR/dropbox/2026-09-19 20.45.17.jpg" | cut -d' ' -f1)"
  [[ "$originalMd5" == "$afterMd5" ]]
}

@test "handles multiple photos" {
  create_photo "2026-09-19 20.45.17.jpg"
  create_photo "2026-09-19 21.10.05.png"

  bats_run_zsh "cd $BATS_TMP_DIR && craft-log-prepare --slug testSlug '$BATS_TMP_DIR/dropbox/2026-09-19 20.45.17.jpg' '$BATS_TMP_DIR/dropbox/2026-09-19 21.10.05.png'"
  [[ "$status" -eq 0 ]]

  [[ -f "$BATS_TMP_DIR/content/posts/testSlug/image-20260919204517000.jpg" ]]
  [[ -f "$BATS_TMP_DIR/content/posts/testSlug/image-20260919211005000.png" ]]

  local count="$(echo "$output" | jq 'length')"
  [[ "$count" -eq 2 ]]
}

@test "preserves original file extension" {
  create_photo "2026-09-19 20.45.17.png"

  bats_run_zsh "cd $BATS_TMP_DIR && craft-log-prepare --slug testSlug '$BATS_TMP_DIR/dropbox/2026-09-19 20.45.17.png'"
  [[ "$status" -eq 0 ]]
  [[ -f "$BATS_TMP_DIR/content/posts/testSlug/image-20260919204517000.png" ]]
}
