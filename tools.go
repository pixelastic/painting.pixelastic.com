//go:build tools
// +build tools

// See: https://go.dev/wiki/Modules#how-can-i-track-tool-dependencies-for-a-module

package tools

import (
	_ "github.com/gohugoio/hugo"
)
