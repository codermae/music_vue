<template>
  <el-card class="user-info-card">
    <div slot="header" class="clearfix">
      <img :src="currentArtist.image_url" alt="User Image" class="user-image" />
      <h3>{{ currentArtist.artist_name }}</h3>
    </div>
    <div>
      <p><strong>Country:</strong> {{ currentArtist.nationality }}</p>
      <p><strong>Description:</strong> {{ currentArtist.official_website }}</p>
    </div>
  </el-card>
</template>

<script>
import { ElCard } from 'element-ui';

export default {
  components: {
    ElCard,
  },
  created(){
    this.currentArtist = this.$route.query.artist || {};
    // console.log('====================================');
    // console.log(this.currentArtist);
    // console.log('====================================');
  },
  data() {
    return {
      currentArtist: {
        image_url: 'https://via.placeholder.com/150',
        artist_name: '李华',
        nationality: '中国',
        official_website: '这是一位来自中国的用户，喜欢编程和旅行。',
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
