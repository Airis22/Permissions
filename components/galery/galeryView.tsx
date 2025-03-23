//vista para l agaleria 

import React, { useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { ImagePicker } from "../imagePicker";

export function GaleryView() {
    //implementar un estado para la lista o collecion de imagenes
    const [images, setImages] = useState<string[]>([]);
    
    const newPhoto = (uri: string) => {
        setImages([...images, uri])
    }
    
    //implementar función para recibir nueva imagen 
    return (
        <View style={styles.container}>
            <ImagePicker
                // pasarle la función para recibir la imagen
                photo={newPhoto}
            />

            {/* mostrar el grid o galeria de imagenes */}
            <FlatList
                data={images}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={styles.imageContainer}>
                        <Image 
                            source={{uri: item}} 
                            style={styles.image}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white",
        height: "100%",
        marginTop: 40
    },
    imageContainer: {
        flex: 1,
        margin: 5,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    }
})

