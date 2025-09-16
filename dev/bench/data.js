window.BENCHMARK_DATA = {
  "lastUpdate": 1758062904487,
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
          "id": "0e14b034c5321c87819db4cdf670e51cd53775c6",
          "message": "WIP comment out other jobs for testing",
          "timestamp": "2025-09-16T20:45:43Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/0e14b034c5321c87819db4cdf670e51cd53775c6"
        },
        "date": 1758062903357,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP_Basic_DAXPY",
            "value": 0.00879304,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP_Basic_PI_ATOMIC",
            "value": 3.02367,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq_Basic_DAXPY",
            "value": 0.236301,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq_Basic_PI_ATOMIC",
            "value": 0.0534774,
            "unit": "s"
          }
        ]
      }
    ]
  }
}