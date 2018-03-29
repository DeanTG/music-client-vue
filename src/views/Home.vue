<template>
  <div id="home">
    <Header></Header>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="http://p1.music.126.net/qcihbFSc-69K4J56vGSeWg==/109951163212576988.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <nav>
      <a href="javascript:;">
        <i class="iconfont icon-recommend"></i>
        <span>每日推荐</span>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-rank"></i>
        <span>排行榜</span>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-uploadd"></i>
        <span>我要分享</span>
      </a>
    </nav>
    <div class="recommend">
      <h4>精彩推荐</h4>
      <ul>
        <li>
          <div>
            <img src="http://p1.music.126.net/qcihbFSc-69K4J56vGSeWg==/109951163212576988.jpg" alt="">
          </div>
          <h6><span>爱了很久的朋友爱了很久的朋友爱了很久的朋友爱了很久的朋友</span></h6>
        </li>
        <li>
          <div>
            <img src="http://p1.music.126.net/qcihbFSc-69K4J56vGSeWg==/109951163212576988.jpg" alt="">
          </div>
          <h6><span>爱了很久的朋友爱了很久的朋友爱了很久的朋友爱了很久的朋友</span></h6>
        </li>
        <li>
          <div>
            <img src="http://p1.music.126.net/qcihbFSc-69K4J56vGSeWg==/109951163212576988.jpg" alt="">
          </div>
          <h6><span>爱了很久的朋友爱了很久的朋友爱了很久的朋友爱了很久的朋友</span></h6>
        </li>
        <li>
          <div>
            <img src="http://p1.music.126.net/qcihbFSc-69K4J56vGSeWg==/109951163212576988.jpg" alt="">
          </div>
          <h6><span>爱了很久的朋友爱了很久的朋友爱了很久的朋友爱了很久的朋友</span></h6>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Home",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "../styles/style.scss";
#home {
  padding-bottom: 20px;
  .mint-swipe {
    height: 160px;
  }
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
  nav {
    display: flex;
    align-items: center;
    padding: 15px;
    @include border1px();
    a {
      flex: 1;
      text-align: center;
      i {
        display: block;
        margin-bottom: 8px;
        color: $theme-color;
        font-size: 40px;
      }
      span {
        color: $font-color;
      }
    }
  }
  .recommend {
    padding: 0 15px;
    margin: 15px 0;
    h4 {
      padding-left: 10px;
      margin-bottom: 15px;
      border-left: $theme-color solid 4px;
      color: $font-color;
      font-size: 16px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: -15px;
      li {
        width: 48%;
        margin: 0 4% 15px 0;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.08);
        &:nth-of-type(2n + 2) {
          margin-right: 0;
        }
        &>div{
          height: 80px;
        }
        img {
          width: 100%;
          height: 100%;
        }
        h6 {
          padding: 10px;
          span {
            line-height: 1.5;
            @include text-overflow(2);
            font-size: 12px;
            color: $font-color;
          }
        }
      }
    }
  }
}
</style>
