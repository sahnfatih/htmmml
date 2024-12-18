import React, { useState, useEffect } from "react";
import typesMap from "../../types/typesMap";
const Modal = ({ componentName, propDefinitions, onClose, onSubmit, }) => {
    const [props, setProps] = useState({});
    const [resolvedDefinitions, setResolvedDefinitions] = useState(propDefinitions);
    useEffect(() => {
        const resolveDefinitions = (definitions) => {
            const resolved = {};
            Object.entries(definitions).forEach(([key, type]) => {
                if (typeof type === "string" && typesMap[type]) {
                    // Eğer tür başka bir nesneyse, çözümle
                    resolved[key] = typesMap[type];
                }
                else {
                    resolved[key] = type;
                }
            });
            return resolved;
        };
        setResolvedDefinitions(resolveDefinitions(propDefinitions));
    }, [propDefinitions]);
    const handleInputChange = (key, value) => {
        setProps(Object.assign(Object.assign({}, props), { [key]: value }));
    };
    const handleSubmit = () => {
        onSubmit(props);
        setProps({});
    };
    return (React.createElement("div", { style: {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            zIndex: 1000,
        } },
        React.createElement("h3", null,
            "Add ",
            componentName),
        React.createElement("form", { onSubmit: (e) => {
                e.preventDefault();
                handleSubmit();
            } },
            Object.entries(resolvedDefinitions).map(([key, type]) => (React.createElement("div", { key: key, style: { marginBottom: "10px" } },
                React.createElement("label", null,
                    key,
                    " (",
                    typeof type === "object" ? "Nested Object" : type,
                    "):"),
                typeof type === "object" ? (React.createElement("div", { style: { marginLeft: "20px" } }, Object.entries(type).map(([nestedKey, nestedType]) => {
                    var _a;
                    return (React.createElement("div", { key: nestedKey },
                        React.createElement("label", null,
                            nestedKey,
                            " (",
                            nestedType,
                            "):"),
                        React.createElement("input", { type: "text", value: ((_a = props[key]) === null || _a === void 0 ? void 0 : _a[nestedKey]) || "", onChange: (e) => handleInputChange(key, Object.assign(Object.assign({}, props[key]), { [nestedKey]: e.target.value })) })));
                }))) : (React.createElement("input", { type: "text", value: props[key] || "", onChange: (e) => handleInputChange(key, e.target.value) }))))),
            React.createElement("button", { type: "button", onClick: handleSubmit }, "Add Component"),
            React.createElement("button", { type: "button", onClick: onClose, style: { marginLeft: "10px" } }, "Cancel"))));
};
export default Modal;
//# sourceMappingURL=Modal.js.map