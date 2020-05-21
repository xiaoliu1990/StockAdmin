<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6" v-for= "str in sList" :key="str.id">
        <p class="ly-imgTit">{{str.checkDate}}</p>
        <p>{{str.rankDate}}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      sList: []
    }
  },
  created: function () {
    this.$axios({
      url: '/api/latelySportDate',
      data: {
        'isValid': 1,
        'itemType': 'SP',
        'personId': 'p160307185810006',
        'dateRange': '60',
        'sorts': [{
          'sortField': 'checkTime',
          'sortOrder': 'desc'
        }],
        'timeField': 'checkTime'
      },
      method: 'post'
    }).then((res) => {
      this.sList = res.data.sportTrend
    })
  }
}
</script>
<style scoped>
  .ly-imgTit{text-overflow: ellipsis; white-space: nowrap; overflow: hidden;}
</style>
