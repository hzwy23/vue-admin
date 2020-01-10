<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    autoHeight() {
      // 初始化浏览器高度
      this.$store.dispatch("autoHeight");
    }
  },
  beforeCreate() {
    this.$store.dispatch("autoHeight");
  },
  mounted() {
    window.onresize = () => {
      // 浏览器
      this.autoHeight();
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0px;
  margin: 0px;
}
</style>
