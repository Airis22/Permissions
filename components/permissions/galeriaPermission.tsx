import { PermissionLayout } from "./permissionLayout";

export function GaleryPermission(){
    return(
        <PermissionLayout
        icon="image-outline"
        title="Galeria"
        granted={false}
        requestPermission={() => {}}
        />
    )
}