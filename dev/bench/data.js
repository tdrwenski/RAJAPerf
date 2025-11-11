window.BENCHMARK_DATA = {
  "lastUpdate": 1762825489283,
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
          "id": "76c94260fc15cd45f2105db201113bf4acfb2b51",
          "message": "WIP disabled tests",
          "timestamp": "2025-11-10T18:59:02Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/76c94260fc15cd45f2105db201113bf4acfb2b51"
        },
        "date": 1762825488870,
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
            "value": 0.4405340277777777,
            "unit": "ms/rep",
            "extra": "reps: 900, passes: 16, total_time: 6.344s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.2940775,
            "unit": "ms/rep",
            "extra": "reps: 500, passes: 16, total_time: 2.353s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.19424824999999998,
            "unit": "ms/rep",
            "extra": "reps: 2500, passes: 16, total_time: 7.770s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.029721549999999996,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 5.944s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0222031,
            "unit": "ms/rep",
            "extra": "reps: 12500, passes: 16, total_time: 4.441s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.910500000000003,
            "unit": "ms/rep",
            "extra": "reps: 25, passes: 16, total_time: 4.364s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.1945025,
            "unit": "ms/rep",
            "extra": "reps: 1750, passes: 16, total_time: 5.446s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.035748625,
            "unit": "ms/rep",
            "extra": "reps: 5000, passes: 16, total_time: 2.860s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.06667775,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.0666725,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.267s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.013713375,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.055s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.173035,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.13344175,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.534s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0666705,
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
            "value": 0.17306225,
            "unit": "ms/rep",
            "extra": "reps: 250, passes: 16, total_time: 0.692s"
          }
        ]
      }
    ]
  }
}