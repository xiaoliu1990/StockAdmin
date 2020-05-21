<template>
  <div class="ly-crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="title in titles" :key="title.id" >
        <router-link v-if="title.hrefUrl!=''" :to="title.hrefUrl">{{title.name}}</router-link>
        <span v-else>{{title.name}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  props: {
    titles: {
      type: Array,
      required: true
    }
  }
}
</script>
