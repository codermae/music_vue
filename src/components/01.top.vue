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
      <span v-if="!isLoggedIn" @click="regist">注册 </span>
      <span v-if="!isLoggedIn">|</span>
      <span v-if="!isLoggedIn" @click="login"> 登录</span>
      <!-- 如果已登录，则显示用户名和退出按钮 -->
      <span v-else-if="isLoggedIn" @click="toInfo">{{ currentUser.username}}</span>
      <span v-if="isLoggedIn">|</span>
      <span v-if="isLoggedIn" @click="logout"> 退出</span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'top',
    computed:{
      ...mapState(['isLoggedIn','currentUser'])
    },
    data() {
      return {
        input:''
      }
    },
    methods:{
      regist(){
        this.$router.push('/user/regist')
      },
      login(){
        this.$router.push('/user/login')
      },
      toInfo(){
        this.$router.push('/userInfo')
      },
      logout(){
        this.$store.dispatch('logout')
        this.$message({
          message: '账号已退出',
          type: 'success'
        });
        this.$router.push('/')
      },
      search(){
        this.$router.push('/result')
      }
    }
  }
</script>

<style scoped></style>
