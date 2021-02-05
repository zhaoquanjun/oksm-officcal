<template>
  <div class="oksm-header--section" :class="{ bg: hasScrollOverCarousel || activeNav }">
    <div class="header-wrapper content-area">
      <div class="logo">
        <img :src="logo" alt="" v-show="!hasScrollOverCarousel && !activeNav">
        <img :src="activeLogo" alt="" v-show="hasScrollOverCarousel || activeNav">
      </div>
      <div class="nav-icon" :class="activeNav ? 'active-icon' : ''" v-if="equ == 'mobile'" @click="_handleChangeNavvStatus">
        <i class="iconfont icon-shousuo"></i>  
      </div> 
      <ul class="nav-wrapper" :class="activeNav ? 'active-nav' : ''" @click.self="_handleClickWrapper">
        <li
          class="nav-item"
          :class="{ active: currentChildPath == item.path || currentPath == item.path }"
          v-for="(item, index) in navs"
          :key="index"
          @click="_handleSkipOtherPage(item)"
        >
          <span class="chinese">{{ item.chinese }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { chinese: "首页", english: "HOME", value: 1, path: "/" },
        { chinese: "关于我们", english: "ABOUT", value: 2, path: "/about" },
        { chinese: "联系我们", english: "contact", value: 3, path: "/contact" },
        {
          chinese: "解决方案",
          english: "solution",
          value: 4,
          path: "/solution",
        },
         {
          chinese: "招贤纳士",
          english: "recruiting",
          value: 4,
          path: "/recruiting",
        },
      ],
      logo: require("@s/images/logo.png"),
      activeLogo: require("@s/images/logo_active.png"),
      hasScrollOverCarousel: false,
      activeNav: false,
      equ: 'pc'
    };
  },
  created() {
    this.equ = localStorage.getItem('equ') || 'pc'
    this.addDocumentEvent();
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
    currentChildPath() {
      return this.$route.meta && this.$route.meta.parent
    }
  },
  methods: {
    /**
     * @name 路由跳转
     */
    _handleSkipOtherPage(item) {
      if (this.$route.path == item.path) return;
      this.$router.push({
        path: item.path,
      });
      if (this.equ == 'mobile') this.activeNav = false
    },
    /**
     * @name 添加全局滚动事件
     */
    addDocumentEvent() {
      document.addEventListener("scroll", (e) => {
        // 有文档声明类型的用 document.body.scrollTop； 没有文档类型声明的用 document.documentElement.scrollTop
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        this.hasScrollOverCarousel = scrollTop > 0 ? true : false;
      });
    },
    /**
     * @name 移动端切换导航状态
     */
    _handleChangeNavvStatus() {
      this.activeNav = !this.activeNav
    },
    /**
     * @name 移动端点击导航容器事件
     */
    _handleClickWrapper() {
      this.activeNav = false
    }
  },
};
</script>

<style lang="scss" scoped>
.oksm-header--section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  background-color: transparent;
  transition: all .2s ease-in-out;

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 160px;
    }

    .nav-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .nav-item {
        margin-left: 36px;
        line-height: 22px;
        cursor: pointer;
        color: #fff;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        letter-spacing: 1px;
        transition: all .15s ease-in-out;

        &:hover {
          transform: translate3d(0, 0, 10px) scale(1.3);
        }
      }

      .active {
        font-weight: bold;
        transform: translate3d(0, 0, 10px) scale(1.3);

      }
    }
  }
}

.bg {
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(223, 223, 223, 0.24);

  .header-wrapper {
    .logo {
      color: #333;
    }

    .nav-wrapper {
      .nav-item {
        color: #333;
      }

      .active {
        color: #ff6a00;
      }
    }

    .nav-icon {
      i.iconfont {
        color: #ff6a00 !important;
      }
    }
  }
}

// mobile media
@media screen and (max-width: 1024px) {
  .oksm-header--section {
    height: .6rem;
    z-index: 1111;

    .header-wrapper {
      width: 100%;

      .logo {
        width: 120px
      }

      .nav-wrapper {
        position: fixed;
        top: .6rem;
        right: 0;
        transform: translate(200%, -200%);
        display: block;
        padding: .24rem .16rem .2rem;
        width: 100%;
        height: calc(100% - .6rem);
        transition: all .2s ease-in-out;
        opacity: 0;
        z-index: 11;
        background: #fff;
        border-top: .01rem solid #f5f5f5;
        box-shadow: 0 .08rem .16rem 0 rgba(223, 223, 223, 0.24);

        .nav-item {
          margin-left: 0;
          padding: .16rem 0;
          font-size: .18rem;
          color: #333;
          width: 100%;
          border-bottom: .01rem solid #f5f5f5;

          span {
            margin: 0;
          }

          &:hover {
            transform: none;
          }
        }

        .active {
          font-size: .2rem;
          transform: none;
        }
      }

      .nav-icon {
        position: relative;
        i.iconfont {
          display: block;
          color: #fff;
          font-size: .28rem;
          transition: all .2s ease-in-out;
        }
      }

      .active-nav {
        opacity: 1;
        transform: translate(0, 0);

        .nav-item.active {
          color: #ff6a00;
        }
      }

      .active-icon {
        i.iconfont {
          transform: rotate(-90deg);
        }
      }
    }
    
  }
}
</style>
