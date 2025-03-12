    import { PermissionResponse } from "expo-image-picker";
    import { PermissionLayout } from "./permissionLayout";
    import { useEffect, useState } from "react";
    import * as ImagePicker from "expo-image-picker";
    
    export function GaleryPermission() {
        const [permission, setPermission] = useState<PermissionResponse | undefined>(undefined);
    
        const requestPermission = () => {
            ImagePicker.requestMediaLibraryPermissionsAsync()
                .then((result) => {
                    setPermission(result);
                });
        };
    
        useEffect(() => {
            async function getPermissionStatus() {
                let result = await ImagePicker.getMediaLibraryPermissionsAsync();
                setPermission(result);
            }
            getPermissionStatus();
        }, []);
    
        return (
            <PermissionLayout
                icon="image-outline"
                title="Galería"
                granted={permission?.granted || false}
                requestPermission={requestPermission}
            />
        );
    }
    