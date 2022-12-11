import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //use는 Vue의 plugin, vue의 모든 기능(전역)에 vuex를 추가 하고 싶을 때 작성

const storage = {
  fetch() { //created 대신
    const arr = [];
    if(localStorage.length>0) {
      for(let i=0; i<localStorage.length; i++){
        if(localStorage.key(i) !== ''){
          //localStorage.getItem(localStorage.key(i)); //value가져옴
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  //export 한 순간 다른 파일에서 접근할 수 있다.
  //사용 하기 위해서는 import 
  //main.js 에 선언

  state: {
    todoItems: storage.fetch(),
  },

  /**
   * mutation의 특성
   * 매개변수로 항상 state를 가져온다!
   * mutataion은 state를 변경할 수 있는 유일한 방법이자 메서드
   * 
   * mutation을 동작시키는 명령어는 commit
   */

  mutations: {
    addOneItem(state, newTodoItem) {
      const obj = {completed: false, item: newTodoItem}; //check여부도 같이 넣기 위한 obj
      localStorage.setItem(newTodoItem, JSON.stringify(obj)); //key,value, 자바스크립트를 string으로 변환해서 넣음.
      state.todoItems.push(obj);
    },
    removeOneItem(state, todoItem, index) {
      console.log("remove index >> ", index);
      localStorage.removeItem(todoItem.item); //key값을 선택해서 지울 수 있도록
      state.todoItems.splice(index,1); //해당 인덱스부터 n개 삭제해서 새로운 list 반환
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;  
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
      state.todoItems = [];
      localStorage.clear();
    },
  }
});