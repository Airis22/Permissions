import { StyleSheet, Text, View } from "react-native";
import { CameraPermission } from "./cameraPermission";
import { GaleryPermission } from "./galeriaPermission";
import { MicrophonePermission } from "./microphonePermission";
import { GpsPermission } from "./gpsPermission";
import { ContacPermission } from "./contactPermission";
import { CalendarPermission } from "./calendarPermission";
import Ionicons from '@expo/vector-icons/Ionicons';

export function PermissosView(){
    return(
        <View style={styles.container}>
            <View style={styles.contendTitle}>
            <Ionicons name="settings" size={24} color="black" />
            <Text style={styles.titulo}>Permisos</Text>
            <Ionicons name="settings" size={24} color="black" />
            </View>
            <View style={styles.containerPermissions}>
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
        paddingTop: 80,
        backgroundColor: "#FFF",
        gap:25,
        paddingHorizontal:16,
    },
    containerPermissions:{
        gap:20,
        marginLeft:20,
        marginRight:20
    },
    titulo:{
        fontWeight:  "700",
        fontSize: 22,
        textAlign: "center"
    },
    contendTitle:{
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    display: "flex"
    }
})
