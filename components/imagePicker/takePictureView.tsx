import { Ionicons } from '@expo/vector-icons';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  onClose: () => void;
  onTakePicture: (uri: string) => void
}

export function TakePictureView({onClose, onTakePicture} : Props) {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef<CameraView>(null);

  const takePicture = async () => {
    const photo = await ref.current?.takePictureAsync();
    if (photo?.uri){
      onTakePicture(photo?.uri)
    }
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView 
      ref={ref}
      style={styles.camera} 
      facing={facing}>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
          style={styles.button} 
          onPress={() => onClose()}>
          <Ionicons
                name="close"
                size={30}
                color="#FFF" 
                />
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.button} 
           onPress={takePicture}>
          <Ionicons
                name="camera-outline"
                size={30}
                color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.button} 
          onPress={toggleCameraFacing}>
          <Ionicons
                name="camera-reverse-outline"
                size={30}
                color="#FFF" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: "auto",

  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    marginTop: 750,
    alignItems: 'center'
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  }
});
