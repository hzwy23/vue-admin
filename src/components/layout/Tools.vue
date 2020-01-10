<template>
  <div class="wisrc-tools">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{userInfo.nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="1">个人中心</el-dropdown-item>
        <el-dropdown-item command="2" divided>推出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    handleCommand(command) {
      console.log(command)
      switch(command) {
        case "1":
          break;
        case "2":
          this.logout();
      }
    },
    logout() {
        this.$confirm('点击确定退出系统?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('loginStatus', false)
          this.$router.push('/login')
        });
    }
  }
};
</script>

<style scoped>
.wisrc-tools {
  text-align: right;
  float: right;
  width: 230px;
  margin-right: 16px;
}
.el-dropdown-link {
  color: white
}
</style>