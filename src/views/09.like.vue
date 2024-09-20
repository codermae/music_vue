<template>
  <div>
    <el-card class="song-list-card">
      <el-table
        :data="paginatedSongs"
        style="width: 100%"
        @row-click="handleRowClick"
      >
        <el-table-column prop="name" label="歌曲名称" width="180"></el-table-column>
        <el-table-column prop="artist" label="歌手" width="180"></el-table-column>
        <el-table-column prop="album" label="专辑" width="180"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="playSong(scope.row)">播放</el-button>
            <el-button size="mini" type="danger" @click="removeSong(scope.row)">取消收藏</el-button>
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
  </div>
</template>

<script>

export default {
  name: 'MySongs',
  data() {
    return {
      songs: [
        { id: 1, name: '歌名1', artist: '歌手1', album: '专辑1', url: 'http://example.com/song1.mp3' },
        { id: 2, name: '歌名2', artist: '歌手2', album: '专辑2', url: 'http://example.com/song2.mp3' },
        { id: 3, name: '歌名3', artist: '歌手3', album: '专辑3', url: 'http://example.com/song3.mp3' },
        { id: 4, name: '歌名4', artist: '歌手4', album: '专辑4', url: 'http://example.com/song4.mp3' },
        { id: 5, name: '歌名5', artist: '歌手5', album: '专辑5', url: 'http://example.com/song5.mp3' },
        { id: 6, name: '歌名6', artist: '歌手6', album: '专辑6', url: 'http://example.com/song6.mp3' },
        { id: 7, name: '歌名7', artist: '歌手7', album: '专辑7', url: 'http://example.com/song7.mp3' },
        { id: 8, name: '歌名8', artist: '歌手8', album: '专辑8', url: 'http://example.com/song8.mp3' },
        { id: 9, name: '歌名9', artist: '歌手9', album: '专辑9', url: 'http://example.com/song9.mp3' },
        { id: 10, name: '歌名10', artist: '歌手10', album: '专辑10', url: 'http://example.com/song10.mp3' },
      ],
      currentPage: 1,
      pageSize: 5,
      totalSongs: 0,
    };
  },
  created() {
    this.totalSongs = this.songs.length;
  },
  methods: {
    handleRowClick(row) {
      this.$router.push('/songinfo');
    },
    playSong(song) {
      console.log('Playing song:', song);
      // 播放歌曲的逻辑
    },
    removeSong(song) {
      console.log('Removing song:', song);
      // 删除歌曲的逻辑
      this.songs = this.songs.filter(s => s.id !== song.id);
      this.totalSongs = this.songs.length;
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
  },
  computed: {
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
