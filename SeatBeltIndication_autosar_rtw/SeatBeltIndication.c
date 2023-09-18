/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: SeatBeltIndication.c
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

#include "SeatBeltIndication.h"

/* Named constants for Chart: '<S1>/SeatBeltIndication_StateFlow' */
#define IN_HIGH_SPEED                  ((uint8)1U)
#define IN_KEY_CRANK                   ((uint8)1U)
#define IN_KEY_OFF                     ((uint8)2U)
#define IN_KEY_ON                      ((uint8)3U)
#define IN_LOW_SPEED                   ((uint8)2U)
#define IN_NO_ACTIVE_CHILD             ((uint8)0U)
#define IN_OFF                         ((uint8)1U)
#define IN_ON                          ((uint8)2U)
#define IN_SB_FASTEN                   ((uint8)1U)
#define IN_SB_UNFASTEN                 ((uint8)2U)

/* Block signals and states (default storage) */
DW rtDW;

/* Model step function for TID1 */
void Runnable_csb(void)                /* Explicit Task: Runnable_csb */
{
  sint32 SeatBeltIcon;

  /* RootInportFunctionCallGenerator generated from: '<Root>/Runnable_csb' incorporates:
   *  SubSystem: '<Root>/SeatBeltIndication'
   */
  /* Chart: '<S1>/SeatBeltIndication_StateFlow' incorporates:
   *  Inport: '<Root>/RPort_BlinkPeriod'
   *  Inport: '<Root>/RPort_Key'
   *  Inport: '<Root>/RPort_SeatBeltFasten'
   *  Inport: '<Root>/RPort_Speed'
   *  Inport: '<Root>/RPort_SpeedLimit'
   */
  if (rtDW.temporalCounter_i1 < MAX_uint32_T) {
    rtDW.temporalCounter_i1++;
  }

  if (rtDW.bitsForTID1.is_active_c1_SeatBeltIndication == 0U) {
    rtDW.bitsForTID1.is_active_c1_SeatBeltIndication = 1U;
    rtDW.bitsForTID1.is_c1_SeatBeltIndication = IN_KEY_OFF;
    SeatBeltIcon = 0;
  } else {
    switch (rtDW.bitsForTID1.is_c1_SeatBeltIndication) {
     case IN_KEY_CRANK:
      SeatBeltIcon = 1;
      if (Rte_IRead_Runnable_csb_RPort_Key_RPort_Key() == 1.0) {
        rtDW.bitsForTID1.is_c1_SeatBeltIndication = IN_KEY_ON;
        if (Rte_IRead_Runnable_csb_RPort_SeatBeltFasten_RPort_SeatBeltFasten() ==
            1.0) {
          rtDW.bitsForTID1.is_KEY_ON = IN_SB_FASTEN;
          SeatBeltIcon = 0;
        } else {
          rtDW.bitsForTID1.is_KEY_ON = IN_SB_UNFASTEN;
          rtDW.bitsForTID1.is_SB_UNFASTEN = IN_LOW_SPEED;
        }
      }
      break;

     case IN_KEY_OFF:
      SeatBeltIcon = 0;
      if (Rte_IRead_Runnable_csb_RPort_Key_RPort_Key() == 1.0) {
        rtDW.bitsForTID1.is_c1_SeatBeltIndication = IN_KEY_ON;
        if (Rte_IRead_Runnable_csb_RPort_SeatBeltFasten_RPort_SeatBeltFasten() ==
            1.0) {
          rtDW.bitsForTID1.is_KEY_ON = IN_SB_FASTEN;
        } else {
          rtDW.bitsForTID1.is_KEY_ON = IN_SB_UNFASTEN;
          rtDW.bitsForTID1.is_SB_UNFASTEN = IN_LOW_SPEED;
          SeatBeltIcon = 1;
        }
      }
      break;

     default:
      {
        float64 tmp;

        /* case IN_KEY_ON: */
        tmp = Rte_IRead_Runnable_csb_RPort_Key_RPort_Key();
        if (tmp == 0.0) {
          rtDW.bitsForTID1.is_HIGH_SPEED = IN_NO_ACTIVE_CHILD;
          rtDW.bitsForTID1.is_SB_UNFASTEN = IN_NO_ACTIVE_CHILD;
          rtDW.bitsForTID1.is_KEY_ON = IN_NO_ACTIVE_CHILD;
          rtDW.bitsForTID1.is_c1_SeatBeltIndication = IN_KEY_OFF;
          SeatBeltIcon = 0;
        } else if (tmp == 2.0) {
          rtDW.bitsForTID1.is_HIGH_SPEED = IN_NO_ACTIVE_CHILD;
          rtDW.bitsForTID1.is_SB_UNFASTEN = IN_NO_ACTIVE_CHILD;
          rtDW.bitsForTID1.is_KEY_ON = IN_NO_ACTIVE_CHILD;
          rtDW.bitsForTID1.is_c1_SeatBeltIndication = IN_KEY_CRANK;
          SeatBeltIcon = 1;
        } else if (rtDW.bitsForTID1.is_KEY_ON == IN_SB_FASTEN) {
          SeatBeltIcon = 0;
          if (Rte_IRead_Runnable_csb_RPort_SeatBeltFasten_RPort_SeatBeltFasten()
              == 0.0) {
            rtDW.bitsForTID1.is_KEY_ON = IN_SB_UNFASTEN;
            rtDW.bitsForTID1.is_SB_UNFASTEN = IN_LOW_SPEED;
            SeatBeltIcon = 1;
          }

          /* case IN_SB_UNFASTEN: */
        } else if
            (Rte_IRead_Runnable_csb_RPort_SeatBeltFasten_RPort_SeatBeltFasten() ==
             1.0) {
          rtDW.bitsForTID1.is_HIGH_SPEED = IN_NO_ACTIVE_CHILD;
          rtDW.bitsForTID1.is_SB_UNFASTEN = IN_NO_ACTIVE_CHILD;
          rtDW.bitsForTID1.is_KEY_ON = IN_SB_FASTEN;
          SeatBeltIcon = 0;
        } else if (rtDW.bitsForTID1.is_SB_UNFASTEN == IN_HIGH_SPEED) {
          if (Rte_IRead_Runnable_csb_RPort_Speed_RPort_Speed() <=
              Rte_IRead_Runnable_csb_RPort_SpeedLimit_RPort_SpeedLimit()) {
            rtDW.bitsForTID1.is_HIGH_SPEED = IN_NO_ACTIVE_CHILD;
            rtDW.bitsForTID1.is_SB_UNFASTEN = IN_LOW_SPEED;
            SeatBeltIcon = 1;
          } else if (rtDW.bitsForTID1.is_HIGH_SPEED == IN_OFF) {
            SeatBeltIcon = 0;
            if (rtDW.temporalCounter_i1 >= (uint32)ceil
                (Rte_IRead_Runnable_csb_RPort_BlinkPeriod_RPort_BlinkPeriod()))
            {
              rtDW.bitsForTID1.is_HIGH_SPEED = IN_ON;
              rtDW.temporalCounter_i1 = 0U;
              SeatBeltIcon = 1;
            }
          } else {
            /* case IN_ON: */
            SeatBeltIcon = 1;
            if (rtDW.temporalCounter_i1 >= (uint32)ceil
                (Rte_IRead_Runnable_csb_RPort_BlinkPeriod_RPort_BlinkPeriod()))
            {
              rtDW.bitsForTID1.is_HIGH_SPEED = IN_OFF;
              rtDW.temporalCounter_i1 = 0U;
              SeatBeltIcon = 0;
            }
          }
        } else {
          /* case IN_LOW_SPEED: */
          SeatBeltIcon = 1;
          if (Rte_IRead_Runnable_csb_RPort_Speed_RPort_Speed() >
              Rte_IRead_Runnable_csb_RPort_SpeedLimit_RPort_SpeedLimit()) {
            rtDW.bitsForTID1.is_SB_UNFASTEN = IN_HIGH_SPEED;
            rtDW.bitsForTID1.is_HIGH_SPEED = IN_OFF;
            rtDW.temporalCounter_i1 = 0U;
            SeatBeltIcon = 0;
          }
        }
      }
      break;
    }
  }

  /* End of Chart: '<S1>/SeatBeltIndication_StateFlow' */
  /* End of Outputs for RootInportFunctionCallGenerator generated from: '<Root>/Runnable_csb' */

  /* Outport: '<Root>/PPort_SeatBeltIcon' */
  Rte_IWrite_Runnable_csb_PPort_SeatBeltIcon_PPort_SeatBeltIcon(SeatBeltIcon);
}

/* Model initialize function */
void SeatBeltIndication_Init(void)
{
  /* (no initialization code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
