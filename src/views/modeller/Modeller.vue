<template>
  <div>
    <el-form :inline="true" v-model="search">
      <el-form-item label="数据集编码">
        <el-input v-model="search.modelCd" placeholder="数据集编码"></el-input>
      </el-form-item>
      <el-form-item label="数据集名称">
        <el-input v-model="search.modelName" placeholder="数据集名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleSearch" plain type="primary" size="small">查询</el-button>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>

    <el-row>
      <el-button @click="()=> this.$router.push('/modeller/add')" size="small" type="primary">新建</el-button>
      <el-button @click="this.refresh" size="small" type="primary">刷新</el-button>
    </el-row>
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      :data="modellerData.content"
      border
      style="width: 100%; margin-top: 18px;"
    >
      <el-table-column fixed label="序号" type="index" width="60"></el-table-column>
      <el-table-column fixed prop="modelCd" label="数据集编码" width="120"></el-table-column>
      <el-table-column fixed prop="modelName" label="数据集名称" width="230"></el-table-column>
      <el-table-column fixed prop="remark" label="备注"></el-table-column>
      <el-table-column prop="updateDate" label="更新时间" width="160"></el-table-column>
      <el-table-column prop="updateBy" label="更新人" width="100"></el-table-column>
      <el-table-column fixed="right" label="操作" width="160">
        <template slot-scope="scope">
          <el-button @click="openColumn(scope.row)" type="text" size="small">字段管理</el-button>
          <el-button type="text" size="small" @click="toModelEdit(scope.row)">编辑</el-button>
          <el-button @click="handleDeleteModel(scope.row.modelId)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <basic-pagination :total="pageTotal" @pageChange="pageChange"></basic-pagination>
  </div>
</template>

<script>
import BasicPagination from "@/components/pagination/BasicPagination";
import { getModeller, deleteModel } from "@/api/demo.js";

export default {
  components: {
    BasicPagination
  },
  methods: {
    pageChange (item) {//分页相关
        this.pageIndex = item.pageIndex;
        this.pageSize = item.pageLimit;
        this.handleSearch();//改变页码，重新渲染页面
    },
    openColumn(row) {
      this.$router.push({
        name: "column",
        params: {
          modelId: row.modelId,
          modelCd: row.modelCd,
          modelName: row.modelName,
        }
      });
    },
    toModelEdit(row) {
      this.$router.push({
        name: "add",
        params: {
          modelId: row.modelId,
          modelCd: row.modelCd,
          modelName: row.modelName,
          remark: row.remark,
        }
      });
    },
    enableFormatter(row) {
      if (row.enabled == 1) {
        return "是";
      } else {
        return "否";
      }
    },
    handleDeleteModel(modelId) {
      this.$confirm("此操作将永久删除该数据集, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteModel(modelId).then(() => {
            this.$message.success("删除数据集成功");
            this.refresh();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    refresh() {
      this.loading = true;
      getModeller({
        pageNumber: 1,
        pageSize: 10,
        modelCd: this.search.modelCd,
        modelName: this.search.modelName
      }).then(response => {
        this.modellerData = response;
        this.pageTotal=response.total;//分页相关
        this.loading = false;
      });
    },
    handleSearch() {
      this.loading = true;
      getModeller({
        pageNumber: this.pageIndex,//分页相关
        pageSize: this.pageSize,//分页相关
        modelCd: this.search.modelCd,
        modelName: this.search.modelName
      }).then(response => {
        this.modellerData = response;
        this.pageTotal=response.total;//分页相关
        this.loading = false;
      });
    }
  },
  mounted() {
    this.refresh();
  },
  data() {
    return {
      //分页相关
      pageIndex : 1, // 默认页数
      pageTotal: 1, // 默认总条数
      pageSize : 10, //默认每页显示多少条
      loading: true,
      modellerData: [],
      search: {
        modeller: ""
      }
    };
  }
};
</script>