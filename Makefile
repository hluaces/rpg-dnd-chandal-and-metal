SHELL := /bin/bash

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

clean:
	npm run clean

.PHONY: install dev build clean
