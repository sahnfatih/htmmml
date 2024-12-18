import React from 'react';
import styles from './PropEditor.module.css';
const PropEditor = ({ propName, propType, value, onChange, componentType }) => {
    // Renk değişikliği için handler
    const handleColorChange = (color) => {
        onChange(color);
    };
    // Sayısal değer değişikliği için handler
    const handleNumberChange = (num) => {
        onChange(Number(num));
    };
    // Nesne değişikliği için handler
    const handleObjectChange = (key, val, parentKey) => {
        if (parentKey) {
            onChange(Object.assign(Object.assign({}, value), { [parentKey]: Object.assign(Object.assign({}, value[parentKey]), { [key]: val }) }));
        }
        else {
            onChange(Object.assign(Object.assign({}, value), { [key]: val }));
        }
    };
    // Slayt değişikliği için handler
    const handleSlideChange = (index, field, newValue) => {
        const newSlides = [...value];
        if (field === 'image') {
            newSlides[index] = Object.assign(Object.assign({}, newSlides[index]), { image: newValue });
        }
        else {
            newSlides[index] = Object.assign(Object.assign({}, newSlides[index]), { [field]: newValue });
        }
        onChange(newSlides);
    };
    // Yeni slayt ekleme
    const handleAddSlide = () => {
        const newSlide = {
            image: { src: '' },
            title: '',
            description: '',
            link: '',
            buttonText: '',
            buttonVariant: 'primary'
        };
        onChange([...(value || []), newSlide]);
    };
    // Slayt silme
    const handleDeleteSlide = (index) => {
        const newSlides = [...value];
        newSlides.splice(index, 1);
        onChange(newSlides);
    };
    // İstatistik değişikliği için handler
    const handleStatisticChange = (index, field, newValue) => {
        const newStats = [...value];
        newStats[index] = Object.assign(Object.assign({}, newStats[index]), { [field]: newValue });
        onChange(newStats);
    };
    // Yeni istatistik ekleme
    const handleAddStatistic = () => {
        const newStat = {
            stat: '',
            title: '',
            description: '',
            icon: '',
            color: '#000000',
            animation: 'none'
        };
        onChange([...(value || []), newStat]);
    };
    // İstatistik silme
    const handleDeleteStatistic = (index) => {
        const newStats = [...value];
        newStats.splice(index, 1);
        onChange(newStats);
    };
    // İstatistik kutusu render fonksiyonu
    const renderStatisticBox = (box, index) => {
        return (React.createElement("div", { key: index, className: styles.statisticBox },
            React.createElement("h4", { className: styles.statisticBoxTitle },
                "\u0130statistik ",
                index + 1),
            React.createElement("input", { type: "text", className: styles.input, value: box.stat || '', onChange: (e) => handleStatisticChange(index, 'stat', e.target.value), placeholder: "De\u011Fer" }),
            React.createElement("input", { type: "text", className: styles.input, value: box.title || '', onChange: (e) => handleStatisticChange(index, 'title', e.target.value), placeholder: "Ba\u015Fl\u0131k" }),
            React.createElement("textarea", { className: styles.textarea, value: box.description || '', onChange: (e) => handleStatisticChange(index, 'description', e.target.value), placeholder: "A\u00E7\u0131klama" }),
            React.createElement("div", { className: styles.colorPicker },
                React.createElement("label", null, "Renk:"),
                React.createElement("input", { type: "color", value: box.color || '#000000', onChange: (e) => handleStatisticChange(index, 'color', e.target.value) })),
            React.createElement("input", { type: "text", className: styles.input, value: box.icon || '', onChange: (e) => handleStatisticChange(index, 'icon', e.target.value), placeholder: "\u0130kon URL" }),
            React.createElement("select", { className: styles.select, value: box.animation || 'none', onChange: (e) => handleStatisticChange(index, 'animation', e.target.value) },
                React.createElement("option", { value: "none" }, "Animasyon Yok"),
                React.createElement("option", { value: "fade" }, "Fade"),
                React.createElement("option", { value: "slide" }, "Slide"),
                React.createElement("option", { value: "bounce" }, "Bounce")),
            React.createElement("button", { className: styles.deleteButton, onClick: () => handleDeleteStatistic(index) }, "Sil")));
    };
    // Ana render editör fonksiyonu
    const renderEditor = () => {
        switch (componentType) {
            case 'Slider':
                if (propName === 'slides') {
                    return (React.createElement("div", { className: styles.slidesEditor },
                        (value || []).map((slide, index) => {
                            var _a;
                            return (React.createElement("div", { key: index, className: styles.slideEditor },
                                React.createElement("h4", { className: styles.slideTitle },
                                    "Slayt ",
                                    index + 1),
                                React.createElement("div", { className: styles.imageSection },
                                    React.createElement("label", null, "G\u00F6rsel"),
                                    React.createElement("input", { type: "text", value: ((_a = slide.image) === null || _a === void 0 ? void 0 : _a.src) || '', onChange: (e) => handleSlideChange(index, 'image', { src: e.target.value }), placeholder: "G\u00F6rsel URL" })),
                                React.createElement("div", { className: styles.textSection },
                                    React.createElement("input", { type: "text", value: slide.title || '', onChange: (e) => handleSlideChange(index, 'title', e.target.value), placeholder: "Ba\u015Fl\u0131k" }),
                                    React.createElement("textarea", { value: slide.description || '', onChange: (e) => handleSlideChange(index, 'description', e.target.value), placeholder: "A\u00E7\u0131klama" })),
                                React.createElement("div", { className: styles.buttonSection },
                                    React.createElement("input", { type: "text", value: slide.link || '', onChange: (e) => handleSlideChange(index, 'link', e.target.value), placeholder: "Link URL" }),
                                    React.createElement("input", { type: "text", value: slide.buttonText || '', onChange: (e) => handleSlideChange(index, 'buttonText', e.target.value), placeholder: "Buton Metni" }),
                                    React.createElement("select", { value: slide.buttonVariant || 'primary', onChange: (e) => handleSlideChange(index, 'buttonVariant', e.target.value) },
                                        React.createElement("option", { value: "primary" }, "Primary"),
                                        React.createElement("option", { value: "secondary" }, "Secondary"),
                                        React.createElement("option", { value: "outline" }, "Outline"))),
                                React.createElement("button", { className: styles.deleteButton, onClick: () => handleDeleteSlide(index) }, "Slayt\u0131 Sil")));
                        }),
                        React.createElement("button", { className: styles.addButton, onClick: () => handleAddSlide() }, "Yeni Slayt Ekle")));
                }
                break;
            case 'StatisticsSection':
                if (propName === 'statisticsBoxes') {
                    return (React.createElement("div", { className: styles.statisticsEditor },
                        (value || []).map((box, index) => renderStatisticBox(box, index)),
                        React.createElement("button", { className: styles.addButton, onClick: () => handleAddStatistic() }, "Yeni \u0130statistik Ekle")));
                }
                break;
            default:
                if (propType.includes('color')) {
                    return (React.createElement("div", { className: styles.colorPicker },
                        React.createElement("input", { type: "color", value: value || '#000000', onChange: (e) => handleColorChange(e.target.value) }),
                        React.createElement("input", { type: "text", className: styles.input, value: value || '', onChange: (e) => handleColorChange(e.target.value), placeholder: "Renk kodu (#RRGGBB)" })));
                }
                if (propType.includes('number')) {
                    return (React.createElement("input", { type: "number", className: styles.input, value: value || '', onChange: (e) => handleNumberChange(e.target.value), placeholder: `${propName} girin` }));
                }
                return (React.createElement("input", { type: "text", className: styles.input, value: value || '', onChange: (e) => onChange(e.target.value), placeholder: `${propName} girin` }));
        }
    };
    return (React.createElement("div", { className: styles.propEditor },
        React.createElement("label", { className: styles.label },
            React.createElement("span", { className: styles.propName }, propName),
            React.createElement("span", { className: styles.propType },
                "(",
                propType,
                ")")),
        renderEditor()));
};
export default PropEditor;
//# sourceMappingURL=PropEditor.js.map