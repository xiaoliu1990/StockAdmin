<template>
  <div class="ly-userForm">
    <Crumbs :titles="titles"/>
    <el-form :model="userForm" status-icon :rules="users" ref="userForm" label-width="100px" class="ly-Form">
      <el-form-item label="注册名" prop="userName">
        <el-input v-model="userForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名" prop="fullName">
        <el-input v-model="userForm.fullName"></el-input>
      </el-form-item>
      <el-form-item label="联系地址" prop="address">
        <el-input v-model="userForm.address"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="userForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="userForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userForm')">提交</el-button>
        <el-button @click="resetForm('userForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Crumbs from '@/components/Crumbs.vue'
export default {
  data () {
    var checkuserName = (rule, value, callback) => {
      if (!value) {
        callback(new Error('注册名不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.userForm.checkPass !== '') {
          this.$refs.userForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.userForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      titles: [{
        id: '10',
        name: '用户管理',
        hrefUrl: '/User'
      },
      {
        id: '11',
        name: '新增用户',
        hrefUrl: ''
      }],
      userForm: {
        pass: '',
        checkPass: '',
        userName: '',
        fullName: '',
        address: ''
      },
      users: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        userName: [
          { validator: checkuserName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  components: {
    Crumbs
  }
}
</script>
