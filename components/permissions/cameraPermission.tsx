import { PermissionLayout } from "./permissionLayout";

export function CameraPermission(){
    return(
        <PermissionLayout
        icon="camera-outline"
        title="Cámara"
        granted={true}
        requestPermission={() => {}}
        />
    )
}