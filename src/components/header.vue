<template>
  <div class="oksm-header--section" :class="{ bg: hasScrollOverCarousel }">
    <div class="header-wrapper content-area">
      <div class="logo">
        <img :src="logo" alt="" v-show="!hasScrollOverCarousel">
        <img :src="activeLogo" alt="" v-show="hasScrollOverCarousel">
      </div>
      <ul class="nav-wrapper">
        <li
          class="nav-item"
          :class="{ active: currentPath == item.path }"
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
    };
  },
  created() {
    this.addDocumentEvent();
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
  methods: {
    _handleSkipOtherPage(item) {
      if (this.$route.path == item.path) return;
      this.$router.push({
        path: item.path,
      });
    },
    addDocumentEvent() {
      document.addEventListener("scroll", (e) => {
        // 有文档声明类型的用 document.body.scrollTop； 没有文档类型声明的用 document.documentElement.scrollTop
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        this.hasScrollOverCarousel = scrollTop > 0 ? true : false;
      });
    },
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
        margin-left: 32px;
        line-height: 22px;
        cursor: pointer;
        color: #fff;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        letter-spacing: 1px;

        &:hover {
          // color: #ff6a00;
          // font-weight: bold;
          transform: translate3d(0, 0, 10px);
          text-shadow: 2px 2px 5px #fff;
        }
      }

      .active {
        // color: #ff6a00;
        // font-weight: bold;
        transform: translate3d(0, 0, 10px);
        text-shadow: 2px 2px 5px #fff;
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
  }
}
</style>
