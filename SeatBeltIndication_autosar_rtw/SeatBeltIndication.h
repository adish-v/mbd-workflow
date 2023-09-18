/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: SeatBeltIndication.h
 *
 * Code generated for Simulink model 'SeatBeltIndication'.
 *
 * Model version                  : 1.62
 * Simulink Coder version         : 9.6 (R2021b) 14-May-2021
 * C/C++ source code generated on : Fri Jul 15 01:10:53 2022
 *
 * Target selection: autosar.tlc
 * Embedded hardware selection: Renesas->RH850
 * Code generation objectives:
 *    1. RAM efficiency
 *    2. Execution efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_SeatBeltIndication_h_
#define RTW_HEADER_SeatBeltIndication_h_
#include <math.h>
#ifndef SeatBeltIndication_COMMON_INCLUDES_
#define SeatBeltIndication_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "Rte_SeatBeltIndication.h"
#endif                                 /* SeatBeltIndication_COMMON_INCLUDES_ */

/* Model Code Variants */

/* Macros for accessing real-time model data structure */

/* Block signals and states (default storage) for system '<Root>' */
typedef struct tag_DW {
  uint32 temporalCounter_i1;           /* '<S1>/SeatBeltIndication_StateFlow' */
  struct {
    uint32 is_c1_SeatBeltIndication:2; /* '<S1>/SeatBeltIndication_StateFlow' */
    uint32 is_KEY_ON:2;                /* '<S1>/SeatBeltIndication_StateFlow' */
    uint32 is_SB_UNFASTEN:2;           /* '<S1>/SeatBeltIndication_StateFlow' */
    uint32 is_HIGH_SPEED:2;            /* '<S1>/SeatBeltIndication_StateFlow' */
    uint32 is_active_c1_SeatBeltIndication:1;/* '<S1>/SeatBeltIndication_StateFlow' */
  } bitsForTID1;
} DW;

/* Block signals and states (default storage) */
extern DW rtDW;

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'SeatBeltIndication'
 * '<S1>'   : 'SeatBeltIndication/SeatBeltIndication'
 * '<S2>'   : 'SeatBeltIndication/SeatBeltIndication/SeatBeltIndication_StateFlow'
 */
#endif                                 /* RTW_HEADER_SeatBeltIndication_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
