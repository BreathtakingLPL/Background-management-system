<template>
  <div class="login-container">
    <div class="login-box">

      <!-- 头像区域 avatar-->
      <div class="text-center avatar-box">
        <img src="../assets/logo.png" class="img-thumbnail avatar" alt="">
      </div>

      <!-- 表单区域 form-->
      <div class="form-login p-4">
        <!-- 登录名称 username-->
        <div class="form-group form-inline">
          <label for="username">Username</label>
          <input type="text" class="form-control ml-2" id="username" placeholder="Please input username" autocomplete="off" v-model.trim='username'>
        </div>
        <!-- 登录密码 password-->
        <div class="form-group form-inline">
          <label for="password">Password</label>
          <input type="password" class="form-control ml-2" id="password"  v-model.trim='password' placeholder="Please input password">
        </div>
        <!-- 登录和重置按钮 login and reset button-->
        <div class="form-group form-inline d-flex justify-content-end">
          <button type="button" class="btn btn-secondary mr-2" @click='reset'>Reset</button>
          <button type="button" class="btn btn-primary" @click='login'>Login</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLogin',
  data() {
   return {
      username: '',
      password: ''
   }
  },
  methods: {
    // login method
    login() {
      if (this.username === 'admin' & this.password === '123456') {
        localStorage.setItem('token', 'Bearer xxx')
        this.$router.push('/home')
      } else {
        localStorage.removeItem('token')
      }
    },
    // reset input
    reset() {
      this.username = ''
      this.password = '' 
      
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  background-color: #35495e;
  height: 100%;
  .login-box {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    .form-login {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
    }
  }
}

.form-control {
  flex: 1;
}

.avatar-box {
  position: absolute;
  width: 100%;
  top: -65px;
  left: 0;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
  }
}
</style>