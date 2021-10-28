"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageCycleServiceType = exports.RegisterEventListenerType = exports.BridgerPayResultType = exports.PayChannelExtendType = exports.PayChannelType = exports.SupportApplyPayType = exports.IosPayType = exports.AndroidPayType = exports.PermissionType = exports.NavigationMethodType = exports.MapIdType = exports.ResetNavigationBarType = exports.MinProgramEnvType = exports.ShareMinProgramType = exports.ShareType = exports.ShareViewType = exports.SureType = exports.MinProgramInterfaceType = void 0;
var MinProgramInterfaceType;
(function (MinProgramInterfaceType) {
    MinProgramInterfaceType[MinProgramInterfaceType["Wechat"] = 1] = "Wechat";
    MinProgramInterfaceType[MinProgramInterfaceType["baidu"] = 2] = "baidu";
    MinProgramInterfaceType[MinProgramInterfaceType["alipay"] = 3] = "alipay";
    MinProgramInterfaceType[MinProgramInterfaceType["toutiao"] = 4] = "toutiao";
})(MinProgramInterfaceType = exports.MinProgramInterfaceType || (exports.MinProgramInterfaceType = {}));
var SureType;
(function (SureType) {
    SureType["No"] = "0";
    SureType["Yes"] = "1";
})(SureType = exports.SureType || (exports.SureType = {}));
var ShareViewType;
(function (ShareViewType) {
    ShareViewType["All"] = "1";
    ShareViewType["WechatCard"] = "2";
    ShareViewType["WechatMoments"] = "3";
    ShareViewType["QQCard"] = "4";
    ShareViewType["QQZone"] = "5";
    ShareViewType["WechatAll"] = "2,3";
    ShareViewType["QQAll"] = "4,5";
    ShareViewType["CardAll"] = "2,4";
    ShareViewType["MonentsZone"] = "3,5";
})(ShareViewType = exports.ShareViewType || (exports.ShareViewType = {}));
var ShareType;
(function (ShareType) {
    ShareType["WechatCard"] = "0";
    ShareType["WechatMoments"] = "1";
    ShareType["QQCard"] = "2";
    ShareType["QQZone"] = "3";
})(ShareType = exports.ShareType || (exports.ShareType = {}));
var ShareMinProgramType;
(function (ShareMinProgramType) {
    ShareMinProgramType["MinProgram"] = "4";
})(ShareMinProgramType = exports.ShareMinProgramType || (exports.ShareMinProgramType = {}));
var MinProgramEnvType;
(function (MinProgramEnvType) {
    MinProgramEnvType["Prd"] = "0";
    MinProgramEnvType["Dev"] = "1";
    MinProgramEnvType["Experience"] = "2";
})(MinProgramEnvType = exports.MinProgramEnvType || (exports.MinProgramEnvType = {}));
var ResetNavigationBarType;
(function (ResetNavigationBarType) {
    ResetNavigationBarType["titleText"] = "titleText";
    ResetNavigationBarType["titleColor"] = "titleColor";
    ResetNavigationBarType["rightButton"] = "rightButton";
    ResetNavigationBarType["rightMenu"] = "rightMenu";
    ResetNavigationBarType["leftBackButton"] = "leftBackButton";
})(ResetNavigationBarType = exports.ResetNavigationBarType || (exports.ResetNavigationBarType = {}));
var MapIdType;
(function (MapIdType) {
    MapIdType["Amap"] = "0";
    MapIdType["Baidu"] = "1";
    MapIdType["Apple"] = "2";
})(MapIdType = exports.MapIdType || (exports.MapIdType = {}));
var NavigationMethodType;
(function (NavigationMethodType) {
    NavigationMethodType["Drive"] = "0";
    NavigationMethodType["Bus"] = "1";
    NavigationMethodType["walk"] = "2";
    NavigationMethodType["Riding"] = "3";
})(NavigationMethodType = exports.NavigationMethodType || (exports.NavigationMethodType = {}));
var PermissionType;
(function (PermissionType) {
    PermissionType["Notification"] = "NOTIFICATION";
    PermissionType["ReadCalendar"] = "READ_CALENDAR";
    PermissionType["WriteCalendar"] = "WRITE_CALENDAR";
    PermissionType["Camera"] = "CAMERA";
    PermissionType["ReadContacts"] = "READ_CONTACTS";
    PermissionType["WriteContacts"] = "WRITE_CONTACTS";
    PermissionType["GetAccounts"] = "GET_ACCOUNTS";
    PermissionType["AccessCoarseLocation"] = "ACCESS_COARSE_LOCATION";
    PermissionType["AccessFineLocation"] = "ACCESS_FINE_LOCATION";
    PermissionType["RecordAudio"] = "RECORD_AUDIO";
    PermissionType["ReadExternalStorage"] = "READ_EXTERNAL_STORAGE";
    PermissionType["WriteExternalStorage"] = "WRITE_EXTERNAL_STORAGE";
    PermissionType["SendSms"] = "SEND_SMS";
    PermissionType["ReceiveSms"] = "RECEIVE_SMS";
    PermissionType["ReadSms"] = "READ_SMS";
    PermissionType["ReceiveMms"] = "RECEIVE_MMS";
    PermissionType["ReadPhoneState"] = "READ_PHONE_STATE";
    PermissionType["CallPhone"] = "CALL_PHONE";
})(PermissionType = exports.PermissionType || (exports.PermissionType = {}));
var AndroidPayType;
(function (AndroidPayType) {
    AndroidPayType["Huawei"] = "1";
})(AndroidPayType = exports.AndroidPayType || (exports.AndroidPayType = {}));
var IosPayType;
(function (IosPayType) {
    IosPayType["Expresscard"] = "1";
    IosPayType["UnionPay"] = "2";
    IosPayType["DiscoveryCard"] = "3";
    IosPayType["InteracCard"] = "4";
    IosPayType["MasterCard"] = "5";
    IosPayType["CreditCard"] = "6";
    IosPayType["Visa"] = "7";
})(IosPayType = exports.IosPayType || (exports.IosPayType = {}));
var SupportApplyPayType;
(function (SupportApplyPayType) {
    SupportApplyPayType["Support"] = "0";
    SupportApplyPayType["NotSupport"] = "1";
})(SupportApplyPayType = exports.SupportApplyPayType || (exports.SupportApplyPayType = {}));
var PayChannelType;
(function (PayChannelType) {
    PayChannelType["AliPay"] = "1";
    PayChannelType["WeChatPay"] = "2";
})(PayChannelType = exports.PayChannelType || (exports.PayChannelType = {}));
var PayChannelExtendType;
(function (PayChannelExtendType) {
    PayChannelExtendType["UnionPay"] = "3";
    PayChannelExtendType["ApplePay"] = "4";
})(PayChannelExtendType = exports.PayChannelExtendType || (exports.PayChannelExtendType = {}));
var BridgerPayResultType;
(function (BridgerPayResultType) {
    BridgerPayResultType["Success"] = "0";
    BridgerPayResultType["Cancel"] = "1";
    BridgerPayResultType["Failure"] = "2";
    BridgerPayResultType["NotInstalled"] = "3";
    BridgerPayResultType["ParamsError"] = "4";
})(BridgerPayResultType = exports.BridgerPayResultType || (exports.BridgerPayResultType = {}));
var RegisterEventListenerType;
(function (RegisterEventListenerType) {
    RegisterEventListenerType["SCREEN_SHOT"] = "SCREEN_SHOT";
})(RegisterEventListenerType = exports.RegisterEventListenerType || (exports.RegisterEventListenerType = {}));
var PageCycleServiceType;
(function (PageCycleServiceType) {
    PageCycleServiceType["didLoad"] = "didLoad";
    PageCycleServiceType["willAppear"] = "willAppear";
    PageCycleServiceType["didAppear"] = "didAppear";
    PageCycleServiceType["willDisappear"] = "willDisappear";
    PageCycleServiceType["didDisappear"] = "didDisappear";
    PageCycleServiceType["dealloc"] = "dealloc";
})(PageCycleServiceType = exports.PageCycleServiceType || (exports.PageCycleServiceType = {}));
