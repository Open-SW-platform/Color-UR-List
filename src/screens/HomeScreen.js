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
import DetailTodolist from '../components/DetailTodolist';

export default function HomeScreen() {
  
  const [addMode, setAddMode] = useState(false);
  const [newTask, setNewTask] = useState(''); // 새 투두리스트 추가 여부
  const [tasks, setTasks] = useState({
    '1': { id: '1', text: "My Todo List", completed: false },
  });
  
  const [detailVisible, setDetailVisible] = useState(false); // 태스크 세부사항창을 띄우고 있는지 여부
  const [themeVisible, setThemeVisible] = useState(false); // theme 변경 창을 띄우고 있는지 여부
  const [SearchMode, setSearchMode] = useState(false); //검색모드인지 여부
  const [extraVisible, setExtraVisible] = useState(false); // 더보기창을 보이고 있는지 여부
  const [DeleteMode, setDeleteMode] = useState(false); //삭제모드인지 여부 
 
  var TopBar;

  const openTheme = () => {
    setThemeVisible(!themeVisible);
  }

  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    setTasks({ ...tasks, ...newTaskObject });
  };

  const _handleTextChange = text => {
    setNewTask(text);
  };

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
      <DetailTodolist
        detailVisible={detailVisible} 
        setDetailVisible ={ setDetailVisible} />

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
            <Input value={newTask}
              onChangeText={_handleTextChange}
              onSubmitEditing={_addTask} 
              placeholder = "+ Add a Task"/>
            <View>
            {Object.values(tasks).reverse().map(item => ((
                <Task key={item.id} text={item.text} detailVisible={detailVisible} setDetailVisible={setDetailVisible}/>
              )))}
              
            </View>
          </View>

          <View style={viewStyles.categoryView}/** Assignment 카테고리*/>
            <IconButton type={images.tag} />
            <Text style={textStyles.contents}> Assignment </Text>
            <IconButton type={images.add} />
          </View>
          <View style={viewStyles.container}/** 투두리스트 항목 */>
            <Input value={newTask}
              onChangeText={_handleTextChange}
              onSubmitEditing={_addTask} />
            <View>
            {Object.values(tasks).reverse().map(item => ((
                <Task key={item.id} text={item.text} detailVisible={detailVisible} setDetailVisible={setDetailVisible}/>
              )))}
              
            </View>
          </View>

          <View style={viewStyles.categoryView}/** Work 카테고리*/>
            <IconButton type={images.tag} />
            <Text style={textStyles.contents}> Work </Text>
            <IconButton type={images.add} />
          </View>
          <View style={viewStyles.container}/** 투두리스트 항목 */>
            <Input value={newTask}
              onChangeText={_handleTextChange}
              onSubmitEditing={_addTask} />
            <View>
            {Object.values(tasks).reverse().map(item => ((
                <Task key={item.id} text={item.text} detailVisible={detailVisible} setDetailVisible={setDetailVisible}/>
              )))}
              
            </View>
          </View>

          <View style={viewStyles.categoryView}/** Exercise 카테고리*/>
            <IconButton type={images.tag} />
            <Text style={textStyles.contents}> Exercise </Text>
            <IconButton type={images.add} />
          </View>
          <View style={viewStyles.container}/** 투두리스트 항목 */>
            <Input value={newTask}
              onChangeText={_handleTextChange}
              onSubmitEditing={_addTask} />
            <View>
              {Object.values(tasks).reverse().map(item => ((
                <Task key={item.id} text={item.text} detailVisible={detailVisible} setDetailVisible={setDetailVisible}/>
              )))}
              
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
    </ThemeProvider>
  );
};
