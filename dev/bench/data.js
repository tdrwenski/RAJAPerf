window.BENCHMARK_DATA = {
  "lastUpdate": 1773077819206,
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
      }
    ]
  }
}