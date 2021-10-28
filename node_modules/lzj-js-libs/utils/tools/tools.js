"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWechatVersion = exports.compareVersion = void 0;
var cookie_1 = require("../cookie");
var env_1 = require("../env");
var compareVersion = function (v1, v2) {
    var _v1 = v1.split('.');
    var _v2 = v2.split('.');
    var _r = parseInt(_v1[0], 10) - parseInt(_v2[0], 10);
    return _r === 0 && v1 !== v2
        ? exports.compareVersion(_v1.splice(1).join('.'), _v2.splice(1).join('.'))
        : _r;
};
exports.compareVersion = compareVersion;
var isClient = function () { return typeof window !== 'undefined'; };
var getMinProgramsInterface = function () {
    return new Promise(function (resolve) {
        if (!isClient()) {
            resolve(null);
            return;
        }
        var _window = window;
        if (env_1.default.isWechat()) {
            if ('wx' in _window) {
                wx.miniProgram.getEnv(function (res) {
                    if (res.miniprogram) {
                        resolve(__assign({ minProgramsType: 1 }, wx));
                    }
                    else {
                        resolve(null);
                    }
                });
            }
            else {
                resolve(null);
            }
        }
        else if (env_1.default.isBaiduApp()) {
            if ('swan' in _window && !!swan) {
                swan.webView.getEnv(function (res) {
                    if (res.smartprogram) {
                        swan.miniProgram = Object.assign({}, swan.webView);
                        resolve(__assign({ minProgramsType: 2 }, swan));
                    }
                    else {
                        resolve(null);
                    }
                });
            }
            else {
                resolve(null);
            }
        }
        else if (env_1.default.isAlipayClient()) {
            if ('my' in _window) {
                my.getEnv(function (res) {
                    if (res.miniprogram) {
                        resolve({
                            minProgramsType: 3,
                            miniProgram: my,
                        });
                    }
                    else {
                        resolve(null);
                    }
                });
            }
            else {
                resolve(null);
            }
        }
        else if (env_1.default.isToutiaoSeriesMinProgram()) {
            if ('tt' in _window) {
                tt.miniProgram ? resolve(__assign({ minProgramsType: 4 }, tt)) : resolve(null);
            }
            else {
                resolve(null);
            }
        }
        else {
            resolve(null);
        }
    });
};
var compareAppVersion = function (version) {
    var APP_VERSION = cookie_1.default.get('app_version');
    return exports.compareVersion(APP_VERSION, version);
};
var getWechatVersion = function (userAgent) {
    var ua = userAgent ? userAgent.toLowerCase() : '';
    if (env_1.default.isWechat(ua)) {
        var wechatInfo = (ua || navigator.userAgent.toLowerCase()).match(/MicroMessenger\/([\d\.]+)/i);
        var wechatVersion = '0.0.0';
        if (wechatInfo) {
            wechatVersion = wechatInfo[1];
        }
        return wechatVersion;
    }
    return '0.0.0';
};
exports.getWechatVersion = getWechatVersion;
var tools = {
    compareVersion: exports.compareVersion,
    compareAppVersion: compareAppVersion,
    getMinProgramsInterface: getMinProgramsInterface,
    isClient: isClient,
};
exports.default = tools;
