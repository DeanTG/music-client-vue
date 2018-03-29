<template>
  <header id="header">
    <i class="iconfont icon-music"></i>
    <div class="search-container">
      <i class="iconfont icon-Search"></i>
      <input type="text" placeholder="输入歌手、歌曲名搜索">
    </div>
    <img src="../assets/images/user.png" alt="" class="avatar">
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
@import "../styles/style.scss";
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  & > i {
    color: $theme-color;
    font-size: 22px;
  }
  .search-container {
    display: flex;
    align-items: center;
    flex: 1;
    height: 28px;
    padding: 0 20px;
    margin: 0 20px;
    border-radius: 14px;
    background: #ebecec;
    i{
      width: 20px;
      font-size: 14px;
    }
    input {
      flex: 1;
      border: none;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
    }
  }
  .avatar {
    width: 24px;
    height: 24px;
  }
}
</style>
