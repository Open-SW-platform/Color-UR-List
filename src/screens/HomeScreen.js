//홈(메인) 화면
import React, { useState,useRef } from 'react';
import { StatusBar, Dimensions,Text, View, TextInput, ScrollView, Image } from 'react-native';
import { viewStyles, textStyles, barStyles,List,Container } from '../styles'
import { images } from '../images';
import IconButton from '../components/IconButton';
import Today from '../components/Today'
import ThemeSelector from '../components/ThemeSelector';
import Input from '../components/Input';
import Task from '../components/Task';
import ExtraMenu from '../components/ExtraMenu';
import styled,{ThemeProvider} from 'styled-components/native';
import {theme} from '../theme';
import Goal from '../components/Goal'

export default function HomeScreen() {

  const width = Dimensions.get('window').width;
  const [addMode, setAddMode] = useState(false);
  const [newTask, setNewTask] = useState(''); // 새 투두리스트 추가 여부
  const [tasks, setTasks] = useState({
    '1': { id: '1', text: "My Todo List1", completed: false },
    '2': { id: '2', text: "My Todo List2", completed: false },
  });
  const [goal,setGoal]=useState('');
  
 
  const [themeVisible, setThemeVisible] = useState(false); // theme 변경 창을 띄우고 있는지 여부
  const [SearchMode, setSearchMode] = useState(false); //검색모드인지 여부
  const [extraVisible, setExtraVisible] = useState(false); // 더보기창을 보이고 있는지 여부
  const [DeleteMode, setDeleteMode] = useState(false); //삭제모드인지 여부 


  var TopBar;

  //const text_added = useRef(null); //+버튼을 눌러서 방금 추가된 투두아이템
  const category= ["school","exercise"];
  const openTheme = () => {
    setThemeVisible(!themeVisible);
  }

  // 투두 추가,삭제,토글,업데이트 함수

  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: "", completed: false },
    };
   // text_added.current.focus(); //방금 추가한 투두리스트 컴포넌트로 포커스 이동.
    setTasks({ ...tasks, ...newTaskObject });
  };

  const _deleteTask =(id)=>{ //id : 삭제할 task의 id값

    const currentTasks=Object.assign({},tasks);  //현재todolist정보 킵

    //delete 연산자는 객체의 속성을 제거
    delete currentTasks[id]; //특정 id값을 가진 todoitem삭제.
    setTasks(currentTasks); // {...currentTasks} 가 아님. 이미 열거 가능한 항목으로 나열되어있음.
 
  }

  const _toggleTask =(id)=>{ //완료/미완료
    const currentTask=Object.assign({},tasks);
   currentTask[id]['completed'] = ! currentTask[id]['completed']; 
   setTasks(currentTask);
   }

   const _updateTask=(updatatedItem)=>{ //수정
    const currentTasks=Object.assign({},tasks);
    currentTasks[updatatedItem.id]['text'] = updatatedItem.text;
    setTasks(currentTasks);

  }


// > 버튼을 누르면 선택된 투두아이템의 정보가 detailtodolist에 props로 주어짐.

  if (SearchMode) { // 검색모드라면 -> 상단바부분을 검색창으로 변경
    TopBar = <View style={viewStyles.settingView} >
      <IconButton type={images.back} onPressOut={() => setSearchMode(!SearchMode)} />
      <View style={viewStyles.SearchBar}>
        <IconButton type={images.search} />
        <TextInput
          style={{ paddingLeft: 10, paddingRight: 10, fontSize: 20 }}
          placeholder="Searching for ..." />
        <IconButton type={images.cancle} />
      </View>
    </View>

  }
  else if (DeleteMode){ //삭제모드라면 -> 상단바부분을 삭제부분으로 변경.
    TopBar=<View style={viewStyles.settingView} >
    <IconButton type={images.back}  onPressOut={() => setDeleteMode(!DeleteMode)}/>
    <Text>  Delete </Text>
    <View style={viewStyles.settingGroup}>
      <IconButton type={images.unchecked} />
      <IconButton type={images.trash} />
    </View>
  </View>

  }
  else { // 둘다 아니라면 -> 일반 상단바 보여줌
    TopBar =
      <View style={viewStyles.settingView} >
        <IconButton type={images.todo} onPressOut={openTheme}/>
        <Today />
        <View style={viewStyles.settingGroup}>
        
          <IconButton type={images.search} onPressOut={() => setSearchMode(!SearchMode)} />
          <IconButton onPressOut = {()=>{setExtraVisible(!extraVisible); console.log('open extraMenu');}} type={images.dot} />
        </View>
      </View>
  }

  return (
    //ThemeProvider는 자식들에게 광역으로 자신이 가지고 있는 기본 props값을 사용할 수 있도록 해주는 역할
    <ThemeProvider theme= {theme} //theme : basic theme (기본파랑)
    > 
    <Container>
      <StatusBar barStyle="light-content" style={barStyles.statusBar} />
      {TopBar}
      <ThemeSelector themeVisible={themeVisible} setThemeVisible={setThemeVisible} // 테마선택창
      />
        <ExtraMenu  // 더보기 모달창
        ExtraVisible={extraVisible} 
        setExtraVisible ={ setExtraVisible} 
        DeleteMode={DeleteMode} 
        setDeleteMode={setDeleteMode} 
        openTheme={openTheme}/>

      <Goal value={goal} setValue={setGoal}/*목표작성부분*//> 
     
      <List /*투두리스트뷰*/> 
      
      <View style={viewStyles.categoryView}/** Study 카테고리*/>
            <IconButton type={images.tag} />
            <Text style={textStyles.contents}> {category[0]} </Text>
            <IconButton onPressOut={_addTask} type={images.add} />
          </View>
            {Object.values(tasks).reverse().map(item=>(
            <Task key= {item.id} 
            item={item} 
            deleteTask={_deleteTask} 
            toggleTask={_toggleTask} 
            updateTask={_updateTask} 
            category={category[0]}
            /> ) )}
        
          </List>
  
             
      </Container>
    </ThemeProvider>
  );
};
