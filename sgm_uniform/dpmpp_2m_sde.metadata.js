all_metadata["sgm_uniform/dpmpp_2m_sde"] = {
  "sui_image_params": {
    "prompt": "aesthetic 8, aesthetic 9, aesthetic 10, aesthetic 11. Lighting is closeup, backlight, hard light, haze, high contrast, low key, volumetric light, light particles, bokeh. Style is stylized anime, anime screenshot, vivid colors, illustration, lineart. Angle is closeup portrait, face focus, dynamic perspective, forced perspective, extreme perspective, foreshortening, dynamic composition, dynamic pose, action shot, depth of field. Woman, zoomed on face, skindentation, matte skin.A woman in a sleek suit with glowing cyan trim crouches in a sandstone canyon, her hands cupping a warm, pulsating egg nestled in a bed of iridescent mosaic tiles. The intricate blue bows of her liangbatou hairstyle catch the light from floating lanterns, casting shifting shadows on the glowing canyon walls around her. The soft, ambient dusk light from above mingles with the egg's gentle, internal luminescence.",
    "model": "chroma/Chroma1-HD-fp8_scaled_rev2",
    "seed": 708049200,
    "steps": 8,
    "cfgscale": 1.0,
    "aspectratio": "2:3",
    "width": 832,
    "height": 1216,
    "sidelength": 1024,
    "sampler": "dpmpp_2m_sde",
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
    "original_prompt": "aesthetic 8, aesthetic 9, aesthetic 10, aesthetic 11. Lighting is closeup, backlight, hard light, haze, high contrast, low key, volumetric light, light particles, bokeh. Style is stylized anime, anime screenshot, vivid colors, illustration, lineart. Angle is closeup portrait, face focus, dynamic perspective, forced perspective, extreme perspective, foreshortening, dynamic composition, dynamic pose, action shot, depth of field. Woman, zoomed on face, skindentation, matte skin.A woman in a sleek suit with glowing cyan trim crouches in a sandstone canyon, her hands cupping a warm, pulsating egg nestled in a bed of iridescent mosaic tiles. The intricate blue bows of her liangbatou hairstyle catch the light from floating lanterns, casting shifting shadows on the glowing canyon walls around her. The soft, ambient dusk light from above mingles with the egg's gentle, internal luminescence. <lora:chroma/chroma-unlocked-v47-flash-heun-8steps-cfg1_r256-fp32>",
    "prep_time": "67.61 sec",
    "generation_time": "3.25 sec"
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
