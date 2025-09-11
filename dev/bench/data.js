window.BENCHMARK_DATA = {
  "lastUpdate": 1757613842229,
  "repoUrl": "https://github.com/tdrwenski/RAJAPerf",
  "entries": {
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
          "id": "1f7c19e8484533db68d1977da10957ab0a3b4267",
          "message": "Allow pushes on branches for testing",
          "timestamp": "2025-09-11T02:07:29Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/1f7c19e8484533db68d1977da10957ab0a3b4267"
        },
        "date": 1757613841201,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP_Basic_DAXPY",
            "value": 0.00527495,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP_Basic_PI_ATOMIC",
            "value": 39.2939,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq_Basic_DAXPY",
            "value": 0.263911,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq_Basic_PI_ATOMIC",
            "value": 0.0699819,
            "unit": "s"
          }
        ]
      }
    ]
  }
}