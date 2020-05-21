<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        :router="true"
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :style="{minHeight:asHeight+'px'}"
        >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>图表管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/Echarts">图表布局</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/User">用户管理</el-menu-item>
            <el-menu-item index="/Role">角色管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      asHeight: 0
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created: function () {
    let h = document.documentElement.clientHeight - 60
    this.asHeight = h
  }
}
</script>
