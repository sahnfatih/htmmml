import React from 'react';
import { KirazImage } from '../../types/types';
export interface ContactInfoProps {
    sectionTitle: string;
    logo?: KirazImage;
    officeName?: string;
    address?: string;
    email?: string;
    phone?: string;
    workingHours?: string;
    showMap?: boolean;
    mapUrl?: string;
    showSocialLinks?: boolean;
    socialLinks?: Array<{
        icon: string;
        url: string;
        label: string;
    }>;
}
declare const ContactInfo: React.FC<ContactInfoProps>;
export default ContactInfo;
//# sourceMappingURL=index.d.ts.map