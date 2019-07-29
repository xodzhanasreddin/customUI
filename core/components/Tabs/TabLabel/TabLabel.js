"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Icon_1 = require("../../Icon/Icon");
var TabLabel = function (props) {
    var label = props.label, id = props.id, isActive = props.isActive, onTabClick = props.onTabClick, icon = props.icon;
    var handleClick = function (e) { return onTabClick(id, e); };
    var classes = classnames_1["default"](isActive && 'active');
    return (react_1["default"].createElement("li", { className: classes, onClick: handleClick },
        react_1["default"].createElement("a", { role: 'tab', "data-toggle": 'tab' },
            icon && react_1["default"].createElement(Icon_1.Icon, { iconName: icon, className: 'tab-icon' }),
            label)));
};
exports.TabLabel = TabLabel;
