<template>
  <div class="result-container">
    <div class="title-wrap">
      <h2 class="title">李荣浩11</h2>
      <span class="sub-title">找到985个结果</span>
    </div>
    <el-card class="song-list-card">
      <el-table
        :data="paginatedSongs"
        style="width: 100%"
        @row-click="handleRowClick"
      >
        <el-table-column prop="num" label="序号" width="180"></el-table-column>
        <el-table-column prop="song" label="歌名" width="180"></el-table-column>
        <el-table-column prop="album" label="作者" width="180"></el-table-column>
        <el-table-column prop="album" label="专辑" width="180"></el-table-column>
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
  </div>
</template>

<script>
export default {
  name: "result",
  data() {
    return {
      activeIndex: "songs",
      resultList: [
        {
          num: 1,
          song: "Let It Be",
          singer: "The Beatles",
          album: "Abbey Road",
          time: "3:45",
        },
        {
          num: 2,
          song: "Bohemian Rhapsody",
          singer: "Queen",
          album: "A Night at the Opera",
          time: "5:55",
        },
        {
          num: 3,
          song: "Stairway to Heaven",
          singer: "Led Zeppelin",
          album: "Led Zeppelin IV",
          time: "8:02",
        },
        {
          num: 4,
          song: "Hotel California",
          singer: "Eagles",
          album: "Hotel California",
          time: "6:30",
        },
        {
          num: 5,
          song: "Smells Like Teen Spirit",
          singer: "Nirvana",
          album: "Nevermind",
          time: "5:01",
        },
        {
          num: 6,
          song: "Imagine",
          singer: "John Lennon",
          album: "Imagine",
          time: "3:07",
        },
        {
          num: 7,
          song: "Yesterday",
          singer: "The Beatles",
          album: "Help!",
          time: "2:05",
        },
        {
          num: 8,
          song: "Hey Jude",
          singer: "The Beatles",
          album: "Hey Jude",
          time: "7:11",
        },
        {
          num: 9,
          song: "Sweet Child O' Mine",
          singer: "Guns N' Roses",
          album: "Appetite for Destruction",
          time: "5:56",
        },
        {
          num: 10,
          song: "Like a Rolling Stone",
          singer: "Bob Dylan",
          album: "Highway 61 Revisited",
          time: "6:13",
        },
      ],
      currentPage: 1,
      pageSize: 5,
      totalSongs: 0,
    };
  },
  created() {
    this.totalSongs = this.resultList.length;
  },
  methods: {
    handleRowClick(row) {
      this.$router.push('/songinfo');
    },
    playSong(song,event) {
      event.stopPropagation();
      console.log('Playing song:', song);
      // 播放歌曲的逻辑
    },
    removeSong(song,event) {
      event.stopPropagation();
      console.log('Removing song:', song);
      // 删除歌曲的逻辑
      this.resultList = this.resultList.filter(s => s.num !== song.num);
      this.totalSongs = this.resultList.length;
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    handleButtonClick(row) {
      console.log('Button clicked:', row);
    }
  },
  computed: {
    paginatedSongs() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.resultList.slice(start, end);
    },
  },
};
</script>

<style></style>
