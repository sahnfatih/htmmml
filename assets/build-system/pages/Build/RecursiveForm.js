import React from "react";
const RecursiveForm = ({ definitions, values, onChange, }) => {
    return (React.createElement("div", null, Object.entries(definitions).map(([key, type]) => {
        if (typeof type === "object" && type !== null) {
            return (React.createElement("div", { key: key, style: { marginBottom: "10px", marginLeft: "20px" } },
                React.createElement("h4", null,
                    key,
                    " (Nested Object)"),
                React.createElement(RecursiveForm, { definitions: type, values: values[key] || {}, onChange: (subKey, subValue) => onChange(key, Object.assign(Object.assign({}, values[key]), { [subKey]: subValue })) })));
        }
        return (React.createElement("div", { key: key, style: { marginBottom: "10px" } },
            React.createElement("label", null,
                key,
                " (",
                type,
                "):",
                React.createElement("input", { type: "text", value: values[key] || "", onChange: (e) => onChange(key, e.target.value) }))));
    })));
};
export default RecursiveForm;
//# sourceMappingURL=RecursiveForm.js.map