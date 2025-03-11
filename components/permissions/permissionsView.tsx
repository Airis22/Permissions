import { StyleSheet, Text, View } from "react-native";
import { CameraPermission } from "./cameraPermission";
import { GaleryPermission } from "./galeriaPermission";
import { MicrophonePermission } from "./microphonePermission";
import { GpsPermission } from "./gpsPermission";
import { ContacPermission } from "./contactPermission";
import { CalendarPermission } from "./calendarPermission";


export function PermissosView(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Permisos</Text>
            <View>
                <CameraPermission/>
                <GaleryPermission/>
                <MicrophonePermission/>
                <GpsPermission/>
                <ContacPermission/>
                <CalendarPermission/>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingTop: 50,
        backgroundColor: "#FFF",
        gap:20,
        paddingHorizontal:16
    },
    titulo:{
        fontWeight:  "bold",
        fontSize: 22,
    },
    texto:{
        fontSize: 16,
    }

})
