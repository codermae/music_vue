<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" v-for="(artist, index) in paginatedArtists" :key="index">
        <div class="artist-info" @click="godetail">
          <!-- 这里可以放置歌手的具体信息，例如歌手名、国籍、等等 -->
          <h3>{{ artist.name }}</h3>
          <p>{{ artist.country }}</p>
        </div>
      </el-col>
    </el-row>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[5, 10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="artists.length">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      artists: [
        { name: '李华', country: '中国' },
        { name: 'John Smith', country: '美国' },
        { name: 'Marie Dupont', country: '法国' },
        { name: 'Carlos Garcia', country: '西班牙' },
        { name: 'Akira Tanaka', country: '日本' },
        { name: 'Luisa Fernández', country: '阿根廷' },
        { name: 'Hans Müller', country: '德国' },
        { name: 'Zoe Wilson', country: '英国' },
        { name: 'Sofia Rossi', country: '意大利' },
        { name: 'Kim Min-ji', country: '韩国' },
        { name: 'Pavel Petrov', country: '俄罗斯' },
        { name: 'Amir Al-Hassan', country: '沙特阿拉伯' },
        { name: 'Nguyen Thi Lan', country: '越南' },
        { name: 'Julia Schmidt', country: '德国' },
        { name: 'Rajesh Kumar', country: '印度' },
        { name: 'Elena Ivanova', country: '俄罗斯' },
        { name: 'Fatima Al-Zahra', country: '摩洛哥' },
        { name: 'Jorge Silva', country: '巴西' },
        { name: 'Anna Svensson', country: '瑞典' },
        { name: 'Ahmed Hassan', country: '埃及' }
      ]
    };
  },
  computed: {
    paginatedArtists() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.artists.slice(start, end);
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    godetail(){
      this.$router.push({path:'/singerdetail'})
    }
  }
};
</script>

<style>
.artist-info {
  border: 1px solid #eee;
  padding: 20px;
  margin-bottom: 10px;
}
h3 {
  font-family: 'Arial', sans-serif;
  line-height: 1.5; /* 调整行高 */
}
</style>
