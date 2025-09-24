window.BENCHMARK_DATA = {
  "lastUpdate": 1758731907846,
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
      }
    ]
  }
}