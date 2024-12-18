import React from 'react';
export interface StatisticsSectionProps {
    statisticsBoxes: Array<{
        stat: string;
        title: string;
        description: string;
        icon?: string;
        color?: string;
        animation?: 'fade' | 'slide' | 'bounce';
    }>;
    showBackground?: boolean;
    backgroundColor?: string;
    layout?: 'grid' | 'flex';
    columns?: number;
    spacing?: number;
    textAlignment?: 'left' | 'center' | 'right';
}
declare const StatisticsSection: React.FC<StatisticsSectionProps>;
export default StatisticsSection;
//# sourceMappingURL=index.d.ts.map