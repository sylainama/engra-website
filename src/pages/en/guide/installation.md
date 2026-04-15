---
layout: ../../../layouts/Doc.astro
title: Installation
description: How to install Engra and its dependencies.
---

# Installation

## 1. Download Engra

Go to the [download page](/en/download) and download the version for your system.

### macOS
- Open the `.dmg` file
- Drag Engra to the Applications folder
- On first launch, right-click > Open (Gatekeeper)

### Linux
- Extract the `.tar.gz` archive
- Run `./engra` from the extracted folder
- Make sure GTK3 is installed

### Windows
- Extract the `.zip`
- Run `engra.exe`

## 2. Transcription

The transcription engine is downloaded and compiled **automatically** on first launch. A base model (~500 MB) is downloaded.

You can change models in **Settings > Transcription**:

| Model | Size | Accuracy | Speed |
|-------|------|----------|-------|
| Light | 75 MB | Low | Very fast |
| Standard | 500 MB | Good | Moderate |
| Advanced | 1.5 GB | Very good | Slow |
| Maximum | 3 GB | Excellent | Very slow |

## 3. AI Summaries — Optional

To enable automatic summaries, download an AI model from **Settings > AI Model** in the app. It's one click, no command line required.

Several model levels are available:
- **Lite** (~1 GB) — Fast, decent quality
- **Standard** (~2.5 GB) — Good balance
- **Advanced** (~8 GB) — Very good quality, requires 16+ GB RAM

## 4. Permissions (macOS)

On first launch, macOS will ask for:

1. **Microphone** — Required for recording
2. **Screen Recording** — Required for system audio capture (Zoom, Teams, etc.)

Grant these permissions in **System Settings > Privacy & Security**.

## Recommended specs

- **RAM**: 8 GB minimum, 16 GB recommended
- **Disk space**: 5 GB minimum
- **Processor**: Apple Silicon recommended for best AI performance
