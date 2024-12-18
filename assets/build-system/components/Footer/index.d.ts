import React from "react";
import { KirazImage, KirazNavigationLink } from '../../types/types';
export interface FooterProps {
    logo: KirazImage;
    showContactInfo?: boolean;
    contactInfo?: {
        address?: string;
        phone?: string;
        email?: string;
    };
    showNavigation?: boolean;
    navigationLinks?: KirazNavigationLink[];
    showNewsletter?: boolean;
    newsletterText?: string;
    showSocialLinks?: boolean;
    socialLinks?: Array<{
        icon: string;
        url: string;
        label: string;
    }>;
    copyrightText: string;
}
declare const Footer: React.FC<FooterProps>;
export default Footer;
//# sourceMappingURL=index.d.ts.map