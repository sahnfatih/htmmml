import React from "react";
import * as S from "./Container.styles";
import * as AllComponents from "../../components";
const Components = AllComponents;
const Container = ({ cols, onUpdate, onDrop, onDragOver }) => {
    return (React.createElement(S.Container, null, cols.map((col) => (React.createElement(S.Col, { key: col.id, onDragOver: onDragOver, onDrop: (e) => {
            e.preventDefault();
            const data = e.dataTransfer.getData('component');
            if (!data)
                return;
            const component = JSON.parse(data);
            onDrop(col.id, component);
        } },
        React.createElement("h4", null, col.id),
        col.components.map((comp, index) => {
            const Component = Components[comp.name];
            if (!Component) {
                return React.createElement("div", { key: index },
                    "Component not found: ",
                    comp.name);
            }
            return React.createElement(Component, Object.assign({ key: index }, comp.props));
        }))))));
};
export default Container;
//# sourceMappingURL=index.js.map