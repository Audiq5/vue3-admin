<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          ref="ruleFormRef"
          style="max-width: 600px"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="auto"
          class="login-ruleForm"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" :prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="pass">
            <el-input
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off"
              :prefix-icon="Lock"
              show-password
            />
          </el-form-item>

          <el-form-item>
            <el-button
              style="width: 100%"
              type="primary"
              @click="submitForm(ruleFormRef)"
              >登录</el-button
            >
            <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
  import { User, Lock } from "@element-plus/icons-vue";
  import { reactive, ref } from "vue";
  import type { FormInstance, FormRules } from "element-plus";

  const ruleFormRef = ref<FormInstance>();

  const validatePass = (value: any, callback: any) => {
    if (value === "") {
      callback(new Error("请输入您的密码"));
    } else {
      // if (ruleForm.username !== "") {
      //   if (!ruleFormRef.value) return;
      //   ruleFormRef.value.validateField("username", () => null);
      // }
      callback();
    }
  };
  const username = (value: any, callback: any) => {
    if (value === "") {
      callback(new Error("请输入您的账号"));
    } else {
      callback();
    }
  };
  const ruleForm = reactive({
    pass: "",
    username: "",
  });
  const rules = reactive<FormRules<typeof ruleForm>>({
    username: [{ validator: username, trigger: "blur" }],
    pass: [{ validator: validatePass, trigger: "blur" }],
  });

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        console.log("submit!");
      } else {
        console.log("error submit!");
        return false;
      }
    });
  };

  // const resetForm = (formEl: FormInstance | undefined) => {
  //   if (!formEl) return;
  //   formEl.resetFields();
  // };
</script>
<style scoped lang="scss">
  .login_container {
    width: 100vw;
    height: 100vh;
    background: url("@/assets/images/background.jpg") no-repeat;
    background-size: cover;
    .login-ruleForm {
      width: 80%;
      position: relative;
      top: 30vh;
      background: url("@/assets/images/login_form.png") no-repeat;
      background-size: cover;
      padding: 40px;
      h1 {
        font-size: 40px;
        font-weight: 400;
        color: #ffffff;
      }
      h2 {
        font-size: 20px;
        color: #ffffff;
        margin: 20px 0;
      }
    }
  }
</style>
