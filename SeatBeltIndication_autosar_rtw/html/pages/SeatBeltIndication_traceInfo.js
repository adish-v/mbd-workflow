function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/RPort_Key */
	this.urlHashMap["SeatBeltIndication:2"] = "SeatBeltIndication.c:49";
	/* <Root>/RPort_SeatBeltFasten */
	this.urlHashMap["SeatBeltIndication:3"] = "SeatBeltIndication.c:50";
	/* <Root>/RPort_Speed */
	this.urlHashMap["SeatBeltIndication:4"] = "SeatBeltIndication.c:51";
	/* <Root>/RPort_SpeedLimit */
	this.urlHashMap["SeatBeltIndication:9"] = "SeatBeltIndication.c:52";
	/* <Root>/RPort_BlinkPeriod */
	this.urlHashMap["SeatBeltIndication:10"] = "SeatBeltIndication.c:48";
	/* <Root>/Runnable_csb */
	this.urlHashMap["SeatBeltIndication:23"] = "SeatBeltIndication.c:44,172";
	/* <Root>/SeatBeltIndication */
	this.urlHashMap["SeatBeltIndication:30"] = "SeatBeltIndication.c:45";
	/* <Root>/PPort_SeatBeltIcon */
	this.urlHashMap["SeatBeltIndication:5"] = "SeatBeltIndication.c:174";
	/* <S1>/SeatBeltIndication_StateFlow */
	this.urlHashMap["SeatBeltIndication:39"] = "SeatBeltIndication.c:24,47,171&SeatBeltIndication.h:37,39,40,41,42,43";
	/* <S2>:10 */
	this.urlHashMap["SeatBeltIndication:39:10"] = "msg=&block=SeatBeltIndication:39:10";
	/* <S2>:8 */
	this.urlHashMap["SeatBeltIndication:39:8"] = "msg=&block=SeatBeltIndication:39:8";
	/* <S2>:11 */
	this.urlHashMap["SeatBeltIndication:39:11"] = "msg=&block=SeatBeltIndication:39:11";
	/* <S2>:22 */
	this.urlHashMap["SeatBeltIndication:39:22"] = "msg=&block=SeatBeltIndication:39:22";
	/* <S2>:23 */
	this.urlHashMap["SeatBeltIndication:39:23"] = "msg=&block=SeatBeltIndication:39:23";
	/* <S2>:26 */
	this.urlHashMap["SeatBeltIndication:39:26"] = "msg=&block=SeatBeltIndication:39:26";
	/* <S2>:27 */
	this.urlHashMap["SeatBeltIndication:39:27"] = "msg=&block=SeatBeltIndication:39:27";
	/* <S2>:28 */
	this.urlHashMap["SeatBeltIndication:39:28"] = "msg=&block=SeatBeltIndication:39:28";
	/* <S2>:24 */
	this.urlHashMap["SeatBeltIndication:39:24"] = "msg=&block=SeatBeltIndication:39:24";
	/* <S2>:9 */
	this.urlHashMap["SeatBeltIndication:39:9"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:9";
	/* <S2>:18 */
	this.urlHashMap["SeatBeltIndication:39:18"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:18";
	/* <S2>:19 */
	this.urlHashMap["SeatBeltIndication:39:19"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:19";
	/* <S2>:20 */
	this.urlHashMap["SeatBeltIndication:39:20"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:20";
	/* <S2>:21 */
	this.urlHashMap["SeatBeltIndication:39:21"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:21";
	/* <S2>:13 */
	this.urlHashMap["SeatBeltIndication:39:13"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:13";
	/* <S2>:32 */
	this.urlHashMap["SeatBeltIndication:39:32"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:32";
	/* <S2>:31 */
	this.urlHashMap["SeatBeltIndication:39:31"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:31";
	/* <S2>:35 */
	this.urlHashMap["SeatBeltIndication:39:35"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:35";
	/* <S2>:36 */
	this.urlHashMap["SeatBeltIndication:39:36"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:36";
	/* <S2>:25 */
	this.urlHashMap["SeatBeltIndication:39:25"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:25";
	/* <S2>:37 */
	this.urlHashMap["SeatBeltIndication:39:37"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:37";
	/* <S2>:38 */
	this.urlHashMap["SeatBeltIndication:39:38"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:38";
	/* <S2>:39 */
	this.urlHashMap["SeatBeltIndication:39:39"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:39";
	/* <S2>:41 */
	this.urlHashMap["SeatBeltIndication:39:41"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:41";
	/* <S2>:40 */
	this.urlHashMap["SeatBeltIndication:39:40"] = "msg=rtwMsg_optimizedSfObject&block=SeatBeltIndication:39:40";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "SeatBeltIndication"};
	this.sidHashMap["SeatBeltIndication"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "SeatBeltIndication:30"};
	this.sidHashMap["SeatBeltIndication:30"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "SeatBeltIndication:39"};
	this.sidHashMap["SeatBeltIndication:39"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/RPort_Key"] = {sid: "SeatBeltIndication:2"};
	this.sidHashMap["SeatBeltIndication:2"] = {rtwname: "<Root>/RPort_Key"};
	this.rtwnameHashMap["<Root>/RPort_SeatBeltFasten"] = {sid: "SeatBeltIndication:3"};
	this.sidHashMap["SeatBeltIndication:3"] = {rtwname: "<Root>/RPort_SeatBeltFasten"};
	this.rtwnameHashMap["<Root>/RPort_Speed"] = {sid: "SeatBeltIndication:4"};
	this.sidHashMap["SeatBeltIndication:4"] = {rtwname: "<Root>/RPort_Speed"};
	this.rtwnameHashMap["<Root>/RPort_SpeedLimit"] = {sid: "SeatBeltIndication:9"};
	this.sidHashMap["SeatBeltIndication:9"] = {rtwname: "<Root>/RPort_SpeedLimit"};
	this.rtwnameHashMap["<Root>/RPort_BlinkPeriod"] = {sid: "SeatBeltIndication:10"};
	this.sidHashMap["SeatBeltIndication:10"] = {rtwname: "<Root>/RPort_BlinkPeriod"};
	this.rtwnameHashMap["<Root>/Runnable_csb"] = {sid: "SeatBeltIndication:23"};
	this.sidHashMap["SeatBeltIndication:23"] = {rtwname: "<Root>/Runnable_csb"};
	this.rtwnameHashMap["<Root>/SeatBeltIndication"] = {sid: "SeatBeltIndication:30"};
	this.sidHashMap["SeatBeltIndication:30"] = {rtwname: "<Root>/SeatBeltIndication"};
	this.rtwnameHashMap["<Root>/PPort_SeatBeltIcon"] = {sid: "SeatBeltIndication:5"};
	this.sidHashMap["SeatBeltIndication:5"] = {rtwname: "<Root>/PPort_SeatBeltIcon"};
	this.rtwnameHashMap["<S1>/RPort_Key"] = {sid: "SeatBeltIndication:34"};
	this.sidHashMap["SeatBeltIndication:34"] = {rtwname: "<S1>/RPort_Key"};
	this.rtwnameHashMap["<S1>/RPort_SeatBeltFasten"] = {sid: "SeatBeltIndication:35"};
	this.sidHashMap["SeatBeltIndication:35"] = {rtwname: "<S1>/RPort_SeatBeltFasten"};
	this.rtwnameHashMap["<S1>/RPort_Speed"] = {sid: "SeatBeltIndication:36"};
	this.sidHashMap["SeatBeltIndication:36"] = {rtwname: "<S1>/RPort_Speed"};
	this.rtwnameHashMap["<S1>/RPort_SpeedLimit"] = {sid: "SeatBeltIndication:37"};
	this.sidHashMap["SeatBeltIndication:37"] = {rtwname: "<S1>/RPort_SpeedLimit"};
	this.rtwnameHashMap["<S1>/RPort_BlinkPeriod"] = {sid: "SeatBeltIndication:38"};
	this.sidHashMap["SeatBeltIndication:38"] = {rtwname: "<S1>/RPort_BlinkPeriod"};
	this.rtwnameHashMap["<S1>/function"] = {sid: "SeatBeltIndication:32"};
	this.sidHashMap["SeatBeltIndication:32"] = {rtwname: "<S1>/function"};
	this.rtwnameHashMap["<S1>/SeatBeltIndication_StateFlow"] = {sid: "SeatBeltIndication:39"};
	this.sidHashMap["SeatBeltIndication:39"] = {rtwname: "<S1>/SeatBeltIndication_StateFlow"};
	this.rtwnameHashMap["<S1>/PPort_SeatBeltIcon"] = {sid: "SeatBeltIndication:40"};
	this.sidHashMap["SeatBeltIndication:40"] = {rtwname: "<S1>/PPort_SeatBeltIcon"};
	this.rtwnameHashMap["<S2>:10"] = {sid: "SeatBeltIndication:39:10"};
	this.sidHashMap["SeatBeltIndication:39:10"] = {rtwname: "<S2>:10"};
	this.rtwnameHashMap["<S2>:8"] = {sid: "SeatBeltIndication:39:8"};
	this.sidHashMap["SeatBeltIndication:39:8"] = {rtwname: "<S2>:8"};
	this.rtwnameHashMap["<S2>:11"] = {sid: "SeatBeltIndication:39:11"};
	this.sidHashMap["SeatBeltIndication:39:11"] = {rtwname: "<S2>:11"};
	this.rtwnameHashMap["<S2>:22"] = {sid: "SeatBeltIndication:39:22"};
	this.sidHashMap["SeatBeltIndication:39:22"] = {rtwname: "<S2>:22"};
	this.rtwnameHashMap["<S2>:23"] = {sid: "SeatBeltIndication:39:23"};
	this.sidHashMap["SeatBeltIndication:39:23"] = {rtwname: "<S2>:23"};
	this.rtwnameHashMap["<S2>:26"] = {sid: "SeatBeltIndication:39:26"};
	this.sidHashMap["SeatBeltIndication:39:26"] = {rtwname: "<S2>:26"};
	this.rtwnameHashMap["<S2>:27"] = {sid: "SeatBeltIndication:39:27"};
	this.sidHashMap["SeatBeltIndication:39:27"] = {rtwname: "<S2>:27"};
	this.rtwnameHashMap["<S2>:28"] = {sid: "SeatBeltIndication:39:28"};
	this.sidHashMap["SeatBeltIndication:39:28"] = {rtwname: "<S2>:28"};
	this.rtwnameHashMap["<S2>:24"] = {sid: "SeatBeltIndication:39:24"};
	this.sidHashMap["SeatBeltIndication:39:24"] = {rtwname: "<S2>:24"};
	this.rtwnameHashMap["<S2>:9"] = {sid: "SeatBeltIndication:39:9"};
	this.sidHashMap["SeatBeltIndication:39:9"] = {rtwname: "<S2>:9"};
	this.rtwnameHashMap["<S2>:18"] = {sid: "SeatBeltIndication:39:18"};
	this.sidHashMap["SeatBeltIndication:39:18"] = {rtwname: "<S2>:18"};
	this.rtwnameHashMap["<S2>:19"] = {sid: "SeatBeltIndication:39:19"};
	this.sidHashMap["SeatBeltIndication:39:19"] = {rtwname: "<S2>:19"};
	this.rtwnameHashMap["<S2>:20"] = {sid: "SeatBeltIndication:39:20"};
	this.sidHashMap["SeatBeltIndication:39:20"] = {rtwname: "<S2>:20"};
	this.rtwnameHashMap["<S2>:21"] = {sid: "SeatBeltIndication:39:21"};
	this.sidHashMap["SeatBeltIndication:39:21"] = {rtwname: "<S2>:21"};
	this.rtwnameHashMap["<S2>:13"] = {sid: "SeatBeltIndication:39:13"};
	this.sidHashMap["SeatBeltIndication:39:13"] = {rtwname: "<S2>:13"};
	this.rtwnameHashMap["<S2>:32"] = {sid: "SeatBeltIndication:39:32"};
	this.sidHashMap["SeatBeltIndication:39:32"] = {rtwname: "<S2>:32"};
	this.rtwnameHashMap["<S2>:31"] = {sid: "SeatBeltIndication:39:31"};
	this.sidHashMap["SeatBeltIndication:39:31"] = {rtwname: "<S2>:31"};
	this.rtwnameHashMap["<S2>:35"] = {sid: "SeatBeltIndication:39:35"};
	this.sidHashMap["SeatBeltIndication:39:35"] = {rtwname: "<S2>:35"};
	this.rtwnameHashMap["<S2>:36"] = {sid: "SeatBeltIndication:39:36"};
	this.sidHashMap["SeatBeltIndication:39:36"] = {rtwname: "<S2>:36"};
	this.rtwnameHashMap["<S2>:25"] = {sid: "SeatBeltIndication:39:25"};
	this.sidHashMap["SeatBeltIndication:39:25"] = {rtwname: "<S2>:25"};
	this.rtwnameHashMap["<S2>:37"] = {sid: "SeatBeltIndication:39:37"};
	this.sidHashMap["SeatBeltIndication:39:37"] = {rtwname: "<S2>:37"};
	this.rtwnameHashMap["<S2>:38"] = {sid: "SeatBeltIndication:39:38"};
	this.sidHashMap["SeatBeltIndication:39:38"] = {rtwname: "<S2>:38"};
	this.rtwnameHashMap["<S2>:39"] = {sid: "SeatBeltIndication:39:39"};
	this.sidHashMap["SeatBeltIndication:39:39"] = {rtwname: "<S2>:39"};
	this.rtwnameHashMap["<S2>:41"] = {sid: "SeatBeltIndication:39:41"};
	this.sidHashMap["SeatBeltIndication:39:41"] = {rtwname: "<S2>:41"};
	this.rtwnameHashMap["<S2>:40"] = {sid: "SeatBeltIndication:39:40"};
	this.sidHashMap["SeatBeltIndication:39:40"] = {rtwname: "<S2>:40"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
