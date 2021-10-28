"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("../tools");
var checktypes_1 = require("../checktypes");
var getCookie = function (key) {
    if (!tools_1.default.isClient()) {
        return '';
    }
    var cookieStr = document.cookie || '';
    var cookieList = cookieStr.split('; ');
    for (var i = 0; i < cookieList.length; i++) {
        var arr = cookieList[i].split('=');
        if (Array.isArray(arr) && arr.length > 0) {
            var cookieName = arr[0];
            var cookieValue = arr.slice(1).join('');
            if (cookieName === key) {
                return cookieValue;
            }
        }
        else {
            return '';
        }
    }
    return '';
};
function setCookie() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!tools_1.default.isClient()) {
        return '';
    }
    var params;
    var key;
    var value;
    var expired;
    var domain;
    params = args[0], value = args[1], expired = args[2];
    if (checktypes_1.isObject(params)) {
        key = params.key;
        value = params.value;
        domain = params.domain;
        if (params.expired) {
            expired = params.expired;
        }
    }
    else {
        key = params;
    }
    var cookiePath = key + '=' + value + ';path=/';
    if (checktypes_1.isNumber(expired)) {
        var oDate = new Date();
        oDate.setTime(oDate.getTime() + expired * 1000);
        cookiePath += ';expires=' + oDate.toUTCString();
    }
    if (domain) {
        cookiePath += ';domain=' + domain;
    }
    document.cookie = cookiePath;
}
var delCookie = function (key, domain) {
    if (domain) {
        setCookie({
            key: key,
            value: '',
            domain: domain,
            expired: -1000,
        });
    }
    else {
        setCookie(key, '', -1000);
    }
};
var dmCookie = {
    get: getCookie,
    set: setCookie,
    del: delCookie,
};
exports.default = dmCookie;
