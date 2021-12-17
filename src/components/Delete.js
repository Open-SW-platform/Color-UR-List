import {Text, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import styled from  'styled-components/native';
import IconButton from './IconButton';
import { images } from "../images";
import Input  from './Input';
import DetailTodolist from '../components/DetailTodolist';
import Task from "./Task";

const Container= styled.View`
flex-direction : row;
align-items : center; 
background-color : ${({theme}) => theme.itemBackground};
border-radius: 10px;
padding : 5px;
margin : 3px 0;
`;
//margin : 상하 좌우

//버튼이 차지 하지 않은 container의 나머지 부분을 모두 차지하도록 flex : 1로 설정
const Content =styled.Text`
flex : 1 ;
font-size : 24px;
color : ${({theme,completed}) => completed?theme.done:theme.text};
text-decoration-line: ${({completed})=> completed?'Line-through':'none'};

`;


const Delete =({item,toggleTask,selectTask})=>{
//투두리스트 아이템이 눌리면 현재 렌더링하고있는 아이템들이 아닌 input컴포넌트를 렌더링하도록함.
// input vs 현재구성 렌더링을 결정하기 위해서는 수정상태변수 필요.
    //isEditing 값에 따라서 input vs 기존투두아이템 중 무엇을 렌더링 할지 결정
    const _selectTask= ()=>{
        selectTask(item.id)
    }
    return (


            <Container>

                <IconButton type = {item.completed? images.checked :images.unchecked}
                    //완료 여부에 따라 아이콘이 다르게 렌더링 되어야함.
                            onPressOut={_selectTask}
                            item = {item}
                />
                <TouchableOpacity style={{flex:1, backgroundColor: item.selected ? '#d3d3d3' : 'white'}} onPressOut={_selectTask}>
                    <Content completed={item.completed}>{item.text}</Content>
                </TouchableOpacity>
            </Container>


        );
};

export default Delete;
