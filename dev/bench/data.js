window.BENCHMARK_DATA = {
  "lastUpdate": 1773075532476,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773075525337,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.5033071428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.093s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.4694678571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.145s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05366107142857143,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.025s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05343607142857143,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.962s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0030058035714285716,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.683s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14164880952380954,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.278s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12096285714285715,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.774s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15578785714285717,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.621s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.030449142857142855,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.629s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030519142857142852,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.727s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8614428571428574,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.012s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15591785714285714,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.560s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030480178571428568,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.069s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012224607142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.342s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012126071428571427,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008296107142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.232s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03443246428571429,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.964s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030844857142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.864s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.035440285714285716,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.992s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012093642857142855,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004437035714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.124s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.032648892857142855,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.914s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030492500000000002,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.854s"
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773075526003,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 2.19244,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.548s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.99686,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.249s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01666304,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3380572,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020609199999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.103s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37995555555555555,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.342s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.268882,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.134s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1163712,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.291s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04488527999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.561s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.034558559999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.432s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.461279999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.262s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11792971428571429,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.206s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0966982,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.483s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 61.776,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 15.444s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0825692,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0677064,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1273848,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.032s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1826336,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1498012,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0754664,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.041806,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0923864,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1813384,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.48804,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.122s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.56816,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.392s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.445916,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.115s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.446568,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.116s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.263738,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.643,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.979s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.28788,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.144s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.917688,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.794s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47131199999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.891s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3423632,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.280s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.6332,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.291s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.8949942857142859,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.316s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5698179999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.849s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.063936,
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
            "value": 0.590732,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.267232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.317s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.768476,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.13182,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.533s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.063448,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2336596,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.058s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.086244,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.272s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.768472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.692s"
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773075247626,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0449498,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0428968,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.039150599999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0633778,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.19410840000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0491702,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.0218724,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0249026,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0539672,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0259706,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.046098999999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.08634680000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.215044,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0495574,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.489604,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.024s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.449914,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.072s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.00252,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.150s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.49274,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.024177600000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.029289,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.059672800000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0280078,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0578332,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1398256,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.282958,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.05845500000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.34055,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.20208,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0407864,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0235172,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06234833333333333,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0878037,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0538146,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01655164,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.016723360000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.238840000000001,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.058059142857142865,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0218496,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.718936,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103368,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00350056,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.004s"
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773075247639,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.654844,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.164s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.272444,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.068s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.02496812,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.062s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3244096,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.811s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.015548339999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.078s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37239666666666665,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.335s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.343534,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.172s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.09273719999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.232s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.02608704,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.326s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03949416,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.494s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.446560000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09099542857142856,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.159s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0440166,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.220s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 55.3844,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 13.846s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0830308,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0418392,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1044988,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1809136,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1519776,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0801184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03165852,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0796512,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.178902,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 10.87628,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.719s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 7.24104,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.810s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.46508,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.163s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45972799999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26479600000000003,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.324s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.2534888888888895,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.628s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.82632,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.413s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.711544,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.279s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.3087448,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 3.859s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.35275599999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.409s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 202.8136,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.070s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.7298685714285713,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.027s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532706,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.664s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.055568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.112912,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.528s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.56948,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.142s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.20004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.300s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.665468,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.666s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.143472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.07114,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2864936,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.072s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.446168,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.612s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.654192,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773075531238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.668636,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.167s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.2741988,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.069s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.024544160000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.061s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3285188,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.821s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0247892,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.124s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.36996555555555555,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.333s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.340486,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.170s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0912956,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.228s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.03995544,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.499s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.026000239999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.325s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 12.854399999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.321s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09156742857142856,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.160s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.054590599999999996,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.273s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 62.642,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 15.661s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.082964,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.042024,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1059112,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1811316,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1505828,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0816376,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03274104,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0809192,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1796108,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 10.80064,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.700s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 7.214719999999999,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.804s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.461584,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.154s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.4602280000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.151s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264694,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.255799999999999,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.630s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.94584,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.473s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.7082439999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.271s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.37067199999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.633s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.5280736,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 6.601s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 201.6984,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.042s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.7164057142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.004s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.53286,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.664s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.05554,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.1129,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.528s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.570932,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.143s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.2017,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.300s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.664552,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.666s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.143252,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.071128,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2875808,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.072s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.446756,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.612s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.650228,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.663s"
          }
        ]
      }
    ]
  }
}