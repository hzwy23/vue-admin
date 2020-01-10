<template>
  <div>
    <el-form :inline="true" v-model="search">
      <el-form-item label="字段名">
        <el-input v-model="search.identifierCd" placeholder="字段名称"></el-input>
      </el-form-item>
      <el-form-item label="数据类型">
        <el-select v-model="search.dataType" placeholder="类型">
          <el-option key="0" value="0" label="布尔类型"></el-option>
          <el-option key="1" value="1" label="数字类型"></el-option>
          <el-option key="2" value="2" label="字符串类型"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleSearch" plain type="primary" size="small">查询</el-button>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
    <el-row>
      <el-button @click="() =>  this.$router.push('/modeller')" size="small" type="primary">返回</el-button>
      <el-button @click="addColumn" size="small" type="primary">添加</el-button>
      <el-button size="small" type="primary" @click="this.refresh">刷新</el-button>
    </el-row>
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      :data="columnData.content"
      border
      style="width: 100%; margin-top: 18px;"
    >
      <el-table-column fixed label="序号" type="index" width="60"></el-table-column>
      <el-table-column fixed label="数据集编码" width="100" :formatter="modelCdFormatter"></el-table-column>
      <el-table-column fixed label="数据集名称" width="120" :formatter="modelNameFormatter"></el-table-column>
      <el-table-column fixed prop="identifierCd" label="字段名" width="120"></el-table-column>
      <el-table-column prop="identifierLabel" label="字段描述" width="120"></el-table-column>
      <el-table-column prop="dataType" label="字段类型" width="120" :formatter="dataTypeFormatter"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column prop="updateDate" label="更新时间" width="160"></el-table-column>
      <el-table-column prop="updateBy" label="更新人" width="100"></el-table-column>
      <el-table-column fixed="right" label="操作" width="160">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="toModelDetailEdit(scope.row)">编辑</el-button>
          <el-button @click="handleDeleteColumn(scope.row.id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <basic-pagination :total="pageTotal" @pageChange="pageChange"></basic-pagination>
  </div>
</template>

<script>
import BasicPagination from "@/components/pagination/BasicPagination";
import { getModellerColumn, deleteModelColumn } from "@/api/modeller.js";

export default {
  components: {
    BasicPagination
  },
  methods: {
    toModelDetailEdit(row) {
      this.$router.push({
        path: "/modeller/column/add",
        name: "modeller-column-add",
        params: {
          id: row.id,
          identifierCd: row.identifierCd,
          identifierLabel: row.identifierLabel,
          dataType: row.dataType,
          remark: row.remark,
          modelId: this.$route.params.modelId,
          modelCd: this.$route.params.modelCd,
          modelName: this.$route.params.modelName
        }
      });
    },
    pageChange(item) {
      //分页相关
      this.pageIndex = item.pageIndex;
      this.pageSize = item.pageLimit;
      this.handleSearch(); //改变页码，重新渲染页面
    },
    dataTypeFormatter(row) {
      if (row.dataType == 0) {
        return "布尔类型";
      } else if (row.dataType == 1) {
        return "数字类型";
      } else {
        return "字符串";
      }
    },
    handleDeleteColumn(id) {
      this.$confirm("此操作将永久删除该数据集字段, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteModelColumn(id).then(() => {
            this.$message.success("删除数据集字段成功");
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
    addColumn() {
      this.$router.push({
        path: "/modeller/column/add",
        name: "modeller-column-add",
        params: {
          modelId: this.$route.params.modelId,
          modelCd: this.$route.params.modelCd,
          modelName: this.$route.params.modelName
        }
      });
    },
    refresh() {
      this.loading = true;
      getModellerColumn({
        pageNumber: 1,
        pageSize: 10,
        modelId: this.$route.params.modelId
      }).then(response => {
        this.columnData = response;
        this.pageTotal = response.total; //分页相关
        this.loading = false;
      });
    },
    handleSearch() {
      this.loading = true;
      getModellerColumn({
        pageNumber: this.pageIndex, //分页相关
        pageSize: this.pageSize, //分页相关
        dataType: this.search.dataType,
        identifierCd: this.search.identifierCd,
        modelId: this.$route.params.modelId
      }).then(response => {
        this.columnData = response;
        this.pageTotal = response.total; //分页相关
        this.loading = false;
      });
    },
    modelNameFormatter: function() {
      return this.$route.params.modelName;
    },
    modelCdFormatter: function() {
      return this.$route.params.modelCd;
    }
  },
  mounted() {
    this.refresh();
  },
  data() {
    return {
      //分页相关
      pageIndex: 1, // 默认页数
      pageTotal: 1, // 默认总条数
      pageSize: 10, //默认每页显示多少条
      columnData: [],
      search: {},
      loading: true
    };
  }
};
</script>