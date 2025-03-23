
import { PermissionLayout } from "./permissionLayout";
    import * as MediaLibrary from 'expo-media-library';

    
    export function GaleryPermission() {
        const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    
        return (
            <PermissionLayout
                icon="image-outline"
                title="Galería"
                granted={permissionResponse?.granted || false}
                requestPermission={requestPermission}
            />
        );
    }
    