<template>
  <div id="search">
    <mt-search
      v-model="search"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
    <div class="hot-search">
      <h6>热门搜索</h6>
      <div class="search-list">
        <span>搜索项1</span>
        <span>搜索项222</span>
      </div>
    </div>
    <ul class="search-history">
      <li>
        <p><i class="iconfont icon-time"></i>搜索历史</p>
        <button class="iconfont icon-close"></button>
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    Search
  } from 'mint-ui';

  export default {
    name: "Search",
    data() {
      return {
        search: ''
      }
    },
    methods: {}
  };
</script>

<style lang="scss">
  @import "../styles/style.scss";
  #search {
    .mint-search {
      height: initial;
    }
    .mint-searchbar-inner .mintui-search {
      margin-right: 5px;
      font-size: 13px;
    }
    .hot-search {
      padding: 20px 10px;
      margin-bottom: -12px;
      overflow: hidden;
      h6{
        margin-bottom: 15px;
        color: #666;
        font-size: 13px;
      }
      .search-list{
        display: flex;
        flex-wrap: wrap;
        margin-right: -10px;
        span{
          height: 26px;
          line-height: 26px;
          margin: 0 10px 12px 0;
          border: $border;
          border-radius: 13px;
          padding: 0 10px;
          color: #333;
          font-size: 14px;
          &:active{
            color: lighten(#333, 20%);
          }
        }
      }
    }
    .search-history{
      li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px 10px 0;
        margin-left: 10px;
        @include border1px;
        .iconfont{
          color: #999;
          &.icon-time{
            margin-right: 10px;
          }
          &.icon-close:active{
            color: lighten(#999,30%);
          }
        }
      }
    }
  }
</style>