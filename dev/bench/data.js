window.BENCHMARK_DATA = {
  "lastUpdate": 1762827414061,
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
      }
    ]
  }
}