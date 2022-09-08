<template> <!-- vue component template 구조에서 root 에는 한개의 component가 존재 -->
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span v-on:click="addTodo" class="addContainer">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      newTodoItem: ""
    }
  },
  methods: {
    addTodo: function(){
        if(this.newTodoItem !== ''){
          //this.$emit('이벤트이름', 인자1, 인자2, ...);
          this.$emit('addTodoItem', this.newTodoItem); //하위에서 addTodoItem이라는 이벤트가 발생 -> 상위로 올라감
          this.clearInput();
        }
    },
    clearInput: function(){
      this.newTodoItem="";
    }
  },

}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox{
    background-color: white;
    height: 50px;
    line-height: 50px;
    border-radius: 50px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478fB, #8763fB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn{
    color:white;
    vertical-align: middle;
  }
</style>