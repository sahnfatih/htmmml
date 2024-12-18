import React from 'react';
interface PreviewProps {
    selectedComponent: string | null;
    components: Record<string, React.FC<any>>;
    onAddComponent: (name: string, props: Record<string, any>) => void;
}
declare const Preview: React.FC<PreviewProps>;
export default Preview;
//# sourceMappingURL=Preview.d.ts.map