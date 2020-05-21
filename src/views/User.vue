<template>
  <div class="ly-user">
    <Crumbs :titles="titles"/>
    <div class="ly-button">
      <el-row>
        <el-button type="success" @click="urlForm">新增用户</el-button>
      </el-row>
    </div>
    <template>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column prop="date" label="注册日期"></el-table-column>
        <el-table-column prop="name" label="注册名"></el-table-column>
        <el-table-column prop="fullName" label="真实姓名"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
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
        name: '用户管理',
        hrefUrl: ''
      }],
      tableData: [{
        id: '1',
        date: '2016-05-02',
        name: 'admin',
        fullName: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '2',
        date: '2016-05-04',
        name: 'admin',
        fullName: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '3',
        date: '2016-05-01',
        name: 'admin',
        fullName: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '4',
        date: '2016-05-03',
        name: 'admin',
        fullName: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      this.$router.push({
        path: '/UserForm',
        query: {
          id: row.id
        }
      })
    },
    handleDelete (index, row) {
      this.$confirm('确定要删除该用户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    urlForm () {
      this.$router.push('/UserForm')
    }
  },
  components: {
    Crumbs
  }
}
</script>
