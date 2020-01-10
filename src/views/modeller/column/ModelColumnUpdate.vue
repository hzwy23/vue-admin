<template>
  <div>
    <el-form ref="form" :model="form" label-width="180px">
      <div>
        <div>
          <el-form-item
            prop="identifierCd"
            :rules="[
      { required: true, message: '请输入字段名', trigger: 'blur' },
    ]"
            label="字段名"
          >
            <el-input v-model="form.identifierCd" placeholder></el-input>
          </el-form-item>
          <el-form-item
            prop="identifierLabel"
            :rules="[
      { required: true, message: '请输入字段描述', trigger: 'blur' },
    ]"
            label="字段描述"
          >
            <el-input v-model="form.identifierLabel"></el-input>
          </el-form-item>
          <el-form-item
            prop="dataType"
            :rules="[
      { required: true, message: '请选择字段类型', trigger: 'blur' },
    ]"
            label="字段类型"
          >
            <el-select style="width: 100%" v-model="form.dataType" placeholder="字段类型">
              <el-option
                v-for="item in dataTypeOptions"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.remark" placeholder="备注"></el-input>
          </el-form-item>
        </div>
      </div>
    </el-form>
    <el-divider></el-divider>
    <div>
      <el-row>
        <el-button @click="save" size="small" type="primary">保存</el-button>
        <el-button @click="cacel" size="small" type="primary">取消</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { addModelColumn } from "@/api/modeller.js";
import { updateModelColumn } from "@/api/modeller.js";
export default {
  data() {
    return {
      form: {
        id: this.$route.params.id,
        identifierCd: this.$route.params.identifierCd,
        identifierLabel: this.$route.params.identifierLabel,
        dataType: this.$route.params.dataType,
        remark: this.$route.params.remark,
        modelId: this.$route.params.modelId
      },
      dataTypeOptions: [
        {
          label: "布尔类型",
          value: 0
        },
        {
          label: "数字类型",
          value: 1
        },
        {
          label: "字符串类型",
          value: 2
        }
      ]
    };
  },
  methods: {
    save() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id == "" || this.form.id == undefined) {
            //新增
            addModelColumn(this.form).then(flag => {
              console.log("提交结果是：", flag);
              this.$router.push({
                path: "/modeller/column",
                name: "column",
                params: {
                  modelId: this.$route.params.modelId,
                  modelCd: this.$route.params.modelCd,
                  modelName: this.$route.params.modelName
                }
              });
            });
          } else {
            updateModelColumn(this.form).then(flag => {
              console.log("提交结果是：", flag);
              this.$router.push({
                path: "/modeller/column",
                name: "column",
                params: {
                  modelId: this.$route.params.modelId,
                  modelCd: this.$route.params.modelCd,
                  modelName: this.$route.params.modelName,
                  id: this.$route.params.id
                }
              });
            });
          }
        }
      });
    },
    cacel() {
      this.$router.push({
        path: "/modeller/column",
        name: "column",
        params: {
          modelId: this.$route.params.modelId,
          modelCd: this.$route.params.modelCd,
          modelName: this.$route.params.modelName
        }
      });
    }
  }
};
</script>