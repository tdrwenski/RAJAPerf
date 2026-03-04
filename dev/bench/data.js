window.BENCHMARK_DATA = {
  "lastUpdate": 1772643806999,
  "repoUrl": "https://github.com/tdrwenski/RAJAPerf",
  "entries": {
    "clang_14_0_6_mpi_caliper": [
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762827302110,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016541,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43920555555555557,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.325s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.29356125,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.348s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.196151,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.846s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0296701,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.934s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.021910549999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.382s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.92145,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.369s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.196625,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.505s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035801875000000004,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.864s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.066695,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06670575,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.0137931,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17306850000000001,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.1341735,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0667145,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013704575,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.1730025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762827353642,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016537375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43440833333333334,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.255s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.2926825,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.341s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19621625,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.849s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029627799999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.926s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0221373,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.427s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.900175,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.360s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19654892857142856,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.503s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03571512499999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.857s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06669075,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06668325,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.013775350000000002,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17307025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.1343585,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.06669125,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013698275,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17051425,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.682s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762827388817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016569875,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.326s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43272361111111113,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.231s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.29226625,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.338s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19485575,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.794s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029675699999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.935s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.022000099999999998,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.400s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.950050000000001,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.380s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19478642857142855,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.454s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035720875,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.858s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0666825,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06667675,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.0137248,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17133625,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.685s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13348375,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0667035,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.01361725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17303425,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762827430380,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016527375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.322s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.4333534722222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.240s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.29316125,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.345s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1944575,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.778s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029603199999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.921s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02168415,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.337s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 11.00465,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.402s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19496607142857145,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.459s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035704,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.856s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.066928,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06665875,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.01370115,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17120475,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.685s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13339075,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.06667875,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013620075,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17314275,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.693s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762883550244,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016538625,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.4429611111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.379s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.29737,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.379s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19508150000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.803s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029649850000000002,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.930s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.021870050000000002,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.374s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.9065,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.363s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19529964285714288,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.468s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035733625,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.859s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06670875,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06668925,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.013761325,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.173002,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13362075,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.06669875,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013599225,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.173064,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762883730094,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0165585,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.325s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43131111111111115,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.211s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.293255,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.346s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19494525000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.798s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029788600000000002,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.958s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.022439450000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.488s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.909925000000001,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.364s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.1948410714285714,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.456s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.0357565,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.861s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.066686,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.066697,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.013693,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17306975,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.1334595,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.06667225,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013560375,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.1729975,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "2d2b3d3792a18c80c71b2506b5fd3d272cea0476",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/2d2b3d3792a18c80c71b2506b5fd3d272cea0476"
        },
        "date": 1762884709944,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.01653325,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.42562361111111113,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.129s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.29110375,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.329s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19367425000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.747s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.02956055,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.912s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.021597749999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.320s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.8307,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.332s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19415535714285714,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.436s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03569525,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.856s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0666775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06667275,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.0133515,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17307075,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13356625,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0667055,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.0132151,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.173005,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764894569663,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.01653775,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.42970625,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.188s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28438375,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.275s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19264174999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.706s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0296973,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.939s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02197625,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.395s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.885074999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.354s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19305142857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.405s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03571675,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.857s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.066688,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06674425,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.01341385,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17306825,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13905325,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.556s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.066669,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.01330265,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17164475,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.687s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764896330226,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016560375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.325s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43423819444444445,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.253s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28379,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.270s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.193365,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.735s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0296861,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.937s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.022444050000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.489s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.896099999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.358s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19369678571428572,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.424s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03572475,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.858s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06674025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.066693,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.01371595,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17306725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.1334865,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0666875,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013634699999999998,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17296525,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764896344474,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016541749999999997,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43729999999999997,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.297s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28545,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.284s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1961745,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.847s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.02981435,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.963s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.023412099999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 11.013250000000001,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.405s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.1966432142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.506s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035807875,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.865s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0667405,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06669025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.013792875,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17299575,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13411225,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0666865,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013659275,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.1730045,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764896728853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016545874999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.324s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.4362493055555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.282s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28538125,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.283s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19309849999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.724s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029577650000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.916s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0227317,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.546s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.936824999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.375s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.1936725,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.423s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035711124999999996,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.857s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06670725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06666725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.0137702,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.173081,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13342625000000002,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.06665725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013648625,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17355349999999997,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.694s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764898809007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.01653275,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.4352201388888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.2845075,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.276s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19401575000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.761s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0299808,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.996s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.022828849999999998,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.566s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.93445,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.374s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19403892857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.433s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035708250000000004,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.857s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.066653,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.0666755,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.013713525,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.170456,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.14139475,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.566s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0666775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013609675,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17301875,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764898825318,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.01653775,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.4503006944444444,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.484s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.2848275,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.279s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1929185,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.717s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029630149999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.926s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.024071549999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.814s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.864375,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.346s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19351857142857146,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.419s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035794,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.864s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06668875,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.0666845,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.01341755,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.173063,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13457825,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.538s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.066688,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013341525,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.1731685,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.693s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764898832257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.01653475,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43549444444444446,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.271s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28312625,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.265s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1932935,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.732s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0296274,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.925s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02206955,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.414s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.916924999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.367s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19402999999999998,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.433s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.0357245,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.858s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06683725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.066668,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.01369235,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.173,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.141334,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.565s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.066664,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.0136231,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17303375,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764899209899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016554375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.324s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43801666666666667,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.307s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28425625,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.274s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1956195,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.825s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0298234,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.965s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02259855,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.520s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.911200000000001,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.364s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.1937671428571429,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.425s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035713125000000005,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.857s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.066703,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.066676,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.013644525,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.1730695,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.1335725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0666855,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.0136265,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17303375,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764899226612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.01654375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43894375,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.321s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28399625,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.272s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19403600000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.761s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029700099999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.940s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0241163,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.823s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 11.116975,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.447s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19439035714285713,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.443s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035740749999999995,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.859s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06672075,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06669675,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.013774075,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17303575,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13403675,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.06669025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.01368365,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.16838775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.674s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764963107354,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016542499999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43587916666666665,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.277s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28342875,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19465049999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.786s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029681999999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.936s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02335915,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.672s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.988100000000001,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.395s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.195045,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.461s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.0357505,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0667145,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.066686,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.013700375,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.173064,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13337675,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.066697,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.0136104,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17302725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "03d1de6eaaf29eda921575e536f13112ab8863da",
          "message": "Test after script",
          "timestamp": "2025-12-04T21:47:44Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/03d1de6eaaf29eda921575e536f13112ab8863da"
        },
        "date": 1764966071543,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016533875,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43535624999999994,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.269s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28309375,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.265s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19403,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.761s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0296777,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.936s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.022542,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.508s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.944525,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.378s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19437714285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.443s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035765875,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.861s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0666955,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.066676,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.01367315,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.173008,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13866025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.555s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.06667975,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013634975,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.16952,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.678s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "79fd1e68f9c399455b075801252fd2f8e11b6aad",
          "message": "Test after script",
          "timestamp": "2025-12-04T21:47:44Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/79fd1e68f9c399455b075801252fd2f8e11b6aad"
        },
        "date": 1764974780204,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0165375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.42689374999999996,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.147s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.2829125,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.263s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1936955,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.748s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.02956915,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.914s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.021753300000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.351s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.9032,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.361s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19359964285714285,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.421s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035746749999999994,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06669725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06669,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.01340525,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17303050000000003,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13327375,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.533s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.06669275,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.01336105,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17307224999999998,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7e8cd253392a7d488f9f288a3ece32ccb5a88e36",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7e8cd253392a7d488f9f288a3ece32ccb5a88e36"
        },
        "date": 1766083334734,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0165375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.4427701388888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.376s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28379875,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.270s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.195076,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.803s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029880499999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.976s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02378205,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.756s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 11.894124999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.758s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19543964285714288,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.472s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035723624999999995,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.858s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06670125,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.066706,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.037298,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17306575,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.134096,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.066719,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013736275,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.1730365,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "1b210c17beba38618915e0b75b6910837eb030be",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/1b210c17beba38618915e0b75b6910837eb030be"
        },
        "date": 1766084132383,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016701125,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.336s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.4363215277777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.283s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28372125,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.270s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19435750000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.774s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.030058699999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 6.012s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.022154899999999998,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.431s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.956924999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.383s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19519250000000002,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.465s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.036110875,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.889s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06669675,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.0666765,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17646,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.706s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.1340025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.06667025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.1740475,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.696s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "1b210c17beba38618915e0b75b6910837eb030be",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/1b210c17beba38618915e0b75b6910837eb030be"
        },
        "date": 1766088184495,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016543000000000002,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.4359993055555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.278s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28331375,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.196346,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.854s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0299102,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.982s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.022429,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.486s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 11.112925,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.445s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19498071428571428,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.459s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035744,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0666735,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.0666765,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.03720725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.173016,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13355125,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.066676,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013650675,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17303050000000003,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "8a124d9dfa861f760f26db62d110b8fc8191ac20",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/8a124d9dfa861f760f26db62d110b8fc8191ac20"
        },
        "date": 1766093204265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016531874999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.4353326388888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.269s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28455125,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.276s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1953715,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.815s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0296685,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.934s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.023423850000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.685s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 11.261500000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.505s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19580214285714287,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.482s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035760875,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.861s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06667025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06668575,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.037068,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17303625,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13743375,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.550s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0666635,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.0137633,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17303425,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "c2951ec0668765cfa8285a43aa71782531e11cdd",
          "message": "Revert update to tpls",
          "timestamp": "2025-12-19T02:25:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/c2951ec0668765cfa8285a43aa71782531e11cdd"
        },
        "date": 1766111749062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016544375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.324s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43388194444444445,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.248s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28598125,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.288s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1941275,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.765s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0297065,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.941s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02207955,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.416s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.917775,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.367s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19413357142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.436s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035882625,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.871s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06666725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.066669,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.03721725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17303050000000003,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.133457,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0667045,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.01350325,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17303025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "c2951ec0668765cfa8285a43aa71782531e11cdd",
          "message": "Revert update to tpls",
          "timestamp": "2025-12-19T02:25:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/c2951ec0668765cfa8285a43aa71782531e11cdd"
        },
        "date": 1766111899608,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016544375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.324s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43388194444444445,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.248s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28598125,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.288s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1941275,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.765s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0297065,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.941s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02207955,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.416s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.917775,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.367s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19413357142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.436s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035882625,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.871s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06666725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.066669,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.03721725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.17303050000000003,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.133457,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0667045,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.01350325,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.17303025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "86a48333fc293d9fda358585f89861790f350235",
          "message": "Use fork for testing",
          "timestamp": "2025-12-18T01:35:04Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/86a48333fc293d9fda358585f89861790f350235"
        },
        "date": 1770757657484,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016537875,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.43444444444444447,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.256s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.283275,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19438350000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.775s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.02981315,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.963s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0228231,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.565s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.933425000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.373s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19476571428571426,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.453s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035848624999999995,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.868s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06666975,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.0666675,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.0377705,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.151s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.172643,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.691s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13324475,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.533s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.066663,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013617875,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.054s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.1730225,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "bf452c880013a7300895800cea35ffca5e10d0d0",
          "message": "Fix environment variable",
          "timestamp": "2026-02-11T23:37:34Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/bf452c880013a7300895800cea35ffca5e10d0d0"
        },
        "date": 1770920124793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016540375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.45741597222222224,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.587s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28792875,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.303s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.2220085,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 8.880s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029683799999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.937s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0219977,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.400s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 11.9757,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.790s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.22122178571428572,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 6.194s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035749375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06671025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06674525,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.03733225,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.16723775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.142702,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.571s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.06671,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.01448495,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.058s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.16734325,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.669s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643009352,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.7108025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 2.843s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.6057325,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 2.423s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.0409625,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 1.639s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.040958499999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 1.638s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016543000000000002,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.45567708333333334,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.562s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.2883675,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.307s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.21544249999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 8.618s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0297212,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.944s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.022127249999999998,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.425s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 12.025625,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.810s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.20794857142857145,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.823s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035781375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.863s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0666855,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06669525,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.036024,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.144s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.08438925,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.338s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.16768175,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.671s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.134158,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0667,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013730425,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.0740225,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.296s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.16798925,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.672s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643210039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.7021025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 2.808s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.5971225,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 2.388s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.040425499999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 1.617s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.04105275,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 1.642s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016540875,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.45417152777777775,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.540s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.2868075,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.294s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.22317749999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 8.927s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029699450000000002,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.940s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.021974749999999998,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.395s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 12.103399999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.841s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.21005464285714284,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.882s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035729875,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.858s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0666805,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.066706,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.03598525,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.144s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.08368,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.335s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.16777975,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.671s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.1342525,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.06669775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.0138186,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.073487,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.294s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.1679575,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.672s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643404277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.70441,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 2.818s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.600735,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 2.403s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.04370025,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 1.748s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.043705,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 1.748s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016545375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.324s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.45676805555555555,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.577s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28938375,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.315s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.21633049999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 8.653s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029693249999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.939s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02203735,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.407s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 12.040275,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.816s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.19619607142857146,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.493s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035754375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06671775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06672025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.036487,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.146s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.0843945,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.338s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.16761125,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.670s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.134157,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0667215,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013783475,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.073775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.295s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.168201,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.673s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643803378,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.70409,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 2.816s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.57978,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 2.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.04151825,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 1.661s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.04149225,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 1.660s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016543125000000002,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.4359173611111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.277s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.2886425,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.309s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19244950000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.698s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.02975315,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.951s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0221731,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.435s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 11.01375,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.405s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.1926689285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.395s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035809875,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.865s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06670225,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.066714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.035944,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.144s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.08414825,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.337s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.16754775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.670s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13415425,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.06670675,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.01367785,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.07324475,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.293s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.1679885,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.672s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643806365,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.69708,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 2.788s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.6053325,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 2.421s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.04325925,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 1.730s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.04328125,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 1.731s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.016556374999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 1.325s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.45871111111111107,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.605s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.28869125,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.310s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.23464400000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 9.386s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.02960025,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.920s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02147835,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.296s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 12.076575,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.831s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.2081567857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.828s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03575275,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06677775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.06676425,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.036022,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.144s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.08304525,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.332s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.167686,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.671s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13432725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0667715,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.013701950000000001,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.072803,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.291s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.16811425,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.672s"
          }
        ]
      }
    ],
    "gcc_10_3_1_openmp_caliper": [
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762827312756,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3273576,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.818s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3655977777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.329s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.335358,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.168s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02641864,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.330s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.782359999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09092914285714285,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.159s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0441118,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.221s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1821304,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1523708,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1807144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.463196,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.158s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.423622222222221,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.781s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.00434,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.502s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.353416,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.418s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 210.98600000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.275s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.7439942857142856,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.052s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.531958,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.660s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.67788,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14668,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.710684,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.678s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762827377541,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3270192,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.818s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.36740555555555554,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.331s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.347482,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.174s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03072088,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.384s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.7854,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09322228571428572,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.163s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0486114,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.243s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1859464,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1562096,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.039s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1845636,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.46284,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.157s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.573211111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.916s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.12432,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.562s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.35345760000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.418s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 211.27960000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.282s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.191725714285714,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.836s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.531904,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.660s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.69078,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.673s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.13812,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.70492,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.676s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762827413653,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32330679999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.808s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3650388888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.329s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.336712,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.168s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02639776,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.330s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.86392,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.322s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09020914285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.158s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.044390200000000005,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.222s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1827832,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1527112,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1807336,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.470804,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.177s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.369200000000001,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.732s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.00782,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.504s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3538392000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.423s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 212.7836,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.320s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.76712,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.092s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532412,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.662s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.68942,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.672s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.147468,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.70924,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.677s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762827439968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3232852,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.808s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3648733333333334,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.328s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.334916,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.167s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.026299839999999998,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.329s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.850680000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.321s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09034514285714285,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.158s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.044081999999999996,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.220s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1813816,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1515388,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1800572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.47088,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.177s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.3732444444444445,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.736s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.00822,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.504s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3535032000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.419s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 213.8924,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.347s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.7534800000000001,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.069s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.531896,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.659s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.670212,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.147352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.716244,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.679s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762883550501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.323318,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.808s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.36541777777777773,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.329s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.33569,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.168s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.82828,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.321s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0444392,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.222s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1822092,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1523468,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.180022,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.5275559999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.376455555555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.739s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.00496,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.502s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 212.364,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.309s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532142,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.661s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.673092,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.145208,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.711248,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.678s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762883728781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32321320000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.808s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.36602555555555555,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.329s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.336004,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.168s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.80464,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0443886,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.222s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.182868,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1529792,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1797756,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.5262600000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.316s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.378922222222223,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.741s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.0044,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.502s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 214.37439999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.359s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.531936,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.660s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.688572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.672s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.146784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.712324,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.678s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "2d2b3d3792a18c80c71b2506b5fd3d272cea0476",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/2d2b3d3792a18c80c71b2506b5fd3d272cea0476"
        },
        "date": 1762884730776,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.322864,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.807s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.36496555555555554,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.328s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.331324,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.166s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.882,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.322s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0435738,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.218s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1833356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1537632,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1803352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.524772,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.312s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.3714,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.734s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.00542,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.503s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 214.1748,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.354s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5318900000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.659s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.690544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.673s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.147236,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.713584,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.678s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764894573754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.324086,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.810s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37070888888888887,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.334s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.337606,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.169s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.80516,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043431,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.217s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.183176,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1513896,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1803256,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.523888,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.310s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.282944444444445,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.655s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.09534,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.548s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 209.56,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.239s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5329799999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.665s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.721544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.680s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.154604,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.539s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.701704,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.675s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764896329315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3238424,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.810s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37004888888888887,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.333s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.33576,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.168s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.80684,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043163400000000005,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.216s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1821348,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.151086,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1800824,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.526816,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.317s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.294077777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.665s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.0679,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.534s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 210.16639999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.254s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532772,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.664s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.724112,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.681s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.140872,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.697936,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.674s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764896347260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32424680000000006,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.811s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37070888888888887,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.334s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.341212,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.171s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.83056,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.321s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043725599999999996,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.219s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1817284,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1500592,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1808188,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.496148,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.240s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.318377777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.687s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.08066,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.540s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 210.1992,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.255s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5327440000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.664s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.730256,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.683s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.144832,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.6959240000000007,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.674s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764896727436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3241972,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.810s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3707533333333333,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.334s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.336446,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.168s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.8056,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0435822,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.218s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.181614,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1503624,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1801696,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.5266320000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.317s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.284166666666667,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.656s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.07624,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.538s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 210.44119999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.261s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.53354,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.668s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.726432,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.146248,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.710172,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.678s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764898811253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3277996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.819s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37340222222222225,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.348518,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.174s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.819199999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0479,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.239s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1866348,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.047s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1546844,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.039s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1842216,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.5254840000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.314s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.4911666666666665,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.842s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.28218,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.641s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 209.7372,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.243s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532986,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.665s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.713316,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.678s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.139772,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.703348,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.676s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764898826183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.323952,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.810s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37094,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.334s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.337352,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.169s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.8158,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0434788,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.217s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1821216,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1508016,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1800076,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.526908,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.317s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.299588888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.670s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.06466,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.532s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 210.4544,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.261s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532972,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.665s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.71514,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.679s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.143208,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.70284,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.676s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764898831519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.324028,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.810s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3703177777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.333s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.342406,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.171s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.803400000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0433982,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.217s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.181124,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1494052,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1795988,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.47063599999999994,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.177s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.270677777777777,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.644s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.08424,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.542s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 209.6728,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.242s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.53336,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.667s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.725356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.681s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.142604,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.699168,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.675s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764899207663,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32457440000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.811s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.36996888888888885,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.333s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.340188,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.170s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.809280000000001,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043620599999999995,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.218s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1826452,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1511328,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1799356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.470804,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.177s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.273811111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.646s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.0694,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.535s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 209.7364,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.243s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.533312,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.667s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.72682,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.145116,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.697936,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.674s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764899227099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3242544,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.811s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3706311111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.334s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.342328,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.171s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.8,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043867,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.219s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1818252,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1498856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1800028,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.4969280000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.242s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.287288888888888,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.659s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.08752,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.544s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 209.1932,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.230s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.533108,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.666s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.72262,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.681s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.146132,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.704816,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.676s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764963109226,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.323956,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.810s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37037,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.333s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.33795,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.169s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.80196,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043426400000000004,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.217s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1828024,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.151554,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1802964,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.52684,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.317s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.277544444444445,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.650s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.08296,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.541s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 210.24400000000003,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.256s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532788,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.664s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.732636,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.683s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.143408,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.704092,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.676s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "03d1de6eaaf29eda921575e536f13112ab8863da",
          "message": "Test after script",
          "timestamp": "2025-12-04T21:47:44Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/03d1de6eaaf29eda921575e536f13112ab8863da"
        },
        "date": 1764966072074,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3240868,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.810s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37119111111111114,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.334s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.340242,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.170s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.799000000000001,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.320s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043348399999999995,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.217s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1822824,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1501784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1804776,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.49633200000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.241s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.280744444444444,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.653s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.06074,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.530s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 210.882,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.272s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.533274,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.666s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.73526,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.684s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.144896,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.70396,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.676s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "79fd1e68f9c399455b075801252fd2f8e11b6aad",
          "message": "Test after script",
          "timestamp": "2025-12-04T21:47:44Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/79fd1e68f9c399455b075801252fd2f8e11b6aad"
        },
        "date": 1764974780163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32811480000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.820s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37318666666666667,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.35389,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.177s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.82328,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.321s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.047949399999999996,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.240s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1880444,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.047s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1572092,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.039s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1838544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.48574400000000006,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.214s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.471922222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.825s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.29236,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.646s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 209.27879999999996,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.232s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532842,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.664s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.721212,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.680s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.1391,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.7107,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.678s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7e8cd253392a7d488f9f288a3ece32ccb5a88e36",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7e8cd253392a7d488f9f288a3ece32ccb5a88e36"
        },
        "date": 1766083341042,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3237572,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.809s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3678311111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.331s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.33427,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.167s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.990839999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.325s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043259,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.216s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1806964,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1509536,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1783512,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.460304,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.151s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.396977777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.757s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.84642,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.423s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 209.6888,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.242s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5322399999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.661s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.722836,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.681s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.1448840000000002,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.690416,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.673s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "1b210c17beba38618915e0b75b6910837eb030be",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/1b210c17beba38618915e0b75b6910837eb030be"
        },
        "date": 1766084137154,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3240832,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.810s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3678822222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.331s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.33467,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.167s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.075079999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.327s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0435762,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.218s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.182198,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1512764,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1792148,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.46276799999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.157s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.3876333333333335,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.749s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.84832,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.424s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 211.1056,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.278s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532808,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.664s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.723924,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.681s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.146272,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.695492,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.674s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "1b210c17beba38618915e0b75b6910837eb030be",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/1b210c17beba38618915e0b75b6910837eb030be"
        },
        "date": 1766088187907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.328696,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.822s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37172222222222223,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.335s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.34922,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.175s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.01972,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.325s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.048395,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.242s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1883572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.047s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1577556,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.039s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1838544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.47405600000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.185s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.599466666666666,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.940s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.04428,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.522s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 209.1552,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.229s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532606,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.663s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.725948,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.681s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.139236,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.696096,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.674s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "8a124d9dfa861f760f26db62d110b8fc8191ac20",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/8a124d9dfa861f760f26db62d110b8fc8191ac20"
        },
        "date": 1766093205764,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3244152,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.811s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.36828111111111106,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.331s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.33305799999999997,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.167s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.024640000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.326s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043767400000000005,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.219s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1815944,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1506812,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1788152,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.470512,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.176s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.392266666666667,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.753s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.84016,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.420s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 208.5832,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.215s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5318,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.659s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.709796,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.677s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14368,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.693316,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.673s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "86a48333fc293d9fda358585f89861790f350235",
          "message": "Use fork for testing",
          "timestamp": "2025-12-18T01:35:04Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/86a48333fc293d9fda358585f89861790f350235"
        },
        "date": 1770757660360,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32444480000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.811s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37014888888888886,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.333s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.34397,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.172s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.82724,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.321s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0491882,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.246s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1822004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1509976,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1793368,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.463496,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.159s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.227022222222223,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.604s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.0004,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.500s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 211.52439999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.288s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.533454,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.667s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.718304,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.680s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.145348,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.655048,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.664s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "bf452c880013a7300895800cea35ffca5e10d0d0",
          "message": "Fix environment variable",
          "timestamp": "2026-02-11T23:37:34Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/bf452c880013a7300895800cea35ffca5e10d0d0"
        },
        "date": 1770920130020,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32865479999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.822s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37548333333333334,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.338s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.352888,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.176s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.590679999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.340s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.048587200000000004,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.243s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1871612,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.047s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1568852,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.039s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1842408,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.513252,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.283s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.450388888888888,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.805s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.01596,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.508s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 209.82119999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.246s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.533492,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.667s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.731116,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.683s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14294,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.680264,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.670s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643006232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.663496,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.166s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.27261,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.068s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.02495196,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.062s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3286864,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.822s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0272714,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.136s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3738988888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.337s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.342768,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.171s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.09121,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.228s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.039979680000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.500s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02604048,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.326s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.85272,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.321s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09290857142857142,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.163s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0539712,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.270s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 53.6032,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 13.401s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0833636,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0423664,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.10613,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1824592,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1508976,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0846824,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03445368,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0829936,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1813972,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 10.8106,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.703s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 7.26396,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.816s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.486708,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.217s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.47764399999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.194s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264676,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.389555555555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.751s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.13048,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.565s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.7051960000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.263s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.5140024,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 6.425s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.4648408,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.811s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 202.44879999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.061s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.722217142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.014s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5329,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.664s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.055472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.112764,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.528s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.544264,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.136s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.202948,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.301s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.664348,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.666s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.144876,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.07108,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2876332,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.072s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.446144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.612s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.64944,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.662s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643230377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.651588,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.163s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.2650128,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.066s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0199646,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.050s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32464760000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.812s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.014527100000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.073s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3712866666666667,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.334s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.342024,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.171s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.09255,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.231s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.025808,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.323s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.039230480000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.490s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.404760000000001,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.335s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09557085714285714,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.167s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0435284,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.218s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 66.3,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 16.575s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0903188,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0529996,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1181188,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.030s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1895164,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.047s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1595964,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.040s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.085156,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0360578,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0851784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1858084,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.75648,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.189s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 6.44052,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.610s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.459388,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.459872,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.150s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264714,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.324s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.256322222222223,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.631s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.824,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.412s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.730936,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.327s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.3093744,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 3.867s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.35356160000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.420s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 209.64880000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.241s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.745137142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.054s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5338219999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.058172,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.265s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.114584,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.529s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.695324,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.174s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.309424,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.327s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.725416,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.681s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.13734,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.071904,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.3191968,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.080s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.435376,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.609s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.699272,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.675s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643391453,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.660516,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.165s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.2679432,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.067s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.024858440000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.062s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32956080000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.824s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0272952,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.136s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3725333333333334,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.335s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.354614,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.177s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.093806,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.235s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04417848,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.552s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030497359999999998,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.381s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.8484,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.321s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09085314285714285,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.159s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0570658,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.285s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 57.8272,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 14.457s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0899476,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.049226,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1138748,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.028s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1880132,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.047s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1573296,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.039s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0880188,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03783644,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0860928,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1860888,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.047s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 10.7194,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.680s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 7.17368,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.793s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.429788,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.074s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.43062,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.077s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264204,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.321s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.381555555555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.743s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 5.06776,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.534s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.13004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.325s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.5278336,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 6.598s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.5291720000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 6.615s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 211.78920000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.295s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.6175942857142858,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 2.831s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532838,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.664s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.056804,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.115432,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.529s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.588488,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.147s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.3388,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.335s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.70926,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.677s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.138992,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.072808,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.3274736,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.082s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.433008,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.608s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.6918,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.673s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643790232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.668096,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.167s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.2726964,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.068s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.024962480000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.062s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3288988,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.822s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.01958332,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.098s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37603555555555557,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.338s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.355762,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.178s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.09304440000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.233s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.02597712,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.325s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03937584,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.492s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.41176,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.335s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09315314285714285,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.163s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043787,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.219s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 55.15,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 13.787s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0901452,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0481856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1122308,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.028s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1886456,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.047s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1585916,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.040s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0860012,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03709888,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0863496,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1863624,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.047s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 10.72792,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 7.14124,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.785s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.43523599999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.088s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.4327440000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.082s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264352,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.322s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.422011111111112,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.780s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.926040000000001,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.463s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.860932,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.652s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.30913519999999994,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 3.864s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.35316479999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.415s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 210.43079999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.261s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.6634342857142859,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 2.911s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532982,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.665s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.057228,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.115336,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.529s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.59074,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.327232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.332s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.73432,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.684s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.139632,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.070172,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.327658,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.082s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.43386,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.608s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.69874,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.675s"
          }
        ]
      }
    ],
    "clang_14_0_6_openmp_caliper": [
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762827341609,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.60422,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.151s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01663144,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3367928,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.842s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020222399999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.101s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37502111111111114,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.338s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.271096,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.136s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11200520000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.280s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04459272,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.557s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03424728,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.428s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.08452,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.277s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11190685714285716,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.196s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0920234,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.460s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0809416,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1800704,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.148576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0732872,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1753692,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 7.43488,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.859s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.44236800000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.106s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.43788,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.095s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26448399999999994,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.322s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.802355555555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.122s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.28568,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.143s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.019964,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.050s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4733056,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.916s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3427944,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.285s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 172.7312,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.318s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.027622857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.548s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571148,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.856s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.066808,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.671328,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.142788,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.067184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.674176,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762827368108,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.603632,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.151s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0167516,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3365244,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.841s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020314,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.102s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37343111111111116,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.265492,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11249719999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.281s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04443432,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.555s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03416608,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.427s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.01088,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11208914285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.196s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09199260000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.460s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0803696,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1808428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1479732,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0736564,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1756548,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.68624,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.172s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.467492,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.169s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45796799999999993,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.145s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264494,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.322s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.785011111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.107s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.36438,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.182s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.0350040000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.088s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4731592,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.914s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34300240000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.288s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.1232,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.328s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.037222857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.565s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5710320000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.855s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.066832,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.673656,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.142012,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066512,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.680576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.670s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762827393363,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.605436,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.151s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01700264,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33681679999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.842s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0204086,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.102s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3745077777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.337s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.266854,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11203000000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.280s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.044866,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.561s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0345368,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.432s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.00688,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11283599999999999,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.197s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0922686,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.461s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0807856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1806836,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1487964,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0735112,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.175048,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.69816,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.175s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.463668,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.159s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.47295199999999993,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.182s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26453000000000004,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.801655555555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.121s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.36892,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.184s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.02534,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.063s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4733032,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.916s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3432576,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.291s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.25199999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.331s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0339942857142854,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.559s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571402,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.857s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.06694,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.673464,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.143008,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.678628,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.670s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762827427716,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.60474,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.151s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0175154,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33684759999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.842s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0207272,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.104s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37366,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.266634,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1116028,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.279s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04436639999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.555s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03404448,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.426s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.0046,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11185314285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.196s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0919792,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.460s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0803524,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.179826,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.148408,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0735336,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1754356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 7.43372,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.858s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.437116,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.093s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.435884,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.090s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264542,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.797233333333334,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.118s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.297,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.019448,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.049s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4732136,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.915s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3432504,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.291s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 172.7572,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0316285714285716,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.555s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571242,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.856s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067332,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.672536,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.143232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066772,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.676512,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762883550554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.017445440000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3365856,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.841s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0203242,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.102s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3736833333333333,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.270402,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.135s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11259680000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.281s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04463712,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.558s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03438808,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.430s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.009679999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11285542857142858,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.197s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0920536,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.460s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0802608,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1802772,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1485604,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0736472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1757832,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.465452,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.164s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.479944,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.200s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264542,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.800811111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.121s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.37564,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.188s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.027592,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.069s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47315840000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.914s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3431256,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.289s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.48,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.337s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0331314285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.558s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571254,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.856s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.06718,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.674008,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.1438,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.679072,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.670s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "e89d08922260877e885738626b81832473372749",
          "message": "Exclude more test cases",
          "timestamp": "2025-11-11T02:05:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/e89d08922260877e885738626b81832473372749"
        },
        "date": 1762883729648,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01694176,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33664879999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.842s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0202208,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.101s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37427000000000005,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.337s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.268168,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.134s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11266199999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.282s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.044516400000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.556s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.034300239999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.429s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.00956,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.1128782857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.198s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0923794,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.462s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.080532,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1800176,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1482564,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0733196,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.175222,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.46715200000000007,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.168s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45853599999999994,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.146s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264632,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.8056222222222225,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.125s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.3663,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.183s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.025216,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.063s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47322,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.915s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3426735999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.283s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.14440000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.329s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.028622857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.550s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571244,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.856s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.06744,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.67314,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.141948,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066692,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.678624,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.670s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "2d2b3d3792a18c80c71b2506b5fd3d272cea0476",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/2d2b3d3792a18c80c71b2506b5fd3d272cea0476"
        },
        "date": 1762884724394,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01693452,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3363076,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.841s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020318199999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.102s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3739222222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.337s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.26635,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11149919999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.279s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.044391759999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.555s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03445624,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.431s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.00492,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11302057142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.198s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09207699999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.460s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0801996,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1798768,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1480352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0736504,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.175296,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.47349600000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.184s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.46053599999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.151s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264338,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.322s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.802377777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.122s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.36156,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.181s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.03102,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.078s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47261200000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.908s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3423111999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.279s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.1424,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.329s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0365542857142858,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.564s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5705680000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.853s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.066376,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.672208,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.143484,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.06576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.674448,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764894574932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0170906,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33780679999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0203912,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.102s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37350777777777777,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.266122,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1126944,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.282s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04470384,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.559s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03458016,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.432s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.017079999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11444514285714287,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.200s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0921076,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.461s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0806876,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1802052,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.148516,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0732576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1752208,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.456884,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.142s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.47056800000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.176s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264526,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.801622222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.121s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.37674,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.188s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.018612,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.047s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.473232,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.915s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3431208,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.289s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.1236,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.328s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.022057142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.539s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5716,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.858s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067052,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.675156,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.141984,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066656,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.701556,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.675s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764896330025,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01710644,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3377324,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.844s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020400199999999997,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.102s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3730511111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.265662,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11289439999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.282s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.044636880000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.558s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03429704,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.429s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.98368,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.1124022857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.197s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0919096,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.460s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0806664,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1806472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1479048,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0731804,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1742816,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.4579,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.145s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45885600000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.147s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26461599999999996,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.80001111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.120s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.37444,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.187s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.023516,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.059s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4726064,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.908s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34288960000000007,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.286s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 172.94,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.324s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0239257142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.542s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.57076,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.854s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.06644,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.667724,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.667s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.141324,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066048,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.695132,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.674s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764896346551,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.017552960000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.338978,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.847s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0204316,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.102s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3734822222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.263776,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.132s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.10151920000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.254s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04463399999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.558s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03465112,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.433s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.017999999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11302971428571428,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.198s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0922586,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.461s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.081032,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1799668,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1488812,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0735328,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1750216,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.458268,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.146s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45944399999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26459,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.790622222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.112s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.37152,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.186s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.023096,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.058s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47316959999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.915s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34337599999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.292s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.34759999999997,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.334s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.034742857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.561s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5716100000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.858s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067656,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.676616,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.144152,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.06694,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.691224,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.673s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764896727428,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01714684,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33803999999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0205124,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.103s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3754477777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.338s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.264994,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.132s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11370640000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.284s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04466928,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.558s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.034350399999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.429s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.98936,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11224457142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.196s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0921424,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.461s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.080624,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1807428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1481272,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0733004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1741812,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.4661,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.165s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45714,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.143s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264604,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.8029222222222225,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.123s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.38016,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.190s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.011208,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.028s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47318800000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.915s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34277040000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.285s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.296,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.332s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.01764,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.531s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5714400000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.857s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067336,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.669008,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.667s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.143588,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.0668,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.698124,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.675s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764898809186,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01675352,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3378956,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020262199999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.101s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37358111111111114,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.265252,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1127048,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.282s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04460479999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.558s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.034371280000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.430s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.994639999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11663657142857141,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.204s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09225139999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.461s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0803892,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.180264,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1492308,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.073342,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1754792,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.46678800000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.167s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.46478800000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.162s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264498,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.322s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.815455555555555,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.134s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.37796,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.189s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.021708,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.054s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47321840000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.915s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.342728,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.284s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.5984,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0300457142857145,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.553s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571522,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.858s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067064,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.676696,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.143232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066612,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.692936,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.673s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764898826483,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.017154839999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33797039999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0206576,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.103s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37303,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.264672,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.132s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11291520000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.282s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.044779280000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.560s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03439176,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.430s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.02636,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.276s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11302571428571428,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.198s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0916888,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.458s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0802816,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1804184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1484368,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0735832,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1749276,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.45643599999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.141s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.4590639999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264654,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.793133333333333,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.114s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.3723,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.186s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.032952,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.082s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47342239999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.918s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34256079999999994,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.282s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.1384,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.328s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0315085714285717,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.555s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.57191,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.0677439999999998,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.67496,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.145132,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066948,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.699592,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.675s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764898829605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01757988,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33804280000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0206606,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.103s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3731922222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.26723,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.134s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1120172,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.280s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04470992,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.559s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03456672,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.432s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.005640000000001,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.1129377142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.198s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0923214,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.462s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.080914,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1803232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1491288,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0738156,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1749372,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.4629400000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.157s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.458168,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.145s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264672,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.789088888888888,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.110s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.3754,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.188s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.032464,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.081s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4732536,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.916s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.343024,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.288s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.36079999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.334s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0305028571428574,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.553s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571898,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.859s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.0681680000000002,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.6792559999999996,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.670s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.146384,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.067556,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.696732,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.674s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764899207247,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.017093439999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3378564,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020338400000000003,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.102s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37334777777777783,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.267012,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.134s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1129996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.282s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.044434480000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.555s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.034204319999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.428s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.99608,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11241942857142856,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.197s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0916288,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.458s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.080118,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1799912,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1483732,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0731992,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1744092,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.4563,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.141s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.459296,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264618,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.780422222222223,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.102s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.38846,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.194s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.0259720000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.065s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47326239999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.916s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3428528,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.286s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.14440000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.329s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.031965714285714,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.556s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571566,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.858s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067424,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.678876,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.670s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14192,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066916,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.692948,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.673s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764899228228,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01689348,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3378352,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020365,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.102s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3731688888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.265282,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11335160000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.283s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04472584000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.559s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03455848,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.432s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.005519999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11315485714285715,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.198s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0917438,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.459s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0803404,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1800604,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1487,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0731208,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1743832,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.46646400000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.166s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.4685120000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.171s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26446,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.322s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.789122222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.110s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.39316,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.197s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.034704,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.087s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4732112,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.915s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3430848,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.289s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.5716,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0412057142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.572s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571748,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.859s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067108,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.675944,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.143684,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.06676,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.695792,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.674s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764963107950,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0172426,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3378628,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0203844,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.102s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37304777777777776,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.265124,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11282160000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.282s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04457,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.557s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03438208,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.430s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.96608,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.274s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11276514285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.197s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09202719999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.460s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0805,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1799956,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1487436,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0733532,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1751732,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.4595,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.454176,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.135s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26453799999999994,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.792577777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.113s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.37478,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.187s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.0313559999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.078s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4732832,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.916s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3428592,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.286s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 172.956,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.324s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0389714285714287,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.568s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.57145,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.857s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.071496,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.6763,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066968,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.685036,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.671s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "03d1de6eaaf29eda921575e536f13112ab8863da",
          "message": "Test after script",
          "timestamp": "2025-12-04T21:47:44Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/03d1de6eaaf29eda921575e536f13112ab8863da"
        },
        "date": 1764966071949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0172002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3381384,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0206838,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.103s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37339222222222224,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.26541,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11288440000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.282s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04479928,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.560s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.034541840000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.432s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.99596,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11640285714285713,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.204s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0919206,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.460s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0809964,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1812224,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.148364,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0735544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1748152,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.46618000000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.165s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.466688,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.167s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264612,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.793988888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.115s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.37612,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.188s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.03558,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.089s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47309600000000007,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.914s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34335839999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.292s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.528,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.338s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.045582857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.580s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571412,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.857s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.0676,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.673296,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.141524,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.067216,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.692088,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.673s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "79fd1e68f9c399455b075801252fd2f8e11b6aad",
          "message": "Test after script",
          "timestamp": "2025-12-04T21:47:44Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/79fd1e68f9c399455b075801252fd2f8e11b6aad"
        },
        "date": 1764974780673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01674596,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3376304,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.844s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0202962,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.101s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37298555555555557,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.266214,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1117972,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.279s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0446464,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.558s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03420936,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.428s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.99836,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.113004,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.198s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0919562,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.460s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0805316,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1798444,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.148318,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0730964,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1745144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.46543200000000007,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.164s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.46904000000000007,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.173s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264492,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.322s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.7866333333333335,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.108s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.3712,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.186s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.03766,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.094s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4731312,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.914s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3432352,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.290s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.6516,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.341s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0435714285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.576s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5713699999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.857s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067916,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.676812,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.141968,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066776,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.686352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.672s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7e8cd253392a7d488f9f288a3ece32ccb5a88e36",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7e8cd253392a7d488f9f288a3ece32ccb5a88e36"
        },
        "date": 1766083336906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.016914960000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3382748,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.846s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0202774,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.101s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37815777777777776,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.340s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.264692,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.132s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1123816,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.281s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.044424000000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.555s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0341264,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.427s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.01852,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11294857142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.198s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09583040000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.479s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.08089,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1811388,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1484088,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0731236,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.17448,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.459028,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.456844,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.142s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264546,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.799677777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.120s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.3743,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.187s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.020224,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.051s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47336480000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.917s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.343452,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.293s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.00239999999997,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.325s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.034137142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.560s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571202,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.856s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.0670160000000002,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.674412,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.144904,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.06652,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.6817400000000005,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.670s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "1b210c17beba38618915e0b75b6910837eb030be",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/1b210c17beba38618915e0b75b6910837eb030be"
        },
        "date": 1766084136020,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01687588,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3385828,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.846s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020002600000000002,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.100s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3782811111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.340s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.264624,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.132s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1126192,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.282s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.044342879999999994,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.554s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.034045200000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.426s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.0272,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.276s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11205942857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.196s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0933904,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.467s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.08023,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1814948,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1486792,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0731316,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1762584,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.464904,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.162s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45757600000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.144s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264572,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.8020000000000005,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.122s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.37544,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.188s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.021856,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4730928,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.914s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3431,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.289s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.3004,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.333s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0337714285714283,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.559s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.57105,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.855s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067088,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.677352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.142704,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066776,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.679472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.670s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "1b210c17beba38618915e0b75b6910837eb030be",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/1b210c17beba38618915e0b75b6910837eb030be"
        },
        "date": 1766088185166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.017743000000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3378724,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0201308,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.101s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37817,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.340s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.265752,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.113954,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.285s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.044940799999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.562s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0345708,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.432s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.019760000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11151542857142856,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.195s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0927866,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.464s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0802268,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1800888,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1484156,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.073306,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1734932,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.45811199999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.145s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.461848,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.155s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264658,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.809666666666667,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.129s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.37044,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.185s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.0480720000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.120s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.473416,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.918s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34416080000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.302s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.42960000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.336s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.051274285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.590s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571326,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.857s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067456,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.677592,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.1474280000000006,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.537s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.067276,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.692508,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.673s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "8a124d9dfa861f760f26db62d110b8fc8191ac20",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/8a124d9dfa861f760f26db62d110b8fc8191ac20"
        },
        "date": 1766093204181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01692584,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3430232,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.858s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0201516,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.101s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37901111111111113,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.341s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.290804,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.145s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1158308,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.290s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04567376,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.571s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.034268,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.428s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.03384,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.276s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11184628571428572,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.196s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09718679999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.486s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.08055,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1803508,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.14927479999999999,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0734,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1751712,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.470616,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.177s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.46275199999999994,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.157s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26684199999999997,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.334s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.8781888888888885,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.190s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.39824,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.199s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.047644,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.119s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4771136,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.964s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34572800000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.322s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 174.71720000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.368s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.05784,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.601s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.573796,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.869s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067888,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.681124,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.670s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.144748,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.0673,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.696084,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.674s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "86a48333fc293d9fda358585f89861790f350235",
          "message": "Use fork for testing",
          "timestamp": "2025-12-18T01:35:04Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/86a48333fc293d9fda358585f89861790f350235"
        },
        "date": 1770757667502,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01643884,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.337936,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0205098,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.103s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37836111111111115,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.341s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.265256,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11378800000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.284s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0444212,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.555s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03419248,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.427s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.34932,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.259s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11293314285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.198s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0965032,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.483s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0802992,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.180156,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1486068,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0733184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.17737240000000004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.472596,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.181s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.468192,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.170s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264662,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.7962,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.117s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.3832,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.192s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.027136,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.068s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47306240000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.913s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34222400000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.278s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 174.0808,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.352s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0327257142857142,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.557s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5713560000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.857s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067152,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.693144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.673s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.145464,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.67158,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "bf452c880013a7300895800cea35ffca5e10d0d0",
          "message": "Fix environment variable",
          "timestamp": "2026-02-11T23:37:34Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/bf452c880013a7300895800cea35ffca5e10d0d0"
        },
        "date": 1770920128545,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01606528,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.040s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3379156,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.019709420000000002,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.099s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3769033333333333,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.339s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.264296,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.132s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11112000000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.278s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04405648,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.551s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.033668239999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.421s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.359359999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.259s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11205028571428573,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.196s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0957206,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.479s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0790388,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1800228,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1460972,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0737628,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1786464,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.437188,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.093s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.43486,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.087s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264254,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.321s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.678622222222223,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.011s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.27208,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.136s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.956516,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.891s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4713568,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.892s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34096960000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.262s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.66,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.292s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.9454114285714283,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.404s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.569224,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.846s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.063496,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.71312,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.678s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.140496,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.063508,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.637168,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.659s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643007803,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 1.159776,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.290s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.7200680000000002,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.180s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.019504399999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.049s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3399188,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.850s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020678,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.103s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37785555555555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.340s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.268764,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.134s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11681680000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.292s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04531664,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.566s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03506056,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.438s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.116200000000001,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.278s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.116088,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.203s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09261359999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.463s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 50.118,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 12.530s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0805076,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.06632,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.124572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.031s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1804844,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.148658,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0764852,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03649604,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.093026,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1767112,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.68988,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.172s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.44744,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.362s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.459584,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.46016399999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.150s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26392400000000005,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.320s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.6224444444444455,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.960s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.32002,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.160s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.8543919999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.636s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47164160000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.896s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34495919999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.312s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.1784,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.279s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.8558000000000001,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.248s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.569378,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.847s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.063524,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.063524,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.595276,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.140396,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.285s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.638288,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.660s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.140496,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.063512,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2126812,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.055908,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.769092,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643226454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 1.780708,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.445s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.00418,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.251s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01735412,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3390536,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.848s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020710799999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.104s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37463777777777774,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.337s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.268412,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.134s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.12045360000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.301s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.045074079999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.563s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03471936,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.434s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.084719999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.277s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.1157342857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.203s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0922398,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.461s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 52.4512,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 13.113s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.081712,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0696816,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1271836,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.032s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1808968,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.148294,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0768684,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03621892,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0923508,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1776504,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 7.4398,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.56912,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.392s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.446136,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.115s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.44594399999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.115s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26377999999999996,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.658488888888888,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.993s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.30488,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.152s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.916048,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.790s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4716808,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.896s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34274079999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.284s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.264,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.282s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.9193485714285714,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.359s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.569234,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.846s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.063524,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.063484,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.620184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.155s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.096772,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.274s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.6880440000000005,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.672s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.140236,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.063524,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2316092,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.058s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.056796,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.76856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.692s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643411796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 1.496768,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.374s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.645248,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.161s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01654764,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.338568,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.846s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0199559,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.100s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3809211111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.343s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.265232,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11596200000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.290s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04413904,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.552s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03387552,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.423s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.3892,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.260s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11919485714285714,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.209s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0968942,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.484s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 54.5344,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 13.634s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.082662,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0681,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1380744,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.035s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1813416,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1488908,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0783072,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0435576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0940424,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.024s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1824464,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.23896,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.060s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.50344,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.376s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.450036,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.125s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.44975199999999993,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.124s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.263736,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.662311111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.996s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.28214,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.141s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.8911040000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.728s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47139519999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.892s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3426592,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.283s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.59720000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.290s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.8967085714285716,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5690839999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.845s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.063476,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.06346,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.619908,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.155s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.270796,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.318s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.67286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.140364,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.06348,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2322944,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.058s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.08664,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.272s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.637664,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.659s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643791656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 1.79762,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.449s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.63168,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.408s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.017603840000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33864279999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.847s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.021457999999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.107s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.38317,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.345s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.269534,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.135s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.118832,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.297s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04589736,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.574s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.035807359999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.448s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.47132,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.262s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11845428571428572,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.207s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09806799999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.490s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 51.918,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 12.979s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.081866,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0676548,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1284004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.032s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1815796,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.149636,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0751904,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0421776,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0919468,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1814124,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 9.99356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.498s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 6.06264,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.516s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.45205200000000006,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.130s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45177199999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.129s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.27427999999999997,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.371s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.875622222222223,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.188s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.3697,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.185s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.1932480000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.483s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4729864,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.912s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.345892,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.324s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 187.2028,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.680s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.1372514285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.740s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571084,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.855s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.0661,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.066492,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.722968,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.181s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.292668,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.669608,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.667s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.135716,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.065128,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2472232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.062s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.099208,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.671132,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643801212,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 1.947708,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.487s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.802612,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.201s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.016465360000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33715639999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.843s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020119,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.101s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37918555555555555,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.341s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.26538,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11431400000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.286s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0447744,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.560s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0344748,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.431s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.409679999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.260s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11642914285714284,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.204s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.096314,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.482s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 59.5412,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 14.885s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0814708,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0679872,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1264928,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.032s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1808172,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1495312,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0766564,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0420076,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0931376,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1818008,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.75724,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.189s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.591,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.398s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.44551199999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.114s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.445076,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.113s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.263748,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.6676111111111105,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.001s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.30236,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.151s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.9312719999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.828s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47172879999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.897s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3423512,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.279s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.3784,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.284s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.9267142857142858,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.372s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.568784,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.844s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.06354,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.063544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.594892,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.196068,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.299s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.637276,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.659s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.1376,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.063544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2100072,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.05512,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.637276,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.659s"
          }
        ]
      }
    ],
    "rocmcc_6_4_1_hip_openmp_caliper": [
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764894571413,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0092009,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.006338160000000001,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.012387140000000001,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.0052018,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0053617199999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.014689142857142859,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00711284,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1535532,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00345972,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00259454,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764896330293,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00898684,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00633004,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.012236819999999999,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00520828,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00534832,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.014338857142857143,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00682606,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1534294,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00344126,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00277267,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764896347402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00896112,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00686688,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01300604,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00515372,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00517288,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.016234942857142855,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00699885,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1515358,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00340635,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00189279,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.002s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764896726391,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0089666,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00637314,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01234918,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00522144,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00537284,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.014652885714285715,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00692739,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1533066,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00342069,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00262967,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764898809674,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00902058,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00695856,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0130168,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.005252,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0053479999999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.016162142857142858,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00705468,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1538212,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00345178,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00260569,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764898828162,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00923836,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00639478,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01224104,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.0051873200000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00534844,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.014607971428571427,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00697086,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1533514,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00343988,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00245847,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.002s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764898831623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.008901,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00639376,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01230458,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.005223080000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00540676,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.014889142857142856,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00694745,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1535782,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00344625,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00242695,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.002s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764899207335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00914884,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00637334,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01240856,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00524892,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0053836,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.014492914285714285,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00688442,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1533946,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00344224,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00245613,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.002s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764899227503,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0086939,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00633408,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01203824,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00520224,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.005328,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.014651714285714285,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00680469,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.15368579999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00341956,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00323318,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7c924eee4ab11ba723e634323749f3c8b0bc1347",
          "message": "WIP disable more tests",
          "timestamp": "2025-11-11T18:05:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7c924eee4ab11ba723e634323749f3c8b0bc1347"
        },
        "date": 1764963109669,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00882484,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00637816,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01243826,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.005212039999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0053774,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.014889828571428574,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00685688,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1536084,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0034229,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00265778,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "03d1de6eaaf29eda921575e536f13112ab8863da",
          "message": "Test after script",
          "timestamp": "2025-12-04T21:47:44Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/03d1de6eaaf29eda921575e536f13112ab8863da"
        },
        "date": 1764966071936,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00937514,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00638286,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01227412,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00510832,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00529184,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.014862771428571429,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00710254,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1534596,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00346131,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00235307,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.002s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "79fd1e68f9c399455b075801252fd2f8e11b6aad",
          "message": "Test after script",
          "timestamp": "2025-12-04T21:47:44Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/79fd1e68f9c399455b075801252fd2f8e11b6aad"
        },
        "date": 1764974780225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00891252,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0066446,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01259958,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00512332,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0051600000000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.015366314285714283,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00703413,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.151679,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "7e8cd253392a7d488f9f288a3ece32ccb5a88e36",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/7e8cd253392a7d488f9f288a3ece32ccb5a88e36"
        },
        "date": 1766083342694,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.008955719999999999,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00619118,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0120511,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00515216,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0052033999999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.013928342857142856,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00693892,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1516012,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "1b210c17beba38618915e0b75b6910837eb030be",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/1b210c17beba38618915e0b75b6910837eb030be"
        },
        "date": 1766084141756,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0089516,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00621806,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01212362,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00512828,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.005134919999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.013989971428571429,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00685264,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1513344,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "1b210c17beba38618915e0b75b6910837eb030be",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/1b210c17beba38618915e0b75b6910837eb030be"
        },
        "date": 1766088189092,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00932064,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0064169,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01208464,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00511216,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0053297200000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.01491197142857143,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00688971,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1534198,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "8a124d9dfa861f760f26db62d110b8fc8191ac20",
          "message": "WIP test fix for input syntax",
          "timestamp": "2025-12-18T17:59:14Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/8a124d9dfa861f760f26db62d110b8fc8191ac20"
        },
        "date": 1766093208823,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00871498,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00694014,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01301316,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00530568,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00547472,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.016439885714285715,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00739063,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1532858,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "86a48333fc293d9fda358585f89861790f350235",
          "message": "Use fork for testing",
          "timestamp": "2025-12-18T01:35:04Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/86a48333fc293d9fda358585f89861790f350235"
        },
        "date": 1770757665488,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00886138,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00635352,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.012168,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.005188600000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.005383799999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.014611371428571428,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00686888,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1518274,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "bf452c880013a7300895800cea35ffca5e10d0d0",
          "message": "Fix environment variable",
          "timestamp": "2026-02-11T23:37:34Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/bf452c880013a7300895800cea35ffca5e10d0d0"
        },
        "date": 1770920130157,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0092925,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0070515,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01307454,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.0050982,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0053018,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.015820257142857144,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00708932,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.15425619999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643011555,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0279042,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.027257599999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0279838,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0331306,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0624854,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.021532399999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.0220824,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0229806,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0354122,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.027973999999999995,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.023386999999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0355606,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.065647,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.024565,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.11545180000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.30793,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.015s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.61758,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.031s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.11344339999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.021608199999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0265088,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0425474,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0232994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.05940700000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.13722420000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.26706199999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.058270199999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.06277719999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.037925799999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00906478,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00550792,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.014541277777777778,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0438309,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01123006,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00504444,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00509352,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.492952,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.01261397142857143,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00655859,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.156195,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00289698,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00358638,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.004s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643218215,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0290756,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.027382999999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0210262,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0273488,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.058876,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.021088,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.021009000000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0280546,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0346136,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.026914000000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0235862,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0356678,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0665716,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.024261600000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.112675,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.30469,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.015s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.616152,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.031s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.11295440000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.022375,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0270884,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.042625199999999995,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0220676,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.059310999999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1370952,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.266306,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.057816200000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.059253799999999995,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.0382668,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00907214,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00550776,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.014652277777777778,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0431891,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01137712,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.005091,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0051064,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.49923199999999995,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.012729371428571428,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00644025,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.15712,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00290931,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00338703,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643403190,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.028033600000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.027673,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.029996000000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0323108,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.06261420000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.022959399999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.0214852,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.028849999999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.037319,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0241134,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0236164,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.035009399999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0658358,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.024942200000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.11457060000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.30924799999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.015s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.6153200000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.031s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.1186512,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0220986,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0262912,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.043518,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.024814600000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.059659,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.136388,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.267682,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.060461999999999995,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.0646496,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.0384576,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00923512,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0055009,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.014614055555555554,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.043180899999999994,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01129076,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.0050528000000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0050538399999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.491922,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.012436257142857142,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00662405,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1568356,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00288797,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00368044,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.004s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "00eb2b08c8cf9115390de4999847b0ca90b33ed4",
          "message": "Remove excluded tests",
          "timestamp": "2026-03-04T01:46:53Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/00eb2b08c8cf9115390de4999847b0ca90b33ed4"
        },
        "date": 1772643802794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.027008599999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0265394,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0284332,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0332592,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.06398540000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0245846,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.0220912,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0288002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0368336,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0242144,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0256836,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.035968,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0670166,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0259298,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.11410540000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.303502,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.015s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.614922,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.031s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.1205326,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.021067400000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.026505,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.043162200000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0239936,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.057823400000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.13771440000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.26761,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.059637199999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.0675918,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.0385708,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0091782,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00550588,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.01415127777777778,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.043907100000000004,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01147372,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00499084,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00505524,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.013s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.4985200000000001,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.012583628571428572,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.006495300000000001,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.006s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.15738439999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00290383,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00298981,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.003s"
          }
        ]
      }
    ]
  }
}