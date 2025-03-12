
import { useForegroundPermissions } from "expo-location";
import { PermissionLayout } from "./permissionLayout";


export function GpsPermission(){
    const [permission, requestPermission] = useForegroundPermissions();
    
    return(
        <PermissionLayout
        icon="location-outline"
        title="Gps"
        granted={permission?.granted || false}
        requestPermission={requestPermission}
        />
    );
}