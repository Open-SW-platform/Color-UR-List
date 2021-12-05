//홈(메인) 화면
import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, ScrollView, Image } from 'react-native';
import { viewStyles, textStyles, barStyles } from '../styles'
import { images } from '../images';
import IconButton from '../components/IconButton';
import Today from '../components/Today'
import ThemeSelector from '../components/ThemeSelector';
import Input from '../components/Input';
import Task from '../components/Task';
import ExtraMenu from '../components/ExtraMenu';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../theme';


export default function HomeScreen() {
  
  const [addMode, setAddMode] = useState(false);
  const [newTask, setNewTask] = useState(''); // 새 투두리스트 추가 여부
  const [tasks, setTasks] = useState({
    '1': { id: '1', text: "My Todo List1", completed: false },
    '2': { id: '2', text: "My Todo List2", completed: false },
  });
  
  //const [detailVisible, setDetailVisible] = useState(false); // 태스크 세부사항창을 띄우고 있는지 여부
  const [themeVisible, setThemeVisible] = useState(false); // theme 변경 창을 띄우고 있는지 여부
  const [SearchMode, setSearchMode] = useState(false); //검색모드인지 여부
  const [extraVisible, setExtraVisible] = useState(false); // 더보기창을 보이고 있는지 여부
  const [DeleteMode, setDeleteMode] = useState(false); //삭제모드인지 여부 
 
  var TopBar;

  const openTheme = () => {
    setThemeVisible(!themeVisible);
  }

  // 투두 추가,삭제,토글,업데이트 함수

  const _addTask = () => {

    if (newTask.length<1 ){
      return; //아무것도 입력하지 않은 상태에서 완료버튼을 누르면 추가되지 않음.
    }  
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    setTasks({ ...tasks, ...newTaskObject });
  };

  const _deleteTask =(id)=>{ //id : 삭제할 task의 id값

    const currentTasks=Object.assign({},tasks);  //현재todolist정보 킵

    //delete 연산자는 객체의 속성을 제거
    delete currentTasks[id]; //특정 id값을 가진 todoitem삭제.
    setTasks(currentTasks); // {...currentTasks} 가 아님. 이미 열거 가능한 항목으로 나열되어있음.
 
  }

  const _toggleTask =(id)=>{
    const currentTask=Object.assign({},tasks);
   currentTask[id]['completed'] = ! currentTask[id]['completed']; 
   setTasks(currentTask);
   }

   const _updateTask=(updatatedItem)=>{
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
    <View style={viewStyles.container}>
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


      <View style={viewStyles.goalView}/** 목표 작성부분*/>
        <TextInput
          style={{ padding: 10, fontSize: 20 }}
          placeholder="TODAY'S GOAL" />
      </View>
      <View style={viewStyles.todolistView}>
        <ScrollView>
          <View style={viewStyles.categoryView}/** Study 카테고리*/>
            <IconButton type={images.tag} />
            <Text style={textStyles.contents}> Study </Text>
            <IconButton type={images.add} />
          </View>
          <View style={viewStyles.container}/** 투두리스트 항목 */>
            <Input placeholder="+ Add a Task" 
              value={newTask}
              onChangeText={text => setNewTask(text)}
              onSubmitEditing={_addTask} 
              placeholder = "+ Add a Task"
              onBlur={()=>setNewTask('')}
              />
            <View>
             
        
            {Object.values(tasks).reverse().map(item=>(
            <Task key= {item.id} 
            item={item} 
            deleteTask={_deleteTask} 
            toggleTask={_toggleTask} 
            updateTask={_updateTask} 

            /> ) )}
              
            </View>
          </View>

        </ScrollView>
      </View>
    </View>
    </ThemeProvider>
  );
};
