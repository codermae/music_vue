<template>
  <el-descriptions class="margin-top" title="" :column="3" border>
    <!-- <template slot="extra">
      <el-button type="primary" size="small" @click="dialogVisible = true">注销</el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmAction">确 定</el-button>
        </span>
      </el-dialog>
    </template> -->
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
      歌曲名
      </template>
      {{ songInfo.song_name }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        所属专辑
      </template>
      {{ songInfo.album_name || album_name}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        作者
      </template>
      {{ songInfo.artist_name || songInfo.performer}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        歌曲介绍
      </template>
      <div class="multi-line-tag">
        {{ text }}
      </div>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  data() {
    return {
      songInfo:{},
      album_name:'',
      text:"《北京欢迎你》是一首承载着2008年北京奥运会精神与热情的标志性歌曲。此曲由林夕精心填词，"
      +"小柯谱曲，并集结了超过百位华语乐坛的明星共同献唱，展现了前所未有的团结力量。歌曲于2008年4月30日正式发行，"
      +"迅速成为了当年最受欢迎的歌曲之一，并在随后的2009年荣获MusicRadio音乐之声点播冠军曲的荣誉。"
      +"《北京欢迎你》以其简洁而富有感染力的旋律，搭配温馨而鼓舞人心的歌词，不仅传达了北京作为东道主对全世界宾客的热情欢迎，"
      +"同时也鼓励每一个人追求自己的梦想，相信只要有勇气就能创造奇迹。这首歌曲不仅是对2008年北京奥运会的庆祝，更是对中国悠久历史文化和现代都市风貌的一次精彩展示。"
      +"通过这首歌，无数听众感受到了北京这座城市的魅力以及中国人民的热情好客。"
    };
  },
  created(){
    this.songInfo = this.recSongInfo;
  },
  methods: {

  },
  computed: {
    recSongInfo() {
      console.log(this.$route.query.info);
      this.album_name = this.$route.query.album_name;
      return this.$route.query.info;
    }
  },
};
</script>

<style>
  .multi-line-tag {
    white-space: pre-wrap; /* 保留换行符和空格 */
    word-break: break-word; /* 自动换行 */
  }
</style>
