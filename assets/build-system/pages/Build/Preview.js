import React, { useEffect, useState } from 'react';
const Preview = ({ selectedComponent, components, onAddComponent }) => {
    const [props, setProps] = useState({});
    const [propDefinitions, setPropDefinitions] = useState({}); // Props tipi bilgisi
    const [isAdding, setIsAdding] = useState(false); // Props girme sürecini kontrol eder
    useEffect(() => {
        if (selectedComponent) {
            const propsFilePath = `../components/${selectedComponent}/_generated/props.json`;
            fetch(propsFilePath)
                .then((res) => {
                if (res.ok)
                    return res.json();
                throw new Error(`Props file not found for ${selectedComponent}`);
            })
                .then((data) => setPropDefinitions(data))
                .catch((err) => {
                console.error(err);
                setPropDefinitions({});
            });
        }
    }, [selectedComponent]);
    const handleInputChange = (key, value) => {
        setProps(Object.assign(Object.assign({}, props), { [key]: value }));
    };
    const handleStartAdding = () => {
        if (Object.keys(propDefinitions).length > 0) {
            setIsAdding(true); // Props formunu aç
        }
        else {
            handleAdd(); // Props gerekmediği için doğrudan ekle
        }
    };
    const handleAdd = () => {
        if (selectedComponent) {
            onAddComponent(selectedComponent, props);
            setProps({});
            setIsAdding(false);
        }
    };
    if (!selectedComponent) {
        return React.createElement("div", { style: { padding: '20px' } }, "Select a component from the sidebar.");
    }
    const Component = components[selectedComponent];
    if (!Component) {
        return React.createElement("div", { style: { padding: '20px' } }, "Component not found.");
    }
    return (React.createElement("div", { style: { padding: '20px', flex: 1 } },
        React.createElement("h3", null,
            "Preview: ",
            selectedComponent),
        React.createElement("div", null, !isAdding ? (React.createElement("button", { onClick: handleStartAdding },
            "Add ",
            selectedComponent)) : (React.createElement("form", { onSubmit: (e) => {
                e.preventDefault();
                handleAdd();
            } },
            Object.entries(propDefinitions).map(([key, type]) => (React.createElement("div", { key: key },
                React.createElement("label", null,
                    key,
                    " (",
                    type,
                    "):",
                    React.createElement("input", { type: "text", value: props[key] || '', onChange: (e) => handleInputChange(key, e.target.value), required: true }))))),
            React.createElement("button", { type: "submit" }, "Confirm")))),
        React.createElement("div", { style: { marginTop: '20px' } },
            React.createElement("h4", null, "Live Preview:"),
            React.createElement(Component, Object.assign({}, props)))));
};
export default Preview;
//# sourceMappingURL=Preview.js.map