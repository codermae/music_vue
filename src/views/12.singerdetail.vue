<template>
  <el-card class="user-info-card">
    <div slot="header" class="clearfix">
      <img :src="userInfo.img" alt="User Image" class="user-image" />
      <h3>{{ userInfo.name }}</h3>
    </div>
    <div>
      <p><strong>Country:</strong> {{ userInfo.country }}</p>
      <p><strong>Description:</strong> {{ userInfo.description }}</p>
    </div>
  </el-card>
</template>

<script>
import { ElCard } from 'element-ui';

export default {
  components: {
    ElCard,
  },
  data() {
    return {
      userInfo: {
        img: 'https://via.placeholder.com/150',
        name: '李华',
        country: '中国',
        description: '这是一位来自中国的用户，喜欢编程和旅行。',
      },
    };
  },
};
</script>

<style scoped>
.user-info-card {
  width: 400px;
  margin: 20px auto;
}

.user-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  float: left;
  margin-right: 20px;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
</style>
