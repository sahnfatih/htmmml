import React from 'react';
export interface BuildProps {
    components: string[];
    onlyShowSidebar?: boolean;
    onSave?: (content: string) => void;
}
declare const Build: React.FC<BuildProps>;
export default Build;
//# sourceMappingURL=Build.d.ts.map