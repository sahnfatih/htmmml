import React, { useEffect, useRef, useState } from 'react';
import styles from './ComponentCustomizer.module.css';
const ComponentCustomizer = ({ componentType, currentProps, onPropsChange, onClose }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [propsDefinition, setPropsDefinition] = useState({});
    const fileInputRef = useRef(null);
    useEffect(() => {
        const getPropsDefinition = () => {
            switch (componentType) {
                case 'Header':
                    return {
                        logo: {
                            type: 'KirazImage',
                            label: 'Logo',
                            description: 'Header logosu için görsel ayarları',
                            group: 'Logo Ayarları'
                        },
                        showLinks: {
                            type: 'boolean',
                            label: 'Menü Göster',
                            description: 'Header menüsü gösterilsin mi?',
                            group: 'Menü Ayarları'
                        },
                        links: {
                            type: 'KirazNavigationLink[]',
                            label: 'Menü Linkleri',
                            description: 'Header menü linkleri',
                            group: 'Menü Ayarları',
                            condition: {
                                field: 'showLinks',
                                value: true
                            }
                        },
                        styles: {
                            type: 'object',
                            label: 'Görünüm Ayarları',
                            group: 'Stil Ayarları',
                            nested: {
                                backgroundColor: {
                                    type: 'color',
                                    label: 'Arkaplan Rengi'
                                },
                                textColor: {
                                    type: 'color',
                                    label: 'Yazı Rengi'
                                },
                                height: {
                                    type: 'number',
                                    label: 'Yükseklik (px)'
                                },
                                padding: {
                                    type: 'number',
                                    label: 'İç Boşluk (px)'
                                }
                            }
                        }
                    };
                case 'TextComponent':
                    return {
                        text: {
                            type: 'string',
                            label: 'Metin',
                            description: 'Görüntülenecek metin',
                            group: 'İçerik'
                        },
                        styles: {
                            type: 'object',
                            label: 'Stil Ayarları',
                            group: 'Görünüm',
                            nested: {
                                fontSize: {
                                    type: 'select',
                                    label: 'Yazı Boyutu',
                                    options: ['small', 'medium', 'large']
                                },
                                textAlign: {
                                    type: 'select',
                                    label: 'Hizalama',
                                    options: ['left', 'center', 'right']
                                },
                                color: {
                                    type: 'color',
                                    label: 'Yazı Rengi'
                                }
                            }
                        }
                    };
                case 'LongTextComponent':
                    return {
                        smallHeading: {
                            type: 'string',
                            label: 'Küçük Başlık',
                            group: 'Başlıklar'
                        },
                        bigHeading: {
                            type: 'string',
                            label: 'Ana Başlık',
                            group: 'Başlıklar'
                        },
                        middleHeading: {
                            type: 'string',
                            label: 'Orta Başlık',
                            group: 'Başlıklar'
                        },
                        paragraph: {
                            type: 'string',
                            label: 'Paragraf',
                            group: 'İçerik'
                        },
                        styles: {
                            type: 'object',
                            label: 'Görünüm',
                            group: 'Stil Ayarları',
                            nested: {
                                alignment: {
                                    type: 'select',
                                    label: 'Metin Hizalama',
                                    options: ['left', 'center', 'right']
                                },
                                spacing: {
                                    type: 'number',
                                    label: 'Metin Aralığı'
                                }
                            }
                        }
                    };
                case 'ImageBox':
                    return {
                        image: {
                            type: 'KirazImage',
                            label: 'Görsel',
                            group: 'Görsel'
                        },
                        styles: {
                            type: 'object',
                            label: 'Görünüm',
                            group: 'Stil Ayarları',
                            nested: {
                                width: {
                                    type: 'number',
                                    label: 'Genişlik (%)'
                                },
                                borderRadius: {
                                    type: 'number',
                                    label: 'Köşe Yuvarlaklığı'
                                },
                                shadow: {
                                    type: 'boolean',
                                    label: 'Gölge Efekti'
                                }
                            }
                        }
                    };
                case 'RoundImageHeroComponent':
                    return {
                        image: {
                            type: 'KirazImage',
                            label: 'Hero Görseli',
                            group: 'Görsel'
                        },
                        styles: {
                            type: 'object',
                            label: 'Görünüm',
                            group: 'Stil Ayarları',
                            nested: {
                                size: {
                                    type: 'select',
                                    label: 'Görsel Boyutu',
                                    options: ['small', 'medium', 'large']
                                },
                                borderWidth: {
                                    type: 'number',
                                    label: 'Çerçeve Kalınlığı'
                                },
                                borderColor: {
                                    type: 'color',
                                    label: 'Çerçeve Rengi'
                                }
                            }
                        }
                    };
                case 'Footer':
                    return {
                        logo: {
                            type: 'KirazImage',
                            label: 'Footer Logo',
                            group: 'Logo Ayarları'
                        },
                        showSocialLinks: {
                            type: 'boolean',
                            label: 'Sosyal Medya Linkleri',
                            group: 'Sosyal Medya'
                        },
                        socialLinks: {
                            type: 'object',
                            label: 'Sosyal Medya Ayarları',
                            group: 'Sosyal Medya',
                            condition: {
                                field: 'showSocialLinks',
                                value: true
                            },
                            nested: {
                                facebook: { type: 'string', label: 'Facebook URL' },
                                instagram: { type: 'string', label: 'Instagram URL' },
                                twitter: { type: 'string', label: 'Twitter URL' }
                            }
                        },
                        copyright: {
                            type: 'string',
                            label: 'Telif Hakkı Metni',
                            group: 'İçerik'
                        },
                        styles: {
                            type: 'object',
                            label: 'Görünüm',
                            group: 'Stil Ayarları',
                            nested: {
                                backgroundColor: { type: 'color', label: 'Arkaplan Rengi' },
                                textColor: { type: 'color', label: 'Yazı Rengi' }
                            }
                        }
                    };
                case 'BannerComponent':
                    return {
                        image: {
                            type: 'KirazImage',
                            label: 'Banner Görseli',
                            description: 'Banner için görsel seçin',
                            group: 'Görsel Ayarları'
                        },
                        text: {
                            type: 'string',
                            label: 'Banner Metni',
                            description: 'Banner üzerindeki metin',
                            group: 'İçerik Ayarları'
                        },
                        showButton: {
                            type: 'boolean',
                            label: 'Buton Göster',
                            group: 'Buton Ayarları'
                        },
                        button: {
                            type: 'object',
                            label: 'Buton',
                            group: 'Buton Ayarları',
                            condition: {
                                field: 'showButton',
                                value: true
                            },
                            nested: {
                                text: { type: 'string', label: 'Buton Metni' },
                                link: { type: 'KirazNavigationLink', label: 'Buton Linki' },
                                style: {
                                    type: 'select',
                                    label: 'Buton Stili',
                                    options: ['primary', 'secondary', 'outline']
                                },
                                size: {
                                    type: 'select',
                                    label: 'Buton Boyutu',
                                    options: ['small', 'medium', 'large']
                                }
                            }
                        },
                        overlay: {
                            type: 'object',
                            label: 'Overlay',
                            group: 'Görsel Ayarları',
                            nested: {
                                enabled: { type: 'boolean', label: 'Overlay Aktif' },
                                color: {
                                    type: 'color',
                                    label: 'Overlay Rengi',
                                    condition: { field: 'overlay.enabled', value: true }
                                },
                                opacity: {
                                    type: 'number',
                                    label: 'Opaklık',
                                    condition: { field: 'overlay.enabled', value: true }
                                }
                            }
                        }
                    };
                case 'ProductBox':
                    return {
                        product: {
                            type: 'object',
                            label: 'Ürün Bilgileri',
                            group: 'İçerik',
                            nested: {
                                image: { type: 'KirazImage', label: 'Ürün Görseli' },
                                title: { type: 'string', label: 'Ürün Adı' },
                                price: { type: 'string', label: 'Fiyat' },
                                description: { type: 'string', label: 'Açıklama' }
                            }
                        },
                        styles: {
                            type: 'object',
                            label: 'Görünüm',
                            group: 'Stil Ayarları',
                            nested: {
                                layout: {
                                    type: 'select',
                                    label: 'Düzen',
                                    options: ['vertical', 'horizontal']
                                },
                                showBorder: { type: 'boolean', label: 'Kenarlık Göster' },
                                borderColor: {
                                    type: 'color',
                                    label: 'Kenarlık Rengi',
                                    condition: {
                                        field: 'styles.showBorder',
                                        value: true
                                    }
                                }
                            }
                        }
                    };
                case 'QuoteSection':
                    return {
                        quote: {
                            type: 'string',
                            label: 'Alıntı Metni',
                            group: 'İçerik'
                        },
                        author: {
                            type: 'string',
                            label: 'Yazar',
                            group: 'İçerik'
                        },
                        styles: {
                            type: 'object',
                            label: 'Görünüm',
                            group: 'Stil Ayarları',
                            nested: {
                                backgroundColor: {
                                    type: 'color',
                                    label: 'Arkaplan Rengi'
                                },
                                textColor: {
                                    type: 'color',
                                    label: 'Yazı Rengi'
                                },
                                fontSize: {
                                    type: 'select',
                                    label: 'Yazı Boyutu',
                                    options: ['small', 'medium', 'large']
                                }
                            }
                        }
                    };
                case 'StatisticsSection':
                    return {
                        title: {
                            type: 'string',
                            label: 'Başlık',
                            group: 'İçerik'
                        },
                        stats: {
                            type: 'object',
                            label: 'İstatistikler',
                            group: 'İçerik',
                            nested: {
                                stat1: {
                                    type: 'object',
                                    label: 'İstatistik 1',
                                    nested: {
                                        value: { type: 'string', label: 'Değer' },
                                        label: { type: 'string', label: 'Etiket' }
                                    }
                                },
                                stat2: {
                                    type: 'object',
                                    label: 'İstatistik 2',
                                    nested: {
                                        value: { type: 'string', label: 'Değer' },
                                        label: { type: 'string', label: 'Etiket' }
                                    }
                                },
                                stat3: {
                                    type: 'object',
                                    label: 'İstatistik 3',
                                    nested: {
                                        value: { type: 'string', label: 'Değer' },
                                        label: { type: 'string', label: 'Etiket' }
                                    }
                                }
                            }
                        }
                    };
                case 'ContactForm':
                    return {
                        title: {
                            type: 'string',
                            label: 'Form Başlığı',
                            group: 'İçerik'
                        },
                        fields: {
                            type: 'object',
                            label: 'Form Alanları',
                            group: 'Form Yapısı',
                            nested: {
                                showName: { type: 'boolean', label: 'İsim Alanı' },
                                showEmail: { type: 'boolean', label: 'E-posta Alanı' },
                                showPhone: { type: 'boolean', label: 'Telefon Alanı' },
                                showMessage: { type: 'boolean', label: 'Mesaj Alanı' }
                            }
                        },
                        button: {
                            type: 'object',
                            label: 'Gönder Butonu',
                            group: 'Form Yapısı',
                            nested: {
                                text: { type: 'string', label: 'Buton Metni' },
                                color: { type: 'color', label: 'Buton Rengi' }
                            }
                        }
                    };
                case 'ContactInfo':
                    return {
                        title: {
                            type: 'string',
                            label: 'Başlık',
                            group: 'İçerik'
                        },
                        info: {
                            type: 'object',
                            label: 'İletişim Bilgileri',
                            group: 'İçerik',
                            nested: {
                                address: { type: 'string', label: 'Adres' },
                                phone: { type: 'string', label: 'Telefon' },
                                email: { type: 'string', label: 'E-posta' }
                            }
                        }
                    };
                case 'Slider':
                    return {
                        slides: {
                            type: 'object',
                            label: 'Slaytlar',
                            group: 'İçerik',
                            nested: {
                                autoplay: { type: 'boolean', label: 'Otomatik Oynat' },
                                interval: {
                                    type: 'number',
                                    label: 'Geçiş Süresi (ms)',
                                    condition: {
                                        field: 'slides.autoplay',
                                        value: true
                                    }
                                }
                            }
                        },
                        navigation: {
                            type: 'object',
                            label: 'Navigasyon',
                            group: 'Kontroller',
                            nested: {
                                showArrows: { type: 'boolean', label: 'Okları Göster' },
                                showDots: { type: 'boolean', label: 'Noktaları Göster' }
                            }
                        }
                    };
                default:
                    return {};
            }
        };
        setPropsDefinition(getPropsDefinition());
    }, [componentType]);
    const handleImageUpload = (event, propPath) => {
        var _a;
        const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handlePropChange(propPath, {
                    src: reader.result,
                    alt: file.name
                });
            };
            reader.readAsDataURL(file);
        }
    };
    const renderPropInput = (propName, definition, value, parentKey = '') => {
        var _a;
        const fullPropName = parentKey ? `${parentKey}.${propName}` : propName;
        if (definition.condition) {
            const conditionPath = definition.condition.field.split('.');
            let conditionValue = currentProps;
            conditionPath.forEach(path => {
                conditionValue = conditionValue === null || conditionValue === void 0 ? void 0 : conditionValue[path];
            });
            if (conditionValue !== definition.condition.value) {
                return null;
            }
        }
        switch (definition.type) {
            case 'string':
                return (React.createElement("input", { type: "text", className: styles.input, value: value || '', onChange: (e) => handlePropChange(fullPropName, e.target.value), placeholder: definition.label }));
            case 'number':
                return (React.createElement("input", { type: "number", className: styles.input, value: value || '', onChange: (e) => handlePropChange(fullPropName, Number(e.target.value)), placeholder: definition.label }));
            case 'boolean':
                return (React.createElement("div", { className: styles.switchWrapper },
                    React.createElement("label", { className: styles.switchLabel },
                        React.createElement("span", { className: styles.switchText }, definition.label),
                        React.createElement("div", { className: styles.switchContainer },
                            React.createElement("input", { type: "checkbox", checked: value || false, onChange: (e) => handlePropChange(fullPropName, e.target.checked), className: styles.switchInput }),
                            React.createElement("span", { className: styles.switchSlider }))),
                    value && definition.nested && (React.createElement("div", { className: styles.nestedContent }, Object.entries(definition.nested).map(([nestedPropName, nestedDef]) => {
                        var _a;
                        return (React.createElement("div", { key: nestedPropName, className: styles.nestedProp }, renderPropInput(nestedPropName, nestedDef, (_a = currentProps[propName]) === null || _a === void 0 ? void 0 : _a[nestedPropName], propName)));
                    })))));
            case 'color':
                return (React.createElement("div", { className: styles.colorPickerWrapper },
                    React.createElement("label", { className: styles.colorPickerLabel }, definition.label),
                    React.createElement("div", { className: styles.colorPickerContainer },
                        React.createElement("div", { className: styles.colorPreview, style: { backgroundColor: value || '#ffffff' } },
                            React.createElement("input", { type: "color", value: value || '#ffffff', onChange: (e) => handlePropChange(fullPropName, e.target.value), className: styles.colorWheel })),
                        React.createElement("input", { type: "text", value: value || '', onChange: (e) => handlePropChange(fullPropName, e.target.value), placeholder: "#RRGGBB", className: styles.colorInput }))));
            case 'KirazImage':
                return (React.createElement("div", { className: styles.imageUpload },
                    React.createElement("div", { className: styles.imagePreview, onClick: () => { var _a; return (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); } }, (value === null || value === void 0 ? void 0 : value.src) ? (React.createElement("img", { src: value.src, alt: value.alt || '' })) : (React.createElement("div", { className: styles.uploadPlaceholder }, "G\u00F6rsel Y\u00FCkle"))),
                    React.createElement("input", { ref: fileInputRef, type: "file", accept: "image/*", style: { display: 'none' }, onChange: (e) => handleImageUpload(e, fullPropName) }),
                    React.createElement("input", { type: "text", className: styles.input, value: (value === null || value === void 0 ? void 0 : value.alt) || '', onChange: (e) => handlePropChange(fullPropName, Object.assign(Object.assign({}, value), { alt: e.target.value })), placeholder: "Alt Metin" })));
            case 'KirazNavigationLink':
                return (React.createElement("div", { className: styles.linkInputs },
                    React.createElement("input", { type: "text", className: styles.input, value: (value === null || value === void 0 ? void 0 : value.href) || '', onChange: (e) => handlePropChange(fullPropName, Object.assign(Object.assign({}, value), { href: e.target.value })), placeholder: "Link URL'i" }),
                    React.createElement("input", { type: "text", className: styles.input, value: (value === null || value === void 0 ? void 0 : value.label) || '', onChange: (e) => handlePropChange(fullPropName, Object.assign(Object.assign({}, value), { label: e.target.value })), placeholder: "Link Metni" })));
            case 'select':
                return (React.createElement("select", { className: styles.select, value: value || '', onChange: (e) => handlePropChange(fullPropName, e.target.value) },
                    React.createElement("option", { value: "" }, "Se\u00E7iniz"), (_a = definition.options) === null || _a === void 0 ? void 0 :
                    _a.map(option => (React.createElement("option", { key: option, value: option }, option.charAt(0).toUpperCase() + option.slice(1))))));
            default:
                return null;
        }
    };
    const handlePropChange = (propPath, value) => {
        const pathParts = propPath.split('.');
        const newProps = Object.assign({}, currentProps);
        let current = newProps;
        for (let i = 0; i < pathParts.length - 1; i++) {
            if (!current[pathParts[i]]) {
                current[pathParts[i]] = {};
            }
            current = current[pathParts[i]];
        }
        current[pathParts[pathParts.length - 1]] = value;
        onPropsChange(newProps);
    };
    const renderGroupedProps = () => {
        const groups = {};
        Object.entries(propsDefinition).forEach(([propName, definition]) => {
            const group = definition.group || 'Genel';
            if (!groups[group]) {
                groups[group] = [];
            }
            groups[group].push([propName, definition]);
        });
        return Object.entries(groups).map(([groupName, props]) => (React.createElement("div", { key: groupName, className: styles.propGroup },
            React.createElement("h3", { className: styles.groupTitle }, groupName),
            props.map(([propName, definition]) => (React.createElement("div", { key: propName, className: styles.propItem },
                React.createElement("div", { className: styles.propHeader },
                    React.createElement("label", { className: styles.propLabel }, definition.label),
                    definition.description && (React.createElement("span", { className: styles.propDescription }, definition.description))),
                definition.nested ? (React.createElement("div", { className: styles.nestedProps }, Object.entries(definition.nested).map(([nestedPropName, nestedDefinition]) => {
                    var _a;
                    return (React.createElement("div", { key: nestedPropName, className: styles.propItem },
                        React.createElement("div", { className: styles.propHeader },
                            React.createElement("label", { className: styles.propLabel }, nestedDefinition.label)),
                        renderPropInput(nestedPropName, nestedDefinition, (_a = currentProps[propName]) === null || _a === void 0 ? void 0 : _a[nestedPropName], propName)));
                }))) : (renderPropInput(propName, definition, currentProps[propName]))))))));
    };
    return (React.createElement("div", { className: `${styles.customizer} ${isOpen ? styles.customizerOpen : ''}` },
        React.createElement("div", { className: styles.header },
            React.createElement("h2", { className: styles.title },
                componentType,
                " \u00D6zelle\u015Ftirme"),
            React.createElement("button", { className: styles.closeButton, onClick: onClose }, "\u2715")),
        React.createElement("div", { className: styles.content }, renderGroupedProps())));
};
export default ComponentCustomizer;
//# sourceMappingURL=ComponentCustomizer.js.map