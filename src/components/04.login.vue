<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item prop="user">
      <el-input
        type="text"
        placeholder="请输入用户名"
        required="required"
        v-model="ruleForm.user"
        prefix-icon="el-icon-user-solid"
      ></el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input
        type="password"
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        v-model="ruleForm.pass"
        @keyup.enter.native="toSubmitForm('ruleForm')"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { call } from 'file-loader';

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    return {
      // 获取url地址后面的参数
      urlQuery: "",
      activeIndex: "1",
      ruleForm: {
        pass: "",
        user: "",
      },
      rules: {
        user: [{ required: true, validator: validateUser, trigger: "blur" }],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
      },
      userLoggedIn: false, // 用户登录状态
      userAvatar: null // 用户头像地址
    };
  },
  methods: {
    submitForm(formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        this.login();
      } else {
        console.log('验证失败');
        return false;
      }
      });
    },
    login() {
      // 模拟用户登录的行为
      // this.$store.dispatch('login','sssssss');
      this.$axios.post('/user/login', {
        username: this.ruleForm.user,
        password: this.ruleForm.pass
      }).then(res => {
        console.log(res);
        this.$store.dispatch('login',res); // 设置用户登录状态为true
        this.$router.push('/');
        // this.userAvatar = 'path/to/avatar.png'; // 设置用户头像地址
        // 实际应用中，这里可能涉及到发送请求到服务器验证用户身份，并获取用户信息
      }).catch(err => {
        console.error(err);
      })
    }
  }
};
</script>

<style></style>
