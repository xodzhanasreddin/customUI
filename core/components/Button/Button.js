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
var Icon_1 = require("../Icon/Icon");
var Button = function (props) {
    var _a = props.children, children = _a === void 0 ? 'Default button' : _a, intent = props.intent, focused = props.focused, hovered = props.hovered, icon = props.icon, _b = props.iconAppend, iconAppend = _b === void 0 ? false : _b, _c = props.large, large = _c === void 0 ? false : _c, className = props.className, _d = props.type, type = _d === void 0 ? 'button' : _d, attrs = __rest(props, ["children", "intent", "focused", "hovered", "icon", "iconAppend", "large", "className", "type"]);
    var classes = classnames_1["default"]('Button', 'btn', large && 'btn-lg', intent, className, focused && 'focus', hovered && 'hover', attrs.disabled && 'disabled', icon && !iconAppend && 'btn-icon-prepend', icon && iconAppend && 'btn-icon-append');
    var Tag = attrs.href ? 'a' : 'button';
    return (react_1["default"].createElement(Tag, __assign({ className: classes, type: type }, attrs),
        icon && !iconAppend && (react_1["default"].createElement("span", { className: 'btn-icon' },
            react_1["default"].createElement(Icon_1.Icon, { iconName: icon }))),
        children,
        icon && iconAppend && (react_1["default"].createElement("span", { className: 'btn-icon' },
            react_1["default"].createElement(Icon_1.Icon, { iconName: icon })))));
};
exports.Button = Button;
