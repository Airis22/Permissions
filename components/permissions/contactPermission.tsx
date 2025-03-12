import { PermissionLayout } from "./permissionLayout";

export function ContacPermission(){
    return(
        <PermissionLayout
        icon="people-outline"
        title="Contactos"
        granted={true}
        requestPermission={() => {}}
        />
    )
}