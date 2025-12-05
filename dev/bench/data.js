window.BENCHMARK_DATA = {
  "lastUpdate": 1764966072067,
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
      }
    ]
  }
}