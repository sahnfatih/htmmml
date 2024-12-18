import Build from './pages/Build/Build';
import * as Components from './components';
declare global {
    interface Window {
        BuildSystem: {
            Build: typeof Build;
            Components: typeof Components;
        };
    }
}
type BuildSystemType = {
    Build: typeof Build;
    Components: typeof Components;
};
declare const BuildSystem: BuildSystemType;
export { Components };
export default BuildSystem;
//# sourceMappingURL=index.d.ts.map