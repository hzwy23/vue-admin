<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(item,index) in breadcrumb"
        :to="{path: item.path}"
        :key="index"
      >{{item.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadcrumb: []
    };
  },
  watch: {
    $route(to) {
      const routers = to.matched;
      this.breadcrumb = [];
      if (routers && routers.length > 0) {
        for (let i = 1; i < routers.length; i++) {
          this.breadcrumb.push({
            title: routers[i].meta.title,
            path: routers[i].path
          });
        }
      }
    }
  }
};
</script>