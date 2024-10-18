<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <el-carousel class="" :interval="4000" type="card">
      <el-carousel-item v-for="item in 6" :key="item.key">
        <img src="../assets/banner.jpg" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3 class="title">推荐歌单</h3>
      <div class="items">
        <div v-for="(item,index) in recom_music" :key="index" class="item" @click="toDetail(item)">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.album_name }}</span>
            </div>
            <img src="../assets/cover.jpg" alt="" />
            <span class="iconfont icon-play">></span>
          </div>
          <p class="name">
            {{ item.album_name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "discovery",
  data() {
    return {
      recom_music: [
        {
          title: "测试测试测试1",
          titleHover:'AAA',
          img: require("../assets/cover.jpg"),
        }
      ]
    }
  },
  created(){
    this.getAlbums();
  },
  methods: {
    async getAlbums() {
      try {
        this.recom_music = await this.$axios.get("/api/album");
        console.log(this.recom_music);
        // this.totalSongs = this.resultList.length;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    toDetail(item){
      this.$router.push({name:'album',params:{songinfo:item.songs_info,name:item.album_name}})
    }
  }

};
</script>

<style></style>
