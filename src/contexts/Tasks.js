import React,{ createContext,useState} from 'react';

const TaskContext = createContext({
     tasks : {
        '1': { id: '1', text: "My Todo fasdfsdasist1", completed: false, category: 0 },
        '2': { id: '2', text: "My Todo Lifasdfadsfst2", completed: false, category: 1 },
        '3': { id: '3', text: "My Todo Lidsafast3", completed: false, category: 2 },
        '4': { id: '4', text: "My Todo Lisdfasdfst4", completed: false, category: 3 },
      },
    setTasks : "setdefault"
});

const ThemeContext = createContext({
    themeColor:'#c1f0fb',
    setThemeColor:null
});

// <UserProvider> 사이에 끼어있는 값은 children으로서 provider에 의해state에 의해 생성된 value를 제공받음. 
const TaskProvider=({children})=>{
  const [tasks, setTasks] = useState({
    '1': { id: '1', text: "My Study 1", duedate:'', completed: false, category: 0,  comment:'' ,imageSrc:'', selected :false },
    '2': { id: '2', text: "My Assignment 1", duedate:'', completed: false, category: 1 , comment:'' ,imageSrc:'', selected :false },
    '3': { id: '3', text: "My Work 1", duedate:'', completed: false, category: 2 , comment:'',imageSrc:'', selected :false },
    '4': { id: '4', text: "My Exercise 1", duedate:'', completed: false, category: 3 , comment:'',imageSrc:'', selected :false },
  });
      const [themeColor, setThemeColor] = useState('#c1f0fb');
    const value = {tasks,setTasks,themeColor,setThemeColor};
   
    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

const TaskConsumer = TaskContext.Consumer;


export {TaskConsumer, TaskProvider,ThemeContext};
export default TaskContext;


