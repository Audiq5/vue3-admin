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
          <h2>欢迎来到西方甄选</h2>
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" :prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
              :prefix-icon="Lock"
              show-password
            />
          </el-form-item>

          <el-form-item>
            <el-button
              :loading="loading"
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
  import { ElMessage, ElNotification } from "element-plus";
  import type { FormInstance, FormRules } from "element-plus";
  import router from "@/router";
  // 引入pinia
  import { useCounterStore } from "@/store/moudels/user";
  const userMsg = useCounterStore();

  const ruleFormRef = ref<FormInstance>();

  const ruleForm = reactive({
    username: "admin",
    password: "111111",
  });
  const loading = ref(false);
  const rules = reactive<FormRules<typeof ruleForm>>({
    username: [
      { required: true, message: "请输入您的用户名", trigger: "blur" },
    ],
    password: [{ required: true, message: "请输入您的密码", trigger: "blur" }],
  });
  const submitForm = async (formEl: FormInstance | undefined) => {
    loading.value = true;
    if (!formEl) return;
    formEl.validate(async (valid) => {
      if (valid) {
        // 通过校验提交信息
        // 结果为loginForm返回的成功或失败的信息
        try {
          await userMsg.loginForm(ruleForm);
          loading.value = false;
          // 成功返回之后跳转到首页
          router.push("/");
          ElMessage({
            message: "您已登录成功",
            type: "success",
          });
        } catch (error: any) {
          console.log(error, "error");
          loading.value = false;
          // ElMessage.error(error.data);
          ElNotification({
            type: "error",
            message: (error as Error).message,
          });
        }
      } else {
        loading.value = false;
        console.log("error submit!");
        return false;
      }
    });
  };

  // const submitForm = (formEl: FormInstance | undefined) => {
  //   if (!formEl) return;
  //   formEl.validate((valid) => {
  //     if (valid) {
  //       console.log("submit!");
  //     } else {
  //       console.log("error submit!");
  //       return false;
  //     }
  //   });
  // };

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
