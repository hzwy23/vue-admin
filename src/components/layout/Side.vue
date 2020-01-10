<template>
  <div class="wisrc-side">
    <el-menu
      default-active="2"
      :style="{height: (height-60)+'px'}"
      class="wisrc-side-menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-scrollbar style="height: 100%">
        <SideChildrenMenu  v-bind:children="sideMenuList" />
      </el-scrollbar>
    </el-menu>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import { getMenu } from '@/api/menu.js';
import SideChildrenMenu from '@/components/layout/SideChildrenMenu.vue';

export default {
  name: "wisrc-side",
  computed: {
    // 从 vuex 中获取浏览器高度，实时更新，保持左侧菜单栏高度与浏览器高度一致，保持垂直方向 100% 高度
    ...mapGetters(["height"])
  },
  components: {
    SideChildrenMenu
  },
  data() {
    return {
      sideMenuList: [],
    };
  },
  methods: {
    openPage(url) {
      this.$router.push(url);
    }, 
  },
  mounted(){
    // 定时获取后台菜单信息
    getMenu().then(resp => {
        this.sideMenuList = resp
    })
  }
};
</script>

<style scoped>
.wisrc-side {
  width: 260px;
  height: 100%;
  float: left;
  text-align: left;
}
.wisrc-side-menu {
  overflow-y: auto;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>