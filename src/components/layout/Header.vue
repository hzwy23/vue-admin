<template>
  <div class="wisrc-header">
    <el-row>
      <el-col :span="24">
        <!-- Logo 显示-->
        <Logo />

        <!--一级主菜单区域-->
        <MainMenu />

        <!-- 右侧工具栏（包含用户登陆信息） -->
        <Tools />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Logo from "@/components/layout/Logo.vue";
import MainMenu from "@/components/layout/MainMenu.vue";
import Tools from "@/components/layout/Tools.vue";

export default {
  name: "WisrcHeader",
  components: {
    Logo,
    MainMenu,
    Tools
  }
};
</script>

<style scoped>
.wisrc-header {
  height: 60px;
  width: 100%;
  text-align: left;
  padding: 2px 0px;
  line-height: 60px;
  background-color: rgb(84, 92, 100);
  color: #ffffff;
}
</style>