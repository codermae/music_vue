<template>
  <div class="index-container">
    <div class="nav" >
      <ul>
        <li>
          <router-link to="/discovery">
            <span class="iconfont icon-find-music"></span>
            发现音乐
          </router-link>
        </li>
        <li>
          <router-link to="/playlists">
            <span class="iconfont icon-music-list"></span>
            推荐歌单
          </router-link>
        </li>
        <li>
          <router-link to="/songs">
            <span class="iconfont icon-music"></span>
            最新音乐
          </router-link>
        </li>
        <li>
          <router-link to="/mvs">
            <span class="iconfont icon-mv"></span>
            最新MV
          </router-link>
        </li>
        <li>
          <router-link to="/like">
            <span class="iconfont icon-mv"></span>
            我的收藏
          </router-link>
        </li>
        <li>
          <router-link to="/singerlist">
            <span class="iconfont icon-mv"></span>
            歌手列表
          </router-link>
        </li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="player">
      <audio :src='musicUrl' controls></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      musicUrl:"https://ting8.yymp3.com/new26/dengziqi6/6.mp3"
    };
  }
};
</script>

<style >

</style>
