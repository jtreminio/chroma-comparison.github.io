all_metadata["sgm_uniform/dpmpp_2m_cfg_pp"] = {
  "sui_image_params": {
    "prompt": "aesthetic 8, aesthetic 9, aesthetic 10, aesthetic 11. Style is detailed Western anime, 2D, stylized, muted, painterly, cinematic fantasy. Angle is shallow depth of field, bokeh background, intimate composition, portrait close-up, subject in sharp focus. (Colors are monochrome, dark yellow base, pale brown gradient, and mango orange accent, cold pastels, cool pastels, cold tones, cool tones, low saturation:0.7) . Lighting is low key, rim light, natural light, deep contrast, fog lighting, cinestill, light particles, bokeh. Colors are monochrome, dark yellow base, pale brown gradient, and mango orange accent, cold pastels, cool pastels, cold tones, cool tones, low saturation. young woman, wearing mesh cut-out dress and heels. clothes earrings: neon drop earrings. clothes hair: hair bobbles. clothes patterns: multicolored stripes. clothes sleeves: ribbed sleeves. clothes actions eyewear: adjusting eyewear. ears: sheep ears. flowers: anthurium. Location is: forgotten ruins, towering mountains, ruined houses, grass, flowers, outdoors, autumn, day, grey sky, overcast, cloudy sky, rain, fantasy. Action is: typing. striped background.",
    "model": "chroma/Chroma1-HD-fp8_scaled_rev2",
    "seed": 328792217,
    "steps": 8,
    "cfgscale": 1.0,
    "aspectratio": "2:3",
    "width": 832,
    "height": 1216,
    "sidelength": 1024,
    "sampler": "dpmpp_2m_cfg_pp",
    "scheduler": "sgm_uniform",
    "automaticvae": true,
    "autobreak": false,
    "cleanupprompts": true,
    "segmentmaskblur": 15,
    "segmentmaskgrow": 10,
    "segmentmaskoversize": 50,
    "segmentsteps": 50,
    "loras": [
      "chroma/chroma-unlocked-v47-flash-heun-8steps-cfg1_r256-fp32"
    ],
    "loraweights": [
      "1"
    ],
    "lorasectionconfinement": [
      "0"
    ],
    "negativeprompt": "",
    "swarm_version": "0.9.7.0"
  },
  "sui_extra_data": {
    "date": "2025-10-02",
    "prompted_loras": [
      "chroma/chroma-unlocked-v47-flash-heun-8steps-cfg1_r256-fp32"
    ],
    "original_prompt": "aesthetic 8, aesthetic 9, aesthetic 10, aesthetic 11. Style is detailed Western anime, 2D, stylized, muted, painterly, cinematic fantasy. Angle is shallow depth of field, bokeh background, intimate composition, portrait close-up, subject in sharp focus. (Colors are monochrome, dark yellow base, pale brown gradient, and mango orange accent, cold pastels, cool pastels, cold tones, cool tones, low saturation:0.7). Lighting is low key, rim light, natural light, deep contrast, fog lighting, cinestill, light particles, bokeh. Colors are monochrome, dark yellow base, pale brown gradient, and mango orange accent, cold pastels, cool pastels, cold tones, cool tones, low saturation. young woman, wearing mesh cut-out dress and heels. clothes earrings: neon drop earrings. clothes hair: hair bobbles. clothes patterns: multicolored stripes. clothes sleeves: ribbed sleeves. clothes actions eyewear: adjusting eyewear. ears: sheep ears. flowers: anthurium. Location is: forgotten ruins, towering mountains, ruined houses, grass, flowers, outdoors, autumn, day, grey sky, overcast, cloudy sky, rain, fantasy. Action is: typing. striped background.\n\n<lora:chroma/chroma-unlocked-v47-flash-heun-8steps-cfg1_r256-fp32>",
    "prep_time": "3.07 min",
    "generation_time": "5.99 sec"
  },
  "sui_models": [
    {
      "name": "chroma/Chroma1-HD-fp8_scaled_rev2.safetensors",
      "param": "model",
      "hash": "0xc022cc32589e69f0c822151aeeb563bb38e30c286ec64b240369d4fd756b5bce"
    },
    {
      "name": "chroma/chroma-unlocked-v47-flash-heun-8steps-cfg1_r256-fp32.safetensors",
      "param": "loras",
      "hash": "0xd959747ceeee205afe499613d9b60daed7d968237c8553e6fa181211cadb8396"
    }
  ]
}
