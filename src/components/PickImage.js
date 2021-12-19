import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageModal from 'react-native-image-modal';

const PickImage = ({item, imgSrcTask})=> {
  let [selectedImage, setSelectedImage] = React.useState(null);

  const _imgSrcTask = (changedImg)=>{
    const settingItem = Object.assign({},item);
    settingItem['imageSrc'] = changedImg.uri;
    imgSrcTask(settingItem);
    console.log('a');
  }

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
    _imgSrcTask(pickerResult);
  };
  
  if (item.imageSrc !== "") {
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
            uri: item.imageSrc
          }}
        />
        <Text numberOfLines={1} ellipsizeMode='tail' style={{ flexShrink: 1 }}>  {item.imageSrc}</Text>
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

export default PickImage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  button: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
  },
});