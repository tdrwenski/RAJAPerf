window.BENCHMARK_DATA = {
  "lastUpdate": 1758729440134,
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
          "id": "6ccb7cf01deab2de40b0666d514b24774002da2e",
          "message": "Remove repfact 10 for GPU tests as they get slower the more was run before them",
          "timestamp": "2025-09-24T15:30:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ccb7cf01deab2de40b0666d514b24774002da2e"
        },
        "date": 1758728977405,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.000025672400000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.00001623674,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.000025684800000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.000020369400000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.00007500040000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0000276292,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.0000122419,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.000014722520000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.000029445399999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.000012989919999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.00001725374,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0000290792,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.000059998200000000004,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.00001783894,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.0001077654,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.000300142,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.0006089180000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.00010855739999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0000139911,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.000020141999999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.000035669999999999996,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.00001457372,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.000052765,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.0001321398,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.000262056,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.0000530132,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.000077431,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.000049099,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00000873086,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00000623854,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.000016573222222222224,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.000035969999999999996,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.00001194276,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00000517032,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00000523408,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.000571432,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.0000132868,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00000692858,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.0001518924,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0000033464699999999997,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00000187249,
            "unit": "s/rep"
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
          "id": "6ccb7cf01deab2de40b0666d514b24774002da2e",
          "message": "Remove repfact 10 for GPU tests as they get slower the more was run before them",
          "timestamp": "2025-09-24T15:30:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ccb7cf01deab2de40b0666d514b24774002da2e"
        },
        "date": 1758729421451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0000274086,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.0000185743,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.000030662,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0000230268,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0000782538,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0000339634,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.00001737068,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0000177785,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0000322732,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.00001839148,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.00002016,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0000328412,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0000618872,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.0000221734,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.000110181,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.000303372,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.000609224,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.0001123096,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.0000182891,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.0000231138,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0000386442,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.000019686500000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.000054452,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.0001352994,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.000262986,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.000055023600000000006,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.0000772452,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.0000479976,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.00000907936,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.00000640112,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.0000170575,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0000394231,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.000011942299999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.000005192759999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0000052923999999999995,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.000627694,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.000013401428571428572,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00000699098,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.0001527656,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.0000033931,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.0000020353,
            "unit": "s/rep"
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
          "id": "6ccb7cf01deab2de40b0666d514b24774002da2e",
          "message": "Remove repfact 10 for GPU tests as they get slower the more was run before them",
          "timestamp": "2025-09-24T15:30:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ccb7cf01deab2de40b0666d514b24774002da2e"
        },
        "date": 1758729437204,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_HIP-atomic_direct_256_Basic_MULTI_REDUCE",
            "value": 0.0000276202,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-atomic_occgs_256_Basic_MULTI_REDUCE",
            "value": 0.00001826492,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_PI_REDUCE",
            "value": 0.0000335928,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE3_INT",
            "value": 0.0000237396,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.0000805938,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_direct_256_Basic_TRAP_INT",
            "value": 0.0000361924,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_PI_REDUCE",
            "value": 0.00001733832,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE3_INT",
            "value": 0.00001816592,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0000324242,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkatm_occgs_256_Basic_TRAP_INT",
            "value": 0.00001848232,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_PI_REDUCE",
            "value": 0.0000211838,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE3_INT",
            "value": 0.0000320224,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_REDUCE_STRUCT",
            "value": 0.00006372519999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_256_Basic_TRAP_INT",
            "value": 0.000022274600000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_PI_REDUCE",
            "value": 0.000111845,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE3_INT",
            "value": 0.000302784,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_REDUCE_STRUCT",
            "value": 0.000615188,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_direct_new_256_Basic_TRAP_INT",
            "value": 0.0001112282,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_PI_REDUCE",
            "value": 0.00001858372,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE3_INT",
            "value": 0.000024249800000000003,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_REDUCE_STRUCT",
            "value": 0.0000398526,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_256_Basic_TRAP_INT",
            "value": 0.00001921392,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_PI_REDUCE",
            "value": 0.000055407,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE3_INT",
            "value": 0.0001340626,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_REDUCE_STRUCT",
            "value": 0.00026469,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-blkdev_occgs_new_256_Basic_TRAP_INT",
            "value": 0.000055169,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_ARRAY_OF_PTRS",
            "value": 0.0000772196,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_COPY8",
            "value": 0.0000490448,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY",
            "value": 0.000009190840000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_DAXPY_ATOMIC",
            "value": 0.0000064446399999999995,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_IF_QUAD",
            "value": 0.000017748111111111113,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INDEXLIST_3LOOP",
            "value": 0.0000396892,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT3",
            "value": 0.000012012,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D",
            "value": 0.00000522624,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00000536996,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MAT_MAT_SHARED",
            "value": 0.000636108,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_MULADDSUB",
            "value": 0.000013511942857142858,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_NESTED_INIT",
            "value": 0.00000680545,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-block_256_Basic_PI_ATOMIC",
            "value": 0.00015358,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-direct_256_Basic_EMPTY",
            "value": 0.00000338607,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_HIP-occgs_256_Basic_EMPTY",
            "value": 0.00000202322,
            "unit": "s/rep"
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
          "id": "6ccb7cf01deab2de40b0666d514b24774002da2e",
          "message": "Remove repfact 10 for GPU tests as they get slower the more was run before them",
          "timestamp": "2025-09-24T15:30:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ccb7cf01deab2de40b0666d514b24774002da2e"
        },
        "date": 1758728977915,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.000629626,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.000255898,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.000020187,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.000322912,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.000023022500000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.00036512444444444445,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.000338817,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0000905454,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.000026761080000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00002616564,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.01412796,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.00009204314285714286,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0000432403,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 0.0650444,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0000854054,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.000043341200000000004,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.0001031366,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.0001802598,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.0001497374,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.00008426939999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.000033213,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0000803428,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.0001798106,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.00846622,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.00600486,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.00046973,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.000470228,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.000264632,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.0064045000000000005,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.00483743,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.0017424320000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.000520904,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0005243520000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 0.213318,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.0017462857142857143,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.000532945,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.001058448,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.00211848,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.0005840260000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.001275196,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.00273484,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.0021448,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.001069006,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.000304406,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.00243522,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.0026917200000000003,
            "unit": "s/rep"
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
          "id": "6ccb7cf01deab2de40b0666d514b24774002da2e",
          "message": "Remove repfact 10 for GPU tests as they get slower the more was run before them",
          "timestamp": "2025-09-24T15:30:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ccb7cf01deab2de40b0666d514b24774002da2e"
        },
        "date": 1758729422456,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.000632982,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.00026217,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.00001999222,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.00032273999999999996,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0000229136,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.0003648327777777778,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.000338821,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0000917304,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0000264758,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00002609404,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.01410242,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.00009169799999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.000043205100000000004,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 0.0580578,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.00008531479999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0000430688,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.000104651,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.0001831882,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.0001524242,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.000084921,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0000340282,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0000837562,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.000183796,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.00847286,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.006010379999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.000456056,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.000456724,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.000264579,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.006391444444444444,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.00482239,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.001724816,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.000526,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.000526036,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 0.213674,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.0017350142857142856,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.000532857,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.001066564,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.00211822,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.0005835240000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.001273668,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.00272608,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.0021406,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0010688660000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.00030431999999999996,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.00243342,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.0026952400000000002,
            "unit": "s/rep"
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
          "id": "6ccb7cf01deab2de40b0666d514b24774002da2e",
          "message": "Remove repfact 10 for GPU tests as they get slower the more was run before them",
          "timestamp": "2025-09-24T15:30:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ccb7cf01deab2de40b0666d514b24774002da2e"
        },
        "date": 1758728978447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.0109222,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.008775100000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.000689458,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.00067835,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.000264485,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.006945833333333333,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.004526550000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.0030927800000000003,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.000473796,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00035272440000000003,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 0.17424,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.003098742857142857,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.0005709679999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0010664519999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.001066494,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.00023661599999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.0015549440000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.00276776,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.00227616,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0010664560000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.00023750399999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.001336834,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.00273184,
            "unit": "s/rep"
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
          "id": "6ccb7cf01deab2de40b0666d514b24774002da2e",
          "message": "Remove repfact 10 for GPU tests as they get slower the more was run before them",
          "timestamp": "2025-09-24T15:30:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ccb7cf01deab2de40b0666d514b24774002da2e"
        },
        "date": 1758729417984,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.00954198,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.0086953,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.0006674820000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.000688272,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.000265068,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.006927555555555556,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.00452621,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.0030748200000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.000473836,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00034733800000000004,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 0.1742694,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.003115142857142857,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.00057146,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0010665359999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.0010665739999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.00023605200000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.0015397339999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.00276908,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.00227956,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.001066618,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.00023674799999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.001322946,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.00276964,
            "unit": "s/rep"
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
          "id": "6ccb7cf01deab2de40b0666d514b24774002da2e",
          "message": "Remove repfact 10 for GPU tests as they get slower the more was run before them",
          "timestamp": "2025-09-24T15:30:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ccb7cf01deab2de40b0666d514b24774002da2e"
        },
        "date": 1758729439120,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.00955474,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.008645680000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.00068362,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.000685346,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.000264537,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.006910166666666667,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.00450974,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.0030808,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.000473128,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00034561680000000003,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 0.1749404,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.0030978857142857142,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.0005710600000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.00106643,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.001066514,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.00023649600000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.001540166,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.00276898,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.0022736,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.001066322,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.000236422,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.00137714,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.00276878,
            "unit": "s/rep"
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
          "id": "6ccb7cf01deab2de40b0666d514b24774002da2e",
          "message": "Remove repfact 10 for GPU tests as they get slower the more was run before them",
          "timestamp": "2025-09-24T15:30:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ccb7cf01deab2de40b0666d514b24774002da2e"
        },
        "date": 1758728980197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.000599858,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.000258764,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.000016956379999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.000337904,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.0000202989,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.00037784833333333334,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.000263165,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0001125652,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0000447072,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00003465152,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.01032188,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.00011229914285714285,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.0000987765,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 0.0534394,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0000803918,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.000045883599999999996,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.0001310522,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.0001798186,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.00014857719999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.000073479,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0000315986,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0000902178,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.000174752,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.00869364,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.0060376399999999995,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.000458428,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.000458368,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.000264582,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.006784944444444444,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.00437181,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.00202144,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.00047330800000000003,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00034315159999999997,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 0.17434519999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.002030722857142857,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.000571308,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0010671440000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.001067156,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.000220218,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.001203806,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.00267462,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.0021448,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0010667839999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.00021975,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.001063958,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.0026819799999999996,
            "unit": "s/rep"
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
          "id": "6ccb7cf01deab2de40b0666d514b24774002da2e",
          "message": "Remove repfact 10 for GPU tests as they get slower the more was run before them",
          "timestamp": "2025-09-24T15:30:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ccb7cf01deab2de40b0666d514b24774002da2e"
        },
        "date": 1758729418545,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.000599956,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.000255888,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.000016561999999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.00033654999999999997,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.000020219500000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.0003771111111111111,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.000262005,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0001103632,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0000444832,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.00003426392,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.01031064,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.00011161571428571428,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.00009800480000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 0.060898600000000004,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0000797622,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.0000452836,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.0001273002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.0001801234,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.000147767,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.000073298,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0000308338,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.0000895714,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.0001745144,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.0086978,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.006031119999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.00046174400000000004,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.00046235600000000003,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.000264608,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.0067785,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.00438041,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.0020140799999999997,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.000472808,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0003428824,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 0.1740218,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.0020154485714285715,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.000570582,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.001067232,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.0010682799999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.000220328,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.0012037439999999999,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.0026743,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.00213836,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.001066972,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.000219866,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.00106119,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.0026814200000000003,
            "unit": "s/rep"
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
          "id": "6ccb7cf01deab2de40b0666d514b24774002da2e",
          "message": "Remove repfact 10 for GPU tests as they get slower the more was run before them",
          "timestamp": "2025-09-24T15:30:39Z",
          "url": "https://github.com/tdrwenski/RAJAPerf/commit/6ccb7cf01deab2de40b0666d514b24774002da2e"
        },
        "date": 1758729434685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RAJA_OpenMP-default_Basic_ARRAY_OF_PTRS",
            "value": 0.000599924,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_COPY8",
            "value": 0.000257372,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY",
            "value": 0.0000167449,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_DAXPY_ATOMIC",
            "value": 0.000336812,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_EMPTY",
            "value": 0.000020193,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_IF_QUAD",
            "value": 0.0003771644444444445,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INDEXLIST_3LOOP",
            "value": 0.000261997,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT3",
            "value": 0.0001124174,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D",
            "value": 0.0000446984,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.0000343668,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MAT_MAT_SHARED",
            "value": 0.010313000000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULADDSUB",
            "value": 0.00011244057142857143,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_NESTED_INIT",
            "value": 0.00009856,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_ATOMIC",
            "value": 0.053629800000000005,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_PI_REDUCE",
            "value": 0.0000798934,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE3_INT",
            "value": 0.000045558,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_REDUCE_STRUCT",
            "value": 0.00012726380000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_TRAP_INT",
            "value": 0.00018013380000000002,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-default_Basic_MULTI_REDUCE",
            "value": 0.0001481864,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_PI_REDUCE",
            "value": 0.0000729106,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE3_INT",
            "value": 0.0000312436,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_REDUCE_STRUCT",
            "value": 0.000089708,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_OpenMP-new_Basic_TRAP_INT",
            "value": 0.0001743332,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_ARRAY_OF_PTRS",
            "value": 0.00869074,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_COPY8",
            "value": 0.00601988,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY",
            "value": 0.000454538,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_DAXPY_ATOMIC",
            "value": 0.000454532,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_EMPTY",
            "value": 0.000264918,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_IF_QUAD",
            "value": 0.006772111111111111,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INDEXLIST_3LOOP",
            "value": 0.004361080000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT3",
            "value": 0.00200902,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D",
            "value": 0.000473008,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_INIT_VIEW1D_OFFSET",
            "value": 0.000343232,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MAT_MAT_SHARED",
            "value": 0.1740986,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULADDSUB",
            "value": 0.0020149257142857142,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_NESTED_INIT",
            "value": 0.000570888,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_ATOMIC",
            "value": 0.0010668960000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_PI_REDUCE",
            "value": 0.0010668899999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE3_INT",
            "value": 0.00022018599999999998,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_REDUCE_STRUCT",
            "value": 0.001203602,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_TRAP_INT",
            "value": 0.00267574,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-default_Basic_MULTI_REDUCE",
            "value": 0.00214248,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_PI_REDUCE",
            "value": 0.0010662480000000001,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE3_INT",
            "value": 0.00022033,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_REDUCE_STRUCT",
            "value": 0.001062372,
            "unit": "s/rep"
          },
          {
            "name": "RAJA_Seq-new_Basic_TRAP_INT",
            "value": 0.00268104,
            "unit": "s/rep"
          }
        ]
      }
    ]
  }
}