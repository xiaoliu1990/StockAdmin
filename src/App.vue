<template>
  <div id="app">
    <el-container>
      <el-header class="ly-header">
        <Header/>
      </el-header>
      <el-container>
        <el-aside width="200px" overflow="hidden auto">
          <Aside/>
        </el-aside>
        <el-main>
          <div class="ly-container">
            <router-view/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/init.css'
export default {
  name: 'app',
  components: {
    Header,
    Aside
  }
}
</script>
