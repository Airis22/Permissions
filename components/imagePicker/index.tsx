//archivo principal para implementar el componente 
//nos permitia 
//seleccionar el origen de imagen: camara o galweri
//viazulizar la imgen seleccionada
//nostrar un boton par lanzar un picker

import React, { useState } from "react";
import { Alert, Button, Dimensions, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TakePictureView } from "./takePictureView";
import { PhotoPreview } from "./photoPreview";
import * as PhotoPicker from 'expo-image-picker';

type Props = {
    //ya que esta función nos va a apoyar con la url debe ser recibirla
    photo: (uri : string) => void
  }

export function ImagePicker({photo} : Props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [cameraOpen, setCameraOpen] = useState(false);
    const [image, setImage] = useState<string | undefined>(undefined);
    const {width} = Dimensions.get('window')

    const onPictureTaked = (uri?: string) => {
        setImage(uri);
        setCameraOpen(false);
    }

    const onNewPhoto = () => {
        setImage(undefined);
        setCameraOpen(true);
    }

    const onSavePotho = (uri: string) => {
        photo(uri)//ToDo: guardar a imagen
        setModalVisible(false) //resetear los estados
        setImage(undefined);  //limpiar la imagen
        Alert.alert("Photo guardada")
      }

    const pickImage = async () => {
        let result = await PhotoPicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    const menuItems = (
        <View style={styles.modalContainer}>
            <View style={[styles.modalContent, {width: width * 0.6}]}>
                <Text>Origen de la imagen</Text>
                <Button
                    title="camara"
                    color="darkblue"
                    onPress={() => setCameraOpen(true)}
                />
                <Button
                    title="galeria"
                    color="darkblue"
                    onPress={pickImage}
                />
                <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
                    <Text style={styles.textWhite}>Cerrar</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <>
            <View style={styles.contendCamara}>
            <Text style={styles.title}>¡¡Take a Photo!!</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Ionicons
                    name="camera-sharp"
                    size={48}
                    color="black" />
            </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                {!cameraOpen  && !image? menuItems : null}

                {cameraOpen ? (
                    <TakePictureView
                        onClose={() => setCameraOpen(false)}
                        onTakePicture={onPictureTaked}
                    />
                ) : null}

                {image ? (
                    <PhotoPreview
                    uri={image}
                    onCancel={() => setImage(undefined)}
                    onSave= {onSavePotho}
                    onNewPhoto = {onNewPhoto}
                    />
                ): null }

            </Modal>
        </>


    )
}

//agregar un boton paratomar la foto 
//agregar un boton para implementar el cierre 

const styles = StyleSheet.create({
    contendCamara: {
      alignItems: 'center',
      flexDirection: 'column'  
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },

    // Estilos del Modal
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        flexDirection: "column",

    },
    modalContent: {
        /* width: 300, */
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    modalImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 5,
    },
    closeButton: {
        marginTop: 15,
        backgroundColor: "#094161",
        padding: 10,
        borderRadius: 8,
    },
    textWhite: {
        color: "white",
        fontWeight: "bold",
    },
});
