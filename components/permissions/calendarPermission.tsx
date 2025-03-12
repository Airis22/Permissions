import { PermissionLayout } from "./permissionLayout";

export function CalendarPermission(){
    return(
        <PermissionLayout
        icon="calendar-outline"
        title="Cámara"
        granted={true}
        requestPermission={() => {}}
        />
    )
}