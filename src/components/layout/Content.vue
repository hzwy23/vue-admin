<template>
  <div>
    <el-card>
      <Breadcrumb></Breadcrumb>
    </el-card>
    <div class="wisrc-content" :style="{height: (height-138)+'px'}">
      <section style="overflow: auto !important">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <el-card
              style="overflow: auto !important; text-align: left"
              :style="{height: (height-140)+'px'}"
            >
              <router-view></router-view>
            </el-card>
          </keep-alive>
        </transition>
      </section>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";

export default {
  name: "WisrcContent",
  components: {
    Breadcrumb
  },
  computed: {
    ...mapGetters(["height"])
  }
};
</script>

<style scoped>
.wisrc-content {
  margin-left: 260px;
  border: #f6f3f3 solid 1px;
  background-color: #f6f3f3;
  overflow-y: auto;
  padding: 6px 6px;
}
</style>