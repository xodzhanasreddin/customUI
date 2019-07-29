"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Tab = function (_a) {
    var label = _a.label, panel = _a.panel, withTitle = _a.withTitle;
    return (react_1["default"].createElement("div", { className: 'Tabs__panel' },
        withTitle && react_1["default"].createElement("h3", null, label),
        panel));
};
exports.Tab = Tab;
