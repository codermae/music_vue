<template>
  <div class="result-container">
    <div class="title-wrap">
      <h2 class="title">{{ this.$route.query.keyword }}</h2>
      <span class="sub-title">找到{{ this.totalSongs }}个结果</span>
    </div>
    <el-card class="song-list-card">
      <el-table
        :data="paginatedSongs"
        style="width: 100%"
        @row-click="handleRowClick"
      >
        <el-table-column
          prop="song_name"
          label="歌曲名称"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="artist_name"
          label="歌手"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="album_name"
          label="专辑"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="duration"
          label="时长"
          width="180"
        ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="playSong(scope.row, $event)"
              >播放</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="addSong(scope.row, $event)"
              >收藏</el-button
            >
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
          duration: "3:45",
        }
      ],
      currentPage: 1,
      pageSize: 5,
      totalSongs: 0,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route.query.keyword': {
      handler(newKeyword) {
        this.fetchData();
      },
      immediate: true,
    },
  },
  methods: {
    handleRowClick(row) {
      this.$router.push({
        path: "/songinfo",
        query: { info: row },
      });
    },
    playSong(song, event) {
      event.stopPropagation();
      console.log("Playing song:", song);
      // 播放歌曲的逻辑
      this.$store.dispatch("setCurrentSong", song.file_path);
    },
    async addSong(song, event) {
      event.stopPropagation();
      console.log("add song:", song);
      if (!this.$store.state.currentUser) {
        this.$message({
          message: "未登录",
          type: "warning",
        });
        return;
      }
      try {
        await this.$axios.post("/fav/", {
          user_id: this.$store.state.currentUser.user_id,
          song_id: song.song_id,
        });
        this.$message({
          message: "收藏成功",
          type: "success",
        });
      } catch (error) {
        console.error("Failed to add song:", error);
        this.$message({
          message: "添加失败，请稍后重试",
          type: "error",
        });
      }
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    handleButtonClick(row) {
      console.log("Button clicked:", row);
    },
    async fetchData() {
      try {
        this.resultList = await this.$axios.get(
          "/songs/" + this.$route.query.keyword
        );
        console.log(this.$route.query.keyword);
        console.log(this.resultList);
        this.totalSongs = this.resultList.length;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
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
