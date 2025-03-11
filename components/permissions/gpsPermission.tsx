import { PermissionLayout } from "./permissionLayout";

export function GpsPermission(){
    return(
        <PermissionLayout
        icon="location-outline"
        title="Gps"
        granted={true}
        requestPermission={() => {}}
        />
    )
}