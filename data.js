rawData = {
  "title": "Grids/grid-2025-10-02-22-02-38",
  "description": "",
  "ext": "png",
  "min_width": 832,
  "min_height": 1216,
  "defaults": {
    "show_descriptions": true,
    "autoscale": false,
    "sticky": false,
    "sticky_labels": true,
    "x": "scheduler",
    "y": "sampler",
    "x2": "none",
    "y2": "none"
  },
  "will_run": true,
  "metadata": null,
  "axes": [
    {
      "id": "scheduler",
      "title": "Scheduler",
      "description": "",
      "values": [
        {
          "key": "sgm_uniform",
          "path": "sgm_uniform",
          "title": "sgm_uniform",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "sgm_uniform"
          }
        },
        {
          "key": "align_your_step",
          "path": "align_your_step",
          "title": "align_your_steps",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "align_your_steps"
          }
        },
        {
          "key": "beta",
          "path": "beta",
          "title": "beta",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "beta"
          }
        }
      ]
    },
    {
      "id": "sampler",
      "title": "Sampler",
      "description": "",
      "values": [
        {
          "key": "dpmpp_2s_ancest",
          "path": "dpmpp_2s_ancest",
          "title": "dpmpp_2s_ancestral",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_2s_ancestral"
          }
        },
        {
          "key": "dpmpp_sde",
          "path": "dpmpp_sde",
          "title": "dpmpp_sde",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_sde"
          }
        },
        {
          "key": "dpmpp_sde_gpu",
          "path": "dpmpp_sde_gpu",
          "title": "dpmpp_sde_gpu",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_sde_gpu"
          }
        },
        {
          "key": "dpmpp_2m_sde",
          "path": "dpmpp_2m_sde",
          "title": "dpmpp_2m_sde",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_2m_sde"
          }
        },
        {
          "key": "er_sde",
          "path": "er_sde",
          "title": "er_sde",
          "description": "",
          "show": true,
          "params": {
            "sampler": "er_sde"
          }
        },
        {
          "key": "seeds_2",
          "path": "seeds_2",
          "title": "seeds_2",
          "description": "",
          "show": true,
          "params": {
            "sampler": "seeds_2"
          }
        },
        {
          "key": "seeds_3",
          "path": "seeds_3",
          "title": "seeds_3",
          "description": "",
          "show": true,
          "params": {
            "sampler": "seeds_3"
          }
        }
      ]
    }
  ]
}