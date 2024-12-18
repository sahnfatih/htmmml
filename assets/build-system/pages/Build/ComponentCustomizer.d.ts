import React from 'react';
interface ComponentCustomizerProps {
    componentType: string;
    currentProps: Record<string, any>;
    onPropsChange: (newProps: Record<string, any>) => void;
    onClose: () => void;
}
declare const ComponentCustomizer: React.FC<ComponentCustomizerProps>;
export default ComponentCustomizer;
//# sourceMappingURL=ComponentCustomizer.d.ts.map