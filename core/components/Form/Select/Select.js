"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (e) {
            var target = e.target;
            var value = target.value;
            console.log(value);
            _this.props.handleChange(value);
        };
        return _this;
    }
    Select.prototype.componentDidMount = function () {
        $('.selectpicker').selectpicker();
    };
    Select.prototype.render = function () {
        var _a = this.props, options = _a.options, _b = _a.withSearch, withSearch = _b === void 0 ? false : _b, value = _a.value, className = _a.className, disabled = _a.disabled, attrs = __rest(_a, ["options", "withSearch", "value", "className", "disabled"]);
        var wrapperClasses = classnames_1["default"]('form-group', 'Select', disabled && 'disabled', className);
        var selectClasses = classnames_1["default"]('selectpicker');
        return (react_1["default"].createElement("div", { className: wrapperClasses },
            react_1["default"].createElement("select", __assign({ className: selectClasses, "data-style": '', "data-width": 'auto', "data-live-search": withSearch, onChange: this.handleChange, disabled: disabled, value: value }, attrs), options)));
    };
    return Select;
}(react_1["default"].Component));
exports.Select = Select;
