window.BENCHMARK_DATA = {
  "lastUpdate": 1758675864501,
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
          "id": "226d691926562a3f6c18651c6a3ef3215dd3c470",
          "message": "Add MPI job to performance tests",
          "timestamp": "2025-09-23T21:57:31Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/226d691926562a3f6c18651c6a3ef3215dd3c470"
        },
        "date": 1758665143494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.00138112,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.000951787,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.00171308,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0011377,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.00413929,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.00169277,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.000905967,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.00101397,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.00164922,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.000899657,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.00113878,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.00164867,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.00312832,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.00105322,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.00561188,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.01505,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.0304183,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.0055907,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.00100706,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.00119045,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.00197324,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.000960828,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.00277277,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.00672719,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.0131948,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.00279653,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.00389922,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.00258053,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00484906,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00321638,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.00310302,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.00410005,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0059907,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.0131169,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.013475,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.00314179,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.00466891,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00714144,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.0076717,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00340247,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00194772,
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
          "id": "114cfe419ac7b104d0ff5876b6a5664d4535487c",
          "message": "Increase number of repititions to get better statistics",
          "timestamp": "2025-09-23T22:37:40Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/114cfe419ac7b104d0ff5876b6a5664d4535487c"
        },
        "date": 1758667859483,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0014374,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.00102061,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.00161564,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.00118437,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.00391416,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.00169862,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.000870516,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.000923667,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.00163423,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.000919466,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.00108157,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.00160754,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.00315091,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.00108712,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.00551976,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.0150855,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.0304334,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.00558545,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.000916197,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.00115905,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.00203039,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.000945727,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.00276807,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.00671245,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.0131702,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.0027824,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.00394352,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.00245897,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00451175,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00321197,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.00312487,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.00395306,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.00601428,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.0131043,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0133709,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.00309431,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.00471461,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00684662,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.00765905,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00340079,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00198203,
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
          "id": "114cfe419ac7b104d0ff5876b6a5664d4535487c",
          "message": "Increase number of repititions to get better statistics",
          "timestamp": "2025-09-23T22:37:40Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/114cfe419ac7b104d0ff5876b6a5664d4535487c"
        },
        "date": 1758667967757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0101534,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.00966241,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.00915791,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0113297,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0285504,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0102349,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.00849527,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.00879108,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0154778,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.00857074,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0106283,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.016052,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0305233,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0107046,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.0556234,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.152145,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.303898,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.0559321,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.00922549,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0115729,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0190965,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.00924023,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.028029,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.0673946,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.131893,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.0284301,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.0318378,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.018565,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0452498,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0281954,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.02468,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0391011,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0557147,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.127253,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.128329,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.0263736,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.0435999,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0640458,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.0767694,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0292829,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.0298808,
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
          "id": "16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c",
          "message": "WIP test against my branch",
          "timestamp": "2025-09-23T23:03:33Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c"
        },
        "date": 1758671793534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0103263,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.00974762,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.00978669,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0121628,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0303812,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0119744,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.00872548,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.00979127,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0161828,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.00962174,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0109851,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.016917,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0307817,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0119489,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.0555676,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.151311,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.30359,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.0565001,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.00972931,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0123095,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0194579,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.0104672,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.0283322,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.0679925,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.131195,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.0291897,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.0316956,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.0186641,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0447535,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0287823,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.0244794,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0388306,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.056187,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.127412,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.128986,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.0264255,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.0431406,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0635393,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.076972,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.02928,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.0317786,
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
          "id": "16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c",
          "message": "WIP test against my branch",
          "timestamp": "2025-09-23T23:03:33Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c"
        },
        "date": 1758675821348,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0100588,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.00942622,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.00930868,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0114492,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0294148,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0101241,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.00791334,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.00902975,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0153664,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.00834121,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0104064,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0159141,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0306146,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0103112,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.054802,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.151756,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.306914,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.0553858,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.00919114,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0114045,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0187899,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.00907465,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.027492,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.0665749,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.13081,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.0281665,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.0297055,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.0186467,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.0439084,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0287384,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.0244298,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0381563,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.0560394,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.125688,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.127043,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.0263028,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.0436799,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.0635852,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.0765814,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0291167,
            "unit": "s"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.0294666,
            "unit": "s"
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
          "id": "2df14f7302795295bd82acbbe640caa8d6d3e437",
          "message": "Add MPI performance job",
          "timestamp": "2025-09-23T21:31:15Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/2df14f7302795295bd82acbbe640caa8d6d3e437"
        },
        "date": 1758664398251,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.0309356,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.0133506,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.00863045,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.168842,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0206423,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.0685211,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.0271144,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0558868,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.111432,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0857695,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.0527447,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.0393222,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0986013,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 2.80257,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.00398425,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.002327,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.00643644,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.00929937,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.00768799,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.00368948,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0015886,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.00463346,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.00873741,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.435078,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.295435,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.230225,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.229968,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264806,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 1.22168,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.438841,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.00511,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 1.18292,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.857658,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 0.873027,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.704956,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.571183,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0534366,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.0533581,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.0111854,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.060189,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.134069,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.107324,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0534168,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.0110363,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.0532308,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.134038,
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
          "id": "226d691926562a3f6c18651c6a3ef3215dd3c470",
          "message": "Add MPI job to performance tests",
          "timestamp": "2025-09-23T21:57:31Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/226d691926562a3f6c18651c6a3ef3215dd3c470"
        },
        "date": 1758665142111,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.0308769,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.0134397,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.00848435,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.168343,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0204038,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.0686123,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.0270162,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0565354,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.111076,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0852204,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.0525887,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.0394367,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0983463,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 2.68848,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.00394347,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.00226544,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.0064631,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.00924385,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.00750861,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.00366879,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.00168766,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.00457138,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.00874322,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.43421,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.294528,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.231294,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.231134,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264616,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 1.22109,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.437818,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.00705,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 1.18247,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.857213,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 0.872945,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.705437,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.570888,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0533666,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.0533444,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.0112413,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.0731756,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.133833,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.107331,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0533973,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.0110701,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.0531638,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.133996,
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
          "id": "114cfe419ac7b104d0ff5876b6a5664d4535487c",
          "message": "Increase number of repititions to get better statistics",
          "timestamp": "2025-09-23T22:37:40Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/114cfe419ac7b104d0ff5876b6a5664d4535487c"
        },
        "date": 1758667844462,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.0310346,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.0134443,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.00870694,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.168517,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0206495,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.0685582,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.0270375,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0564342,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.111379,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0855012,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.052691,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.0394147,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0983088,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 3.11292,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.00398627,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.00233639,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.00647659,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.00939878,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.00753227,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.00367543,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.00159554,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.00474669,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.0087509,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.437707,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.294724,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.22922,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.229488,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.264752,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 1.2223,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.438768,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 1.00864,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 1.18247,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.85738,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 0.871582,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.70484,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.57101,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0534203,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.053364,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.01126,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.0733457,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.133637,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.107304,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0533704,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.0110334,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.0533739,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.13414,
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
          "id": "114cfe419ac7b104d0ff5876b6a5664d4535487c",
          "message": "Increase number of repititions to get better statistics",
          "timestamp": "2025-09-23T22:37:40Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/114cfe419ac7b104d0ff5876b6a5664d4535487c"
        },
        "date": 1758667967447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.300536,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.129544,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0840018,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 1.68247,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.201432,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.680742,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.261085,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.553225,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 1.11233,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.856086,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.515677,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.392094,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.988229,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 29.0146,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0399506,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0225634,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.0644071,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.0898963,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.0740019,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0365123,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0153932,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0448726,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.0871812,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 4.36414,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 2.95842,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 2.31511,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 2.30947,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 2.64451,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 12.2144,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.36984,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 10.0222,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 11.8275,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 8.57419,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 8.71294,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 7.03505,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 5.70913,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.533504,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.533542,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.110152,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.602873,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 1.33597,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 1.07153,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.533275,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.109917,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.531478,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 1.34124,
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
          "id": "16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c",
          "message": "WIP test against my branch",
          "timestamp": "2025-09-23T23:03:33Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c"
        },
        "date": 1758671790104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.300712,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.127646,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0848192,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 1.68356,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.204562,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.679208,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.262202,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.559047,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 1.11496,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.863702,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.515989,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.39371,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.980847,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 26.9821,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0403265,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0232898,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.0655208,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.0903657,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.0742799,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0368369,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0161745,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0450427,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.0877286,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 4.32986,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 2.95287,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 2.27093,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 2.25991,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 2.64519,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 12.2266,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.37609,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 10.1075,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 11.8293,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 8.58302,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 8.72048,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 7.0764,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 5.71095,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.53345,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.533593,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.110339,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.601021,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 1.33655,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 1.07183,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.533316,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.110241,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.531418,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 1.34064,
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
          "id": "16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c",
          "message": "WIP test against my branch",
          "timestamp": "2025-09-23T23:03:33Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c"
        },
        "date": 1758675821633,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.300083,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.129615,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0845271,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 1.68336,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.201463,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.680511,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.263012,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.558508,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 1.11251,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.856975,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.515774,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.394462,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.983758,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 27.3151,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0402806,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0227556,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.0639603,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.0901384,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.0742684,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0367997,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0155083,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0451534,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.0875759,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 4.34346,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 2.96875,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 2.30156,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 2.31391,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 2.64608,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 12.2335,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.36635,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 10.1717,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 11.8298,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 8.57447,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 8.7235,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 7.13005,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 5.71009,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.533678,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.533554,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.127973,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.602224,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 1.33626,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 1.06782,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.533179,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.110148,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.533099,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 1.33921,
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
          "id": "16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c",
          "message": "WIP test against my branch",
          "timestamp": "2025-09-23T23:03:33Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c"
        },
        "date": 1758675863895,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.301459,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.127754,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0836985,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 1.68249,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.200783,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.678676,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.263018,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.561859,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 1.10651,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.850557,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.519575,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.395662,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.979235,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 28.3035,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0400967,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0228249,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.0654031,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.090213,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.0741499,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0365393,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0154191,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0449256,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.0874203,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 4.33296,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 2.95505,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 2.27129,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 2.27602,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 2.64305,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 12.2055,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.37898,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 10.054,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 11.813,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 8.56671,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 8.71117,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 7.05184,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 5.70396,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.53298,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.533086,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.110693,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.601544,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 1.33622,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 1.06818,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.532867,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.110103,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.530443,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 1.33894,
            "unit": "s"
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
          "id": "16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c",
          "message": "WIP test against my branch",
          "timestamp": "2025-09-23T23:03:33Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c"
        },
        "date": 1758671788925,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.317628,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.130503,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.100664,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 1.61419,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.226756,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.656511,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.340572,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.451351,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.671157,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.651178,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.706099,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.324147,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.430931,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 31.572,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0430787,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0227573,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.0543473,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.0922219,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.077043,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0421256,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0164695,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0415671,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.0907168,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 4.23672,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 2.99592,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 2.2824,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 2.2841,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 2.64599,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 11.5301,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.81199,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 8.64409,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 13.145,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 13.169,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.6087,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 6.07704,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 5.32868,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.52918,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.05885,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.296537,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.639128,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 1.36454,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 1.06911,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.534034,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.152089,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.21727,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 1.34346,
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
          "id": "16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c",
          "message": "WIP test against my branch",
          "timestamp": "2025-09-23T23:03:33Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c"
        },
        "date": 1758675816606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.317592,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.130341,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.100852,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 1.61413,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.22696,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.656775,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.34359,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.459122,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.67197,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.653051,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.706364,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.320246,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.434841,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 28.9304,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0416513,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0211302,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.0530913,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.090818,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.0755002,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0409286,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0156225,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0402521,
            "unit": "s"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.0894979,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 4.24168,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 3.0098,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 2.27946,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 2.27549,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 2.64574,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 11.5127,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.82161,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 8.65428,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 13.1194,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 12.8437,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 10.6432,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 6.07847,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 5.32921,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.529091,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 1.05905,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.272848,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.603151,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 1.36315,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 1.07257,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.534162,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.144177,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 1.22663,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 1.35151,
            "unit": "s"
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
          "id": "16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c",
          "message": "WIP test against my branch",
          "timestamp": "2025-09-23T23:03:33Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c"
        },
        "date": 1758671792143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 4.82527,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 4.38064,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.35206,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.33511,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 2.6452,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 12.4817,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.5144,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 15.5303,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 11.8788,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 8.8465,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 8.87873,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 10.8627,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 5.71145,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.533278,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.533318,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.118367,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.871251,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 1.35761,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 1.14757,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.533318,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.118876,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.670868,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 1.38496,
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
          "id": "16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c",
          "message": "WIP test against my branch",
          "timestamp": "2025-09-23T23:03:33Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/16737dbe2d6f9e1ad9ee0b07dd6b3c66d230098c"
        },
        "date": 1758675819425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 4.76682,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 4.37188,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 3.40416,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 3.39987,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 2.64615,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 12.4293,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 4.51948,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 15.4414,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 11.8483,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 8.74495,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 8.7298,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 10.8421,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 5.71545,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.533446,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.533509,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.118248,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.873254,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 1.38405,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 1.14295,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.533393,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.118561,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.674943,
            "unit": "s"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 1.38442,
            "unit": "s"
          }
        ]
      }
    ]
  }
}