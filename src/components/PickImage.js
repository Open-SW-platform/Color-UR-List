import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageModal from 'react-native-image-modal';

export default function App() {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };
  
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <ImageModal
          resizeMode="contain"
          imageBackgroundColor="#000000"
          style={{
            width: 55,
            height: 55,
          }}
          source={{
            uri: selectedImage.localUri
          }}
        />
        <Text numberOfLines={1} ellipsizeMode='tail' style={{ flexShrink: 1 }}>  {selectedImage.localUri}</Text>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>Change</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
  },
});