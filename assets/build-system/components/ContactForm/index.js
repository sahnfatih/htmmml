var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { submitContactForm } from '../../services/contactService';
const ContactForm = ({ formActive }) => {
    const [loading, setLoading] = useState(false); // Gönderim durumu
    const [error, setError] = useState(null); // Hata durumu
    const [success, setSuccess] = useState(false); // Başarı durumu
    if (!formActive) {
        return null; // Form aktif değilse, hiçbir şey render etme
    }
    const handleSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        event.preventDefault();
        setLoading(true);
        setError(null);
        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            consent: formData.get('consent') === 'on',
        };
        try {
            yield submitContactForm(data);
            setSuccess(true);
        }
        catch (e) {
            setError(((_b = (_a = e.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || 'Form gönderimi sırasında bir hata oluştu.');
        }
        finally {
            setLoading(false);
        }
    });
    return (React.createElement("div", { className: styles.contactForm },
        React.createElement("h2", { className: styles.sectionTitle }, "\u0130leti\u015Fime Ge\u00E7"),
        success ? (React.createElement("p", { className: styles.successMessage }, "Form ba\u015Far\u0131yla g\u00F6nderildi!")) : (React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("div", { className: styles.inputTemplate },
                React.createElement("input", { type: "text", name: "name", "aria-label": "Ad\u0131n\u0131z\u0131 girin", className: styles.formControl, placeholder: "\u0130sminiz *", required: true })),
            React.createElement("div", { className: styles.inputTemplate },
                React.createElement("input", { type: "email", name: "email", "aria-label": "E-posta adresinizi girin", className: styles.formControl, placeholder: "E-posta Adresiniz *", required: true })),
            React.createElement("div", { className: styles.inputTemplate },
                React.createElement("input", { type: "text", name: "subject", "aria-label": "Konu", className: styles.formControl, placeholder: "Konu *", required: true })),
            React.createElement("div", { className: styles.inputTemplate },
                React.createElement("textarea", { name: "message", "aria-label": "Mesaj\u0131n\u0131z", className: styles.formControl, placeholder: "Mesaj\u0131n\u0131z *", required: true })),
            React.createElement("div", { className: styles.formGroup },
                React.createElement("label", { className: styles.customCheckbox },
                    React.createElement("input", { type: "checkbox", name: "consent", className: styles.formCheckInput, required: true }),
                    React.createElement("span", { className: styles.consentText },
                        "Ki\u015Fisel verilerimin i\u015Flenmesine ili\u015Fkin",
                        ' ',
                        React.createElement("a", { href: "#", className: styles.textPrimary }, "Ayd\u0131nlatma Metni"),
                        "'ni okudum ve kabul ediyorum."))),
            error && React.createElement("p", { className: styles.errorMessage }, error),
            React.createElement("div", { className: styles.formGroup },
                React.createElement("button", { type: "submit", className: `${styles.button} ${styles.buttonBlack}`, disabled: loading }, loading ? (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: styles.spinner }),
                    " G\u00F6nderiliyor...")) : ('GÖNDER')))))));
};
export default ContactForm;
//# sourceMappingURL=index.js.map