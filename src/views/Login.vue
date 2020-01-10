<template>
  <div>
    <el-row style="margin-top: 80px;">
      <el-col :span="8" :offset="8">
        <el-form>
          <el-form-item prop="username" label="用户名：">
            <el-input name="username" v-model="username" placeholder="用户账号" />
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input type="password" name="passwrod" v-model="password" placeholder="用户密码" />
          </el-form-item>
        </el-form>
        <el-button @click="loginSubmit">登&nbsp;&nbsp;录</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { login } from '@/api/login.js';

export default {
  name: "login",
  data() {
    return {
      username: "admin",
      password: "123456"
    };
  },
  methods: {
    loginSubmit() {
      login(this.username, this.password).then(resp => {
          if (resp) {
             this.$store.dispatch('loginStatus', true);
             this.$router.push('/dashboard')
          }
      });
    }
  }
};
</script>