import React from "react";
import styled  from "styled-components/native";
import { Dimensions,useWindowDimensions } from "react-native";
import PropTypes from 'prop-types';

const StyledInput=styled.TextInput.attrs(({theme})=>({
placeholderTextColor: theme.main,

}))`
width : ${({width}) => width}px;
height : 50px;
margin: 3px 0
padding : 15px 20px;
border-radius : 10px;
font-size: 25px;
background-color : ${({theme}) => theme.itemBackground};
color :  ${({theme}) => theme.text};
`;

//App.js 에서 전달된 props 값들로 속성설정해서 반환.
const Input = ({placeholder,value,onChangeText,onSubmitEditing,onBlur})=>{

    //const width =Dimensions.get('window').width;
    const width = useWindowDimensions().width;
    return <StyledInput width={width} 
    placeholder={placeholder} 
    maxLength={50}
    autoCapitalize="none"
    autoCorrect={false}
    returnKeyType="done"
    keyboardAppearance="dark"
    value ={value}
    onChangeText={onChangeText}
    onSubmitEditing={onSubmitEditing}
    onBlur={onBlur} //Input 컴포넌트에서 focus를 잃었을때 입력한 값이 취소되는 기능.
    />
   
  
};

Input.propTypes = {
    placeholder : PropTypes.string,
    value : PropTypes.string.isRequred, // string이고 필수
    onChangeText : PropTypes.func.isRequred, // 함수이고 필수
    onSubmitEditing: PropTypes.func.isRequred // 함수이고 필수
}
export default Input;