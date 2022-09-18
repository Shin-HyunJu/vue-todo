import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //use는 Vue의 plugin, vue의 모든 기능에 vuex를 추가 하고 싶을 때 작성

const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length>0) {
      for(let i=0; i<localStorage.length; i++){
        //console.log(localStorage.key(i));
        if(localStorage.key(i) !== ''){
          //localStorage.getItem(localStorage.key(i)); //value가져옴
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
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
  }
});