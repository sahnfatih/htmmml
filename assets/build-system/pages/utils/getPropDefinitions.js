import { Project } from "ts-morph";
import path from "path";
const typesFilePath = path.resolve(__dirname, "../types/types.ts");
export const getPropDefinitions = (typeName) => {
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(typesFilePath);
    const typeInterface = sourceFile.getInterface(typeName);
    if (!typeInterface) {
        throw new Error(`Type ${typeName} not found in types.ts`);
    }
    const props = {};
    typeInterface.getProperties().forEach((property) => {
        const propName = property.getName();
        const propType = property.getType().getText();
        if (propType.includes("{")) {
            // Eğer tür bir nesne içeriyorsa
            props[propName] = getPropDefinitions(propType.replace(";", "").trim());
        }
        else {
            props[propName] = propType;
        }
    });
    return props;
};
//# sourceMappingURL=getPropDefinitions.js.map