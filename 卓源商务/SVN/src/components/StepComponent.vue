<template>
  <div class='stempComponent'>
      <p v-bind:class="index>0 ? 'item color1' : 'item '" ><span>{{arr[0]}}</span></p>
      <p class="link"></p>
      <p v-bind:class="index>1 ? 'item color1' : 'item'"><span>{{arr[1]}}</span></p>
      <p class="link"></p>
      <p v-bind:class="index>2 ? 'item color1' : 'item'"><span>{{arr[2]}}</span></p>
      <p class="link"></p>
      <p v-bind:class="index>3 ? 'item color1' : 'item'"><span>{{arr[3]}}</span></p>
      <p class="link"></p>
      <p v-bind:class="index>4 ? 'item color1' : 'item'"><span>{{arr[4]}}</span></p>
      <p class="link"></p>
      <p v-bind:class="index>5 ? 'item color1' : 'item'"><span>{{arr[5]}}</span></p>
  </div>
</template>

<script>
export default {
  name: "StepComponent",
  
  data() {
    return {
      arr: ['采购立项','上传清单','方案确认','按月采购','成果确认','服务评价'],
    }
  },
  props: {
    index: {
      // type: 
    },
    flag: {
      
    },
    
  },
  computed: {
    
  },
  watch: {
    
  },
  mounted: function () {
    if(this.flag==3){
      this.arr = ['施工立项','上传清单','方案确认','按月施工','成果确认','服务评价']
    }
  },
  methods: {
    
  },
}
</script>

<style>

</style>