import React, { useState } from 'react';
import { Alert, Modal, Text, TextInput, View, ScrollView } from 'react-native';
import { viewStyles, modalStyles, textStyles } from '../styles'
import PickImage from './PickImage'; //세부사항 모달창 이미지 삽입 모듈
import IconButton from './IconButton';
import Memo from './Memo';
import TodolistInput from './TodolistInput';
import { images } from '../images';
import ViewCalendar from './ViewCalendar';

const DetailTodolist = ({item,detailVisible,setDetailVisible,deleteTask,toggleTask,updateTask, category}) => {

  //삭제버튼 눌렸을때
  const _deleteTask= ()=>{

    deleteTask(item.id); //id전달
    setDetailVisible(false);
  }
    const [dueDate, setDueDate] = useState("");
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
          <Text style={textStyles.listInModal}> {category} </Text>
            <IconButton type={images.check} onPressOut={() => {setDetailVisible(!detailVisible);}} />
            <IconButton type={images.trash} onPressOut={_deleteTask} />
            <IconButton type={images.cancle} onPressOut={() => {setDetailVisible(!detailVisible);}} />
          </View>
          <TodolistInput item={item} dueDate = {dueDate} toggleTask={toggleTask} updateTask={updateTask}/>
          <ScrollView style={{ width: '100%', marginLeft: 20, marginRight: 8}}>
            <Text style={modalStyles.modalText}>Note</Text>
            <Memo />
            <PickImage/>
            <ViewCalendar dueDate={dueDate} setDueDate={setDueDate}/>
          </ScrollView>
        </View>
      </Modal>
  
    );
  
  }
  
  
  export default DetailTodolist;