import PropTyeps from 'prop-types';
import React,{useState} from 'react';
import styled from  'styled-components/native';
import IconButton from './IconButton';
import { images } from "../images";
import Input  from './Input';


const Container= styled.View`
flex-direction : row;
align-items : center; 
background-color : ${({theme}) => theme.itemBackground};
border-radius: 10px;
padding : 5px;
margin : 3px 0;
`;
//margin : 상하 좌우 

//버튼이 차지 하지 않은 container의 나머지 부분을 모두 차지하도록
const Content =styled.Text`
flex : 1 ;
font-size : 24px;
color : ${({theme,completed}) => completed?theme.done:theme.text};
text-decoration-line: ${({completed})=> completed?'Line-through':'none'};
//완료여부에 따라 줄이 그어짐

`;

 
const Task =({item,deleteTask,toggleTask,updateTask,detailVisible,setDetailVisible})=>{
//수정버튼이 눌리면 현재 렌더링하고있는 아이템들이 아닌 input컴포넌트를 렌더링하도록함.
// input vs 현재구성 렌더링을 결정하기 위해서는 수정상태변수 필요.

   //isEditing 값에 따라서 input vs 현재구성 중 무엇을 렌더링 할지 결정 
    const[isEdting,setIsEdting]=useState(false); 
 
    const [text,setText]=useState(item.text);
    const _onSubmit=()=>{
        if(isEdting){
            const updatatedItem= Object.assign({},item);
            updatatedItem['text']=text; //text내용 변경
            setIsEdting(false);
            updateTask(updatatedItem);
        }
          
    }
    const _onBlur=()=>{ // focus를 잃었을 경우
        
            setIsEdting(false);
            setText(item.text); //기존 text값으로 초기화
          
    }

     //항목의 text를 직접적으로 변경할 수 없기때문에 수정되는 항목의 Text를 관리하는 상태변수 필요
    return isEdting? (<Input value={text} onChangeText={text=>setText(text)} onSubmitEditing = {_onSubmit} onBlur={_onBlur} />)
     :(
        <Container>
            
        <IconButton icon = {item.completed? images.checked_box :images.unchecked}
        //완료 여부에 따라 아이콘이 다르게 렌더링 되어야함. 
        onPress={toggleTask}
        item = {item}
        />
        <Content completed={item.completed}>{item.text}</Content>
        {item.completed || <IconButton onPressOut = {()=>{setIsEdting(true);} } icon = {images.edit}/>
        // completed 값이 false이면 edit버튼이 렌더링됨. 
        }
         <IconButton onPressOut={()=> { setDetailVisible(!detailVisible);}} type={images.edit} /> 
        <IconButton icon = {icons.delete} item ={item} onPressOut={deleteTask} 
        // 삭제할 태스크의 id까지 전달
        />
        </Container>

    );
};



Task.PropTyeps={
    item : PropTyeps.object.isRequired,
    deleteTask :PropTyeps.func.isRequired,
    updateTask : PropTyeps.func.isRequired,
};

export default Task;


