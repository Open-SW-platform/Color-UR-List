import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';
import { viewStyles, modalStyles } from '../styles'
import PickImage from './PickImage'; //세부사항 모달창 이미지 삽입 모듈
import Memo from './Memo';
import IconButton from './IconButton';
import TodolistInput from './TodolistInput';
import { images } from '../images';

const DetailTodolist = ({detailVisible,setDetailVisible}) => {
 
    return (
        <Modal // Task > 클릭시 띄우는 세부사항 모달
        animationType="slide"
        transparent={true}
        visible={detailVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setDetailVisible(!detailVisible);
        }}>

        <View style={modalStyles.modalView}>
          <View style={viewStyles.settingGroup}>
            <IconButton type={images.check} onPressOut={() => {setDetailVisible(!detailVisible);}} />
            <IconButton type={images.trash} onPressOut={() => alert('delete')} />
            <IconButton type={images.cancle} onPressOut={() => {setDetailVisible(!detailVisible);}} />
          </View>
          <TodolistInput />
          <ScrollView style={{ width: '100%', marginLeft: 30, }}>
            <Text style={modalStyles.modalText}>Note</Text>
            <Memo />
            <Text style={modalStyles.modalText}>Due date : 12-25</Text>
            <PickImage/>
          </ScrollView>
        </View>
      </Modal>
  
    );
  
  }
  
  
  export default DetailTodolist;