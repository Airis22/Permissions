import { PermissionLayout } from "./permissionLayout";


export function MicrophonePermission(){
    return(
        <PermissionLayout
        icon="mic-outline"
        title="Microfono"
        granted={false}
        requestPermission={() => {}}
        />
    )
}