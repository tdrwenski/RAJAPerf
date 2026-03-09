window.BENCHMARK_DATA = {
  "lastUpdate": 1773075247685,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773075244619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.49992142857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.998s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.4692785714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.140s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05350821428571429,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.982s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.053509999999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.983s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0030046964285714286,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.683s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.13914781746031746,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.026s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12107678571428572,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.780s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1556957142857143,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.595s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.030328000000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.459s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030436071428571427,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.611s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8739464285714287,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.047s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15574591836734694,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.526s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03035410714285714,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 16.998s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.01211507142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012115285714285712,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.007947142857142856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.223s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03399371428571429,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.952s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.03052682142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.855s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03546382142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.993s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012130285714285715,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004353928571428572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.122s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.032613750000000004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.913s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030571285714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.856s"
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773075245758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.009256,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.752s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 2.325696,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.581s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01692988,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3389156,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.847s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0208916,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.104s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3780955555555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.340s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.264766,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.132s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11660640000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.292s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.044606480000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.558s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0348232,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.435s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.53556,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.263s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11626857142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.203s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09764840000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.488s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 56.93,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 14.232s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.08153679999999999,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0676556,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1316464,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.033s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1810328,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.149184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.076184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0424732,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0947196,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.024s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1821268,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 7.39212,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.848s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.6680399999999995,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.417s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.43836800000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.096s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.437996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.095s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.263944,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.320s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.681422222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.013s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.26304,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.132s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.9317920000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.829s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4712975999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.891s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34178400000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.272s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.61719999999997,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.290s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.9284799999999997,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.375s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.569178,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.846s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.0635,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.0635,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.592196,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.193728,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.298s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.6371840000000004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.659s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.139568,
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
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.21127,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.055332,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.673268,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.668s"
          }
        ]
      }
    ]
  }
}