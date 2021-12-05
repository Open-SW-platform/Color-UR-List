import { StyleSheet } from 'react-native';
import {theme} from './theme';
import styled from 'styled-components/native';
 
export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    justifyContent:'flex-start',
    marginBottom: 40,
  },
  settingView: { //설정 하단바 스타일
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  settingGroup:{ //search/trash/dot 아이콘 버튼 정렬
    flexDirection: 'row',
    marginLeft: 'auto',
    marginTop: 5
  },
  goalView: { //목표 작성 스타일
    flex: 0.15,
    borderWidth: 1,
    width: '100%',
    padding: 3,
    margin: 5,
    borderRadius: 3,
    backgroundColor: 'green',
  },
  
  todolistView: { //투두리스트 전체 스타일
    margin: 5,
    flex: 5,
    backgroundColor: 'blue',
  },

  categoryView:{ //투두리스트 카테고리 스타일
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.itemBackground,
    borderRadius: 10,
    padding: 5,
    marginTop: 3,
    marginLeft: 0,
  },

  AddTaskButtonView : {
    justifyContent:'center',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  settingBar: { //설정 상단바 스타일
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  SearchBar: {
    flex: 6,
    flexDirection: 'row',
    backgroundColor: 'red',
  }
});

export const textStyles = StyleSheet.create({ //text관련 설정
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: theme.main,
    alignItems: 'flex-start',
    marginTop: 0,
    marginLeft: 0,
  },
  contents: {
    flex: 1,
    fontSize: 25,
    color: theme.text,
  },
  listInModal:{
    flex: 1,
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'blue',
    marginLeft: 5,
  },
  menu: {
    fontSize: 15,
    color: 'black',
  },
  list:{
    fontSize: 15,
    color: 'black',
  },
  moremenu: {
    fontSize: 20,
    alignItems: 'flex-start',
    marginTop: 0,
    marginLeft: 0,
    color: 'black',
  
  },
});


export const barStyles = StyleSheet.create({
  statusBar: {
    backgroundColor: theme.background,
  },
});

export const modalStyles = StyleSheet.create({
  modalView: {
    marginTop: 250,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 0,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '70%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    margin: 5,
    textAlign: 'left',
  },
  top : {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent : 'flex-end',
    alignItems : 'center',

  },
  horizentalline : {
    backgroundColor : 'black',
    height: 1,
    alignItems : 'stretch',
  },
  menuView : {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: '100%',
  }

});


export const Container = styled.SafeAreaView`
  flex: 1;
  backgroundColor: ${ ({theme}) => theme.background };
  align-items: center;
  justify-content: flex-start;

`;

export const List =styled.ScrollView`
flex : 1;
width : 100%;

`;

