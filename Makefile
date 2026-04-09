.PHONY: help install build serve clean

help:
	@echo "Available commands:"
	@echo "  make install    - Install all dependencies (Hugo)"
	@echo "  make build      - Build the site for production"
	@echo "  make serve      - Run local development server"
	@echo "  make clean      - Clean build artifacts"

install:
	@echo "📦 Installing Hugo..."
	@go install github.com/gohugoio/hugo@v0.160.1
	@echo "✅ Hugo installed successfully!"
	@echo ""
	@hugo version

build:
	@echo "🔨 Building site..."
	@hugo --minify
	@echo "✅ Site built in ./public/"

serve:
	@echo "🚀 Starting development server..."
	@hugo server --buildDrafts --buildFuture

clean:
	@echo "🧹 Cleaning build artifacts..."
	@rm -rf public/ resources/
	@echo "✅ Clean complete!"
