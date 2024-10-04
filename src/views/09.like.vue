<template>
  <div>
    <el-card class="song-list-card" v-if="this.$store.state.currentUser">
      <el-table
        :data="paginatedSongs"
        style="width: 100%"
        @row-click="handleRowClick"
      >
        <el-table-column prop="song_name" label="歌曲名称" width="180"></el-table-column>
        <el-table-column prop="artist_name" label="歌手" width="180"></el-table-column>
        <el-table-column prop="album_name" label="专辑" width="180"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="playSong(scope.row,$event)">播放</el-button>
            <el-button size="mini" type="danger" @click="removeSong(scope.row,$event)">取消收藏</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalSongs"
        :page-size="pageSize"
        :current-page.sync="currentPage"
        @current-change="handlePageChange"
      ></el-pagination>
    </el-card>
    <el-card class="song-list-card" v-else>
      <div style="text-align: center;">
        <p>您还未登录</p>
        <el-button type="primary" @click="toLogin">登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'MySongs',
  data() {
    return {
      songs: [],
      currentPage: 1,
      pageSize: 5,
      totalSongs: 0,
    };
  },
  created() {
    // 初始化数据
    const currentUser = this.$store.state.currentUser ? this.$store.state.currentUser.user_id : null;
    if (currentUser) this.fetchData(currentUser);
  },
  methods: {
    toLogin(){
      this.$router.push('/user/login');
    },
    // 处理行点击事件
    handleRowClick(row) {
      console.log(row)
      this.$router.push({
        path:'/songinfo',
        query:{info:row}
      });
    },
    // 播放歌曲
    playSong(song,event) {
      event.stopPropagation();
      console.log('Playing song:', song);
      // 播放歌曲的逻辑
      this.$store.dispatch('setCurrentSong',song.file_path)
    },
    // 删除歌曲
    async removeSong(song,event) {
      event.stopPropagation();
      console.log('Removing song:', song);
      try{
        await this.$axios.delete('/fav/',{
          data:{
            song_id:song.song_id,
            user_id:this.$store.state.currentUser.user_id
          }
        })
        // 移除歌曲
        this.songs = this.songs.filter(s => s.song_id !== song.song_id);
        // 更新总数
        this.totalSongs = this.songs.length;
        // // 重新计算分页数据
        // this.paginatedSongs = this.songs.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
        // 如果当前页的歌曲数量不足 pageSize，则调整当前页数
        if (this.paginatedSongs.length === 0 && this.currentPage > 1) {
          this.currentPage--;
        }
        // console.log(this.songs)
      }catch(error){
        console.error('Error removing song:', error);
      }
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    // 获取数据
    async fetchData(userId){
      try{
        this.songs  = await this.$axios.get('/fav/'+userId);
        // console.log(this.songs)
        this.totalSongs = this.songs.length;
      }catch(error){
        console.error('Error fetching data:', error);
      }
    }
  },
  computed: {
    // 确定分页显示内容
    paginatedSongs() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.songs.slice(start, end);
    },
  },
};
</script>

<style scoped>
.song-list-card {
  width: 80%;
  margin: 20px auto;
}
</style>
