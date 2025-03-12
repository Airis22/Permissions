import { PermissionResponse } from "expo-calendar";
import { PermissionLayout } from "./permissionLayout";
import { useEffect, useState } from "react";
import * as Calendar from 'expo-calendar';
import { getPermissionsAsync} from "expo-contacts";

export function CalendarPermission(){
    const [permission, setPermission] = useState<PermissionResponse | undefined>(undefined);

    const requestPermission = () => {
            Calendar.requestCalendarPermissionsAsync()
            .then((result) => {
                setPermission(result);
            });  
        }

        useEffect(() => {
            async function getPermissionStatus(){
                let result = await Calendar.getCalendarPermissionsAsync();
                setPermission(result)
            }
            getPermissionStatus();
        }, []);
    
    return(
        <PermissionLayout
        icon="calendar-outline"
        title="Calendario"
        granted={permission?.granted || false}
        requestPermission={requestPermission}
        />
    )
}