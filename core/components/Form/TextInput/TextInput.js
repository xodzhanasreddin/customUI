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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var lib_1 = require("../../../lib");
var TextInput = function (props) {
    var id = props.id, _a = props.type, type = _a === void 0 ? lib_1.TextInputType.TEXT : _a, labelText = props.labelText, className = props.className, hasError = props.hasError, helpMessage = props.helpMessage, attrs = __rest(props, ["id", "type", "labelText", "className", "hasError", "helpMessage"]);
    var classes = classnames_1["default"]('form-group', 'TextInput', hasError && 'has-error', className);
    return (react_1["default"].createElement("div", { className: classes },
        labelText && (react_1["default"].createElement("label", { htmlFor: id }, labelText)),
        react_1["default"].createElement("input", __assign({ id: id, type: type, className: 'form-control form-control--custom' }, attrs)),
        helpMessage && (react_1["default"].createElement("span", { className: "help-block" }, helpMessage))));
};
exports.TextInput = TextInput;
