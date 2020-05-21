<template>
  <div class="ly-role">
    <Crumbs :titles="titles"/>
    <div class="ly-button">
      <el-row>
        <el-button type="success">新增角色</el-button>
      </el-row>
    </div>
    <template>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column prop="date" label="创建日期"></el-table-column>
        <el-table-column prop="name" label="角色名称"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <template>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </template>
  </div>
</template>
<script>
import Crumbs from '@/components/Crumbs.vue'
export default {
  data () {
    return {
      titles: [{
        id: '10',
        name: '角色管理',
        hrefUrl: ''
      }],
      tableData: [{
        date: '2016-05-02',
        name: '系统管理员',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '操作员',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '数据管理员',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '视图管理员',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  components: {
    Crumbs
  }
}
</script>
