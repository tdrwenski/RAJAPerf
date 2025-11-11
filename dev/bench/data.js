window.BENCHMARK_DATA = {
  "lastUpdate": 1762827313777,
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
      }
    ]
  }
}