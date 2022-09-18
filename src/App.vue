
<template>
  <div id="app">
    <component :is="currentHeader"></component>
    <!-- <TodoHeader></TodoHeader> -->
    <!-- v-on: 하위 컴포넌트에서 발생시킨 이벤트 = "현재 컴포넌트 메소드 명" -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> 
    <TodoList v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem" v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter v-on:clearItem="clearAllItems" v-on:changeHeader="changeHeader"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoHeader2 from './components/TodoHeader2.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return{
      todoItems: [],
      currentHeader: "TodoHeader2"
    }
  },
  methods:{
    addOneItem(newTodoItem) {
      const obj = {completed: false, item: newTodoItem}; //check여부도 같이 넣기 위한 obj
      localStorage.setItem(newTodoItem, JSON.stringify(obj)); //key,value, 자바스크립트를 string으로 변환해서 넣음.
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      console.log(todoItem, index);
      localStorage.removeItem(todoItem.item); //key값을 선택해서 지울 수 있도록
      this.todoItems.splice(index,1); //해당 인덱스부터 n개 삭제해서 새로운 list 반환
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;  
      //todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      this.todoItems = [];
      localStorage.clear();
    },
    changeHeader() {
      this.currentHeader = "TodoHeader";
    }
  },
  created() {
    if(localStorage.length>0) {
      for(let i=0; i<localStorage.length; i++){
        //console.log(localStorage.key(i));
        if(localStorage.key(i) !== ''){
          //localStorage.getItem(localStorage.key(i)); //value가져옴
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components: {
    // 컴포넌트 태그명: 컴포넌트 내용
    //'TodoHeader' : TodoHeader,
    // 'TodoHeader2' : TodoHeader2,
    // 'TodoInput' : TodoInput,
    // 'TodoList' : TodoList,
    // 'TodoFooter' : TodoFooter,
    TodoHeader, //컴포넌트 태그명과 컴포넌트 내용(객체)이 같을 시 축약해서 사용 가능
    TodoHeader2,
    TodoInput,
    TodoList,
    TodoFooter,
  },
}

</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }

</style>
