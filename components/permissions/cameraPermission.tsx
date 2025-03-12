import { PermissionLayout } from "./permissionLayout";
/* import { CameraView(acceder a la camara), CameraType(camara frontal o trasera), useCameraPermissions(si esta autorizado o no) } from 'expo-camera'; */
import {useCameraPermissions } from 'expo-camera';

export function CameraPermission(){

  const [permission, requestPermission] = useCameraPermissions();

    return(
        <PermissionLayout
        icon="camera-outline"
        title="Cámara"
        granted={permission?.granted || false}
        requestPermission={requestPermission}
        />
    )
}