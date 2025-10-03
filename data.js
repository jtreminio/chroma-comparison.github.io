rawData = {
  "title": "Grids/grid-2025-10-02-20-16-06",
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
          "key": "simple",
          "path": "simple",
          "title": "simple",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "simple"
          }
        },
        {
          "key": "ddim_uniform",
          "path": "ddim_uniform",
          "title": "ddim_uniform",
          "description": "",
          "show": true,
          "params": {
            "scheduler": "ddim_uniform"
          }
        },
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
          "key": "euler",
          "path": "euler",
          "title": "euler",
          "description": "",
          "show": true,
          "params": {
            "sampler": "euler"
          }
        },
        {
          "key": "euler_ancestral",
          "path": "euler_ancestral",
          "title": "euler_ancestral",
          "description": "",
          "show": true,
          "params": {
            "sampler": "euler_ancestral"
          }
        },
        {
          "key": "heun",
          "path": "heun",
          "title": "heun",
          "description": "",
          "show": true,
          "params": {
            "sampler": "heun"
          }
        },
        {
          "key": "heunpp2",
          "path": "heunpp2",
          "title": "heunpp2",
          "description": "",
          "show": true,
          "params": {
            "sampler": "heunpp2"
          }
        },
        {
          "key": "dpm_2",
          "path": "dpm_2",
          "title": "dpm_2",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpm_2"
          }
        },
        {
          "key": "dpm_2_ancestral",
          "path": "dpm_2_ancestral",
          "title": "dpm_2_ancestral",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpm_2_ancestral"
          }
        },
        {
          "key": "lms",
          "path": "lms",
          "title": "lms",
          "description": "",
          "show": true,
          "params": {
            "sampler": "lms"
          }
        },
        {
          "key": "dpm_fast",
          "path": "dpm_fast",
          "title": "dpm_fast",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpm_fast"
          }
        },
        {
          "key": "dpm_adaptive",
          "path": "dpm_adaptive",
          "title": "dpm_adaptive",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpm_adaptive"
          }
        },
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
          "key": "dpmpp_2m",
          "path": "dpmpp_2m",
          "title": "dpmpp_2m",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_2m"
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
          "key": "dpmpp_2m_sde_gp",
          "path": "dpmpp_2m_sde_gp",
          "title": "dpmpp_2m_sde_gpu",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_2m_sde_gpu"
          }
        },
        {
          "key": "dpmpp_3m_sde",
          "path": "dpmpp_3m_sde",
          "title": "dpmpp_3m_sde",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_3m_sde"
          }
        },
        {
          "key": "dpmpp_3m_sde_gp",
          "path": "dpmpp_3m_sde_gp",
          "title": "dpmpp_3m_sde_gpu",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_3m_sde_gpu"
          }
        },
        {
          "key": "ddim",
          "path": "ddim",
          "title": "ddim",
          "description": "",
          "show": true,
          "params": {
            "sampler": "ddim"
          }
        },
        {
          "key": "ddpm",
          "path": "ddpm",
          "title": "ddpm",
          "description": "",
          "show": true,
          "params": {
            "sampler": "ddpm"
          }
        },
        {
          "key": "lcm",
          "path": "lcm",
          "title": "lcm",
          "description": "",
          "show": true,
          "params": {
            "sampler": "lcm"
          }
        },
        {
          "key": "uni_pc",
          "path": "uni_pc",
          "title": "uni_pc",
          "description": "",
          "show": true,
          "params": {
            "sampler": "uni_pc"
          }
        },
        {
          "key": "uni_pc_bh2",
          "path": "uni_pc_bh2",
          "title": "uni_pc_bh2",
          "description": "",
          "show": true,
          "params": {
            "sampler": "uni_pc_bh2"
          }
        },
        {
          "key": "res_multistep",
          "path": "res_multistep",
          "title": "res_multistep",
          "description": "",
          "show": true,
          "params": {
            "sampler": "res_multistep"
          }
        },
        {
          "key": "res_multistep_a",
          "path": "res_multistep_a",
          "title": "res_multistep_ancestral",
          "description": "",
          "show": true,
          "params": {
            "sampler": "res_multistep_ancestral"
          }
        },
        {
          "key": "ipndm",
          "path": "ipndm",
          "title": "ipndm",
          "description": "",
          "show": true,
          "params": {
            "sampler": "ipndm"
          }
        },
        {
          "key": "ipndm_v",
          "path": "ipndm_v",
          "title": "ipndm_v",
          "description": "",
          "show": true,
          "params": {
            "sampler": "ipndm_v"
          }
        },
        {
          "key": "deis",
          "path": "deis",
          "title": "deis",
          "description": "",
          "show": true,
          "params": {
            "sampler": "deis"
          }
        },
        {
          "key": "gradient_estima",
          "path": "gradient_estima",
          "title": "gradient_estimation",
          "description": "",
          "show": true,
          "params": {
            "sampler": "gradient_estimation"
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
        },
        {
          "key": "sa_solver",
          "path": "sa_solver",
          "title": "sa_solver",
          "description": "",
          "show": true,
          "params": {
            "sampler": "sa_solver"
          }
        },
        {
          "key": "sa_solver_pece",
          "path": "sa_solver_pece",
          "title": "sa_solver_pece",
          "description": "",
          "show": true,
          "params": {
            "sampler": "sa_solver_pece"
          }
        },
        {
          "key": "euler_cfg_pp",
          "path": "euler_cfg_pp",
          "title": "euler_cfg_pp",
          "description": "",
          "show": true,
          "params": {
            "sampler": "euler_cfg_pp"
          }
        },
        {
          "key": "euler_ancestral35",
          "path": "euler_ancestral35",
          "title": "euler_ancestral_cfg_pp",
          "description": "",
          "show": true,
          "params": {
            "sampler": "euler_ancestral_cfg_pp"
          }
        },
        {
          "key": "dpmpp_2m_cfg_pp",
          "path": "dpmpp_2m_cfg_pp",
          "title": "dpmpp_2m_cfg_pp",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_2m_cfg_pp"
          }
        },
        {
          "key": "dpmpp_2s_ancest37",
          "path": "dpmpp_2s_ancest37",
          "title": "dpmpp_2s_ancestral_cfg_pp",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_2s_ancestral_cfg_pp"
          }
        },
        {
          "key": "res_multistep_c",
          "path": "res_multistep_c",
          "title": "res_multistep_cfg_pp",
          "description": "",
          "show": true,
          "params": {
            "sampler": "res_multistep_cfg_pp"
          }
        },
        {
          "key": "res_multistep_a39",
          "path": "res_multistep_a39",
          "title": "res_multistep_ancestral_cfg_pp",
          "description": "",
          "show": true,
          "params": {
            "sampler": "res_multistep_ancestral_cfg_pp"
          }
        },
        {
          "key": "gradient_estima40",
          "path": "gradient_estima40",
          "title": "gradient_estimation_cfg_pp",
          "description": "",
          "show": true,
          "params": {
            "sampler": "gradient_estimation_cfg_pp"
          }
        },
        {
          "key": "dpmpp_2m_sde_he",
          "path": "dpmpp_2m_sde_he",
          "title": "dpmpp_2m_sde_heun",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_2m_sde_heun"
          }
        },
        {
          "key": "dpmpp_2m_sde_he42",
          "path": "dpmpp_2m_sde_he42",
          "title": "dpmpp_2m_sde_heun_gpu",
          "description": "",
          "show": true,
          "params": {
            "sampler": "dpmpp_2m_sde_heun_gpu"
          }
        }
      ]
    }
  ]
}