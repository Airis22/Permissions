import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    icon: any,
    title: string,
    granted: boolean,
    requestPermission:() => void;
}

export function PermissionLayout(
    {icon, title, granted, requestPermission} : Props
){
    return(
        <View style={styles.root}>
            <Ionicons name={icon} size={32}/>
            <Text style={styles.title}>{title}</Text>
            {granted ? (
                <Ionicons 
                name="checkmark-sharp" 
                size={32} 
                color="green" 
                style={styles.checkAoto}
                />
            ): (
                <TouchableOpacity
                style={styles.button}
                onPress={() => requestPermission()}>
                    <Text>Autorizar</Text>
                </TouchableOpacity>
            )
        }       
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    title:{
        fontSize:18,
        fontWeight: "700",
        width: "60%",
    }, 
    checkAoto:{
        marginHorizontal: "auto"
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#fff200",
        borderRadius: 20,
    },
    buttonText:{
        color: "#FFF",
        fontSize: 16,
        fontWeight: "600"
    }
})