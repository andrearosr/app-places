import React, { useState } from 'react';
import { View, Button, Image, Text, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import COLORS from '../constants/Colors';

function ImageSelector({ onImageSelected }) {
  const [pickedUri, setPickedUri] = useState()

  const verifyPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    
    if (granted) {
      return true;
    }

    Alert.alert(
      'Permisos insuficientes',
      'Necesita otorgar permisos de la cámara',
      [{ text: 'Ok' }]
    )

    return false;
  }

  const handleTakeImage = async () => {
    const isCameraOk = await verifyPermissions()
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.8,
    })

    setPickedUri(image.uri)
    onImageSelected(image.uri)
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri
          ? <Text>No hay imagen...</Text>
          : <Image style={styles.image} source={{ uri: pickedUri }} />}
      </View>
      <Button
        title="Tomar Foto"
        color={COLORS.LIGTH_PINK}
        onPress={handleTakeImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.BLUSH,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default ImageSelector