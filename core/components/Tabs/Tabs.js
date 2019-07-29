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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var TabLabel_1 = require("./TabLabel/TabLabel");
var lib_1 = require("../../lib");
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.renderLabels = function () {
            var selectedTabId = _this.state.selectedTabId;
            var children = _this.props.children;
            return react_1["default"].Children.map(children, function (tab, idx) {
                if (!react_1["default"].isValidElement(tab)) {
                    return;
                }
                var _a = tab.props, icon = _a.icon, label = _a.label;
                return (react_1["default"].createElement(TabLabel_1.TabLabel, { id: idx, isActive: selectedTabId === idx, label: label, icon: icon, onTabClick: _this.onTabClick }));
            });
        };
        _this.renderTab = function () {
            var selectedTabId = _this.state.selectedTabId;
            var children = _this.props.children;
            return react_1["default"].Children.toArray(children).filter(function (tab, idx) {
                if (!react_1["default"].isValidElement(tab)) {
                    return;
                }
                return selectedTabId
                    ? idx === selectedTabId && tab
                    : idx === 0 && tab;
            });
        };
        _this.onTabClick = function (id, e) {
            if (_this.state.selectedTabId !== id) {
                _this.setState({ selectedTabId: id });
            }
        };
        var defaultTabId = props.defaultTabId;
        _this.state = {
            selectedTabId: defaultTabId ? defaultTabId : 0
        };
        return _this;
    }
    Tabs.prototype.render = function () {
        var _a = this.props, _b = _a.type, type = _b === void 0 ? lib_1.TabsType.TABS : _b, large = _a.large;
        var classes = classnames_1["default"]('nav', type, large && 'nav-tabs-lg');
        var tab = this.renderTab();
        var labels = this.renderLabels();
        return (react_1["default"].createElement("div", { className: 'Tabs' },
            react_1["default"].createElement("ul", { className: classes, role: 'tablist' }, labels),
            tab));
    };
    return Tabs;
}(react_1["default"].Component));
exports.Tabs = Tabs;
