bats_load_library 'helper'

# Add scripts/ to PATH via mock env so zsh subprocesses can find it
setup() {
  bats_tmp_dir
  bats_mock_env "DROPBOX_CAMERA_DIR" "$BATS_TMP_DIR"
  bats_mock_env "PATH" "$BATS_TEST_DIRNAME/..:$PATH"
}

# Create a file with mtime matching its name
# Usage: create_photo "2026-09-15 14.00.00.jpg"
create_photo() {
  local file="$BATS_TMP_DIR/$1"
  touch "$file"
  # Convert "YYYY-MM-DD HH.MM.SS" to touch -t format "YYYYMMDDhhmm.ss"
  local timestamp="${1:0:4}${1:5:2}${1:8:2}${1:11:2}${1:14:2}.${1:17:2}"
  touch -t "$timestamp" "$file"
}

@test "returns photos within the time range" {
  create_photo "2026-09-15 14.00.00.jpg"
  create_photo "2026-09-15 20.45.00.jpg"
  create_photo "2026-09-15 21.30.00.jpg"
  create_photo "2026-09-15 23.30.00.jpg"

  # Range: 20:44 to 23:30 (+2h buffer = 01:30)
  bats_run_zsh "craft-log-photos 2026-09-15 20.44 23.30"
  [[ "$status" -eq 0 ]]

  # Should include 20:45, 21:30, 23:30 but not 14:00
  [[ "$output" != *"14.00.00"* ]]
  [[ "$output" == *"20.45.00"* ]]
  [[ "$output" == *"21.30.00"* ]]
  [[ "$output" == *"23.30.00"* ]]
}

@test "returns empty JSON array when no photos match" {
  create_photo "2026-09-15 14.00.00.jpg"

  bats_run_zsh "craft-log-photos 2026-09-15 20.00 22.00"
  [[ "$status" -eq 0 ]]
  [[ "$output" == "[]" ]]
}

@test "excludes photos from a different date" {
  create_photo "2026-09-14 21.00.00.jpg"
  create_photo "2026-09-15 21.00.00.jpg"

  bats_run_zsh "craft-log-photos 2026-09-15 20.00 22.00"
  [[ "$status" -eq 0 ]]
  [[ "$output" != *"09-14"* ]]
  [[ "$output" == *"09-15"* ]]
}

@test "includes photos within the +2h buffer after last_note_time" {
  # last_note_time=22.00, buffer end=00.00
  create_photo "2026-09-15 22.30.00.jpg"
  create_photo "2026-09-15 23.59.00.jpg"

  bats_run_zsh "craft-log-photos 2026-09-15 22.00 22.00"
  [[ "$status" -eq 0 ]]
  [[ "$output" == *"22.30.00"* ]]
  [[ "$output" == *"23.59.00"* ]]
}

@test "handles midnight rollover — includes next-day photos within buffer" {
  # last_note_time=23.30, buffer end=01.30 next day
  create_photo "2026-09-15 23.45.00.jpg"
  create_photo "2026-09-15 20.00.00.jpg"
  # Next-day photo at 01.00 is within buffer (01:30 cutoff)
  create_photo "2026-09-16 01.00.00.jpg"
  # Next-day photo at 02.00 is outside buffer
  create_photo "2026-09-16 02.00.00.jpg"

  bats_run_zsh "craft-log-photos 2026-09-15 23.00 23.30"
  [[ "$status" -eq 0 ]]
  [[ "$output" == *"23.45.00"* ]]
  [[ "$output" != *"20.00.00"* ]]
  [[ "$output" == *"01.00.00"* ]]
  [[ "$output" != *"02.00.00"* ]]
}

@test "outputs valid JSON array of absolute paths" {
  create_photo "2026-09-15 21.00.00.jpg"

  bats_run_zsh "craft-log-photos 2026-09-15 20.00 22.00"
  [[ "$status" -eq 0 ]]

  # Should be valid JSON parseable by jq
  echo "$output" | jq '.' > /dev/null
  # Should contain absolute paths
  [[ "$output" == *"$BATS_TMP_DIR"* ]]
}
