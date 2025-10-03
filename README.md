# chroma-comparison.github.io

A simple test of different sampler and scheduler combinations using [Chroma Chroma1-HD-fp8_scaled_rev2.safetensors](https://huggingface.co/silveroxides/Chroma1-HD-fp8-scaled) and [chroma-unlocked-v47-flash-heun-8steps-cfg1_r256-fp32](https://huggingface.co/silveroxides/Chroma-LoRAs) speed lora.

All images generated with:

* Seed: 328792217
* Steps: 8
* CFG Scale: 1
* Width: 832
* Height: 1216

Most images generated in under 4 seconds, which is pretty good! The imags are a bit blurry because they would still need to be passed through an upscale and refiner stage. This repo serves only as an easy way to visually see the difference sampler and scheduler combinations make with the exact same prompt and seed and other settings.
