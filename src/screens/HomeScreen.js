//홈(메인) 화면
import React, { useState, useRef } from 'react';
import { StatusBar, Dimensions, Text, View, TextInput, ScrollView, Image } from 'react-native';
import { viewStyles, textStyles, barStyles, List, Container } from '../styles'
import { images } from '../images';
import IconButton from '../components/IconButton';
import Today from '../components/Today'
import ThemeSelector from '../components/ThemeSelector';
import Input from '../components/Input';
import Task from '../components/Task';
import Delete from '../components/Delete';
import ExtraMenu from '../components/ExtraMenu';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from '../theme';
import Goal from '../components/Goal'
import DetailTodolist from '../components/DetailTodolist';


export default function HomeScreen() {

  const [tasks, setTasks] = useState({
    '1': { id: '1', text: "My Todo List1", duedate:'', completed: false, category: 0, selected :false },
    '2': { id: '2', text: "My Todo List2", duedate:'', completed: false, category: 1, selected :false },
    '3': { id: '3', text: "My Todo List3", duedate:'', completed: false, category: 2, selected :false },
    '4': { id: '4', text: "My Todo List4", duedate:'',completed: false, category: 3, selected :false },

  });

  const [visibleMode,setVisibleMode]=useState('ViewAll'); // ViewAll/Uncompleted/Completed
  const [goal,setGoal]=useState('');
  const [themeVisible, setThemeVisible] = useState(false); // theme 변경 창을 띄우고 있는지 여부
  const [SearchMode, setSearchMode] = useState(false); //검색모드인지 여부
  const [extraVisible, setExtraVisible] = useState(false); // 더보기창을 보이고 있는지 여부

  const [DeleteMode, setDeleteMode] = useState(false); //삭제모드인지 여부
  const [themeColor, setThemeColor] = useState('#f9ceee');
  let check = false;//전체선택인지 여부

  var TopBar;

  //const text_added = useRef(null); //+버튼을 눌러서 방금 추가된 투두아이템
  const [category,setCategory]= useState(["Study","Assignment","Work","Exercise"]);
  const openTheme = () => {
    setThemeVisible(!themeVisible);
  }

  // 투두 추가,삭제,토글,업데이트 함수

  const _addTask = (num_category) => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: "", completed: false, category: num_category, selected :false },
    };

    setTasks({ ...tasks, ...newTaskObject });
  };

  const _deleteTask = (id) => { //id : 삭제할 task의 id값

    const currentTasks = Object.assign({}, tasks);  //현재todolist정보 킵

    //delete 연산자는 객체의 속성을 제거
    delete currentTasks[id]; //특정 id값을 가진 todoitem삭제.
    setTasks(currentTasks); // {...currentTasks} 가 아님. 이미 열거 가능한 항목으로 나열되어있음.

  }

  const _toggleTask = (id) => { //완료/미완료
    const currentTask = Object.assign({}, tasks);
    currentTask[id]['completed'] = !currentTask[id]['completed'];
    setTasks(currentTask);
  }

  const _updateTask = (updatatedItem) => { //수정
    const currentTasks = Object.assign({}, tasks);
    currentTasks[updatatedItem.id]['text'] = updatatedItem.text;
    setTasks(currentTasks);

  }

  const _dueDateTask = (dueDateItem) =>{ //duedate 설정
    const currentTasks = Object.assign({}, tasks);
    currentTasks[dueDateItem.id]['duedate'] = dueDateItem.duedate;
    setTasks(currentTasks);
  }

  const _selectAll = () => {
    const currentTasks = Object.assign({}, tasks);

    for(const id in currentTasks){ // id가 매번 반복마다 currentTasks의 key를 순회
            currentTasks[id]['completed'] = true; //완료여부를 true로 설정

    }
   setTasks(currentTasks);
  }

  const _selectToDelete = (id) => {
    const currentTask=Object.assign({},tasks);
    currentTask[id]['selected'] = ! currentTask[id]['selected'];
    setTasks(currentTask);
  }

  const _selectAllToDelete = () => {
    const currentTasks = Object.assign({}, tasks);
    console.log(check)
    check = !check
    console.log(check)
    if(check){
      for(const id in currentTasks){ // id가 매번 반복마다 currentTasks의 key를 순회
        currentTasks[id]['selected'] = true; //완료여부를 true로 설정
      }
    }
    else {
      for(const id in currentTasks){ // id가 매번 반복마다 currentTasks의 key를 순회
        currentTasks[id]['selected'] = false; //완료여부를 true로 설정
      }
    }
    setTasks(currentTasks);
  }
  const _delete = () => {
    const currentTasks = Object.assign({}, tasks);
    for(const id in currentTasks){
      if(currentTasks[id]['selected'] = true){
        delete currentTasks[id];
      }
    }
    setTasks(currentTasks);
  }

  const _deselectAll = () => {
    const currentTasks = Object.assign({}, tasks);

    for(const id in currentTasks){ // id가 매번 반복마다 currentTasks의 key를 순회
            currentTasks[id]['completed'] = false; //완료여부를 false로 설정
    }
   setTasks(currentTasks);
  }


  const _updateCategory=(category_index,name)=>{ //index번째 카테고리를 name으로 바꿈
    const currentCategory = category;
    currentCategory[category_index]=name;
    setTasks(currentCategory);
  }

  const [searchTerm, setSearchTerm] = useState(""); // 검색창에 들어가는 키워드

  // > 버튼을 누르면 선택된 투두아이템의 정보가 detailtodolist에 props로 주어짐.

  if (SearchMode) { // 검색모드라면 -> 상단바부분을 검색창으로 변경
    TopBar = <View style={[viewStyles.settingView, {backgroundColor: themeColor}]} >
      <IconButton type={images.back} onPressOut={() => setSearchMode(!SearchMode)} />
      <View style={viewStyles.SearchBar}>
        <IconButton type={images.search} />
        <TextInput
          type="text"
          style={{ width: '75%', paddingLeft: 10, paddingRight: 10, fontSize: 20 }}
          onChangeText={(e) => {
            setSearchTerm(e);
          }}
          placeholder="Searching for ..." />
        <IconButton type={images.cancle} />
      </View>
    </View>

  }
  else if (DeleteMode){ //삭제모드라면 -> 상단바부분을 삭제부분으로 변경.
    TopBar=<View style={[viewStyles.settingView, {backgroundColor: themeColor}]} >
    <IconButton type={images.back}  onPressOut={() => setDeleteMode(!DeleteMode)}/>
    <Text style={{flex:1, fontSize: 20}}>  Delete </Text>
    <View style={viewStyles.settingGroup}>
      <IconButton onPressOut={_selectAllToDelete} type={check ? images.checked :images.unchecked} />
      <IconButton onPressOut={_delete} type={images.trash} />
    </View>
  </View>

  }

  else { // 둘다 아니라면 -> 일반 상단바 보여줌
    TopBar =
      <View style={[viewStyles.settingView, {backgroundColor: themeColor}]} >
        <IconButton type={images.todo} onPressOut={openTheme} />
        <Today />
        <View style={viewStyles.settingGroup}>

          <IconButton type={images.search} onPressOut={() => setSearchMode(!SearchMode)} />
          <IconButton onPressOut={() => { setExtraVisible(!extraVisible); console.log('open extraMenu'); }} type={images.dot} />
        </View>
      </View>

  }

  //서치뷰
  var SearchView =<List>
  {Object.values(tasks).filter((item)=>{
    if(searchTerm==""){
      return item
    }else if(item.text.toLowerCase().includes(searchTerm.toLowerCase())){
      return item
    }
  }).reverse().map(item =>(

  <Task key= {item.id}
  item={item}
  deleteTask={_deleteTask}
  toggleTask={_toggleTask}
  updateTask={_updateTask}
  dueDateTask={_dueDateTask}
  category={category[item.category]}
  setThemeColor={setThemeColor}
  themeColor={themeColor}
  />
  ))}
</List>

//삭제
  var DeleteView =<List>
    {Object.values(tasks).reverse().map(item=>(
        <Delete key= {item.id}
                item={item}
                selectTask={_selectToDelete}
                themeColor={themeColor}
                category={category[item.category]}
        />
    ))}

  </List>

//일반 투두리스트 뷰 -> 2중 맵 활용 간소화.
var ListView = <List /**/>
 {category.map((category,index)=>{
   return(
     <>
      <View style={[viewStyles.categoryView, {backgroundColor:themeColor}]}/** 일반 카테고리*/>
          <IconButton type={images.tag} />
          <Text style={textStyles.contents}> {category} </Text>
          <IconButton onPressOut={()=>_addTask(index)} type={images.add} />
      </View>
      {Object.values(tasks).filter((item)=>{ // ViewMode 구현
          if(visibleMode =='ViewAll'&&item.category==index)
            return item
          else if(visibleMode =='Uncompleted'&&item.category==index && item.completed==false)
          return item
          else if (visibleMode=='Completed'&& item.category==index && item.completed==true)
          return item
          else return null;

        }).reverse().map(item=>(
          <Task key= {item.id}
          item={item}
          deleteTask={_deleteTask}
          toggleTask={_toggleTask}
          updateTask={_updateTask}
          dueDateTask={_dueDateTask}
          category={category}
          setThemeColor={setThemeColor}
          themeColor={themeColor}
          /> ) )}
      </>
   );

 })}
 </List>
  return (
    //ThemeProvider는 자식들에게 광역으로 자신이 가지고 있는 기본 props값을 사용할 수 있도록 해주는 역할
    <ThemeProvider theme= {theme} //theme : basic theme (기본파랑)
    >
    <Container>
      <StatusBar barStyle="light-content" style={barStyles.statusBar} />
      {TopBar}
      <ThemeSelector themeVisible={themeVisible} setThemeVisible={setThemeVisible} themeColor={themeColor} setThemeColor={setThemeColor} // 테마선택창
      />

        <ExtraMenu  // 더보기 모달창
        ExtraVisible={extraVisible}
        setExtraVisible ={ setExtraVisible}
        DeleteMode={DeleteMode}
        setDeleteMode={setDeleteMode}
        openTheme={openTheme}
        selectAll={_selectAll}
        deselectAll={_deselectAll}
        setVisibleMode={setVisibleMode}/>

      <Goal value={goal} setValue={setGoal}/*목표작성부분*/ themeColor={themeColor}/>


        {DeleteMode?DeleteView:ListView/*삭제모드이면 삭제리스트뷰, 아니라면 일반 리스트 뷰를 보여줌*/}
        </Container>
    </ThemeProvider>
  );
};

