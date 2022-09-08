<template>
  <header>
    <h1>{{title}}</h1>
    <span v-on:click="updateTest" style="width: 250px; background-color: dodgerblue; color: wheat;">
      제목 변경
    </span>
    <h3 ref="subTitle">~실행계획 목록~</h3>
  </header>
  
</template>

<script>
export default {
  /**
   * 1. beforCreate 단계
   *    아직 data와 events가 세팅되지 않은 시점ㄴ
   *    beforeCreate 단계에서의 this.title >>  undefined
   */
  beforeCreate() {
    console.log("beforeCreate 단계에서의 this.title >> ", this.title); 
  },
  /**
   * 2. created 단계
   *    data를 반응형으로 추적할 수 있게 됨.
   *    created 단계에서의 this.title >>  TODO it!
   *    dom 접근 불가능
   *    created 단계에서 dom 접근 >>  undefined
   */
  created() {
    console.log("created 단계에서의 this.title >> ", this.title);
    console.log("created 단계에서 dom 접근 >> ", this.$refs.subTitle);
  },
  /**
   * 3. beforeMount 단계
   *    템플릿과 렌더 함수들이 컴파일 된 후에 첫 렌더링이 일어나기 직전에 실행
   *    beforeMount 단계에서의 this.title >>  TODO it!
   *    beforeMount 단계에서 dom 접근 >>  undefined
   */
  beforeMount() {
    console.log("beforeMount 단계에서의 this.title >> ", this.title);
    console.log("beforeMount 단계에서 dom 접근 >> ", this.$refs.subTitle);
  },
  /**
   * 4. mounted 단계
   *    컴포넌트, 템플릿, 렌더링된 돔에 접근 할 수 있다.
   *    created 훅은 부모 -> 자식 순서로 실행되지만, mounted 훅은 자식 -> 부모 즉 반대 순서로 실행
   *    mounted 단계에서의 this.title >>  TODO it!
   *    mounted 단계에서 dom 접근 >>  ~실행계획 목록~
   */
  mounted() {
    console.log("mounted 단계에서의 this.title >> ", this.title);
    console.log("mounted 단계에서 dom 접근 >> ", this.$refs.subTitle.innerHTML);
  },
  /**
   * 5. beforeUpdate 단계
   *    dom이 재 랜더링 되기 직전에 호출되는 훅.
   *    업데이트 된 값들을 갖고 있는 상태이기 때문에, 업데이트 된 값으로 다른 값들을 업데이트 할 수 있음.
   *    이 훅에서 값이 변경되더라도 다시 beforeUpdate 훅이 호출 되지 않기 때문에 무한 루프에 빠지지 않음.
   *    beforeUpdate 단계에서의 this.title >>  NEW TODO it
   *    beforeUpdate 단계에서 dom 접근 >>  ~실행계획 목록~
   */
  beforeUpdate() {
    console.log("beforeUpdate 단계에서의 this.title >> ", this.title);
    console.log("beforeUpdate 단계에서 dom 접근 >> ", this.$refs.subTitle.innerHTML);
  },
  /**
   * 6. updated 단계
   *    dom이 업데이트 된 후 호출되는 훅
   *    updated 훅에서 data를 수정하게 되면 무한루프에 빠질 수 있으니 유의
   *    update 단계에서의 this.title >>  NEW TODO it
   *    update 단계에서 dom 접근 >>  ~실행계획 목록~
   */ 
  updated() {
    console.log("update 단계에서의 this.title >> ", this.title);
    console.log("update 단계에서 dom 접근 >> ", this.$refs.subTitle.innerHTML);
  },
  /**
   * 7. beforeDestroy
   *    컴포넌트가 동적으로 변경되어야 할 때, 이전 인스턴스가 해체되기 전에 beforeDestroy 훅이 호출
   *    아직 해체되기 이전이므로 인스턴스는 완전하게 작동하기 때문에 모든 속성에 접근 가능
   *    beforeDestroy 단계에서 dom 접근 >>  ~실행계획 목록~
   */
  beforeDestroy() {
    console.log("beforeDestroy 단계에서 dom 접근 >> ", this.$refs.subTitle.innerHTML);
  },
  /**
   * 8. Destroyed
   *    인스턴스가 해체디고 난 직후에 destoryed 훅이 호출
   *    해체가 끝난 이후기 때문에, 인스턴스 속성에 접근할 수 없음.
   *    따라서 해당 console에서 오류!
   */
  destroyed() {
    console.log("destroyed 단계에서 dom 접근 >> ", this.$refs.subTitle.innerHTML);
  },
  data: function() {
    return {
      title : "TODO it!"
    }
  },
  methods:{
    updateTest() {
      this.title = "NEW TODO it";
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