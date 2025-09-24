window.BENCHMARK_DATA = {
  "lastUpdate": 1758747041363,
  "repoUrl": "https://github.com/tdrwenski/RAJAPerf",
  "entries": {
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
          "id": "5f5a0243ef2c9a11be2f08fead8275b36f79b4ca",
          "message": "Revert \"WIP turn on comment on alert\"\n\nThis reverts commit 5dcb476f7f07a2f298255a2aeadafbbd591f9f53.",
          "timestamp": "2025-09-24T16:31:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5f5a0243ef2c9a11be2f08fead8275b36f79b4ca"
        },
        "date": 1758731907317,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.603234,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.259296,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01678054,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33651,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020039,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37752833333333335,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.263417,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11251199999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.044196400000000004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03419824,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.323580000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11125542857142857,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0980602,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 56.1106,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0798108,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0447854,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1277504,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1790808,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.148311,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.07308020000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0381594,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.08972440000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1742744,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.6859,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.99176,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.46755599999999997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.468592,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264481,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.798,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.367,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.0163,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.473104,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34299799999999997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 174.1398,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0212114285714287,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.570959,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.066596,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.066746,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.220956,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.206828,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.67414,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14336,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066352,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.22061,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.0607719999999998,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.679,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "5f5a0243ef2c9a11be2f08fead8275b36f79b4ca",
          "message": "Revert \"WIP turn on comment on alert\"\n\nThis reverts commit 5dcb476f7f07a2f298255a2aeadafbbd591f9f53.",
          "timestamp": "2025-09-24T16:31:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5f5a0243ef2c9a11be2f08fead8275b36f79b4ca"
        },
        "date": 1758732201071,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.60268,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.257928,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.016928480000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.336796,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020178799999999997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3769211111111111,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.26553,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11129579999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.04448959999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.03418584,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.31614,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11202714285714287,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0980138,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 58.594,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.080414,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0461874,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.128902,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1798256,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.148925,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0735126,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0322034,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0897716,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1755016,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.67948,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 6.01598,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.45894799999999997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.459466,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264625,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.791111111111111,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.38013,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.01722,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.473232,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34312159999999997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.94979999999998,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0163085714285716,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571013,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.067182,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067366,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.253862,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.462886,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.67102,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14406,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066848,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.22045,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.06284,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.68044,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "5dcb476f7f07a2f298255a2aeadafbbd591f9f53",
          "message": "WIP turn on comment on alert",
          "timestamp": "2025-09-24T16:19:22Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5dcb476f7f07a2f298255a2aeadafbbd591f9f53"
        },
        "date": 1758733057927,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.598562,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.258648,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01673146,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.336542,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0201275,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3779261111111111,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.264624,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11231379999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0443464,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.034058359999999996,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.31652,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11216799999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0980068,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 56.0666,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0800332,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0453228,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1281772,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1796572,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.148222,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0732258,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0334274,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0895238,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1748018,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.6761,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.9994,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.4603919999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.460722,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264675,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.814722222222223,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.34786,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.01394,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47325200000000006,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34299120000000005,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 174.1582,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.012017142857143,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571016,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.066808,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067166,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.221074,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.473972,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.6753,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.145,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066942,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.220346,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.062416,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.68748,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "45f532f9bcd7ffdfc82863a34fc6a94275ae8cee",
          "message": "Turn on comment on alert",
          "timestamp": "2025-09-24T16:19:22Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/45f532f9bcd7ffdfc82863a34fc6a94275ae8cee"
        },
        "date": 1758734114225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.599352,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.259072,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01691432,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33646600000000004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.020179,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3781566666666667,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.263166,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.11213959999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.044432,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.034200799999999996,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.31778,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11262457142857142,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0983795,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 56.3118,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0799402,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0449372,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.126684,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1795416,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1482638,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0736016,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0323548,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0902342,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1753702,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.66498,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.91188,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.45696000000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45691800000000005,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26459,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.792055555555555,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.34631,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.0052800000000004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47303199999999995,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34295479999999995,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 174.2266,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.0118685714285713,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.570974,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.066942,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.067004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.220496,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.203096,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.67218,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14322,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.06682,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.220044,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.063568,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.68102,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "6ad67db54a300a89e9eaf97339dbe46648f1c9ed",
          "message": "WIP testing",
          "timestamp": "2025-09-24T17:19:34Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ad67db54a300a89e9eaf97339dbe46648f1c9ed"
        },
        "date": 1758747038675,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.601554,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.255048,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0168739,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.33652000000000004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0201996,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.37714444444444445,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.261568,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.113251,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0444952,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0342222,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 10.32284,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.11123914285714286,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0979881,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 54.1936,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0798576,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0440554,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1245598,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1793896,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1480628,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0730136,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0308636,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.08999340000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1744108,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.66664,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.91234,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.45903999999999995,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45828,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264596,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.775888888888889,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.38431,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 2.00792,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.473292,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34306600000000004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 174.03040000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 2.006542857142857,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.570958,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.067138,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.06718,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.2202,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.207744,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.67188,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14272,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066606,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.219758,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.06221,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.67994,
            "unit": "ms/rep"
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
          "id": "5f5a0243ef2c9a11be2f08fead8275b36f79b4ca",
          "message": "Revert \"WIP turn on comment on alert\"\n\nThis reverts commit 5dcb476f7f07a2f298255a2aeadafbbd591f9f53.",
          "timestamp": "2025-09-24T16:31:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5f5a0243ef2c9a11be2f08fead8275b36f79b4ca"
        },
        "date": 1758731908054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.025476000000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.01665354,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0254162,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.020364200000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0751872,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0286862,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.012161900000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.015180720000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0294028,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.0124861,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.01805176,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0293802,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0600552,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.01767134,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.1075198,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.299046,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.608348,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.1076622,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0142835,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.020339400000000004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.035796999999999995,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.014864120000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.052155200000000006,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.13003679999999998,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.25997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.05235700000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.0711964,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.047689,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00893768,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00622396,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.016415777777777776,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0363313,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0119786,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00504324,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00510224,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.568394,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.013537742857142855,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00682704,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.15163340000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00334344,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00187957,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "5f5a0243ef2c9a11be2f08fead8275b36f79b4ca",
          "message": "Revert \"WIP turn on comment on alert\"\n\nThis reverts commit 5dcb476f7f07a2f298255a2aeadafbbd591f9f53.",
          "timestamp": "2025-09-24T16:31:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5f5a0243ef2c9a11be2f08fead8275b36f79b4ca"
        },
        "date": 1758732201686,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.026965600000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.01627756,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.026096600000000005,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.020310200000000004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.07594680000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.032094399999999995,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.012476720000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.015106960000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.029479200000000004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.01282092,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.017057160000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.029293399999999997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.058615200000000006,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.01752618,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.107128,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.296134,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.605724,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.1074896,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.01392274,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.020176399999999997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.035382399999999994,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.01522456,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.051633399999999996,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1316318,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.259028,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.052157,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.081082,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.0527076,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00911376,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00652108,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.017520666666666667,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.035788600000000004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01226834,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.0050904800000000005,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00512156,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.6055119999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.013680857142857142,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00677517,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.151411,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00340224,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00187092,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "5dcb476f7f07a2f298255a2aeadafbbd591f9f53",
          "message": "WIP turn on comment on alert",
          "timestamp": "2025-09-24T16:19:22Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5dcb476f7f07a2f298255a2aeadafbbd591f9f53"
        },
        "date": 1758733060356,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0251376,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.016482319999999998,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.025418200000000005,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.020153800000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0740378,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0372518,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.011903899999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.01495192,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.028920999999999995,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.012683499999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.01694354,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.028447199999999995,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0584802,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.01736014,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.1073606,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.296852,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.599344,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.10804019999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.01401492,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.01969516,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0352326,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.014908320000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0515668,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1319686,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.260582,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.05188380000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.0704222,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.04735160000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00913736,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00623834,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.016388833333333335,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0356714,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0119242,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.005190360000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00524352,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.566486,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.013214485714285714,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00671572,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1514174,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00335067,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00186863,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "45f532f9bcd7ffdfc82863a34fc6a94275ae8cee",
          "message": "Turn on comment on alert",
          "timestamp": "2025-09-24T16:19:22Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/45f532f9bcd7ffdfc82863a34fc6a94275ae8cee"
        },
        "date": 1758734113608,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0250908,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.01613674,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0253684,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.020076400000000005,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.07637719999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0282422,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.0119855,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.014837120000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.029492400000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.012706299999999998,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.017322760000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0293178,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0600212,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.01747176,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.10791459999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.30009,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.605904,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.10869279999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.014451539999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0203226,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.035852,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.014940520000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0526046,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1321772,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.26131,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.0521156,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.07150859999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.0477812,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00899446,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0062305,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.016445777777777778,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0359349,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01183282,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00518012,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0052200400000000004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.572208,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.013269628571428573,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00682424,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.1516676,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00335043,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00186154,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "6ad67db54a300a89e9eaf97339dbe46648f1c9ed",
          "message": "WIP testing",
          "timestamp": "2025-09-24T17:19:34Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ad67db54a300a89e9eaf97339dbe46648f1c9ed"
        },
        "date": 1758747040385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.029020800000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.01928096,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.033551599999999994,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0233036,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0802828,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0350916,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.01735094,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.01762156,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0328542,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.01931216,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.022390000000000004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0327996,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.06280799999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.022452399999999997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.1098762,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.296818,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.6026279999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.11120179999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.01903694,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.023498,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.038801999999999996,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.019671559999999998,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0551896,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.1324986,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.26246200000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.0561634,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.072476,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.049647199999999996,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00917244,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00641648,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.017351500000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0402425,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.01198922,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.0050918,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00526704,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.6336320000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.013441942857142857,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00705406,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.15354520000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00340768,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.0020084,
            "unit": "ms/rep"
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
          "id": "5f5a0243ef2c9a11be2f08fead8275b36f79b4ca",
          "message": "Revert \"WIP turn on comment on alert\"\n\nThis reverts commit 5dcb476f7f07a2f298255a2aeadafbbd591f9f53.",
          "timestamp": "2025-09-24T16:31:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5f5a0243ef2c9a11be2f08fead8275b36f79b4ca"
        },
        "date": 1758731908829,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.635508,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.26047,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01986206,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32257199999999997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0225413,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.36461055555555555,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.339072,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0907076,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0263836,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.02590684,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 14.105239999999998,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09352657142857143,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0430576,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 62.6522,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0861226,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.044682,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.105729,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1814534,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.150759,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0854512,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.034635,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0810732,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1798328,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.49062,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 6.01688,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.4602299999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.45997199999999994,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26474200000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.392555555555556,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.81519,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.7226559999999997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.522468,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.501648,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 214.246,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.7343457142857144,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.533242,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.05854,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.11846,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.583436,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.281064,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.72752,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14532,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.068422,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.304404,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.44322,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.69524,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "5f5a0243ef2c9a11be2f08fead8275b36f79b4ca",
          "message": "Revert \"WIP turn on comment on alert\"\n\nThis reverts commit 5dcb476f7f07a2f298255a2aeadafbbd591f9f53.",
          "timestamp": "2025-09-24T16:31:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5f5a0243ef2c9a11be2f08fead8275b36f79b4ca"
        },
        "date": 1758732201495,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.6366240000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.260384,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.01999078,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32266,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0229417,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3645588888888888,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.339165,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0892538,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.02659668,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.025915680000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 14.10778,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09103314285714285,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0429973,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 60.4582,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0855932,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0442624,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.107176,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1836244,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1531794,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0835722,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0330534,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.082397,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1821954,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.47602,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.97958,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.45392400000000005,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.454608,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264602,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.394,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.81619,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.725654,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.52438,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.523336,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 213.558,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.731802857142857,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532623,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.05846,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.11724,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.582378,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.512574,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.73008,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14468,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.068574,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.303678,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.43564,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.69422,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "5dcb476f7f07a2f298255a2aeadafbbd591f9f53",
          "message": "WIP turn on comment on alert",
          "timestamp": "2025-09-24T16:19:22Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5dcb476f7f07a2f298255a2aeadafbbd591f9f53"
        },
        "date": 1758733061426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.633138,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.257258,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0202898,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.323086,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0229414,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3647844444444444,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.339962,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.09088819999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.02701636,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.026331359999999998,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 14.10942,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09058285714285713,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043399900000000005,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 61.7418,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0861614,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0446868,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.108185,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1847388,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1537042,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0846332,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0347264,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0834062,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1820498,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.460779999999998,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 6.00232,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.4654620000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.465142,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264625,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.400388888888888,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.82341,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.7237739999999997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.510952,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.5129520000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 213.09400000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.7391342857142857,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5328940000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.058416,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.11818,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.584162,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.281336,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.72926,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14112,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.069064,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.303944,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.43842,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.69646,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "45f532f9bcd7ffdfc82863a34fc6a94275ae8cee",
          "message": "Turn on comment on alert",
          "timestamp": "2025-09-24T16:19:22Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/45f532f9bcd7ffdfc82863a34fc6a94275ae8cee"
        },
        "date": 1758734113497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.632056,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.257322,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0199215,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.32253,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0228187,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.36435222222222224,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.338637,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0903552,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.02666212,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.025857440000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 14.09438,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09033942857142858,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0430597,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 62.0116,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0864566,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0453986,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1086218,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.1847118,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1511214,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0843498,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0338884,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0828566,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1815734,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.45118,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 5.98772,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.466696,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.465502,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26454900000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.380611111111111,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.8252,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.7312319999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.526492,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.5252279999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 213.416,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.7377485714285714,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532765,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.058062,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.11744,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.571412,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.28414,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.71826,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.14524,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.06874,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.303896,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.43528,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.68404,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "6ad67db54a300a89e9eaf97339dbe46648f1c9ed",
          "message": "WIP testing",
          "timestamp": "2025-09-24T17:19:34Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ad67db54a300a89e9eaf97339dbe46648f1c9ed"
        },
        "date": 1758747038094,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.634136,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.26126,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.020281,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.322918,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0232342,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.3647188888888889,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.338747,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.090863,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.02674788,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.026269360000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 14.108400000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.09134228571428571,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.043497999999999995,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 60.845,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.086932,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0457172,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.1098056,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.18453340000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.1537952,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0851924,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0361346,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.08464,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.1831692,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 8.75314,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 6.01514,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.458584,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.459246,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26449500000000004,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.415666666666666,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.82079,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.7276399999999998,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.523744,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.4965,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 213.29,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 1.7421514285714286,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.532905,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.057864,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 2.11724,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.58372,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.513794,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.72272,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.13862,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.068318,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.304416,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 2.43528,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.6925,
            "unit": "ms/rep"
          }
        ]
      }
    ],
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
          "id": "5f5a0243ef2c9a11be2f08fead8275b36f79b4ca",
          "message": "Revert \"WIP turn on comment on alert\"\n\nThis reverts commit 5dcb476f7f07a2f298255a2aeadafbbd591f9f53.",
          "timestamp": "2025-09-24T16:31:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5f5a0243ef2c9a11be2f08fead8275b36f79b4ca"
        },
        "date": 1758731911186,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 9.54374,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 8.80664,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.677884,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.68102,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26461999999999997,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.941944444444444,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.53657,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 3.10904,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.474144,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34632199999999996,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 175.2112,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 3.1099428571428573,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.572296,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.066948,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.066974,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.236664,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.755814,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.76886,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.2942,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066838,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.238298,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.330784,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.7688,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "5f5a0243ef2c9a11be2f08fead8275b36f79b4ca",
          "message": "Revert \"WIP turn on comment on alert\"\n\nThis reverts commit 5dcb476f7f07a2f298255a2aeadafbbd591f9f53.",
          "timestamp": "2025-09-24T16:31:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5f5a0243ef2c9a11be2f08fead8275b36f79b4ca"
        },
        "date": 1758732199680,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 11.34532,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 9.6106,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.68901,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.685384,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26469299999999996,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 7.295833333333333,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.60756,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 3.3358,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.474104,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3474236,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 174.36879999999996,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 3.1040285714285716,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.5724020000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.066544,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.066706,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.236698,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.553818,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.69816,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.28374,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.067084,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.237318,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.344556,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.7688,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "5dcb476f7f07a2f298255a2aeadafbbd591f9f53",
          "message": "WIP turn on comment on alert",
          "timestamp": "2025-09-24T16:19:22Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5dcb476f7f07a2f298255a2aeadafbbd591f9f53"
        },
        "date": 1758733060523,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 9.62904,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 8.64438,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.6641980000000001,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.6464059999999999,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.26454300000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.916944444444445,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.53138,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 3.10338,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47337599999999996,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.3480504,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 174.1074,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 3.1177428571428574,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571532,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.06664,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.0667120000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.236218,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.740304,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.74672,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.26826,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.06663,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.236294,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.340078,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.76876,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "45f532f9bcd7ffdfc82863a34fc6a94275ae8cee",
          "message": "Turn on comment on alert",
          "timestamp": "2025-09-24T16:19:22Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/45f532f9bcd7ffdfc82863a34fc6a94275ae8cee"
        },
        "date": 1758734114064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 11.03232,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 9.38274,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.634084,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.641538,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264521,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.855944444444445,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.53494,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 3.0676,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47388800000000003,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.34798200000000007,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 173.729,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 3.0725142857142855,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.57202,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.066516,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.066598,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.236858,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.73801,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.76902,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.28482,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.066604,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.236806,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.324728,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.76886,
            "unit": "ms/rep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "6ad67db54a300a89e9eaf97339dbe46648f1c9ed",
          "message": "WIP testing",
          "timestamp": "2025-09-24T17:19:34Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ad67db54a300a89e9eaf97339dbe46648f1c9ed"
        },
        "date": 1758747039181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 9.54582,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 8.63032,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.634398,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.636208,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264575,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 6.920833333333333,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.49802,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 3.08094,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.47459200000000007,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.350136,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 174.9998,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 3.0927428571428575,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571663,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 1.066854,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.066876,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.237532,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 1.534422,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 2.7678,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 2.28228,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 1.0669,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.237482,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.3474780000000002,
            "unit": "ms/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 2.7688,
            "unit": "ms/rep"
          }
        ]
      }
    ],
    "clang_14_0_6_caliper": [
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "5f5a0243ef2c9a11be2f08fead8275b36f79b4ca",
          "message": "Revert \"WIP turn on comment on alert\"\n\nThis reverts commit 5dcb476f7f07a2f298255a2aeadafbbd591f9f53.",
          "timestamp": "2025-09-24T16:31:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5f5a0243ef2c9a11be2f08fead8275b36f79b4ca"
        },
        "date": 1758732198708,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP_Basic_DAXPY",
            "value": 0.00886264,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP_Basic_PI_ATOMIC",
            "value": 3.06848,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq_Basic_DAXPY",
            "value": 0.23034,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq_Basic_PI_ATOMIC",
            "value": 0.153555,
            "unit": "s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "committer": {
            "name": "Tara Drwenski",
            "username": "tdrwenski",
            "email": "drwenski1@llnl.gov"
          },
          "id": "5dcb476f7f07a2f298255a2aeadafbbd591f9f53",
          "message": "WIP turn on comment on alert",
          "timestamp": "2025-09-24T16:19:22Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/5dcb476f7f07a2f298255a2aeadafbbd591f9f53"
        },
        "date": 1758733059772,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP_Basic_DAXPY",
            "value": 0.00886264,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP_Basic_PI_ATOMIC",
            "value": 3.06848,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq_Basic_DAXPY",
            "value": 0.23034,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq_Basic_PI_ATOMIC",
            "value": 0.153555,
            "unit": "s"
          }
        ]
      }
    ]
  }
}