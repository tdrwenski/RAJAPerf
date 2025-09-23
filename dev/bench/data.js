window.BENCHMARK_DATA = {
  "lastUpdate": 1758664397741,
  "repoUrl": "https://github.com/tdrwenski/RAJAPerf",
  "entries": {
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
          "id": "2df14f7302795295bd82acbbe640caa8d6d3e437",
          "message": "Add MPI performance job",
          "timestamp": "2025-09-23T21:31:15Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/2df14f7302795295bd82acbbe640caa8d6d3e437"
        },
        "date": 1758664396582,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.00125699,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.000802876,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.00127949,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.00100181,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.00375922,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.00140259,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.000603035,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.000751996,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.00149391,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.000657715,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.000870657,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.00145692,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0029813,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.000871106,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.00537571,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.0148291,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.030389,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.00537734,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.000714355,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0010099,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.00178004,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.000736965,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.00257448,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.00660203,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.0130214,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.00259236,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.00390187,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.00242589,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00439159,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00312155,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.00294043,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.00359479,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.00598423,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.0129346,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0130314,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.00284236,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.00468251,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00691406,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.00756985,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00333805,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00187487,
            "unit": "s"
          }
        ]
      }
    ]
  }
}