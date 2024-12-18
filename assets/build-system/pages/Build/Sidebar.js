import React from 'react';
const Sidebar = ({ components, onSelect }) => {
    return (React.createElement("div", { style: { width: '200px', borderRight: '1px solid #ddd', padding: '10px' } }, components.map((component) => (React.createElement("div", { key: component, draggable: true, onDragStart: () => onSelect(component), style: {
            marginBottom: '10px',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'grab',
        } }, component)))));
};
export default Sidebar;
//# sourceMappingURL=Sidebar.js.map