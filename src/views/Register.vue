<template>
  <div id="register">
    <h1 class="iconfont icon-music"></h1>
    <mt-field label="账号" placeholder="请输入账号"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
    <mt-button type="primary">注册</mt-button>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="scss">
@import '../styles/style.scss';

html,body,#app{
  height: 100%;
}

#register{
  width: 82%;
  padding: 30px 20px;
  border-radius: 3px;
  box-shadow: $shadow;
  background: #fff;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  h1{
    margin-bottom: 30px;
    color: $theme-color;
    font-size: 48px;
    text-align: center;
  }
  .mint-button{
    width: 100%;
    margin-top: 40px;
  }
}
</style>
