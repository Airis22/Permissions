import { PermissionResponse, useForegroundPermissions } from "expo-location";
import { PermissionLayout } from "./permissionLayout";
import { useEffect, useState } from "react";
import { getPermissionsAsync, requestPermissionsAsync } from "expo-contacts";


export function ContacPermission(){
    const [permission, setPermission] = useState<PermissionResponse | undefined>(undefined);

    const requestPermission = () => {
        requestPermissionsAsync()
        .then((result) => {
            setPermission(result);
        });  
    }

    useEffect(() => {
        async function getPermissionStatus(){
            let result = await getPermissionsAsync();
            setPermission(result)
        }
        getPermissionStatus();
    }, []);

    return(
        <PermissionLayout
        icon="people-outline"
        title="Contactos"
        granted={permission?.granted || false}
        requestPermission={requestPermission}
        />
    )
}