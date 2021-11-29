import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from 'react-native';



const ThemeSelector = ({themeVisible,setThemeVisible}) => {
 
  return (
   
      <Modal
        animationType="slide"
        transparent={true}
        visible={themeVisible}
        onRequestClose ={()=>{setThemeVisible(!themeVisible);}}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose Theme Color</Text>
            
          <View style ={styles.settingView }>

            <View style ={styles.sqareBlock}>
          <TouchableOpacity 
            style={[styles.button,{backgroundColor: "#f9ceee" } ]}
            onPress={() => alert('change to pink')}
            />    
            <Text>pink</Text>  
            </View>
         
            <View style ={styles. sqareBlock}>
          <TouchableOpacity 
            style={[styles.button,{backgroundColor: "#e0cdff" } ]}
            onPress={() => alert('change to purple')}
            />    
            <Text>purple</Text>  
            </View>

            <View style ={styles. sqareBlock}>
          <TouchableOpacity 
            style={[styles.button,{backgroundColor: "#c1f0fb" } ]}
            onPress={() => alert('change to sky blue')}
            />    
            <Text>sky blue</Text>  
            </View>
            
            <View style ={styles. sqareBlock}>
          <TouchableOpacity 
            style={[styles.button,{backgroundColor: "#dcf9a8" } ]}
            onPress={() => alert('change to green')}
            />    
            <Text>green</Text>  
            </View>
            
            <View style ={styles. sqareBlock}>
          <TouchableOpacity 
            style={[styles.button,{backgroundColor: "#ffebaf" } ]}
            onPress={() => alert('change to peach')}
            />    
            <Text>peach</Text>  
            </View>

            </View>

            <Pressable
              style={[styles.button2, styles.buttonClose]}
              onPress ={()=>{setThemeVisible(!themeVisible);}}
            >
              <Text style={styles.textStyle}>select</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
     
  
  );
};

const styles = StyleSheet.create({
  sqareBlock :{
    flexDirection : 'column',
    margin : 20,
    alignItems: 'center',
   
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    
    borderRadius: 35,
    backgroundColor: 'red',
  },
  button2: {
    borderRadius: 10,
    width : 50,
    height : 20,
    elevation: 2
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  settingView : {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  modalView: {
    marginBottom: 100,
    width : 400,
    height : 200,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize :15,
    textAlign: 'center',
  },
  themeList: {
    margin :10,
  }
});

export default ThemeSelector;