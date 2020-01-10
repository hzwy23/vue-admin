<template>
  <div class="block" style="float:right; margin: 6px;">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.page"
      :page-sizes="pageSizes"
      :page-size="page.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    total: {
      type: Number
    } // 总条数
  },
  data() {
    return {
      pageSizes: [10, 20, 50, 100],
      page: {
        pageIndex: 1,
        pageLimit: 10//pageLimit值需与pageSizes[0]保持一致
      }
    };
  },
  methods: {
    // // 每页查看条数变化
    handleSizeChange(val) {
      this.page.pageLimit= val;
      this.$emit('pageChange', this.page);
    },
    // 当前页码变化
    handleCurrentChange(val) {
      this.page.pageIndex= val;
      this.$emit('pageChange', this.page);
    }
  },

}
</script>