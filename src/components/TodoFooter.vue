<template>
  <div>
    <div class="clearAllContainer">
      <span class="clearAllBtn" v-on:click="clearTodo">
        Clear All
      </span>
    </div>
    <div class="clearAllContainer">
      <span class="clearAllBtn" v-on:click="changeHeader">
        Change Header
      </span>
    </div>      
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo(){
      this.$emit("clearItem");
      //localStorage.clear();
    },
    changeHeader() {
      this.$emit("changeHeader");
    }

  }
}
</script>

<style scoped>
  .clearAllContainer{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 5px;
  }
  .clearAllBtn{
    color: #e20303;
    display: block;
  }
</style>