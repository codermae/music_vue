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
        placeholder="请输入手机号或者邮箱号"
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
        callback(new Error("手机号或者邮箱不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        // eslint-disable-next-line no-useless-escape
        const reg2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if (reg.test(value) || reg2.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的手机号或者邮箱"));
        }
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
    login() {
      // 模拟用户登录的行为
      this.userLoggedIn = true; // 设置用户登录状态为true
      this.userAvatar = 'path/to/avatar.png'; // 设置用户头像地址
      // 实际应用中，这里可能涉及到发送请求到服务器验证用户身份，并获取用户信息
    }
  }
};
</script>

<style></style>
