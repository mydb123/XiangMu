<template>
  <div id="app">
    <!-- 空页面 -->
    <div>{{msg}}</div>
    <div>{{reversedMed}}</div>
  </div>
</template>

<script>
export default {

  data () {
    el:"#app"
    return {
      msg:"Hello"
    }
  },

  methods: {},
  computed:{
    reversedMed:function(){
      return this.msg.split('').reverse().join('');
    }
  },

  created () {
  }
}
</script>

<style lang='scss' >

</style>
