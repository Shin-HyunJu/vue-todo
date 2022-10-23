
<template>
  <div id="app">
    <component :is="currentHeader"></component>
    <!-- <TodoHeader></TodoHeader> -->
    <!-- v-on: 하위 컴포넌트에서 발생시킨 이벤트 = "현재 컴포넌트 메소드 명" -->
    <TodoInput></TodoInput> 
    <TodoList></TodoList>
    <TodoFooter v-on:changeHeader="changeHeader"></TodoFooter>
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
      currentHeader: "TodoHeader2"
    }
  },
  methods:{
    changeHeader() {
      this.currentHeader = "TodoHeader";
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
