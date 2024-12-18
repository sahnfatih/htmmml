export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    consent: boolean;
}
export declare const submitContactForm: (data: ContactFormData) => Promise<void>;
//# sourceMappingURL=contactService.d.ts.map