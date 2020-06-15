<template>
  <div v-if="showflag" >
    <el-menu class="el-menu-vertical-demo" 
            :default-active=defaultactive2
            router
            :collapse="collapse" 
            @select="handleSelect"
            :unique-opened="true" 
            >
      <SidebarItem v-for="(item, idx) in routes" 
        :subroute="item"
        :fatherpath="fatherPath"
        :barIdx="idx" :key="idx" />
    </el-menu>
  </div>
</template>

<script>
import store from '../store'
import SidebarItem from './SidebarItem'
import {  constantRouterMap } from '@/router'

export default {
  name: "Sidebar",
  components: {
    SidebarItem
  },
  data() {
    return {
      defaultactive2:'',
      showflag:false,
    }
  },
  props: {
    collapse: {
      type: Boolean
    },
    routes: {
      type: Array
    },
    parent: {
      
    },
    temp:{

    },
  },
  computed: {
    fatherPath(){
      return this.parent
    },
  },
  watch: {
    temp: function (newQuestion, oldQuestion){
      this.showflag= false
      this.defaultactive2 =sessionStorage.getItem('defaultactive2')
      this.$nextTick(function () {
        this.showflag = true
      })
    },
  },
  mounted: function () {
    this.defaultactive2 =sessionStorage.getItem('defaultactive2')
    this.showflag = true
    
  },
  methods: {
    handleSelect: function(key, keyPath) {
      sessionStorage.setItem('defaultactive2',key)
    }
  },
}
</script>

<style>

</style>