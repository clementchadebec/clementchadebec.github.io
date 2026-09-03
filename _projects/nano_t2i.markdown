---
layout: page
title: <a href="https://github.com/gojasper/nano-t2i" target="_blank">nano-t2i</a>
img: assets/img/nano_t2i_project/logo_nano_t2i.png
img_contain: true
description: A minimal, hackable codebase to train a text-to-image flow matching model end-to-end on a single H200 GPU for under $300
github: https://github.com/gojasper/nano-t2i
arxiv: https://arxiv.org/abs/2605.21272
huggingface: https://huggingface.co/datasets/jasperai/monet
importance: 2
category: work
---

<div class="row ml-0 mr-0 p-0">
    <div class="icon" data-toggle="tooltip" title="Code Repository">
        <a href="{{ page.github }}" target="_blank"><i class="fab fa-github gh-icon fa-2x"></i></a>
    </div>
    <div class="icon" data-toggle="tooltip" title="Arxiv">
        <a href="{{ page.arxiv }}" target="_blank"><i class="ai ai-arxiv fa-2x"></i></a>
    </div>
    <div class="icon" data-toggle="tooltip" title="Hugging Face">
        <a href="{{ page.huggingface }}" target="_blank"><img class="hf-icon" src="{{ '/assets/img/icons/huggingface.svg' | relative_url }}" alt="Hugging Face"></a>
    </div>
</div>

`nano-t2i` is a minimal, hackable and fully open codebase to reproducibly train a
text-to-image flow matching model end-to-end on the
[MONET dataset]({{ page.huggingface }}) — from raw shards to a working Gradio demo
in two commands, on a single H200 GPU, for under $300.

## The model

A 1.3B DiT-style flow matching model pairing a **Qwen3-4B** text encoder with a
**SANA VAE** latent backbone. The `nano` config stacks 5 dual-stream and 5
single-stream DiT blocks with 24 attention heads of 128 dimensions each, relies on
AdaLN sharing and is initialized with AdaLN-Zero. Everything is built on top of
PyTorch Lightning and diffusers, and every architectural choice lives in a single
YAML config, so the whole thing stays small enough to fit on one GPU and simple
enough to take apart.

Training runs in two sequential phases: 200k steps at 512×512, then 500k steps at
1024×1024 resumed from the first phase. FlashAttention v3 is supported as well.

## Training on a budget

The headline result is how little it costs to go from nothing to a working
text-to-image model. Counting at roughly $3 per H200 per hour:

| Resolution | Hardware | Wall time | Cost   |
| ---------- | -------- | --------- | ------ |
| 512        | 1×H200   | 24 h      | ~$72   |
| 512        | 1×H200   | 36 h      | ~$108  |
| 1024       | 1×H200   | 48 h      | ~$144  |
| 1024       | 1×H200   | 60 h      | ~$180  |
| 1024       | 1×H200   | 72 h      | ~$216  |
{: .table .table-sm}

<div class="row justify-content-sm-center mt-3">
    <div class="col-sm-12 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ 'assets/img/nano_t2i_project/training_curves.jpg' | relative_url }}" alt="nano-t2i training curves for the 1×H200 and 8×H200 reference runs">
    </div>
</div>
<div class="caption">
    Training loss for the two reference runs, on 1×H200 and 8×H200.
</div>

## Data

Training uses **MONET**, a 104.9M image-text corpus distilled from 2.9B raw pairs
across nine open sources, with safety filtering, pHash and SSCD deduplication,
domain governance and multi-VLM re-captioning. It ships pre-computed SANA-VAE
latents so you can train in latent space directly, and is released under
Apache-2.0 — as is this codebase.

The same code was used to train the 4B model reported in
[the MONET paper]({{ page.arxiv }}).
