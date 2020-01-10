<template>
<div>
    <div v-for="(item, index) in children" :key="index">
          <!-- 目录菜单 -->
          <el-submenu v-if="item.menuType == 1" :index="item.menuId">
            
            <!-- 目录菜单名称 -->
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{item.menuName}}</span>
            </template>

            <!-- 目录下叶子菜单 -->
            <SideChildrenMenu  v-bind:children="item.children" />
            
          </el-submenu>

          <!-- 叶子菜单 -->
          <el-menu-item v-if="item.menuType == 2" :index="item.menuId" @click="openPage(item.path)">
            {{item.menuName}}
          </el-menu-item>
        
    </div>
</div>
</template>

<script>
export default {
    props: ["children"],
    name: 'SideChildrenMenu',
    methods: {
        openPage(url) {
            this.$router.push(url);
        }
    }
}
</script>