window.BENCHMARK_DATA = {
  "lastUpdate": 1762827302900,
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
    ]
  }
}