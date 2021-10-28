"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localStorage = exports.sessionStorage = void 0;
var checktypes_1 = require("../checktypes");
var tools_1 = require("../tools");
var formatData = function (_value, expired) {
    if (expired === void 0) { expired = 0; }
    var value = _value;
    if (checktypes_1.isObject(value)) {
        value = JSON.stringify(_value);
    }
    var data = {
        value: value,
    };
    if (!isNaN(expired) && expired !== 0) {
        data.expired = expired;
        data.now = +new Date();
    }
    return JSON.stringify(data);
};
var getKey = function (key) { return key; };
function setStorage(type) {
    var storageInterface = {
        setItem: function () { },
        getItem: function () { return null; },
        removeItem: function () { },
        clear: function () { },
        length: 0,
        key: function () { return null; },
    };
    if (tools_1.default.isClient()) {
        if (type === 'session') {
            storageInterface = window.sessionStorage;
        }
        else {
            storageInterface = window.localStorage;
        }
    }
    function set() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!tools_1.default.isClient()) {
            return false;
        }
        var key = args[0], value = args[1], expired = args[2];
        storageInterface.setItem(getKey(key), formatData(value, expired));
    }
    return {
        set: set,
        get: function (key) {
            if (!tools_1.default.isClient()) {
                return '';
            }
            var resultStr = storageInterface.getItem(getKey(key));
            if (resultStr === null) {
                return null;
            }
            try {
                var result = JSON.parse(resultStr);
                if (result.now && result.expired && +new Date() > result.now + result.expired) {
                    storageInterface.removeItem(getKey(key));
                    return null;
                }
                return result.value;
            }
            catch (e) {
                return null;
            }
        },
        del: function (key) {
            if (!tools_1.default.isClient()) {
                return false;
            }
            storageInterface.removeItem(getKey(key));
        },
        clear: function () {
            if (!tools_1.default.isClient()) {
                return false;
            }
            storageInterface.clear();
        },
    };
}
var ss = setStorage('session');
var ls = setStorage('local');
var storageBase = {
    session: ss,
    local: ls,
};
var storage = storageBase;
exports.default = storage;
exports.sessionStorage = storageBase.session;
exports.localStorage = storageBase.local;
