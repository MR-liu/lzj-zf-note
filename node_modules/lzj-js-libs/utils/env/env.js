"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUserAgent = function (ua) {
    if (ua) {
        return ua.toLowerCase();
    }
    return typeof window !== undefined && navigator.userAgent ? navigator.userAgent.toLowerCase() : '';
};
var isWechat = function (userAgent) {
    return /micromessenger/i.test(getUserAgent(userAgent));
};
var isBaiduApp = function (userAgent) {
    return /baiduboxapp/i.test(getUserAgent(userAgent));
};
var isAndroid = function (userAgent) {
    return /android/i.test(getUserAgent(userAgent));
};
var isIos = function (userAgent) {
    var ua = getUserAgent(userAgent);
    return /iphone os/i.test(ua) || /ipad/i.test(ua);
};
var isAlipayClient = function (userAgent) {
    return (getUserAgent(userAgent)).indexOf('AlipayClient') > -1;
};
var isWechatMinProgram = function (userAgent) {
    var ua = getUserAgent(userAgent);
    return isWechat(ua) && ua.indexOf('miniprogram') > -1;
};
var isToutiao = function (userAgent) {
    return (getUserAgent(userAgent)).indexOf('newsarticle') > -1;
};
var isDouyin = function (userAgent) {
    return (getUserAgent(userAgent)).indexOf('aweme') > -1;
};
var isXigua = function (userAgent) {
    return (getUserAgent(userAgent)).indexOf('videoarticle') > -1;
};
var isHuoshan = function (userAgent) {
    return (getUserAgent(userAgent)).indexOf('live_stream') > -1;
};
var isToutiaoSeriesApp = function (userAgent) {
    var ua = getUserAgent(userAgent);
    return isToutiao(ua) || isDouyin(ua) || isXigua(ua) || isHuoshan(ua);
};
var isToutiaoSeries = function (userAgent) { return isToutiaoSeriesApp(userAgent); };
var isToutiaoSeriesMinProgram = function (userAgent) {
    var ua = getUserAgent(userAgent);
    return ua.indexOf('toutiaomicroapp') > -1;
};
var isKuaishou = function (userAgent) {
    return (getUserAgent(userAgent)).indexOf('kwai') > -1;
};
var device = {
    getUserAgent: getUserAgent,
    isWechat: isWechat,
    isBaiduApp: isBaiduApp,
    isAndroid: isAndroid,
    isIos: isIos,
    isWechatMinProgram: isWechatMinProgram,
    isAlipayClient: isAlipayClient,
    isToutiao: isToutiao,
    isDouyin: isDouyin,
    isXigua: isXigua,
    isHuoshan: isHuoshan,
    isToutiaoSeries: isToutiaoSeries,
    isToutiaoSeriesApp: isToutiaoSeriesApp,
    isToutiaoSeriesMinProgram: isToutiaoSeriesMinProgram,
    isKuaishou: isKuaishou,
};
exports.default = device;
