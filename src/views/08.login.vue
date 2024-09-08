<template>
  <div>
    <!-- <el-button @click="dialogVisible = true">登录</el-button> -->
  <el-dialog
    title="登录"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: true,
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功！');
            this.dialogVisible = false;
            // 这里可以添加登录请求的代码
          } else {
            alert('登录失败，请检查输入信息是否正确！');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>
