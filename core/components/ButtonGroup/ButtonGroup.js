"use strict";
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
var Button_1 = require("../Button/Button");
var ButtonGroup = function (props) {
    var children = props.children, _a = props.indented, indented = _a === void 0 ? true : _a, _b = props.large, large = _b === void 0 ? false : _b, className = props.className;
    var buttons = React.Children
        .toArray(children)
        .filter(function (button) { return React.isValidElement(button) && button.type === Button_1.Button; })
        .map(function (button) {
        return React.cloneElement(button, { large: large });
    });
    var classes = classnames_1["default"](indented ? 'buttons-group' : 'btn-group', className);
    var role = indented ? 'group' : '';
    return (React.createElement("div", { className: classes, role: role }, buttons));
};
exports.ButtonGroup = ButtonGroup;
