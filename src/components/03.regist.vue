<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    class="demo-ruleForm"
  >
    <el-form-item prop="user1">
      <el-input
        type="text"
        placeholder="用户名"
        required="required"
        v-model="ruleForm.user1"
        prefix-icon="el-icon-user-solid"
      ></el-input>
    </el-form-item>
    <el-form-item prop="mobile">
      <el-input
        class="phone-input"
        placeholder="手机号/邮箱"
        v-model="ruleForm.mobile"
        prefix-icon="el-icon-mobile-phone"
      ></el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input
        type="password"
        placeholder="请输入密码"
        v-model="ruleForm.pass"
        prefix-icon="el-icon-lock"
      ></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input
        type="password"
        placeholder="请再次输入密码"
        v-model="ruleForm.checkPass"
        prefix-icon="el-icon-lock"
      ></el-input>
    </el-form-item>
    <el-form-item class="btn-form">
      <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    var validateUser1 = async (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (value) {
          const res = await this.$axios.get("/user/"+value);
          console.log(res);
          if (!res) {
            callback();
          } else {
            return callback(new Error("该用户名已经被注册"));
          }
        }
      }
    };
    var validateMobile = async (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号或者邮箱不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        // eslint-disable-next-line no-useless-escape
        const reg2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if (reg.test(value) || reg2.test(value)) {
          this.yzmshow = true;
          callback();
        } else {
          callback(new Error("请输入正确的手机号或者邮箱"));
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      activeIndex: "2",
      show: true,
      count: "",
      timer: null,
      yzmshow: false,
      ruleForm: {
        user1: "",
        pass: "",
        checkPass: "",
        mobile: "",
      },
      rules: {
        user1: [
          {
            required: true,
            validator: validateUser1,
            trigger: "blur",
          },
        ],
        mobile: [
          {
            required: true,
            validator: validateMobile,
            trigger: "blur",
          },
        ],
        // 密码
        pass: [
          {
            required: true,
            validator: validatePass,
            trigger: "blur",
          },
          {
            min: 6,
            message: "长度在不少于6个字符",
            trigger: "blur",
          },
        ],
        // 校验密码
        checkPass: [
          {
            required: true,
            validator: validatePass2,
            trigger: "blur",
          },
          {
            min: 6,
            message: "长度在不少于6个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("/user",{
            username:this.ruleForm.user1,
            password_hash:this.ruleForm.pass,
            mobile:this.ruleForm.mobile,
            privilege:'user'
          }).then((result) => {
            console.log(result);
            if(result = 1){
              this.$message({
                message: '注册成功请登录',
                type: 'success'
              });
              this.$router.push('/user/login');
            }
          })
         }else{
          console.log('表单验证失败');
         }
      });
    },
  }
};
</script>

<style></style>
