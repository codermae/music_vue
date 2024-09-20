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
        <div v-for="(item,index) in recom_music" :key="index" class="item">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.titleHover }}</span>
            </div>
            <img :src="item.img" alt="" />
            <span class="iconfont icon-play">dd</span>
          </div>
          <p class="name">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">最新音乐</h3>
      <div class="items">
        <div v-for="(item,index) in new_music" :key="index" class="item">
          <div class="img-wrap">
            <img :src="item.img" alt="" />
            <span class="iconfont icon-play">aaaaa</span>
          </div>
          <div class="song-wrap">
            <div class="song-name">{{ item.title }}</div>
            <div class="singer">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐MV -->
    <div class="mvs">
      <h3 class="title">推荐MV</h3>
      <div class="items">
        <div v-for="(item,index) in recom_mv" :key="index" class="item">
          <div class="img-wrap">
            <img :src="item.img" alt="" />
            <span class="iconfont icon-play">dada</span>
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">{{item.num}}</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">{{item.name}}</div>
            <div class="singer">{{item.singer}}</div>
          </div>
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
        },
        {
          title: "测试测试测试2",
          titleHover:'BBB',
          img: require("../assets/cover.jpg"),
        },
        {
          title: "测试测试测试3",
          titleHover:'CCC',
          img: require("../assets/cover.jpg"),
        },
      ],
      new_music:[
        {
          title:"老王日记",
          name:"毛不易",
          img:require("../assets/songCover.jpg")
        },
        {
          title:"老王日记1",
          name:"毛不易1",
          img:require("../assets/songCover.jpg")
        },
        {
          title:"老王日记2",
          name:"毛不易2",
          img:require("../assets/songCover.jpg")
        },
        {
          title:"老王日记3",
          name:"毛不易3",
          img:require("../assets/songCover.jpg")
        },
        {
          title:"老王日记4",
          name:"毛不易4",
          img:require("../assets/songCover.jpg")
        },
      ],
      recom_mv:[
        {
          name:"ABCE|DE",
          singer:"云",
          num:11111,
          img:require("../assets/mvCover.jpg")
        },
        {
          name:"ABCE|DE",
          singer:"云",
          num:11111,
          img:require("../assets/mvCover.jpg")
        },
        {
          name:"ABCE|DE",
          singer:"云",
          num:11111,
          img:require("../assets/mvCover.jpg")
        },
        {
          name:"ABCE|DE",
          singer:"云",
          num:11111,
          img:require("../assets/mvCover.jpg")
        },
        {
          name:"ABCE|DE",
          singer:"云",
          num:11111,
          img:require("../assets/mvCover.jpg")
        },
        {
          name:"ABCE|DE",
          singer:"云",
          num:11111,
          img:require("../assets/mvCover.jpg")
        },
        {
          name:"ABCE|DE",
          singer:"云",
          num:11111,
          img:require("../assets/mvCover.jpg")
        }
      ]
    };
  },
};
</script>

<style></style>
