---
layout: ../../../layouts/Doc.astro
title: AI Summaries
description: How automatic summaries work in Engra.
---

# AI Summaries

## How it works

Engra runs language models (LLMs) directly on your machine to generate summaries. Everything runs locally, no data is sent externally.

## What is generated

For each meeting, the AI produces:

1. **Summary**: structured overview of the meeting
2. **Decisions**: decisions made during the meeting
3. **Key points**: important information to remember
4. **Action items**: tasks to complete, with assignee and date

## Model levels

| Level | Recommended RAM | Quality |
|-------|----------------|---------|
| Lite | 4 GB | Decent |
| Standard | 8 GB | Good |
| Pro | 16 GB | Very good |
| Expert | 12 GB | Excellent |
| Ultra | 16 GB | Maximum |

Change models in **Settings > AI Model**.

## Templates

Templates adapt generation to the meeting type. For example, the **Standup** template focuses on blockers and progress, while **Sales call** targets client needs and objections.

## Regenerate a summary

You can regenerate a summary at any time by clicking the regenerate button. You can also change the template before regenerating.
