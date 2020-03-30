<template>
  <div class="login-wrap">
    <el-row>
      <el-col :span="8" :offset="8">
        <!-- status-icon -->
        <el-form :model="loginForm" ref="loginForm" :label-width="labelWidth" label-position="left">
          <el-form-item label="userName" prop="userName">
            <el-input type="text" placeholder="userName" auto-complete="on"></el-input>
          </el-form-item>
          <el-form-item label="password" prop="password">
            <el-input type="password" placeholder="password" auto-complete="on"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="btnLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { labelWidth } from '@/utils/index.js'
export default {
  name: 'Login',
  data() {
    return {
      labelWidth,
      loginForm: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    btnLogin() {
      console.log('login....')
    }
  }
}
</script>
