import React from "react";
import { KirazImage, KirazNavigationLink } from "../../types/types";
export interface HeaderProps {
    logo: KirazImage;
    showLinks?: boolean;
    links?: KirazNavigationLink[];
    showIcons?: boolean;
    showSearch?: boolean;
    showCart?: boolean;
    showAccount?: boolean;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
//# sourceMappingURL=index.d.ts.map