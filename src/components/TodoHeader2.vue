<template>
  <header>
    <h1>{{title}}</h1>
  </header>
  
</template>

<script>
export default {

  data() {
    return {
      title : "TODO it!"
    }
  }
}
</script>

<style scoped> /** 컴포넌트 안에서만 유효하도록 하는 태그 scoped */
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem
}
</style>