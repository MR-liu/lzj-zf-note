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
var tools_1 = require("../tools");
var checktypes_1 = require("../checktypes");
var parse = function (_url) {
    var url = _url || '';
    if (!url && tools_1.default.isClient()) {
        url = location.search;
    }
    try {
        var result_1 = {};
        var data = void 0;
        var queryStartIndex = url.indexOf('?');
        if (queryStartIndex !== -1) {
            url = url.slice(queryStartIndex + 1);
        }
        else {
            return {};
        }
        data = url.split('&');
        if (data.length === 0) {
            return result_1;
        }
        data.forEach(function (item) {
            var items = item.split('=');
            if (items[0]) {
                result_1[items[0]] = items.slice(1).join('=') || '';
            }
        });
        return result_1;
    }
    catch (e) {
        console.error(e);
        return {};
    }
};
var get = function (key) {
    return parse()[key] || '';
};
var format = function (data, prefix) {
    if (data === void 0) { data = {}; }
    if (prefix === void 0) { prefix = ''; }
    var _a = prefix.split('?'), hostpath = _a[0], search = _a[1];
    var queryString = '';
    if (checktypes_1.isObject(data)) {
        var queryParams_1 = {};
        if (search) {
            queryParams_1 = parse('?' + search);
        }
        queryParams_1 = __assign(__assign({}, queryParams_1), data);
        queryString = Object.keys(queryParams_1).map(function (key) {
            return key + "=" + queryParams_1[key];
        }).join('&');
    }
    else {
        return prefix;
    }
    return hostpath + '?' + queryString;
};
var dmUrl = {
    parse: parse,
    format: format,
    get: get,
};
exports.default = dmUrl;
