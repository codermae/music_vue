<template>
  <div class="top-container">
    <div class="left-box"></div>
    <div class="center-box">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input"
        @keyup.enter.native="search">
      </el-input>
    </div>
    <div class="right-box">
      <span @click="regist">注册 </span>
      <span>|</span>
      <span @click="login"> 登录</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'top',
    data() {
      return {
        input:''
      }
    },
    methods:{
      regist(){
        console.log('regist')
      },
      login(){
        this.$router.push('/login')
      },
      search(){
        console.log('search')
      }
    }
  }
</script>

<style scoped></style>
