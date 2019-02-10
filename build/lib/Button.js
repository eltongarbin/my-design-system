"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./Button.css");
var noop = function () { };
exports.Button = function (props) {
    var children = props.children, onClick = props.onClick, _a = props.disabled, disabled = _a === void 0 ? false : _a;
    var disabledClass = disabled ? 'Button_disabled' : '';
    return (React.createElement("div", { className: "Button " + disabledClass, onClick: !disabled ? onClick : noop },
        React.createElement("span", null, children)));
};
//# sourceMappingURL=Button.js.map