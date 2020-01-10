<template>
  <div>
    <el-form ref="form" :model="form" label-width="180px">
      <el-row>
        <el-col :span="13">
          <el-form-item
            prop="modelCd"
            :rules="[
      { required: true, message: '请输入数据集编码', trigger: 'blur' },
    ]"
            label="数据集编码"
          >
            <el-input v-model="form.modelCd" placeholder="为空时，系统自动生成"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="13">
          <el-form-item
            prop="modelName"
            :rules="[
      { required: true, message: '请输入数据集名称', trigger: 'blur' },
    ]"
            label="数据集名称"
          >
            <el-input v-model="form.modelName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="13">
          <el-form-item label="备注">
            <el-input v-model="form.remark" placeholder="填写备注"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-divider></el-divider>
    <div>
      <el-row>
        <el-button @click="save" size="small" type="primary">保存</el-button>
        <el-button @click="() => this.$router.push('/modeller')" size="small" type="primary">取消</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { addModel, updateModel } from "@/api/demo.js";

export default {
  data() {
    return {
      form: {
        modelId: this.$route.params.modelId,
        modelCd: this.$route.params.modelCd,
        modelName: this.$route.params.modelName,
        remark: this.$route.params.remark
      }
    };
  },
  methods: {
    save() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.modelId == "" || this.form.modelId == undefined) {
            //新增
            addModel(this.form).then(flag => {
              console.log("提交结果是：", flag);
              this.$router.push("/modeller");
            });
          } else {
            //修改
            updateModel(this.form).then(flag => {
              console.log("提交结果是：", flag);
              this.$router.push("/modeller");
            });
          }
        }
      });
    }
  }
};
</script>