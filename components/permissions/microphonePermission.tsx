import { PermissionLayout } from "./permissionLayout";
import {useMicrophonePermissions } from 'expo-camera';

export function MicrophonePermission(){
      const [permission, requestPermission] = useMicrophonePermissions();
    return(
        <PermissionLayout
        icon="mic-outline"
        title="Microfono"
        granted={permission?.granted || false}
        requestPermission={requestPermission}
        />
    )
}


