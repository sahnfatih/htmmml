// Build.tsx
import React, { useState } from 'react';
import * as AllComponents from '../../components';
import componentsList from './componentsList';
import styles from './Build.module.css';
import pagesList from './pageList';
import ComponentCustomizer from './ComponentCustomizer';
const Components = AllComponents;
const Build = () => {
    const [selectedPage, setSelectedPage] = useState('home');
    const [selectedView, setSelectedView] = useState('web');
    const [showComponentsList, setShowComponentsList] = useState(false);
    const [showPagesList, setShowPagesList] = useState(false);
    const [showAddPage, setShowAddPage] = useState(false);
    const [sidebarContent, setSidebarContent] = useState('default');
    const [pageContent, setPageContent] = useState({
        home: { components: [] },
        product: { components: [] },
        checkout: { components: [] }
    });
    const [selectedComponent, setSelectedComponent] = useState(null);
    const handleSave = () => {
        console.log('Saving page content:', pageContent);
    };
    const handleAddComponent = (componentName) => {
        setSelectedComponent({
            name: componentName,
            index: pageContent[selectedPage].components.length
        });
        setSidebarContent('customizer');
    };
    const handlePropsChange = (newProps) => {
        if (!selectedComponent)
            return;
        setPageContent(prev => (Object.assign(Object.assign({}, prev), { [selectedPage]: {
                components: prev[selectedPage].components.map((comp, index) => index === selectedComponent.index
                    ? Object.assign(Object.assign({}, comp), { props: newProps }) : comp)
            } })));
    };
    const handleCustomizerClose = () => {
        setSelectedComponent(null);
        setSidebarContent('default');
    };
    const handleComponentSubmit = (props) => {
        if (!selectedComponent)
            return;
        if (selectedComponent.index >= pageContent[selectedPage].components.length) {
            setPageContent(prev => (Object.assign(Object.assign({}, prev), { [selectedPage]: {
                    components: [
                        ...prev[selectedPage].components,
                        { name: selectedComponent.name, props }
                    ]
                } })));
        }
        else {
            handlePropsChange(props);
        }
        setSelectedComponent(null);
        setSidebarContent('default');
    };
    const handleShowPages = () => {
        setShowPagesList(true);
        setShowComponentsList(false);
        setShowAddPage(false);
    };
    const handleAddPageClick = () => {
        setShowAddPage(true);
        setShowPagesList(false);
    };
    const handleDeleteComponent = (index) => {
        setPageContent(prev => (Object.assign(Object.assign({}, prev), { [selectedPage]: {
                components: prev[selectedPage].components.filter((_, i) => i !== index)
            } })));
    };
    const handleEditComponent = (index) => {
        const component = pageContent[selectedPage].components[index];
        setSelectedComponent({
            name: component.name,
            index: index
        });
        setSidebarContent('customizer');
    };
    return (React.createElement("div", { className: styles.layoutContainer },
        React.createElement("aside", { className: styles.sidebar }, sidebarContent === 'customizer' && selectedComponent ? (React.createElement(ComponentCustomizer, { componentType: selectedComponent.name, currentProps: selectedComponent.index < pageContent[selectedPage].components.length
                ? pageContent[selectedPage].components[selectedComponent.index].props
                : {}, onPropsChange: handlePropsChange, onClose: handleCustomizerClose })) : showComponentsList ? (React.createElement("div", { className: styles.componentsListView },
            React.createElement("div", { className: styles.componentsListHeader },
                React.createElement("button", { className: styles.backButton, onClick: () => setShowComponentsList(false) },
                    React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
                        React.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z", fill: "currentColor" }))),
                React.createElement("h2", null, "Componentler")),
            React.createElement("div", { className: styles.componentsList }, componentsList.map((component) => (React.createElement("div", { key: component, className: styles.componentItem, onClick: () => handleAddComponent(component) },
                React.createElement("div", { className: styles.componentIcon },
                    React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
                        React.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z", fill: "currentColor" }))),
                React.createElement("span", { className: styles.componentName }, component))))))) : showPagesList ? (React.createElement("div", { className: styles.pagesListView },
            React.createElement("div", { className: styles.pagesListHeader },
                React.createElement("button", { className: styles.backButton, onClick: () => setShowPagesList(false) },
                    React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
                        React.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z", fill: "currentColor" }))),
                React.createElement("h2", null, "Sayfalar")),
            React.createElement("div", { className: styles.pagesList },
                Object.keys(pageContent).map((page) => (React.createElement("div", { key: page, className: `${styles.pageItem} ${selectedPage === page ? styles.active : ''}`, onClick: () => {
                        setSelectedPage(page);
                        setShowPagesList(false);
                    } },
                    page.charAt(0).toUpperCase() + page.slice(1),
                    " Sayfas\u0131"))),
                React.createElement("button", { className: styles.addPageButton, onClick: handleAddPageClick },
                    React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
                        React.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z", fill: "currentColor" })),
                    "Yeni Sayfa Ekle")))) : showAddPage ? (React.createElement("div", { className: styles.addPageView },
            React.createElement("div", { className: styles.addPageHeader },
                React.createElement("button", { className: styles.closeButton, onClick: () => {
                        setShowAddPage(false);
                        setShowPagesList(true);
                    } },
                    React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
                        React.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z", fill: "currentColor" }))),
                React.createElement("h2", null, "Yeni Sayfa Olu\u015Ftur")),
            React.createElement("div", { className: styles.pageTypesList }, pagesList.map((page) => (React.createElement("div", { key: page, className: styles.pageTypeItem, onClick: () => {
                    setPageContent(prev => (Object.assign(Object.assign({}, prev), { [page.toLowerCase()]: { components: [] } })));
                    setShowAddPage(false);
                    setShowPagesList(false);
                } }, page)))))) : (React.createElement(React.Fragment, null,
            React.createElement("div", { className: styles.sidebarTop },
                React.createElement("h1", { className: styles.logo }, "Design Center"),
                React.createElement("div", { className: styles.pageSelect },
                    React.createElement("button", { className: styles.pagesButton, onClick: handleShowPages },
                        selectedPage.charAt(0).toUpperCase() + selectedPage.slice(1),
                        " Sayfas\u0131",
                        React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
                            React.createElement("path", { d: "M7 10l5 5 5-5z", fill: "currentColor" }))))),
            React.createElement("div", { className: styles.sidebarMenu },
                React.createElement("button", { className: styles.menuItem, onClick: () => setShowComponentsList(true) },
                    React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
                        React.createElement("path", { d: "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z", fill: "currentColor" })),
                    "Componentler"),
                React.createElement("button", { className: styles.menuItem },
                    React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
                        React.createElement("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z", fill: "currentColor" })),
                    "Tema Ayarlar\u0131"))))),
        React.createElement("header", { className: styles.topbar },
            React.createElement("div", { className: styles.viewControls },
                React.createElement("button", { className: `${styles.viewBtn} ${selectedView === 'web' ? styles.active : ''}`, onClick: () => setSelectedView('web') },
                    React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24" },
                        React.createElement("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z", fill: "currentColor" }))),
                React.createElement("button", { className: `${styles.viewBtn} ${selectedView === 'mobile' ? styles.active : ''}`, onClick: () => setSelectedView('mobile') },
                    React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24" },
                        React.createElement("path", { d: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z", fill: "currentColor" })))),
            React.createElement("button", { className: styles.saveBtn, onClick: handleSave }, "De\u011Fi\u015Fiklikleri Kaydet")),
        React.createElement("main", { className: `${styles.mainContent} ${selectedView === 'mobile' ? styles.mobileView : ''}` },
            React.createElement("div", { className: styles.pageContent }, pageContent[selectedPage].components.map((comp, index) => {
                const Component = Components[comp.name];
                return Component ? (React.createElement("div", { key: index, className: styles.componentWrapper },
                    React.createElement("div", { className: styles.componentControls },
                        React.createElement("button", { className: styles.editBtn, onClick: () => handleEditComponent(index) },
                            React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24" },
                                React.createElement("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z", fill: "currentColor" }))),
                        React.createElement("button", { className: styles.deleteBtn, onClick: () => handleDeleteComponent(index) },
                            React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24" },
                                React.createElement("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z", fill: "currentColor" })))),
                    React.createElement(Component, Object.assign({}, comp.props)))) : null;
            })))));
};
export default Build;
//# sourceMappingURL=Build.js.map