window.BENCHMARK_DATA = {
  "lastUpdate": 1773100804811,
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
        "date": 1773075734950,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.5012857142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.036s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.470025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.161s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.053835,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.074s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.053675,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.029s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0030069285714285714,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.684s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14255555555555555,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.370s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12120232142857143,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.787s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15624035714285717,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.747s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.030441857142857142,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.619s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030547642857142857,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.767s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.898835714285714,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.117s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15623061224489795,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.621s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030472142857142854,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.064s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012148999999999998,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012138392857142856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008343642857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.234s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03434057142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.962s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030403714285714284,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.851s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03483128571428572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.975s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012099071428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004309285714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.121s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.032850892857142856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.920s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030545464285714283,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.855s"
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
        "date": 1773076381133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.5002142857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.006s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.4694142857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.144s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05350035714285714,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.980s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05348357142857143,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.975s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.003004214285714286,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14278769841269842,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.393s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.1210180357142857,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.777s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1558825,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.647s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.030375642857142858,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.526s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03047914285714286,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.671s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8932214285714286,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.101s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15586632653061225,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.550s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030421785714285717,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.036s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012108214285714285,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012111357142857142,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.00805792857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.226s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03432971428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.961s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030383535714285717,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.851s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03492339285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.978s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012134321428571427,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004413392857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.124s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.033029357142857145,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.925s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030546214285714284,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.855s"
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
        "date": 1773076538332,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.5010928571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.031s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.47141785714285717,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.200s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.053773214285714285,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.056s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05379035714285714,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.061s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.003006767857142857,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.684s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14639186507936508,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.756s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12261267857142857,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.866s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15619285714285713,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.734s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.03055385714285714,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.775s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030660571428571426,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.925s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8801892857142857,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.065s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15619030612244897,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.613s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030538214285714287,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.101s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012151178571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012125,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.0082345,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.231s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.034456714285714285,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.965s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.03065053571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.858s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03601178571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 1.008s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012096928571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004422464285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.124s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.032767535714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.917s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030541535714285716,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.855s"
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
        "date": 1773076875346,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.501275,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.036s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.46949642857142854,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.146s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05367964285714286,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.030s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05370214285714286,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.037s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0030031964285714284,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.1408174603174603,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.194s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12153214285714284,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.806s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1561157142857143,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.712s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0303835,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.537s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030461785714285716,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.647s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8813357142857146,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.068s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15577448979591837,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.532s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03041660714285714,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.033s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012111642857142856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012112928571428573,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008237892857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.231s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.034248464285714285,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.959s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030388357142857144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.851s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.034897928571428566,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.977s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012096250000000001,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004313392857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.121s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.032942178571428574,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.922s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.03051017857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.854s"
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
        "date": 1773077319951,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.5037892857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.106s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.4712785714285715,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.196s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.053587857142857145,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.005s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05339714285714286,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.951s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.003007660714285714,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.684s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14549305555555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.666s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12175535714285715,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.818s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.155695,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.595s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.030389142857142858,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.545s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03050042857142857,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.701s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.856853571428571,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 7.999s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.1557392857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.525s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030449642857142856,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.052s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.01212942857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012143964285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.007999392857142856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.224s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03416696428571429,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.957s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030556249999999997,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.856s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03527935714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.988s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012121785714285713,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004364857142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.122s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.03280535714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.919s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.03049921428571429,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.854s"
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
        "date": 1773077648577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.5071321428571429,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.200s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.4715285714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.203s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05372785714285714,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05374607142857143,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.049s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0030297678571428567,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.697s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14164285714285715,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.278s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12513857142857143,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 7.008s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15666357142857143,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.866s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.03063778571428571,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.893s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030795785714285713,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 43.114s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3.014725,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.441s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15672142857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.717s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03086196428571428,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.283s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012204464285714287,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.342s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.013323,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.373s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008114821428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.227s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.034591535714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.969s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030440821428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.852s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03848428571428572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 1.078s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012099678571428572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004445678571428572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.124s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.033990035714285716,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.952s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.03151821428571429,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.883s"
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
        "date": 1773077817666,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.5005714285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.016s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.4696178571428572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05349464285714286,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.979s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05348785714285714,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.977s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0030048214285714287,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.683s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14211805555555557,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.325s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12075232142857142,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.762s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15618,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.730s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.0304535,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.635s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03054457142857143,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.762s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.898907142857143,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.117s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15621173469387756,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.617s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030511428571428575,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.086s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012247821428571429,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.343s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012111392857142859,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008420107142857142,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.236s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03437953571428572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.963s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.03039160714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.851s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.034667392857142855,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.971s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.01210067857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004416892857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.124s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.03302457142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.925s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030550928571428573,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.855s"
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
        "date": 1773077855031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.5003964285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.011s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.4698428571428572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.156s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05356035714285714,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.997s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05344321428571429,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.964s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0030039642857142856,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14822123015873015,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.941s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.1217905357142857,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.820s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15629035714285713,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.761s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.030400285714285716,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.560s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03050742857142857,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.710s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8772035714285713,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.056s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.155765306122449,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.530s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030427142857142857,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.039s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012109785714285715,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012113785714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008162285714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.229s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.034171214285714284,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.957s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.03037242857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.850s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03469528571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.971s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012129214285714285,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.00431575,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.121s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.03288525,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.921s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030538285714285716,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.855s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088144419,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.49989999999999996,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.997s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.46980000000000005,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.154s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.053828214285714285,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.072s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05376821428571429,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.003004375,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14167460317460318,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.281s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12118089285714286,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.786s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15589178571428572,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.650s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.030442571428571426,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.620s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030583714285714284,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.817s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.9068535714285715,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.139s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15596989795918367,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.570s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03050625,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.084s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012317392857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.345s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.01214125,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008296785714285715,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.232s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.0344105,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.963s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030487714285714285,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.854s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03791392857142858,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 1.062s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012095249999999998,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004448464285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.125s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.03285192857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.920s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030500607142857145,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.854s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088357839,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.49942857142857144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.984s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.4695964285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05355214285714286,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.995s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05336321428571429,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.942s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0030050892857142854,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.683s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14109027777777777,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.222s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12066553571428572,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.757s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15587857142857142,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.646s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.03042342857142857,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.593s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03050807142857143,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.711s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.885378571428572,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.079s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15593418367346937,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.563s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030473214285714284,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.065s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012253428571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.343s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.01211657142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008245642857142856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.231s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03413425,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.956s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.03042775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.852s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.0352945,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.988s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012092178571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.0043575714285714285,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.122s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.03289678571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.921s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.03045792857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.853s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088506184,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.5004000000000001,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.011s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.4702571428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.167s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05373285714285714,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05371750000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.041s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.00300825,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.685s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14126686507936506,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.240s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12107589285714286,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.780s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1560814285714286,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.703s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.030488285714285714,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.684s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030534285714285715,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.748s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8898357142857143,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.092s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15608061224489794,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.592s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030530178571428573,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.097s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012228607142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.342s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.01214775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008182714285714284,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.229s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03423935714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.959s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030409607142857144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.851s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03642928571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 1.020s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012104035714285715,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.00434,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.122s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.03291292857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.922s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030476107142857138,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.853s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088930748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.49950714285714287,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.986s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.46959999999999996,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05374,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.047s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.053653571428571425,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.023s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0030048392857142856,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.683s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.15119742063492064,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 15.241s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12237303571428572,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.853s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15605964285714286,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.697s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.03040207142857143,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.563s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030497357142857145,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.696s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.878003571428571,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.058s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15585510204081632,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.548s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03043267857142857,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.042s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012114142857142856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012114107142857145,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.007999964285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.224s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03413432142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.956s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.0304135,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.852s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.0352215,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.986s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012098285714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004356428571428572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.122s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.03293092857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.922s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030465892857142858,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.853s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773090699926,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.49935714285714283,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.982s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.46929642857142856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.140s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.053798928571428574,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.064s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.053626071428571426,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.015s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0030081428571428572,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.685s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14247123015873017,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.361s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12096553571428571,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.774s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15571500000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.600s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.03039835714285714,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.558s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03050692857142857,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.710s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8830285714285715,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.072s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15576938775510205,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.531s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030421785714285717,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.036s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012129964285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012132142857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008176964285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.229s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03426235714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.959s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030489392857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.854s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.035239071428571425,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.987s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012095142857142858,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004384464285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.123s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.032991821428571426,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.924s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030511250000000004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.854s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773091120820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.5002321428571429,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.007s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.4693178571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.141s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05370071428571428,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.036s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.053714285714285714,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.040s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0030069642857142856,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.684s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14164583333333336,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.278s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.1218657142857143,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.824s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.156445,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.805s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.03036885714285714,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.516s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03047264285714286,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.662s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8888071428571434,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.089s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15576785714285715,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.530s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030401071428571427,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.025s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012133142857142856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012136214285714287,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008128535714285713,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.228s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03416157142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.957s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.03039185714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.851s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.034730285714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.972s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012096321428571429,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004489642857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.126s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.033003785714285715,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.924s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030529249999999997,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.855s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773091495567,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.50025,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.007s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.46975357142857144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.153s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.053491785714285714,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.978s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05346392857142858,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 14.970s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.0030056964285714288,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.683s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.13967460317460317,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.079s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12083178571428571,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.767s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15581107142857142,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.627s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.030433285714285715,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.607s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030503285714285712,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.705s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8791928571428573,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.062s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15590255102040815,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.557s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03047089285714286,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.064s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012228857142857144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.342s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012139500000000001,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008010178571428573,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.224s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03427892857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.960s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.03056139285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.856s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.037345357142857145,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 1.046s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012100928571428572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004364464285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.122s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.03291725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.922s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.03047675,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.853s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773094778005,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.49973928571428566,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.993s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.46989285714285717,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.157s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05379964285714286,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.064s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05377964285714285,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.058s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.003005232142857143,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.683s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.1410545634920635,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.218s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12095,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.773s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15600607142857142,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.03044292857142857,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.620s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030550785714285714,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.771s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8738428571428574,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.047s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15604948979591837,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.586s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030492678571428573,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.076s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012168285714285713,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.341s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012122928571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008146285714285715,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.228s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.034232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.958s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030718857142857145,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03703321428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 1.037s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012102035714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.0043255,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.121s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.03271667857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.916s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030522571428571427,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.855s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773094800010,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.50315,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.088s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.46959285714285715,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05388285714285714,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.087s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.053808214285714286,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.066s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.003011732142857143,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.687s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14049900793650794,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.162s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12152553571428572,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.805s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15591607142857142,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.657s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.03050807142857143,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.711s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03053078571428571,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.743s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.902975,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.128s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15596173469387756,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.569s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03055625,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.111s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012130071428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012146821428571429,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008170571428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.229s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03428739285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.960s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030360071428571427,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.850s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03732214285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 1.045s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012091,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004498857142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.126s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.032862142857142854,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.920s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.03046210714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.853s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773095193209,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.5003357142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.009s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.4697928571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.154s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.053760357142857144,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.053s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.053782857142857146,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.059s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.003005964285714286,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.683s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.13776388888888888,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 13.887s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12113303571428571,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.783s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15578071428571427,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.619s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.030450357142857144,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.630s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030541642857142854,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.758s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8641357142857142,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.020s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15587857142857142,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.552s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03048892857142857,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.074s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012124357142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012124142857142858,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008037178571428572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.225s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03416946428571429,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.957s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030406642857142854,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.851s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.036492142857142855,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 1.022s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.01209792857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004302392857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.120s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.032917214285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.922s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.03050467857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.854s"
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
          "id": "d233db607a4e2112061cb9cc755d407580429813",
          "message": "Comment out mpi/rocm jobs",
          "timestamp": "2026-03-09T23:34:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/d233db607a4e2112061cb9cc755d407580429813"
        },
        "date": 1773100191133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.50315,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.088s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.46959285714285715,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05388285714285714,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.087s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.053808214285714286,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.066s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.003011732142857143,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.687s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14049900793650794,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.162s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12152553571428572,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.805s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15591607142857142,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.657s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.03050807142857143,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.711s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03053078571428571,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.743s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.902975,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.128s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15596173469387756,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.569s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.03055625,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.111s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012130071428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012146821428571429,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008170571428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.229s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03428739285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.960s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030360071428571427,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.850s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03732214285714286,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 1.045s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012091,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.004498857142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.126s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.032862142857142854,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.920s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.03046210714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.853s"
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
          "id": "d233db607a4e2112061cb9cc755d407580429813",
          "message": "Comment out mpi/rocm jobs",
          "timestamp": "2026-03-09T23:34:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/d233db607a4e2112061cb9cc755d407580429813"
        },
        "date": 1773100193498,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.5004000000000001,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 14.011s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.4702571428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.167s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05373285714285714,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05371750000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.041s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.00300825,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.685s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.14126686507936506,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.240s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12107589285714286,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.780s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.1560814285714286,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.703s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.030488285714285714,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.684s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030534285714285715,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.748s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8898357142857143,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.092s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15608061224489794,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.592s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030530178571428573,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.097s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012228607142857143,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.342s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.01214775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.340s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008182714285714284,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.229s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.03423935714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.959s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030409607142857144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.851s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03642928571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 1.020s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012104035714285715,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.00434,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.122s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.03291292857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.922s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030476107142857138,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.853s"
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
          "id": "d233db607a4e2112061cb9cc755d407580429813",
          "message": "Comment out mpi/rocm jobs",
          "timestamp": "2026-03-09T23:34:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/d233db607a4e2112061cb9cc755d407580429813"
        },
        "date": 1773100798213,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.49973928571428566,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.993s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.46989285714285717,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 13.157s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.05379964285714286,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.064s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.05377964285714285,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 15.058s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.003005232142857143,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 1.683s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.1410545634920635,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 112, total_time: 14.218s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.12095,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 112, total_time: 6.773s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.15600607142857142,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 112, total_time: 43.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.03044292857142857,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.620s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.030550785714285714,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 112, total_time: 42.771s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2.8738428571428574,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 112, total_time: 8.047s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.15604948979591837,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 112, total_time: 30.586s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.030492678571428573,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 112, total_time: 17.076s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.012168285714285713,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.341s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.012122928571428571,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.008146285714285715,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.228s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.034232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.958s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.030718857142857145,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.03703321428571428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 1.037s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.012102035714285714,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.0043255,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.121s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.03271667857142857,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.916s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.030522571428571427,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 112, total_time: 0.855s"
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
        "date": 1773075734016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 1.255756,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.314s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.728608,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.182s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.016817280000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33801800000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.845s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0205884,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.103s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.38004888888888894,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.342s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.271492,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.136s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1169584,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.292s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0451148,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.564s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03490304,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.436s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.41972,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.260s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.115908,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.203s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0966728,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.483s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 60.7796,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 15.195s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0824668,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.06717,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1305168,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.033s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.181296,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.148506,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0774096,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0422872,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0929976,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1803552,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.95888,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.240s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.5146,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.379s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.451004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.128s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45076000000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.127s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26499,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.325s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.6607,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.995s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.30384,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.152s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.8828440000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.707s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47137520000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.892s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34314799999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.289s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.75959999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.294s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.8876400000000002,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.303s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.569178,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.846s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.063532,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.063504,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.603992,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.151s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.193648,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.298s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.65586,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.664s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.139812,
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
            "value": 0.2112108,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.05518,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.637704,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773076382549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 1.256472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.314s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.7533,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.188s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0179866,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33938199999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.848s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0215856,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.108s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3824388888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.344s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.272874,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.136s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1174096,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.294s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0462604,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.578s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0360396,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.450s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.458599999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.261s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11940914285714287,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.209s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09840680000000002,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.492s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 52.5916,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 13.148s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.081242,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.06587,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.016s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1241348,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.031s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1806568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1485092,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0751432,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0411652,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0922752,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1793048,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 7.60268,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.901s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.50756,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.377s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.45075200000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.127s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45057600000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.126s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26381,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.727822222222223,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.27356,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.137s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.912724,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.782s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47138,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.892s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34254,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.282s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.3004,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.283s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.8901314285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.308s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.569524,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.848s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.063504,
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
            "value": 0.592748,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.193752,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.298s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.637716,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.659s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.140012,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.063504,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2111868,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.055892,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.637704,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773076540189,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.728952,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.182s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.3093124,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.077s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0180278,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3392832,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.848s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.021324799999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.107s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3810322222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.343s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.269812,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.135s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1172868,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.293s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04535312,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.567s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03504616,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.438s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.445800000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.261s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11761999999999999,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.206s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09757679999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.488s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 55.6788,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 13.920s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0811056,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.065992,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.016s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.124522,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.031s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1829472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1485932,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0750952,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0416364,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0920084,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1815712,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 7.38232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.846s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.3484,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.337s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.465808,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.165s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.465596,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.164s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264016,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.320s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.650655555555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.986s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.28982,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.145s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.8116560000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.529s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47140799999999994,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.893s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3449224000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.312s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.21040000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.280s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.8180171428571428,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.182s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.569152,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.846s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.063492,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.063496,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.592712,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.193184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.298s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.69814,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.675s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.140196,
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
            "value": 0.2098032,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.052s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.055264,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.637708,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773076879026,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 1.01566,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.254s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.477924,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.119s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01767628,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3400016,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.850s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0207244,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.104s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3749077777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.337s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.266174,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.133s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11726279999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.293s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04467120000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.558s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.034373999999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.430s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 11.09248,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.277s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11604285714285716,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.203s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0916544,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.458s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 58.952,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 14.738s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0818024,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0671188,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1252452,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.031s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1819,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1484356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0744876,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03290168,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0909512,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1774608,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 7.37492,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.844s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.37544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.344s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.463608,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.159s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.4633320000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.158s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26379,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.660277777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.994s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.30188,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.151s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.8293119999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.573s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47149199999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.894s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34667760000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.333s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.1516,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.279s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.8136,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.174s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5694020000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.847s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.06352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.063664,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.5955839999999999,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.193428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.298s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.637228,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.659s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.140584,
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
            "value": 0.2116048,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.055096,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.768564,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773077323025,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 2.484532,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.621s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 2.067152,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.517s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01577988,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.039s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3370628,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.843s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.01960628,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.098s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3764033333333333,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.339s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.26128,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.131s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1139076,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.285s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04374696,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.547s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03372912,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.422s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.40128,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.260s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11705828571428571,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.205s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0969256,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.485s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 57.2996,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 14.325s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0810012,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0665356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1256704,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.031s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1804768,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1488696,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0769384,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0425548,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0939112,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1817184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 7.40672,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.852s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.5876,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.397s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.447996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.120s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.447588,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.119s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264646,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.673388888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.006s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.29102,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.146s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.918836,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.797s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4713839999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.892s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34362479999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.295s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.41760000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.285s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.8994,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.324s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.569302,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.847s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.063504,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.063508,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.593716,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.19312,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.298s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.63772,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.659s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.120256,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.530s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.063504,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2113056,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.056136,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.637724,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773077650057,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 1.176776,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.294s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.945148,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.236s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01757088,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.044s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3437264,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.859s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0207816,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.104s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3985222222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.359s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.270294,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.135s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.12399679999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.310s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04524552,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.566s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.035792080000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.447s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.40576,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.260s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11914057142857142,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.208s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09599400000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.480s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 50.9396,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 12.735s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.080878,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0671472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1589764,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.040s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1806428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.148994,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0753568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0413452,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0921104,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1807392,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 7.52036,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.880s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.52348,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.381s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.462992,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.157s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.46132799999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.153s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26396600000000003,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.320s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.669855555555555,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.003s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.31358,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.157s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.883516,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.709s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47123600000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.890s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.343916,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.299s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.61520000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.290s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.8882514285714287,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.304s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.569754,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.849s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.063508,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.06352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.565316,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.141s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.19356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.298s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.637216,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.659s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.140296,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.06352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2101808,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.05526,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.637216,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773077818276,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 1.10922,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.277s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.505164,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.126s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.017259840000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3393232,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.848s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020694399999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.103s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.38168222222222226,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.344s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.270032,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.135s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11715040000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.293s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.045368719999999994,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.567s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03517264,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.440s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.445879999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.261s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.1152422857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.202s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09514679999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.476s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 62.2912,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 15.573s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0814024,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0673468,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1346992,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.034s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1817032,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1485988,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0762572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.042378,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0980328,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.179372,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 9.64112,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.410s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.43808,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.360s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.45582799999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.140s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.455488,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.139s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26377999999999996,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.642377777777777,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.978s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.28338,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.142s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.8679279999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.670s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47138480000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.892s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3431632,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.290s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.33720000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.283s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.8604971428571428,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.256s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.569134,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.846s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.063504,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.063508,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.62444,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.156s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.218984,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.305s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.637716,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.659s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.140232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.063504,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.232278,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.058s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.05538,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.76852,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773077882215,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.652012,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.163s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.2712088,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.068s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.017337440000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3391088,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.848s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0210318,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.105s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3833033333333333,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.345s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.269172,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.135s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11788520000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.295s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04535128000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.567s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03504592,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.438s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.40432,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.260s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11691085714285714,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.205s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.09503239999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.475s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 60.652,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 15.163s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0819932,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0678772,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1282228,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.032s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1810004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.149258,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.037s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0767432,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0432832,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0945888,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.024s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1815824,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 9.06924,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.39364,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.348s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.460636,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.152s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.46089600000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.152s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.263744,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.668444444444444,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 6.002s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.29706,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.8606719999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.652s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.4713,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 5.891s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34430160000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.304s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 171.20280000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.280s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.8513428571428572,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.240s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.56928,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.846s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.06352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.063556,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.625508,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.156s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.263984,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.316s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.7528,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.688s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.13958,
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
            "value": 0.2337984,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.058s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.055148,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.768576,
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088146043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.56306,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.891s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 2.63894,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.660s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.03665716,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.092s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.6543599999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.636s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.048108,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.241s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.43430777777777774,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.391s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.352258,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.176s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.163524,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.409s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0818328,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.023s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0638176,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.798s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 57.0908,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.427s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.172796,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.302s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.20221399999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.011s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 392.1616,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 98.040s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.204238,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.051s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.263738,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.066s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.49034,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.123s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.3971216,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.099s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.222708,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.056s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.1375848,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.034s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0981756,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.1630188,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3264548,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.082s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 37.03156,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.258s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 31.34752,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 7.837s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.928208,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.821s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9299760000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.825s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.3314979999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.657s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 34.24822222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 30.823s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 26.2958,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.59968,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 28.999s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.86208,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 35.776s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.969728,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.122s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2601.492,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 65.037s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 12.304114285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 21.532s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.25184,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 16.259s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.4462,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.362s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 5.48256,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.371s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 3.066316,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.767s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.67784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.99132,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.498s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.8336,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.708s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.31732,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.329s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.062328,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 5.89088,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.473s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.19104,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.298s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088360729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.340372,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.835s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 2.252808,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.563s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.03575724,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.089s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.653616,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.634s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0432722,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.216s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.4326488888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.389s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.340008,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.170s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1606976,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.402s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0802144,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.003s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.062264879999999995,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.778s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 56.5424,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.414s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.16578457142857145,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.290s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.20109599999999997,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.005s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 452.744,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 113.186s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.20729,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.052s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.2619432,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.065s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.487668,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.122s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.397468,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.099s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.2190844,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.055s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.1376776,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.034s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.1021836,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.161518,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.040s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3245776,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.081s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 37.07372,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.268s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 31.52108,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 7.880s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.994972,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.987s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.991308,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.978s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.327494,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.637s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 34.52066666666666,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 31.069s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 26.3956,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.198s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.661480000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 29.154s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.8699120000000002,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 35.874s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 3.0178320000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.723s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2622.32,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 65.558s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 12.510971428571429,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 21.894s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.2774199999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 16.387s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.45028,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.363s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 5.486,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.371s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 3.070108,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.768s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.71972,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.680s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.92532,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.481s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.84968,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.712s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.31728,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.329s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.077568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.269s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 5.91456,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.479s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.18884,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.297s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088508434,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.043856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.761s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 2.094424,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.524s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0356922,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.089s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.6543479999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.636s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0469382,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.235s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.4334511111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.390s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.347116,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.174s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.16293880000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.407s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.08051119999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.006s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.06249304,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.781s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 68.5988,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.715s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.16876114285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.295s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.20505,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.025s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 454.02,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 113.505s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.2032692,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.051s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.2508944,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.063s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.481924,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.120s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.394452,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.099s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.225072,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.056s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.1363068,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.034s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0978944,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.024s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.1623068,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3250604,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.081s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 37.02416,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.256s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 31.3116,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 7.828s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.985872,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.965s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.992104,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.980s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.3326440000000002,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.663s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 34.42655555555555,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 30.984s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 26.3378,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.169s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.71532,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 29.288s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.8932,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 36.165s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 3.032824,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.910s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2613.5359999999996,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 65.338s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 12.470857142857144,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 21.824s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.28588,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 16.429s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.45052,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.363s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 5.4862,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.372s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 3.069464,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.767s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.74784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.687s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.351360000000001,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.338s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.84664,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.712s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.31744,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.329s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.06512,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.266s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 5.92228,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.481s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.19116,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.298s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088933754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.254196,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.814s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 2.083792,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.521s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.03478116,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.087s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.64616,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.615s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.045977199999999996,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.230s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.43088000000000004,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.388s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.34823,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.174s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.163356,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.408s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.08122080000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.015s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.06255576,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.782s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 57.404,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.435s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.16759542857142856,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.293s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.202244,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.011s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 466.484,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 116.621s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.1974412,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.049s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.2463736,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.062s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.46918,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.117s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.3902296,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.098s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.2226752,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.056s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.1362784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.034s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.1004064,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.161846,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.040s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3250908,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.081s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 37.01256,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.253s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 31.21208,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 7.803s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.9638240000000007,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.910s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9681600000000006,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.920s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.3253,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.627s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 34.47755555555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 31.030s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 26.3438,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.172s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.6666,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 29.166s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.888248,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 36.103s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 3.0046,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.557s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2617.0240000000003,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 65.426s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 12.407428571428571,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 21.713s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.2613399999999997,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 16.307s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.45076,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.363s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 5.48604,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.372s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 3.071216,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.768s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.85352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.713s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.35144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.338s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.84116,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.710s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.31744,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.329s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.070052,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 5.92824,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.482s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.4862,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.372s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773090701289,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.093568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.773s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.999832,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.500s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.03644584000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.091s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.6554160000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.639s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0451716,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.226s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.43451666666666666,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.391s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.347456,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.174s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.16178760000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.404s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0809928,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.012s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.06310392,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.789s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 57.141999999999996,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.429s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.16458514285714285,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.288s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.1894456,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.947s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 439.748,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 109.937s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.2064284,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.052s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.2609292,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.065s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.485444,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.121s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.3976168,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.099s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.2161436,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.054s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.1379508,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.034s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.081392,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.1620516,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.32565,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.081s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 36.981,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.245s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 31.25088,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 7.813s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.9710959999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.928s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9761319999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.940s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.3317940000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.659s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 34.364111111111114,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 30.928s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 26.3094,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.155s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.6734,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 29.183s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.895336,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 36.192s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 3.0314479999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.893s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2613.736,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 65.343s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 12.537200000000002,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 21.940s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.2892,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 16.446s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.45048,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.363s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 5.5048,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.376s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 2.978244,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.745s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.73864,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.685s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.61356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.403s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.84288,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.711s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.31768,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.329s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.07836,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.270s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 5.89612,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.474s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.38024,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.345s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773091122236,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.050272,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.763s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.991264,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.498s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.033418399999999994,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.084s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.655856,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.640s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0471538,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.236s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.4324611111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.389s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.343038,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.172s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1609336,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.402s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.07985312000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.998s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.06179472,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.772s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 67.8284,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.696s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.16752514285714287,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.293s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.20166800000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.008s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 445.676,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 111.419s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.2063844,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.052s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.262956,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.066s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.485552,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.121s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.398446,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.100s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.2116304,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.053s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.1361728,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.034s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0752552,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.1590276,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.040s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3237324,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.081s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 37.0374,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.259s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 31.26256,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 7.816s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.982108,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.955s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9771120000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.943s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.331678,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.658s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 34.44377777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 30.999s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 26.3224,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.161s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.6528,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 29.132s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.8815679999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 36.020s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 3.0251280000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.814s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2603.656,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 65.091s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 12.598742857142856,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 22.048s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.28876,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 16.444s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.45108,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.363s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 5.48624,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.372s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 3.1043279999999998,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.776s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 7.0926,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.773s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.617239999999999,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.404s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.85296,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.713s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.31756,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.329s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.22702,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.307s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 5.917,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.479s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.843,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.461s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773091498150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.227392,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.807s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 2.290196,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.573s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0329664,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.082s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.653608,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.634s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.045709,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.229s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.43259444444444445,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.389s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.337928,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.169s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.16111040000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.403s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.07909544,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.989s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.06071824000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.759s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 57.1664,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.429s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.16935200000000003,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.296s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.1885968,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.943s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 415.108,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 103.777s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.2060712,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.052s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.2631336,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.066s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.488372,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.122s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.398018,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.100s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.2126712,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.053s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.1350884,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.034s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.07446319999999998,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.1592576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.040s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3234032,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.081s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 37.04608,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.262s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 31.12696,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 7.782s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.931868,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.830s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9422040000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.856s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.33169,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.658s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 34.40233333333333,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 30.962s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 26.336,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.168s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.55292,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 28.882s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.8683760000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 35.855s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.985752,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.322s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2611.724,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 65.293s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 12.199942857142858,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 21.350s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.2584000000000004,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 16.292s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.45032,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.363s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 5.4862,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.372s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 3.069524,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.767s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.68592,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.671s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.35124,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.338s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.8408,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.710s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.31736,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.329s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.070888,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 5.87536,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.469s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.1858,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.296s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773094778649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.06974,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.767s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 2.024768,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.506s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.034840840000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.087s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.6516759999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.629s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0372004,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.186s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.4311666666666667,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.388s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.334144,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.167s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.160212,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.401s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0793812,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.992s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.06136376,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.767s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 57.173199999999994,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.429s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.167828,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.294s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.20156000000000002,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.008s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 448.716,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 112.179s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.2062536,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.052s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.2664132,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.067s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.486388,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.122s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.3980136,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.100s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.218236,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.055s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.136844,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.034s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0763264,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.019s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.1609688,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.040s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3248656,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.081s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 37.18728,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.297s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 31.1208,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 7.780s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.9565759999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.891s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9639879999999996,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.910s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.369022,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.845s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 34.34733333333334,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 30.913s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 26.3966,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.198s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.70548,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 29.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.886624,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 36.083s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.971184,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.140s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2616.1119999999996,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 65.403s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 12.389942857142858,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 21.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.21742,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 16.087s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.46132,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.365s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 5.5018,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.375s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 3.140504,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.785s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 8.15724,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.039s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.53452,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.384s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.90748,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.727s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.3319600000000005,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.333s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.221628,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.305s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 6.56844,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.642s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.39288,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.348s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773094799529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.53946,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.885s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 2.439664,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.610s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.03602328,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.090s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.655704,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.639s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.046133999999999994,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.231s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.4349644444444444,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.391s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.34662199999999993,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.173s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1630228,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.408s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0809656,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.012s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.06315848,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.789s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 66.9136,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.673s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.17021657142857144,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.298s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.20303200000000002,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.015s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 439.828,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 109.957s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.2040296,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.051s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.260624,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.065s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.487112,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.122s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.396646,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.099s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.2250676,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.056s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.1365732,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.034s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0973724,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.024s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.1625456,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3253552,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.081s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 52.3784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 13.095s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 32.79756,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 8.199s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 4.0482,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.120s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9909480000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.977s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.40304,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 7.015s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 34.37111111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 30.934s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 26.4804,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.240s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.758,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 29.395s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.846208,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 35.578s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.979832,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.248s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2614.812,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 65.370s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 12.673885714285715,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 22.179s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.19186,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 15.959s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.46536,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.366s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 5.50176,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.375s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 3.193772,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.798s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 8.246,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.062s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.63236,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.408s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 11.83008,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.958s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.33144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.333s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.276188,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.319s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 6.94652,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.737s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.37624,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.344s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773095197915,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.443852,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.861s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 2.444784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.611s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.036876280000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.092s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.6557719999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.639s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0477514,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.239s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.4363988888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.393s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.35444200000000003,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.177s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.16449199999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.411s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0811784,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.015s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.06305312,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.788s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 68.23479999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.706s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.16889485714285712,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.296s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.20225,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.011s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 419.424,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 104.856s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.2045956,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.051s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.2647644,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.066s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.492132,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.123s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.3979556,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.099s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.2133544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.053s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.138644,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.035s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.1016936,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.1649256,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3272756,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.082s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 37.03568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.259s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 31.29044,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 7.823s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.976828,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.942s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.984148,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.960s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.3314059999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.657s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 34.163777777777774,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 30.747s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 26.3944,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.197s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.673359999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 29.183s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.8715519999999994,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 35.894s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 3.019736,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.747s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2620.0119999999997,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 65.500s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 12.4568,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 21.799s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.2937600000000007,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 16.469s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.44968,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.362s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 5.48596,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.371s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 3.069772,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.767s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.71644,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.679s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.35144,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.338s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.83752,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.709s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.31744,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.329s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.067108,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 5.92128,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.480s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.27808,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.320s"
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
          "id": "d233db607a4e2112061cb9cc755d407580429813",
          "message": "Comment out mpi/rocm jobs",
          "timestamp": "2026-03-09T23:34:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/d233db607a4e2112061cb9cc755d407580429813"
        },
        "date": 1773100192517,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 5.21576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.304s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 3.62492,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.906s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.16511679999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.413s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 1.6872639999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.218s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.08678519999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.434s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 2.038177777777778,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 1.834s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 1.523524,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.762s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 1.163484,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 2.909s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.2094736,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 2.618s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.15748399999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.969s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 154.2084,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 3.855s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.8336742857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 1.459s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.44664400000000004,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.233s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 311.7312,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 77.933s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.3498232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.087s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.2319536,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.058s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.454164,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.114s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.85996,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.215s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.690204,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.173s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.3432356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.086s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.18146440000000003,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.440312,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.110s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.866264,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.217s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 37.96676,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.492s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 31.41824,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 7.855s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.9840200000000006,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.960s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9863079999999993,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.966s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.323152,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.616s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 34.324888888888886,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 30.892s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 26.4154,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.208s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 16.026159999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 40.065s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.8171440000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 35.214s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.91848,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 36.481s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2630.888,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 65.772s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 12.455885714285714,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 21.798s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.1891,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 15.945s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.32668,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.332s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 5.32684,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.332s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 3.083816,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.771s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 7.91496,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.979s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.372,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.343s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 11.65964,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.915s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.3252,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.331s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.267908,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.317s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 6.76256,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.691s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.36364,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.341s"
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
          "id": "d233db607a4e2112061cb9cc755d407580429813",
          "message": "Comment out mpi/rocm jobs",
          "timestamp": "2026-03-09T23:34:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/d233db607a4e2112061cb9cc755d407580429813"
        },
        "date": 1773100194530,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 5.17404,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.294s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 3.617052,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.904s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.1531988,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.383s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 1.6885280000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.221s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0871902,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.436s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 2.030388888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 1.827s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 1.531598,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.766s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.8148,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 2.037s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.20917439999999998,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 2.615s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.15752560000000002,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.969s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 155.53,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 3.888s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.8454457142857142,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 1.480s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.44738199999999995,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.237s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 287.49640000000005,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 71.874s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.3478068,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.087s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.2314912,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.058s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.447632,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.112s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.857568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.214s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.68772,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.172s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.3426584,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.086s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.183514,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.43824,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.110s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.868664,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.217s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 37.05568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 31.32092,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 7.830s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.984364,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.961s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9840359999999992,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.960s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.3186799999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.593s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 34.208222222222226,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 30.787s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 26.426,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.213s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.666319999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 29.166s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.8622,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 35.778s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.884568,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 36.057s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 2618.444,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 65.461s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 12.520628571428572,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 21.911s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.289,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 16.445s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.3176,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.329s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 5.31752,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.329s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 2.974116,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.744s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.60028,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.650s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.57484,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.394s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.78456,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.696s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.31784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.329s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.06986,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 5.916,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.479s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.69104,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.423s"
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
        "date": 1773075531578,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.044786,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0434066,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.040099,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0623844,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1999754,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.04757120000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.022362200000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0263946,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0552464,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.027580399999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0479936,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.08814040000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.21791,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.050898000000000006,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.493872,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.4565439999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.073s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.00584,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.150s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.494782,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.024567600000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.031110600000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.063763,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.029619999999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0591472,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1422554,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.292336,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.015s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.061879800000000006,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.346432,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.20502800000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.040255,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0235962,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06642111111111111,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08805999999999999,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0550792,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.028s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01657588,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01693744,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.259539999999999,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.06172542857142857,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0219824,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.718424,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103631,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00385137,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773075738981,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0456036,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.04360239999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0402874,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0618694,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.191732,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0454364,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.021696,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.026129600000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.05445560000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0265166,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.04768599999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.08878219999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.218216,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.05067699999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.498148,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.4765139999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.074s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.05258,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.153s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.498152,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.024218000000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0298732,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.061438,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0283996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0582268,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1399406,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.28848399999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.060665199999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.34194800000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.202508,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0403386,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0234904,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.05926555555555556,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08865720000000002,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.051024,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.016422,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01664372,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.2384,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.056102285714285716,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0218435,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.718818,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103331,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00380102,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773076388308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0441236,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.043404000000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0397086,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0630396,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1943326,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.049325400000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.022139600000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.025419399999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0554876,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.025604400000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.046059600000000006,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0852894,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.21528200000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0501358,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.490176,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.4472,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.072s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 2.9994599999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.150s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.49337,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.024398000000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0297684,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0607636,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0277034,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0576652,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.14060499999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.284414,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.058632,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.34834,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.20527,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0408286,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0237272,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.062004444444444445,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0885983,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0518516,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01651904,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.016946120000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.2704,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.057000571428571435,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0219385,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7178640000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103586,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.003367,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773076543965,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0450342,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0434292,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.04099,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.064299,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1971278,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.054973799999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.022238400000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.026700600000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.055385399999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0262132,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0485924,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.08876780000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.224284,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0524526,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.500702,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.476038,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.074s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.05416,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.153s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.500644,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0237064,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0299722,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.061208200000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0288348,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0592054,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.141344,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.286106,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.059837600000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.34762800000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.206218,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0411022,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.023555,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.060332222222222225,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0893327,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0523782,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01689356,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01726616,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.38196,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.05773628571428571,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0221062,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7184999999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103509,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00361569,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773076883201,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.045871999999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.044050599999999995,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0405082,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.06378160000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.19726339999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0467526,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.021994599999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0266846,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.05648,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0262798,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.047526599999999995,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0876402,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.218908,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0512054,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.493902,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.451592,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.073s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.0009999999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.150s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.4954,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.023675200000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0301512,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.061313599999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.029600400000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0589968,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.14113199999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.2851,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.0604666,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.35366,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.205382,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.040571399999999994,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0236036,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06411277777777778,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08988809999999998,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0544684,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.016789960000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.017034479999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.35582,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.06262057142857143,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0220419,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.718716,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103355,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00383474,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773077328984,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.045682600000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.04391,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.041009000000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0635854,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1960068,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.045461800000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.022462799999999995,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0258546,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0541246,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0282056,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.04729320000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.087331,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.21723599999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.051244399999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.4909800000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.45561,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.073s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 2.9981600000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.150s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.49349600000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0227782,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.030841599999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0606646,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0294178,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.059455400000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1421164,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.29239,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.015s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.060614,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.34956000000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.20688600000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0413422,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0236744,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06026611111111112,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0890908,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0522152,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.0166742,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0171254,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.35126,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.057834,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0220983,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7185339999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103378,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00374093,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773077652240,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.045684199999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.043170200000000006,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.04090039999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0647644,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1976656,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.045321600000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.0227264,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.027071,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.05764300000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.026871199999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0470744,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.08871459999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.22124000000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0510596,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.496832,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.467678,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.073s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.03938,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.152s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.49855400000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0264056,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0322646,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0616138,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.028796999999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.059627999999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1411942,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.28628,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.059446599999999995,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.34913399999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.20733999999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0398246,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0235832,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06063166666666667,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.088857,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0519642,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.0166964,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01714564,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.35158,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.05761828571428571,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0220401,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7187,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103388,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00367975,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773077820377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0459746,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0442456,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0413322,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0628448,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.20415,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.046560000000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.022746400000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.025038199999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.054931,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0270862,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0480128,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.088357,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.222562,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0494496,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.49806999999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.4796719999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.074s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.0581199999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.153s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.5010439999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0240452,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.030142799999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0611258,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0272756,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0588864,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1407102,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.28556000000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.060290800000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.348194,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.206542,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0402586,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0234324,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06055777777777777,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08945979999999999,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0523804,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.016877439999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01726944,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.38358,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.057217142857142855,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0221326,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.71876,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103482,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00372712,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773077865580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0457038,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0437398,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.042347,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0644516,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.20006000000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0542164,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.0220162,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.027040599999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0568658,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0284182,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.048806199999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.09062300000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.005s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.22470199999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0536506,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.495312,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.4676919999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.073s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.0403599999999993,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.152s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.5004320000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0261504,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0318628,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.06288840000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.030727599999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.05986520000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1422646,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.286594,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.06133999999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.34918400000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.204944,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0398758,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0234286,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06742388888888888,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08961590000000001,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0544148,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01684516,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0172104,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.370939999999999,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.06535657142857143,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.023s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0221522,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.718946,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103433,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00360696,
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088148564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.044685,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0440266,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0399952,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.063612,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1943866,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.045970399999999995,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.022955200000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.026093,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0547846,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0260782,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0468966,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0874272,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.21710000000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0510184,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.49165,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.4552380000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.073s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.00512,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.150s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.497552,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0259006,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0313118,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.061241000000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.029399799999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0592642,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1400704,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.288644,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.0613502,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.339794,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.204126,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0415704,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0236366,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.059111666666666667,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0894747,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.05154940000000001,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.016515279999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.016773,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.25432,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.05639228571428571,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0218735,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.718916,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103363,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00384565,
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088362635,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0452172,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0437892,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.038472799999999995,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0620728,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1917434,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0495854,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.022294799999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.025790999999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.05391520000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0260632,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.04723940000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0887468,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.217626,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0505234,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.49737000000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.484904,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.074s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.06484,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.153s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.500674,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0242464,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.030968,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0614042,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0283234,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0585948,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1406706,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.284538,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.060101199999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.34774,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.205308,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0401334,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0236628,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.059222222222222225,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08882709999999999,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.051789,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.0165766,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0168084,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.270919999999999,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.05685314285714285,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0220233,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7183660000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.010347,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00333523,
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088514730,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0449996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0432264,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.04046720000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0640226,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1935568,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.046646,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.02199,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0276444,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.055625600000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0268188,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.04640520000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0897,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.218644,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.052007199999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.49446200000000007,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.472028,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.074s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.05346,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.153s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.498898,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.024444599999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0327772,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.061870600000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.030028799999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.061229,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1421054,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.292396,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.015s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.06165699999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.340528,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.204372,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0403052,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.023608,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06047333333333333,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.087926,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0517648,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01646404,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01669032,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.24892,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.05885485714285715,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0218943,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7190259999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103593,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00378922,
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088935581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0455466,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0433298,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0386478,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0628742,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1939968,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0488542,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.0219558,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0260902,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.05470680000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0261514,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0466818,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.08691519999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.21734199999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.05196540000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.495086,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.467564,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.073s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.0394599999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.152s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.49662599999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.023616599999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0295974,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.060519800000000006,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.027847399999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0599092,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1415506,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.285634,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.06013260000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.34291599999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.203284,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.041608,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0233108,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.0593088888888889,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0882731,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0512088,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01649628,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01687832,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.26728,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.05653142857142857,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0218707,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7190199999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103495,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00335882,
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773090702138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.045301799999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0436792,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.040312799999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0633506,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.19521519999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.050415,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.023088599999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0265082,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0553428,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0268876,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.04597419999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0863998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.21526,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0495868,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.49035599999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.4478460000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.072s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.0033600000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.150s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.49300200000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0238552,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.030539800000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.06156960000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0288448,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.059076,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.14065519999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.284142,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.059745400000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.34604399999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.20483200000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0399016,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.023663,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06570055555555555,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08922319999999999,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0545402,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.016578879999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0170086,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.2427399999999995,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.061488285714285704,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0220768,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.719496,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.010357,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00349569,
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773091124605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0455308,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.04319339999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0395942,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0624804,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.190431,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0445038,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.0216848,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.025542799999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0543212,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.026204,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0475432,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.08823360000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.21955,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.04996300000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.49766600000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.485288,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.074s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.0665799999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.153s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.5029720000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.023566600000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0302774,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.061223400000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0275094,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.060221399999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1412256,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.290872,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.015s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.059753799999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.34747,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.205872,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0423898,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0234912,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.05947333333333333,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0875477,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0514584,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01659012,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01697012,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.27922,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.05668228571428571,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0219554,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.71895,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103474,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.0037068,
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773091499737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0456944,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.043849,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.041501,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.06390820000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.202072,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0455798,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.0241558,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.027140799999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0553284,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.027704399999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0465668,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.08893659999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.22151600000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.05202880000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.49768999999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.4774499999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.074s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.03528,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.152s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.49977199999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0264758,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.030944800000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.06319860000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.030822,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0597122,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1429068,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.29151,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.015s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.0604554,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.3541480000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.20572600000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0405546,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0235026,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06208388888888889,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08997160000000001,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0533212,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.016683760000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01703384,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.34626,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.060570285714285715,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0220815,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.719304,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103359,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00389031,
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773094781552,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0449936,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.042935999999999995,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.039997599999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0629608,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1962008,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.053285,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.022206800000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.027231199999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0551896,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0265832,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.047059,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0870788,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.21763399999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.048981,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.4967619999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.4733599999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.074s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.04112,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.152s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.496162,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0251322,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0304226,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.061465799999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0276318,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0603838,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1419206,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.286702,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.0598792,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.344044,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.201708,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0406444,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.023623,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06084388888888889,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08876729999999998,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0515572,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01651132,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01674784,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.2509,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.058022000000000004,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.021952,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7187399999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103508,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00380189,
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773094803483,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0456802,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.043167,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0415966,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.065305,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1958664,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0540152,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.023021000000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0264758,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.055414399999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.027391600000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0472334,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0891076,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.22413800000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.051857,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.49471599999999993,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.4760419999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.074s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.0309799999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.152s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.49896799999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.024151,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.030542600000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.06271840000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.030248,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0585922,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1421828,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.283922,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.060410200000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.35471400000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.20584000000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.040441,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0240066,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06040277777777778,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08909490000000002,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.052482,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01688896,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01721896,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.39886,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.057245428571428565,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0222837,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7187359999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103473,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.0036471099999999994,
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773095197698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.045000799999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0432986,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.040079000000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.061543,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1956246,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0455994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.0231976,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0267842,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.053567800000000006,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0260434,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.046982600000000006,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0870586,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.21680999999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0508554,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.49342400000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.462762,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.073s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.0303200000000006,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.152s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.498192,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0246062,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.031004800000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0604512,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0284658,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0594618,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1411648,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.285572,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.061249000000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.34704599999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.20528000000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0414782,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0235338,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06432222222222223,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08826509999999999,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0539318,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.016725280000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0170062,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.277880000000001,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.06178457142857143,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.021969800000000005,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7184,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103648,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00385169,
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
          "id": "d233db607a4e2112061cb9cc755d407580429813",
          "message": "Comment out mpi/rocm jobs",
          "timestamp": "2026-03-09T23:34:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/d233db607a4e2112061cb9cc755d407580429813"
        },
        "date": 1773100195116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0456802,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.043167,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0415966,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.065305,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1958664,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0540152,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.023021000000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0264758,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.055414399999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.027391600000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0472334,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0891076,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.22413800000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.051857,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.49471599999999993,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.4760419999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.074s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.0309799999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.152s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.49896799999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.024151,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.030542600000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.06271840000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.030248,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0585922,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1421828,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.283922,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.060410200000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.35471400000000003,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.018s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.20584000000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.040441,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0240066,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06040277777777778,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08909490000000002,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.052482,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01688896,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01721896,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.043s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.39886,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.057245428571428565,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0222837,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7187359999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103473,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.0036471099999999994,
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
          "id": "d233db607a4e2112061cb9cc755d407580429813",
          "message": "Comment out mpi/rocm jobs",
          "timestamp": "2026-03-09T23:34:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/d233db607a4e2112061cb9cc755d407580429813"
        },
        "date": 1773100196622,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0449996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0432264,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.04046720000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0640226,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1935568,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.046646,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.02199,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0276444,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.055625600000000004,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0268188,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.04640520000000001,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0897,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.218644,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.052007199999999996,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.49446200000000007,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.472028,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.074s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.05346,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.153s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.498898,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.024444599999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0327772,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.061870600000000005,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.030028799999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.061229,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1421054,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.292396,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.015s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.06165699999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.340528,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.204372,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0403052,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.023608,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06047333333333333,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.087926,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0517648,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01646404,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01669032,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.24892,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.05885485714285715,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0218943,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7190259999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103593,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00378922,
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
          "id": "d233db607a4e2112061cb9cc755d407580429813",
          "message": "Comment out mpi/rocm jobs",
          "timestamp": "2026-03-09T23:34:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/d233db607a4e2112061cb9cc755d407580429813"
        },
        "date": 1773100803601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0449936,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.042935999999999995,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.039997599999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0629608,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.1962008,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.053285,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.022206800000000002,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.027231199999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0551896,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0265832,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.047059,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0870788,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.004s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.21763399999999997,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.048981,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.4967619999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 1.4733599999999998,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.074s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 3.04112,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.152s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.496162,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0251322,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0304226,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.002s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.061465799999999994,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0276318,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.001s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0603838,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1419206,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.007s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.286702,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.014s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.0598792,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.003s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.344044,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.017s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.201708,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0406444,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.023623,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.06084388888888889,
            "unit": "ms/rep",
            "extra": "reps: 180, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.08876729999999998,
            "unit": "ms/rep",
            "extra": "reps: 100, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0515572,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.01651132,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.041s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.01674784,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.042s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 5.2509,
            "unit": "ms/rep",
            "extra": "reps: 5, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.058022000000000004,
            "unit": "ms/rep",
            "extra": "reps: 350, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.021952,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.7187399999999999,
            "unit": "ms/rep",
            "extra": "reps: 50, passes: 1, total_time: 0.036s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0103508,
            "unit": "ms/rep",
            "extra": "reps: 1000, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00380189,
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
        "date": 1773075737529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.650728,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.163s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.280554,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.070s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.020249120000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.051s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3244168,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.811s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.015176239999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.076s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37397,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.337s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.3439,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.172s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.09251559999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.231s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.02583792,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.323s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03936648,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.492s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.469159999999999,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.337s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09423200000000001,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.165s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0438686,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.219s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 56.7488,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 14.187s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0889496,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0472388,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.111232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.028s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1868252,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.047s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1575216,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.039s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.086766,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03874228,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0870148,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1852672,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 10.79496,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.699s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 7.24364,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.811s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.432576,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.081s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.4322639999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.081s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264212,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.321s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.16918888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.552s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.74086,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.370s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.645372,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.113s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.3092216,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 3.865s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.35333039999999993,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.417s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 210.1512,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.254s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.6484514285714285,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 2.885s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5334220000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.667s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.056684,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.116924,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.529s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.601176,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.150s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.31586,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.329s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.72918,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.137036,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.071708,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.3156044,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.079s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.447708,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.612s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.705164,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773076383720,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.647212,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.162s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.2641496,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.066s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.02049128,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.051s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.324694,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.812s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.01522186,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.076s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3738711111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.343812,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.172s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0929988,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.232s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.026112320000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.326s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0397928,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.497s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.44388,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09084400000000001,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.159s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.044170999999999995,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.221s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 59.7184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 14.930s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0834424,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0424132,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1057,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1809616,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1520612,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0805364,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03210584,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0795692,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1792528,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.43304,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.108s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 6.46264,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.616s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.4581,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.145s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.455872,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.140s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264646,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.249733333333333,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.625s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.82468,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.412s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.722552,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.306s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.3093248,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 3.867s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3531296,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.414s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 202.8184,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.070s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.71444,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.000s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5326240000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.663s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.055536,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.112896,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.528s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.569652,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.142s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.201704,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.300s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.663304,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.666s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.144328,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.071152,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2864224,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.072s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.44588,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.611s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.651924,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.663s"
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
        "date": 1773076541525,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.655984,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.164s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.2654848,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.066s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0199652,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.050s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3241908,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.810s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.01518142,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.076s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3708355555555556,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.334s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.343784,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.172s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.09337039999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.233s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.025928399999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.324s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0393284,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.492s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.426480000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09286000000000001,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.163s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043982,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.220s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 48.0632,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 12.016s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0840676,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0458532,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1092572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.027s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1820264,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1531068,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.08018040000000001,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03173516,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.079424,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1790124,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.37836,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.095s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 6.374,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.593s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.459388,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.148s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45963999999999994,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26461599999999996,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.223011111111111,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.601s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.8125,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.406s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.705264,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.263s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.3087992,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 3.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.35267760000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.408s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 202.7936,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.070s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.7179314285714287,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.006s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.53303,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.665s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.055524,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.112784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.528s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.569812,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.142s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.202268,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.301s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.66924,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.667s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.1442160000000006,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.071108,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2865956,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.072s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.445988,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.611s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.650492,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.663s"
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
        "date": 1773076881890,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.66178,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.165s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.2861696,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.072s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0247198,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.062s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3285556,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.821s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.019616059999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.098s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3764888888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.339s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.35515,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.178s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0985016,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.246s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.03081384,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.385s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.04429400000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.554s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.44388,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09471885714285713,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.166s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0439342,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.220s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 51.5044,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 12.876s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0831544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0412768,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1029884,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1813364,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.15126,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0800772,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03199716,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0803004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1792988,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 10.9018,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.725s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 7.22788,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.807s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.45708000000000004,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.143s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45682400000000006,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.142s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26499799999999996,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.325s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.4238,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.781s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.98032,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.490s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.12838,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 5.321s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.30934,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 3.867s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3534464,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.418s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 208.62279999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.216s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.7004971428571427,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 2.976s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5329119999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.665s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.055516,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.11278,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.528s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.571168,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.143s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.19848,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.300s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.66078,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.665s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.143844,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.0711,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.28751,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.072s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.445356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.611s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.653168,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.663s"
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
        "date": 1773077324067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.655712,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.164s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.2787228,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.070s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.02011852,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.050s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32413280000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.810s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.015009880000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.075s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37262666666666666,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.335s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.343036,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.172s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.090254,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.226s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0260356,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.325s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03940024,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.493s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.43192,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09065542857142858,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.159s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0439704,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.220s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 59.3576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 14.839s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0893956,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.049572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.012s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1135,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.028s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.18735,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.047s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1583796,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.040s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0847332,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0371562,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.08452240000000001,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1840404,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 10.88832,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.722s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 7.2498,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.812s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.46345200000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.159s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.460908,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.152s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264632,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.2506,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.626s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.83264,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.416s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.7201519999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.300s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.3093384,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 3.867s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.35362879999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.420s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 209.1968,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.230s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.73424,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.035s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.533862,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.669s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.05784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.114352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.529s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.59686,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.306088,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.327s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.727584,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.682s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.1402759999999996,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.069924,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.3100104,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.078s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.431924,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.608s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.70404,
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
          "id": "326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be",
          "message": "Improve performance workflow dispatch by making sure the performance results are associated with correct commit sha",
          "timestamp": "2026-03-05T23:59:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/326e8d2b5c2e21ff6a2c93e63bafe7112ccf40be"
        },
        "date": 1773077650447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.651072,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.163s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.2791492,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.070s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.021570600000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.054s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3244744,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.811s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.015303200000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.077s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37523222222222224,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.338s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.343278,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.172s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0948316,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.237s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.026248559999999997,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.328s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03951536,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.494s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.50616,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.338s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.093316,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.163s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0440118,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.220s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 61.3476,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 15.337s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0833848,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0417768,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1050448,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.180688,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1512624,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0802796,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03172188,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0802764,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1789816,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.46272,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.116s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 6.40284,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.601s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.456392,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.141s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.456196,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.140s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264904,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.325s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.226388888888889,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.604s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.77924,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.390s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.719956,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.300s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.30883279999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 3.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.352808,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.410s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 203.0152,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.075s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.718422857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.007s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.53275,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.664s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.055544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.264s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.112928,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.528s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.565784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.141s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.199292,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.300s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.6666,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.667s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.1434279999999997,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.071156,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.2848688,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.071s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.445836,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.611s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.651988,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.663s"
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
        "date": 1773077820286,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.657336,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.164s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.27202,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.068s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.02493124,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.062s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.3287684,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.822s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020115,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.101s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3727844444444445,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.34356,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.172s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.09150319999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.229s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0263736,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.330s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03962792,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.495s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.414360000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.335s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09094742857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.159s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.044183,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.221s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 57.4864,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 14.372s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0837492,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0415588,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.010s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1048692,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1810692,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1517328,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.038s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.080012,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0318728,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.008s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0799524,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.020s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1790792,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.045s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 10.81228,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.703s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 7.2006,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.800s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.4778240000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.195s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.47702,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.193s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264524,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.277577777777777,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.650s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.83486,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.417s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.7198239999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.300s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.3088088,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 3.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.35274720000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.409s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 202.77880000000002,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.069s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.7180742857142859,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.007s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532752,
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
            "value": 2.112848,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.528s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.5713959999999999,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.143s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.201216,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.300s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.669316,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.667s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.144136,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.536s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.071132,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.286338,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.072s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.446716,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.612s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.654484,
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
        "date": 1773077862311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.648848,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.162s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.2673712,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.067s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.02007768,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.050s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32854,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.821s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.015124619999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.076s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.38822666666666666,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.349s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.342938,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.171s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0906396,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.227s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.02582112,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.323s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0400072,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.500s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 13.52096,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 0.338s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09294171428571428,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.163s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043686,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.218s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 63.6508,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 15.913s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0874796,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.022s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0451292,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.011s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1053868,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.026s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1852356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.046s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1563572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.039s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0852764,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.03724492,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.009s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.085002,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.021s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.2204064,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.4394,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.110s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 6.41212,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.603s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.45803999999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.145s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.4577,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.144s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26651199999999997,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 1.333s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.2245,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 5.602s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.83562,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 2.418s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.723968,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.310s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.31308240000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 3.914s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.357012,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 4.463s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 212.91119999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.7260514285714283,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 3.021s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.537534,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 2.688s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.104556,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.276s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.16136,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.540s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.594428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.313048,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.328s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.768584,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.138616,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.535s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.073204,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.268s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.3046728,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.076s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.438608,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.610s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.702392,
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088147026,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 2.74524,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.686s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.764532,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.441s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.07767239999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.194s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.691836,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.730s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.081483,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.407s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.4425822222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.398s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.510504,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.255s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1820148,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.455s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.06033824000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.754s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.081372,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 48.5052,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.213s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.1878022857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.329s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.07186519999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.359s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 446.94,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 111.735s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.306464,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.077s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.3266984,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.082s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.681432,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.170s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.4921,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.123s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.3533592,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.088s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.2143192,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.054s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.1919588,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.048s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.230072,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.058s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3394756,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.085s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 44.098,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 11.024s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 38.94412,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.736s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 4.09828,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.246s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 4.09356,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.234s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.321252,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.606s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 31.805,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 28.625s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 27.7422,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.871s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.48192,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 28.705s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.981416,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.268s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 3.03532,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.941s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3101.1,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 77.528s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 11.835485714285713,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 20.712s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.4556,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 17.278s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.277,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 10.56416,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.641s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 2.938204,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.735s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.6058,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.651s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.34328,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.336s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.70576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.676s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.35424,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.419604,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.355s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 12.21224,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.26956,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.317s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088362148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.078568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.770s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.882576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.471s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.055902,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.140s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.67342,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.684s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.05127199999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.256s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.44225777777777775,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.398s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.504744,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.252s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.18122760000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.453s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.05974488,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.747s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0799652,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.000s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 46.7976,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.170s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.1855034285714286,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.325s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.10747420000000002,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.537s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 436.284,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 109.071s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.3302912,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.083s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.3285808,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.082s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.657036,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.164s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.508596,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.127s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.3736652,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.093s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.255142,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.064s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.221256,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.055s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.2567816,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.064s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3695384,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.092s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 51.7744,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 12.944s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 39.05864,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.765s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 4.09424,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.236s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 4.09448,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.236s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.322754,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.614s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 31.721666666666668,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 28.549s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 28.1774,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 14.089s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.01168,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 27.529s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 3.048112,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 38.101s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 3.0132,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.665s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3065.136,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 76.628s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 11.329714285714285,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 19.827s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.5170200000000005,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 17.585s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.28348,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.321s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 10.589,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.647s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 3.039972,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.760s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 8.156,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.039s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.65532,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.414s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 11.77884,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.945s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.35172,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.338s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.592916,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.398s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 13.15528,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.289s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.52332,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.381s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088513239,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 2.977676,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.744s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.7984,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.450s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0506904,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.127s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.6690839999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.673s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.054933,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.275s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.4403933333333333,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.396s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.502064,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.251s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1814104,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.454s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.10452159999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.307s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.05964448000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.746s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 46.4028,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.160s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.18805657142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.329s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0876604,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.438s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 414.172,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 103.543s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.409572,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.102s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.453888,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.113s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.801376,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.200s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.56408,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.141s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.406188,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.102s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.2502784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.063s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.2181336,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.055s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.2500808,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.063s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3398852,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.085s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 47.6536,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 11.913s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 39.37832,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.845s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.984284,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.961s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9748040000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.937s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.32217,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.611s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 31.51822222222222,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 28.366s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 27.7966,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.898s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 10.88828,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 27.221s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 3.08936,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 38.617s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 3.07412,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 38.426s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3091.5559999999996,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 77.289s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 11.697542857142858,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 20.471s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.5307,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 17.654s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.28476,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.321s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 10.58504,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.646s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 3.04662,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.762s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 8.03856,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.010s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.5898,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.397s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.7476,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.687s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.364,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.341s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.585928,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.396s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 13.14984,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.287s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.44696,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.362s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773088936976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 2.918196,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.730s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.91828,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.480s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0717476,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.179s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.686248,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.716s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0795444,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.398s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.44274888888888886,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.398s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.506064,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.253s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1818404,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.455s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.060353040000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.754s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.08390159999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.049s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 79.9184,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.998s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.18819942857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.329s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.1086672,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.543s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 445.576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 111.394s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.3391796,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.085s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.3545896,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.089s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.661492,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.165s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.500092,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.125s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.3595568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.090s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.2650536,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.066s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.2347384,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.059s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.250204,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.063s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3432712,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.086s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 54.4752,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 13.619s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 39.522,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.880s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 4.05208,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.130s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 4.052879999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.132s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.323584,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.618s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 31.622444444444444,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 28.460s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 27.8028,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.901s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 10.89,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 27.225s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.7148160000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 33.935s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.7881679999999998,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 34.852s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3040.572,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 76.014s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 11.228457142857142,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 19.650s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.3875,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 16.938s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.27776,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 10.56396,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.641s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 2.969472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.742s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.81912,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.705s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.84056,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.460s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.710719999999998,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.678s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.37348,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.343s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.616628,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.404s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 12.2154,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.054s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.28544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.321s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773090700105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.008904,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.752s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.939656,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.485s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0743524,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.186s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.7035359999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.759s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0571434,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.286s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.44132333333333335,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.397s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.505038,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.253s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1836196,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.459s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0852392,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.065s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.056840640000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.711s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 44.4264,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.111s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.19005885714285714,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.333s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.089535,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.448s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 416.48,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 104.120s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.3936084,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.098s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.442388,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.111s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.784256,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.196s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.553932,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.138s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.405992,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.101s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.2592612,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.065s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.2329456,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.058s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.248344,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.062s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3711312,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.093s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 54.3244,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 13.581s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 38.8472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.712s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 4.01688,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.042s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 4.00212,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.005s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.3232979999999999,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.616s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 31.548111111111112,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 28.393s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 27.7338,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.867s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 10.86056,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 27.151s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 3.165424,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 39.568s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 3.1760479999999998,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 39.701s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3040.18,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 76.004s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 11.250742857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 19.689s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.46268,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 17.313s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.27732,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 10.59112,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.648s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 2.982084,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.746s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.723080000000001,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.681s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.60732,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.402s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.77508,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.694s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.36684,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.342s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.580116,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.395s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 12.27112,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.068s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.5324,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.383s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773091125932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.279756,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.820s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.936176,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.484s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0756092,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.189s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.699824,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.750s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0837918,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.419s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.44694333333333336,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.402s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.509602,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.255s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1823036,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.456s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.06074568,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.759s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.08506,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.063s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 91.2044,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 2.280s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.18776400000000001,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.329s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.10893,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.545s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 420.068,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 105.017s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.3116468,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.078s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.3242308,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.081s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.70902,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.177s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.497956,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.124s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.3581052,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.090s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.2547912,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.064s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.2261848,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.057s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.267586,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.067s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3520984,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.088s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 54.8072,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 13.702s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 39.38304,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.846s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 4.05964,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.149s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 4.0554,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.139s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.322686,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.613s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 31.94066666666667,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 28.747s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 27.9722,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.986s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.01468,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 27.537s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.9303680000000005,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 36.630s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.997368,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.467s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3082.688,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 77.067s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 11.368,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 19.894s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.4935200000000006,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 17.468s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.2924,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.323s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 10.58252,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.646s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 2.874356,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.719s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.6898,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.672s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.634,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.409s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.75612,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.689s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.35508,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.48538,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.371s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 12.2698,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.067s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.48544,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.371s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773091500380,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.28772,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.822s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 2.016472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.504s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0567684,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.142s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.684516,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.711s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0543994,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.272s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.4473833333333333,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.403s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.503614,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.252s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1822304,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.456s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0636104,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.795s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.1025168,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.281s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 79.9332,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.998s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.18894000000000002,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.331s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0986968,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.493s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 428.004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 107.001s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.309258,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.077s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.3198748,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.080s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.672184,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.168s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.496528,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.124s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.363512,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.091s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.2741976,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.069s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.2520932,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.063s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.2902028,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.073s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3728588,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.093s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 43.958,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 10.989s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 39.27036,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.818s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.9356119999999994,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.839s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.92308,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.808s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.321834,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.609s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 31.779555555555557,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 28.602s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 27.6826,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.841s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.255360000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 28.138s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.8194879999999998,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 35.244s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.943992,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 36.800s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3048.0679999999998,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 76.202s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 11.685371428571429,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 20.449s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.4120600000000008,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 17.060s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.27664,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 10.5684,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.642s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 2.8426280000000004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.711s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.49936,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.625s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.36232,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.341s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.71664,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.679s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.35456,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.47912,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.370s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 12.21288,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.3004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.325s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773094780266,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.291844,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.823s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.872392,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.468s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.05137479999999999,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.128s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.665608,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.664s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.05138620000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.257s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.44695888888888885,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.402s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.50403,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.252s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.18372560000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.459s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.06082455999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.760s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.08222159999999999,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.028s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 45.958800000000004,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.149s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.18938742857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.331s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.07316120000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.366s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 443.644,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 110.911s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.3160464,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.079s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.3245956,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.081s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.723336,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.181s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.499892,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.125s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.364336,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.091s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.2228264,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.056s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.2006072,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.050s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.2349292,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.059s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.340988,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.085s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 48.9152,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 12.229s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 38.36152,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.590s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 4.0621599999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.155s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 4.05492,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.137s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.324622,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.623s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 31.528444444444442,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 28.376s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 27.828,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.914s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.334040000000002,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 28.335s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.8656479999999998,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 35.821s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.8961759999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 36.202s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3069.4959999999996,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 76.737s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 11.776285714285715,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 20.608s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.48346,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 17.417s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.27452,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.319s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 10.5646,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.641s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 2.836056,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.709s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.71672,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.679s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.5688,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.392s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.70756,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.677s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.34556,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.336s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.488484,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.372s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 12.21672,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.054s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.19188,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.298s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773094801674,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.22278,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.806s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.88844,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.472s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0513532,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.128s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.454852,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.137s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0413456,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.207s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.4420033333333333,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.398s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.472274,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.236s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1828784,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.457s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.050935600000000004,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.637s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.060402,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.755s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 45.3584,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.134s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.1898902857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.332s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0732496,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.366s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 431.096,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 107.774s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.305748,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.076s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.3189748,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.080s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.657,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.164s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.489568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.122s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.3558344,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.089s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.2373844,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.059s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.217444,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.054s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.2580784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.065s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.344088,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.086s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 44.2164,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 11.054s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 39.15152,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.788s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.9485280000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.871s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9533160000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.883s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.321918,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.610s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 31.551777777777776,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 28.397s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 27.785,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.893s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 10.88364,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 27.209s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.69776,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 33.722s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.774848,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 34.686s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3043.512,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 76.088s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 11.45222857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 20.041s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.484,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 17.420s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.2846,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.321s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 10.56472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.641s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 2.836024,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.709s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.75032,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.688s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.5506,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.388s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.70576,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.676s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.35784,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.480064,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.370s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 12.21112,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.053s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.52332,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.381s"
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
          "id": "9b0be940ffa453f9ccafa6568a5ee681311536b0",
          "message": "Add sizefact 5 to openmp",
          "timestamp": "2026-03-09T19:00:11Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/9b0be940ffa453f9ccafa6568a5ee681311536b0"
        },
        "date": 1773095195532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 3.120004,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.780s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 1.9506,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.488s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.051605599999999995,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.129s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.670804,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.677s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.050783999999999996,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.254s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.47715,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 0.429s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.50659,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.253s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.1853028,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.463s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0625312,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 0.782s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.08679680000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.085s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 68.28,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 1.707s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.19174342857142856,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 0.336s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.11002,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.550s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 396.7024,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 99.176s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.2836716,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.071s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.2982652,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.075s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.576812,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.144s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.495976,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.124s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.344516,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.086s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.2359668,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.059s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.2147936,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.054s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.2539688,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.063s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.3432984,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.086s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 43.972,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 10.993s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 39.14728,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.787s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 4.03564,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.089s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 4.0429200000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 10.107s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.330112,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.651s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 31.798444444444446,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 28.619s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 28.0364,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 14.018s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 11.01016,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 27.525s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 3.003776,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.547s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 3.0451520000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 38.064s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3062.34,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 76.558s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 11.353828571428572,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 19.869s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.4713799999999995,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 17.357s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.323,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.331s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 10.64652,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.662s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 2.868556,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.717s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.60236,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.651s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.4578,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.364s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.79928,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.700s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.39876,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.350s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.437408,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.359s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 12.29916,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.075s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.61692,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.404s"
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
          "id": "d233db607a4e2112061cb9cc755d407580429813",
          "message": "Comment out mpi/rocm jobs",
          "timestamp": "2026-03-09T23:34:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/d233db607a4e2112061cb9cc755d407580429813"
        },
        "date": 1773100193353,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 5.2182,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.305s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 3.633416,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.908s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.148732,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.372s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 1.6059360000000003,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.015s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.049286,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.246s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 1.9696666666666667,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 1.773s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 1.706066,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.853s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.726672,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.817s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.10390800000000001,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.299s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.1726888,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 2.159s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 198.2572,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 4.956s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.72724,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 1.273s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.1955108,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.978s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 279.352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 69.838s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.3552352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.089s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.112756,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.028s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.3840444,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.096s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.846964,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.212s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.689764,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.172s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.3519724,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.088s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.1015096,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.025s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.3507676,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.088s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.854152,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.214s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 43.6816,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 10.920s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 38.70512,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.676s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.9232799999999997,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.808s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9208840000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.802s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.3233119999999998,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.617s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 31.532555555555554,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 28.379s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 27.7266,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.863s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 10.886560000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 27.216s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.90856,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 36.357s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.999152,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 37.489s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3042.292,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 76.057s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 11.265142857142857,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 19.714s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.4112,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 17.056s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.27972,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.320s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 10.56428,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.641s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 2.853764,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.713s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.76684,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.31868,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.330s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.8098,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.702s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.3558,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.495792,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.374s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 12.24148,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.060s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.2494,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.312s"
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
          "id": "d233db607a4e2112061cb9cc755d407580429813",
          "message": "Comment out mpi/rocm jobs",
          "timestamp": "2026-03-09T23:34:56Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/d233db607a4e2112061cb9cc755d407580429813"
        },
        "date": 1773100197881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 4.37816,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.095s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 3.642744,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.911s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.1550296,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 0.388s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 1.6056840000000001,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 4.014s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.048196800000000005,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.241s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 1.9680555555555554,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 1.771s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 1.706828,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 0.853s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.746096,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 1.865s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.1032016,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 1.290s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.17181280000000002,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 2.148s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 200.2856,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 5.007s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.7472171428571429,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 1.308s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.19501280000000001,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 0.975s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 295.8668,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 73.967s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.3557352,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.089s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.1299764,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.032s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.3853456,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.096s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.847432,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.212s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.690732,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.173s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.351318,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.088s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.1127392,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.028s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.3499324,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.087s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.855512,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.214s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 43.6472,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 10.912s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 39.06836,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 9.767s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.933696,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.834s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.9315240000000005,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 9.829s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 1.321548,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 6.608s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 31.538666666666664,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 1, total_time: 28.385s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 27.6414,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 1, total_time: 13.821s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 10.8692,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 1, total_time: 27.173s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 2.7040960000000003,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 33.801s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 2.76812,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 1, total_time: 34.602s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 3039.8759999999997,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 1, total_time: 75.997s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 11.22697142857143,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 1, total_time: 19.647s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 3.3678800000000004,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 1, total_time: 16.839s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 5.27968,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.320s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 10.56568,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.641s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 2.829364,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.707s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 6.74416,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.686s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 13.3124,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.328s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 10.81164,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 2.703s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 5.355359999999999,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 1.339s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 1.44934,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 0.362s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 12.25416,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.064s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 13.2476,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 1, total_time: 3.312s"
          }
        ]
      }
    ]
  }
}