import React from 'react';
import * as S from './ContactInfo.styles';
const ContactInfo = ({ sectionTitle, officeName, address, email, phone, workingHours, }) => {
    return (React.createElement(S.ContactInfo, null,
        React.createElement("h2", { className: "section-title" }, sectionTitle),
        React.createElement(S.Heading, null, officeName),
        React.createElement(S.Text, null, address),
        React.createElement(S.Text, null, email),
        React.createElement(S.Text, null, phone),
        React.createElement(S.Text, null,
            "\u00C7al\u0131\u015Fma Saatleri: ",
            workingHours)));
};
export default ContactInfo;
//# sourceMappingURL=index.js.map