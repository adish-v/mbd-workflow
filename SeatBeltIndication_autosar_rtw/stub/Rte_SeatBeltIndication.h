/* This file contains stub implementations of the AUTOSAR RTE functions.
   The stub implementations can be used for testing the generated code in
   Simulink, for example, in SIL/PIL simulations of the component under
   test. Note that this file should be replaced with an appropriate RTE
   file when deploying the generated code outside of Simulink.

   This file is generated for:
   Atomic software component:  "SeatBeltIndication"
   ARXML schema: "4.3"
   File generated on: "15-Jul-2022 01:11:26"  */

#ifndef Rte_SeatBeltIndication_h
#define Rte_SeatBeltIndication_h
#include "Rte_Type.h"
#include "Compiler.h"

/* Data access functions */
#define Rte_IRead_Runnable_csb_RPort_BlinkPeriod_RPort_BlinkPeriod Rte_IRead_SeatBeltIndication_Runnable_csb_RPort_BlinkPeriod_RPort_BlinkPeriod

Double Rte_IRead_Runnable_csb_RPort_BlinkPeriod_RPort_BlinkPeriod(void);

#define Rte_IRead_Runnable_csb_RPort_Key_RPort_Key Rte_IRead_SeatBeltIndication_Runnable_csb_RPort_Key_RPort_Key

Double Rte_IRead_Runnable_csb_RPort_Key_RPort_Key(void);

#define Rte_IRead_Runnable_csb_RPort_SeatBeltFasten_RPort_SeatBeltFasten Rte_IRead_SeatBeltIndication_Runnable_csb_RPort_SeatBeltFasten_RPort_SeatBeltFasten

Double Rte_IRead_Runnable_csb_RPort_SeatBeltFasten_RPort_SeatBeltFasten(void);

#define Rte_IRead_Runnable_csb_RPort_Speed_RPort_Speed Rte_IRead_SeatBeltIndication_Runnable_csb_RPort_Speed_RPort_Speed

Double Rte_IRead_Runnable_csb_RPort_Speed_RPort_Speed(void);

#define Rte_IRead_Runnable_csb_RPort_SpeedLimit_RPort_SpeedLimit Rte_IRead_SeatBeltIndication_Runnable_csb_RPort_SpeedLimit_RPort_SpeedLimit

Double Rte_IRead_Runnable_csb_RPort_SpeedLimit_RPort_SpeedLimit(void);

#define Rte_IWrite_Runnable_csb_PPort_SeatBeltIcon_PPort_SeatBeltIcon Rte_IWrite_SeatBeltIndication_Runnable_csb_PPort_SeatBeltIcon_PPort_SeatBeltIcon

void Rte_IWrite_Runnable_csb_PPort_SeatBeltIcon_PPort_SeatBeltIcon(Double u);

#define Rte_IWriteRef_Runnable_csb_PPort_SeatBeltIcon_PPort_SeatBeltIcon Rte_IWriteRef_SeatBeltIndication_Runnable_csb_PPort_SeatBeltIcon_PPort_SeatBeltIcon

Double* Rte_IWriteRef_Runnable_csb_PPort_SeatBeltIcon_PPort_SeatBeltIcon(void);

/* Entry point functions */
extern FUNC(void, SeatBeltIndication_CODE) SeatBeltIndication_Init(void);
extern FUNC(void, SeatBeltIndication_CODE) Runnable_csb(void);

#endif
