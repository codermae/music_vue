<template>
  <el-descriptions class="margin-top" title="" :column="3" border>
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
      userMessage.username
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      userMessage.phone
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      userMessage.address
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag size="small"> userMessage.remarks </el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        联系地址
      </template>
      userMessage.connectAddress
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  props: ["userMessage"],
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    logout() {
      // zhu xiao
      this.$axios.delete('/user/'+this.$store.state.currentUser.user_id).then(res => {
        // console.log(res);
        this.$store.dispatch('logout'); // 设置用户登录状态为false
        this.$message({
          message: '註銷成功',
          type: 'success'
        });
        this.$router.push('/');
      }).catch(err => {
        console.error(err);
        this.$message({
          message: '註銷失敗',
          type: 'fail'
        });
      })
    }
  }
};
</script>

<style></style>
