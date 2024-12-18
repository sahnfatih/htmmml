// src/components/StatisticsSection/index.tsx
import React from 'react';
import * as S from "./styles";
const StatisticsSection = ({ statisticsBoxes, showBackground = true, backgroundColor = '#f5f5f5' }) => {
    return (React.createElement(S.StatisticsSection, { style: {
            backgroundColor: showBackground ? backgroundColor : 'transparent'
        } },
        React.createElement(S.StatsContainer, null, statisticsBoxes.map((box, index) => (React.createElement(S.StatItem, { key: index },
            React.createElement(S.StatNumber, null, box.stat),
            React.createElement(S.StatTitle, null, box.title),
            React.createElement(S.StatDescription, null, box.description)))))));
};
export default StatisticsSection;
//# sourceMappingURL=index.js.map