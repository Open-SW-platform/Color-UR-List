//홈(메인) 화면
import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, ScrollView, Alert, Modal, StyleSheet, Pressable } from 'react-native';
import { viewStyles, textStyles, barStyles, modalstyles } from '../styles'
import { images } from '../images';
import IconButton from '../components/IconButton';
import CircleButton from '../components/CircleButton';
import Memo from '../components/Memo';
import TodolistInput from '../components/TodolistInput';
import Today from '../components/Today'
import ThemeSelector from '../components/ThemeSelector';
import Input from '../components/Input';
import Task from '../components/Task';

export default function HomeScreen() {
  Alert, Modal, StyleSheet, Text, Pressable, View
  const [addMode, setAddMode] = useState(false);
  const [newTask, setNewTask] = useState(''); // 새 투두리스트 추가 여부
  const [tasks, setTasks] = useState({
    '1': { id: '1', text: "My Todo List", completed: false },
  });
  const [modalVisible, setModalVisible] = useState(false); // 태스크 세부사항창을 띄우고 있는지 여부
  const [themeVisible, setThemeVisible] = useState(false); // theme 변경 창을 띄우고 있는지 여부
  const [SearchMode, setSearchMode] = useState(false); //검색모드인지 여부
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
  else { // 검색모드가 아니라면 -> 일반 상단바 보여줌
    TopBar =
      <View style={viewStyles.settingView} >
        <Today />
        <View style={viewStyles.settingGroup}>
          <IconButton type={images.search} onPressOut={() => setSearchMode(!SearchMode)} />
          <IconButton type={images.dot} />
        </View>
      </View>
  }

  return (
    <View style={viewStyles.container}>
      <StatusBar barStyle="light-content" style={barStyles.statusBar} />
      {TopBar}
      <ThemeSelector themeVisible={themeVisible} setThemeVisible={setThemeVisible} // 테마선택창
      />
      <Modal // Task 클릭시 띄우는 세부사항 창. 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);

        }}>

        <View style={modalstyles.modalView}>
          <View style={viewStyles.settingGroup}>
            <IconButton type={images.check} onPressOut={() => setModalVisible(!modalVisible)} />
            <IconButton type={images.trash} onPressOut={() => alert('delete')} />
            <IconButton type={images.cancle} onPressOut={() => setModalVisible(!modalVisible)} />
          </View>
          <TodolistInput />
          <ScrollView style={{ width: '100%', marginLeft: 30, }}>
            <Text style={modalstyles.modalText}>Note</Text>
            <Memo />
            <Text style={modalstyles.modalText}>Due date : 12-25</Text>
          </ScrollView>
        </View>
      </Modal>

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
              onSubmitEditing={_addTask} />
            <View>
              {Object.values(tasks).reverse().map(item => ((
                <Task key={item.id} text={item.text} />
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
                <Task key={item.id} text={item.text} />
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
                <Task key={item.id} text={item.text} />
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
                <Task key={item.id} text={item.text} />
              )))}
            </View>
          </View>
        </ScrollView>

        <View style={viewStyles.AddTaskButtonView}>

          <CircleButton color='white' onPress={openTheme} />
        </View>

      </View>
    </View>
  );
};
