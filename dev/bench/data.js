window.BENCHMARK_DATA = {
  "lastUpdate": 1758728978761,
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
      }
    ]
  }
}