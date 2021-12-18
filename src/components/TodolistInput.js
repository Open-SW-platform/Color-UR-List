import React, {useState} from 'react';
import { images } from '../images';
import {StyleSheet, Text, TextInput, View } from 'react-native';
import {theme} from '../theme';
import IconButton from './IconButton';
import Input from '../components/Input';


//세부사항 모달창에서 체크,투두이름,Duedate정보를 담고있는 곳.
const TodolistInput = ({newTask, dueDate,item,toggleTask,updateTask}) => {

   
    const [text,setText]=useState(item.text); //현재 입력중인 텍스트 값 

    const _onSubmit=()=>{
       
            const updatatedItem= Object.assign({},item);
            updatatedItem['text']=text; //text내용 변경
          
            updateTask(updatatedItem);
      
    }
    const _onBlur=()=>{ // focus를 잃었을 경우
            setText(item.text); //기존 text값으로 초기화
    }
    console.log(item);
    return (
        <View style= {styles.container}> 
        <IconButton type = {item.completed? images.checked :images.unchecked}
        //완료 여부에 따라 아이콘이 다르게 렌더링 되어야함. 
        onPressOut={toggleTask}
        item = {item}
        />
    
        <View style={{backgroundColor:theme.itemBackground, margin: 3, borderRadius: 5}}>
        <TextInput value={text} style={styles.textInput} onChangeText={text=>setText(text)} onSubmitEditing = {_onSubmit} onBlur={_onBlur}/> 
        <Text style={styles.textDueDate}> Due Date: {dueDate}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        borderBottomWidth : 2,
        borderBottomColor: '#e3e3e3',
        width : '100%',
        height : 80,
    },
    textInput: {
        width: 200,
        height: 30,
        fontSize: 20,
        borderRadius: 10,
        color: 'black',
        fontWeight : 'bold',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
    },
    textDueDate: {
        width: 140,
        fontSize: 13,
        borderRadius: 10,
        color: 'white',
        backgroundColor: '#68135f',
        fontWeight : 'bold',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
    },
});

export default TodolistInput;