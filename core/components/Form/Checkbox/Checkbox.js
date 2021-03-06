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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var lib_1 = require("../../../lib");
var Checkbox = function (props) {
    var id = props.id, _a = props.type, type = _a === void 0 ? lib_1.CheckboxType.CHECKBOX : _a, labelText = props.labelText, className = props.className, checked = props.checked, disabled = props.disabled, attrs = __rest(props, ["id", "type", "labelText", "className", "checked", "disabled"]);
    var wrapperClasses = classnames_1["default"]('Checkbox', (checked || attrs.defaultChecked) && 'checked', { disabled: disabled }, className);
    var inputClasses = classnames_1["default"]('Checkbox__input');
    return (React.createElement("label", { className: wrapperClasses, htmlFor: id },
        React.createElement("span", { className: inputClasses }),
        React.createElement("input", __assign({ type: type, className: 'visually-hidden', id: id, checked: checked, disabled: disabled }, attrs)),
        labelText && (React.createElement("p", { className: 'Checkbox__label' }, labelText))));
};
exports.Checkbox = Checkbox;
