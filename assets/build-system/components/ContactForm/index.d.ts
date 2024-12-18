import React from 'react';
export interface ContactFormProps {
    formActive: boolean;
    showTitle?: boolean;
    title?: string;
    fields?: Array<{
        name: string;
        label: string;
        type: 'text' | 'email' | 'textarea';
        required?: boolean;
        placeholder?: string;
    }>;
    showPrivacyConsent?: boolean;
    privacyText?: string;
    submitButtonText?: string;
    successMessage?: string;
    errorMessage?: string;
}
declare const ContactForm: React.FC<ContactFormProps>;
export default ContactForm;
//# sourceMappingURL=index.d.ts.map