//아이콘 버튼 관련 componenet(교수님 파일 그대로 복붙)
import React from "react";
import styled from "styled-components"
import { Pressable,StyleSheet, TouchableOpacity, View,Image  } from "react-native";
import PropTypes from 'prop-types'
import { images } from '../images';

//Icon이미지를 출력할 styled-component
const Icon=styled.Image` 
width : 27px;
height: 27px;
margin: 5px; 

tint-color: ${({theme,completed})=>completed ? theme.done:theme.text  }; 
`;

//완료여부에 따른 아이콘 색상 변경


const IconButton =  ({type,onPressOut,item})=>{


const _onPressOut =()=>{
   
    onPressOut(item.id);
   //onPressOut();
   console.log('onPressOut');
}

if(type == 15){ //todo type id 값?
    return(
        <Pressable onPressOut = {onPressOut}>
            <Image source = {type} style = {iconStyle.themeIcon}/>
        </Pressable>
    );
}
return ( 
    <TouchableOpacity onPressOut={_onPressOut}>
<View>
    <Icon source={type} completed={item.completed} 
    //styled-component에서 전달되어온 props값을 활용하기위해서 props추가
    />
</View>
</TouchableOpacity>


);
};
// 수정버튼은 item 을 props로 전달하지 않는데 tint-color에서 활용하므로 오류발생.
// 그러나 수정버튼은 completed 와 id값을 필요로하지 않으므로 item을 전달할 필요가 없음. -> 따라서 item의 기본값을 설정

IconButton.defaultProps={
    item : {completed: false},
};

const iconStyle = StyleSheet.create({

    themeIcon: {
        width: 30,
        height: 30,
        margin: 7,
    }
});

/*IconButton.propTypes={
    //icons 에 저장된 파일중 하나
    //icons는 객체형태로 되어있는데 oneof 함수는 배열로 전달이 되어야함.
    // 따라서 icons 객체에 있는 값만을 이용해서 proptypes를 설정해야함
    //Object.values 사용해서 icons객체에있는 '값'들만 배열로 oneOf에 적용.
    type: PropTypes.oneOf(Object.values(images)).isRequired, // 어떤 아이콘을 출력할지,
    onPressOut: PropTypes.func,// 클릭했을 때 어떤 함수가 호출될지
    item: PropTypes.Object,
}*/

export default IconButton;