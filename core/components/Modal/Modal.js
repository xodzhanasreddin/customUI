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
var lib_1 = require("../../lib");
var Modal = function (props) {
    var className = props.className, id = props.id, buttonText = props.buttonText, _a = props.buttonIntent, buttonIntent = _a === void 0 ? lib_1.ButtonIntent.SECONDARY : _a, _b = props.buttonLarge, buttonLarge = _b === void 0 ? true : _b, modalTitle = props.modalTitle, children = props.children, attrs = __rest(props, ["className", "id", "buttonText", "buttonIntent", "buttonLarge", "modalTitle", "children"]);
    var classes = classnames_1["default"]('Modal', className);
    var modalButtonClasses = classnames_1["default"]('Modal-button', 'Button', 'btn', buttonIntent, buttonLarge && 'btn-lg');
    var closeButtonClasses = classnames_1["default"]('Modal-button__close', 'Button', 'btn', buttonIntent);
    var modalId = "Modal-" + id;
    var modalLabel = "ModalLabel-" + id;
    return (react_1["default"].createElement("div", __assign({ className: classes }, attrs),
        react_1["default"].createElement("button", { type: 'button', className: modalButtonClasses, "data-toggle": 'modal', "data-target": "#" + modalId }, buttonText),
        react_1["default"].createElement("div", { className: 'modal fade', id: modalId, tabIndex: -1, role: 'dialog', "aria-labelledby": modalLabel },
            react_1["default"].createElement("div", { className: 'modal-dialog', role: 'document' },
                react_1["default"].createElement("div", { className: 'modal-content' },
                    react_1["default"].createElement("div", { className: 'modal-header' },
                        react_1["default"].createElement("button", { type: 'button', className: 'close', "data-dismiss": 'modal', "aria-label": 'Close' },
                            react_1["default"].createElement("span", { "aria-hidden": 'true' }, "\u00D7")),
                        modalTitle && (react_1["default"].createElement("h4", { className: 'modal-title', id: modalLabel }, modalTitle))),
                    react_1["default"].createElement("div", { className: 'modal-body' }, children),
                    react_1["default"].createElement("div", { className: 'modal-footer' },
                        react_1["default"].createElement("button", { type: 'button', className: closeButtonClasses, "data-dismiss": 'modal' }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))))));
};
exports.Modal = Modal;
