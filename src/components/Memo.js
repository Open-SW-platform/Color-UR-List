import React,{useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {theme} from '../theme';

const Memo = ({item,updateComment}) => {

    const [text,setText]=useState(item.comment);

    const _onSubmitEditing=()=>{
      
        const updatatedItem= Object.assign({},item);
        updatatedItem['comment']=text; //comment 내용 변경
      
        updateComment(updatatedItem);
    }

    const _onBlur=()=>{ // focus를 잃었을 경우
        
        setText(item.comment); //기존 comment값으로 초기화
      
    }      
    return (
        <TextInput 
        style = {inputStyle.textInput}
        value={text}
        placeholder= "Comment"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        keyboardAppearance="dark"
        multiline={false}
        onSubmitEditing={_onSubmitEditing}
        onChangeText={(text)=>setText(text)}
        onBlur={_onBlur} 
        />  
    );
};

const inputStyle = StyleSheet.create({
    textInput: {
        fontSize: 15,
        width: '95%',
        height: 80,
        marginTop: 5,
        marginLeft: 10,
        marginBottom: 10,
        paddingLeft: 15,
        paddingTop: 2,
        borderRadius: 10,
        backgroundColor:'#e3e3e3',
        color: 'black',
      
    },
});

export default Memo;