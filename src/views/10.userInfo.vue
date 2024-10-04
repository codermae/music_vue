<template>
  <el-descriptions class="margin-top" title="用户信息" :column="1" border>
    <template slot="extra">
      <el-button type="primary" size="small" @click="dialogVisible = true"
        >注销</el-button
      >
      <el-dialog
        title="提示"
        v-if="dialogVisible"
        :visible.sync="dialogVisible"
        width="30%"
      >
        <span>确定要注销账号吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="logout">确 定</el-button>
        </span>
      </el-dialog>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      {{ info.username }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      {{ info.mobile }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        注册时间
      </template>
      <el-tag size="small"> {{ info.regist_date }} </el-tag>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      info: this.$store.state.currentUser
    };
  },
  methods: {
    logout() {
      // zhu xiao
      this.$axios.delete('/user/'+this.$store.state.currentUser.user_id).then(res => {
        // console.log(res);
        this.$store.dispatch('logout'); // 设置用户登录状态为false
        this.$message({
          message: '注销成功',
          type: 'success'
        });
        this.$router.push('/');
      }).catch(err => {
        console.error(err);
        this.$message({
          message: '注销失败',
          type: 'fail'
        });
      })
    }
  }
};
</script>

<style></style>
