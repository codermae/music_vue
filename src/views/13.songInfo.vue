<template>
  <el-descriptions class="margin-top" title="" :column="3" border>
    <template slot="extra">
      <el-button type="primary" size="small" @click="dialogVisible = true">注销</el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmAction">确 定</el-button>
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
    handleClose(done) {
      this.dialogVisible = false;
      if (typeof done === 'function') {
        done();
      }
    },
    confirmAction() {
      // 执行确认操作
      console.log('确认操作执行');
      this.dialogVisible = false;
    },
  },
};
</script>

<style></style>
