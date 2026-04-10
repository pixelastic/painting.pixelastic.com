.PHONY: help install build serve clean

help:
	@echo "Available commands:"
	@echo "  make install    - Install all dependencies (Hugo + npm)"
	@echo "  make build      - Build the site for production"
	@echo "  make serve      - Run local development server"
	@echo "  make clean      - Clean build artifacts"

install:
	@./scripts/install

build:
	@./scripts/build

serve:
	@./scripts/serve

clean:
	@./scripts/clean
