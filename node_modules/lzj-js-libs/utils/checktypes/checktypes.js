"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = exports.isString = exports.isNumber = exports.isRegExp = exports.isDate = exports.isObject = exports.isArray = exports.isFunction = void 0;
var TYPES_LIST = 'Boolean Number String Function Array Date RegExp Object Error Null Undefined'.split(' ');
var TYPES_OBJECT = {};
TYPES_LIST.forEach(function (item) {
    TYPES_OBJECT["is" + item] = function (data) {
        return Object.prototype.toString.call(data) === '[object ' + item + ']';
    };
});
exports.isFunction = TYPES_OBJECT.isFunction;
exports.isArray = TYPES_OBJECT.isArray;
exports.isObject = TYPES_OBJECT.isObject;
exports.isDate = TYPES_OBJECT.isDate;
exports.isRegExp = TYPES_OBJECT.isRegExp;
exports.isNumber = TYPES_OBJECT.isNumber;
exports.isString = TYPES_OBJECT.isString;
exports.isBoolean = TYPES_OBJECT.isBoolean;
