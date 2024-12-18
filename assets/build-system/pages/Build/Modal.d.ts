import React from "react";
interface ModalProps {
    componentName: string;
    propDefinitions: Record<string, any>;
    onClose: () => void;
    onSubmit: (props: Record<string, any>) => void;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map