window.BENCHMARK_DATA = {
  "lastUpdate": 1756161181726,
  "repoUrl": "https://github.com/tdrwenski/RAJAPerf",
  "entries": {
    "RAJAPerf": [
      {
        "commit": {
          "author": {
            "name": "tdrwenski",
            "username": "tdrwenski"
          },
          "committer": {
            "name": "tdrwenski",
            "username": "tdrwenski"
          },
          "id": "403478a625cb9ad463612a4802102cd19e28cf28",
          "message": "Test GitHub benchmark",
          "timestamp": "2025-08-22T17:24:09Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/pull/1/commits/403478a625cb9ad463612a4802102cd19e28cf28"
        },
        "date": 1756161181134,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Basic_DAXPY_Base_Seq",
            "value": 109.511,
            "unit": "ms"
          },
          {
            "name": "Basic_DAXPY_RAJA_Seq",
            "value": 158.441,
            "unit": "ms"
          },
          {
            "name": "Basic_PI_ATOMIC_Base_Seq",
            "value": 70.42,
            "unit": "ms"
          },
          {
            "name": "Basic_PI_ATOMIC_RAJA_Seq",
            "value": 70.077,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}