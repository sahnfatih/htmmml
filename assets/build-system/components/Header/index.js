import React from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import { useMediaQuery } from "react-responsive";
const Header = ({ logo, links }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? (React.createElement(MobileHeader, { logo: logo, links: links })) : (React.createElement(DesktopHeader, { logo: logo, links: links }));
};
export default Header;
//# sourceMappingURL=index.js.map