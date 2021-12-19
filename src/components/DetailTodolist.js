import React, { useState } from 'react';
import {Alert, Modal, Text, TextInput, View, ScrollView, Share} from 'react-native';
import { viewStyles, modalStyles, textStyles } from '../styles'
import PickImage from './PickImage'; //세부사항 모달창 이미지 삽입 모듈
import IconButton from './IconButton';
import Memo from './Memo';
import TodolistInput from './TodolistInput';
import { images } from '../images';
import ViewCalendar from './ViewCalendar';
import { theme } from '../theme';

const DetailTodolist = ({item,detailVisible,setDetailVisible,deleteTask,toggleTask,updateTask, category, dueDateTask, imgSrcTask, themeColor, setThemeColor,updateComment}) => {

  //삭제버튼 눌렸을때
  const _deleteTask= ()=>{

    deleteTask(item.id); //id전달
    setDetailVisible(false);
  }
  const _shareData = async() => {
    var text = '<Color UR List>\n';
    text+=item.text +'\n'+'-completed: ('+item.completed+')\n'+ '-duedate : ('+item.duedate+')\n' +'-comment : ('+item.comment+')\n'

    try{
      const result = await Share.share({
        message:
        text,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('activityType!');
        } else {
          console.log('Share!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (error) {
      alert(error.message);
    }
  }
    return (
        <Modal // Task > 클릭시 띄우는 세부사항 모달
        animationType="slide"
        transparent={true}
        visible={detailVisible}

        onRequestClose={() => {
          setDetailVisible(!detailVisible);
        }}>

        <View style={[modalStyles.modalView, {backgroundColor:theme.itemBackground, borderColor: themeColor}]}>
          <View style={[viewStyles.settingGroup, {backgroundColor: themeColor, borderRadius: 10}]}>
          <Text style={textStyles.listInModal}> {category} </Text>
            <IconButton type={images.share} onPressOut={_shareData} />
            <IconButton type={images.trash} onPressOut={_deleteTask} />
            <IconButton type={images.cancle} onPressOut={() => {setDetailVisible(!detailVisible);}} />
          </View>
          <ScrollView style={{ width: '100%', backgroundColor: theme.itemBackground}}>
          <TodolistInput item={item} toggleTask={toggleTask} updateTask={updateTask}/>
          
            <Text style={modalStyles.modalText}>Note</Text>
            <Memo item={item} updateComment={updateComment} />
            <PickImage item={item} imgSrcTask={imgSrcTask}/>
            <ViewCalendar item={item} dueDateTask={dueDateTask}/>
          </ScrollView>
        </View>
      </Modal>

    );

  }


  export default DetailTodolist;
