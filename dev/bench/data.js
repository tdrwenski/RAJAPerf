window.BENCHMARK_DATA = {
  "lastUpdate": 1756159156287,
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
          "id": "595b16db8d058d9e527cfe2cf38b868f154fcc4e",
          "message": "Test GitHub benchmark",
          "timestamp": "2025-08-22T17:24:09Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/pull/1/commits/595b16db8d058d9e527cfe2cf38b868f154fcc4e"
        },
        "date": 1756158747281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Basic_DAXPY_Base_Seq",
            "value": 134.516,
            "unit": "ms"
          },
          {
            "name": "Basic_DAXPY_RAJA_Seq",
            "value": 160.727,
            "unit": "ms"
          },
          {
            "name": "Basic_PI_ATOMIC_Base_Seq",
            "value": 70.714,
            "unit": "ms"
          },
          {
            "name": "Basic_PI_ATOMIC_RAJA_Seq",
            "value": 70.08200000000001,
            "unit": "ms"
          }
        ]
      }
    ],
    "RAJAPerf with Caliper": [
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
          "id": "595b16db8d058d9e527cfe2cf38b868f154fcc4e",
          "message": "Test GitHub benchmark",
          "timestamp": "2025-08-22T17:24:09Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/pull/1/commits/595b16db8d058d9e527cfe2cf38b868f154fcc4e"
        },
        "date": 1756159155264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJAPerf/Basic_Base_Seq_caliper",
            "value": 228.668,
            "unit": "ms"
          },
          {
            "name": "RAJAPerf/Basic/Basic_DAXPY_Base_Seq_caliper",
            "value": 158.59799999999998,
            "unit": "ms"
          },
          {
            "name": "RAJAPerf/Basic/Basic_PI_ATOMIC_Base_Seq_caliper",
            "value": 70.053,
            "unit": "ms"
          },
          {
            "name": "RAJAPerf/Basic_RAJA_Seq_caliper",
            "value": 176.916,
            "unit": "ms"
          },
          {
            "name": "RAJAPerf/Basic/Basic_DAXPY_RAJA_Seq_caliper",
            "value": 106.86,
            "unit": "ms"
          },
          {
            "name": "RAJAPerf/Basic/Basic_PI_ATOMIC_RAJA_Seq_caliper",
            "value": 70.048,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}