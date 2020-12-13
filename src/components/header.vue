<template>
  <div class="oksm-header--section" :class="{ bg: hasScrollOverCarousel }">
    <div class="header-wrapper">
      <div class="logo">欧科 <span>OK</span></div>
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
      ],
      logo: require("@s/images/home/logo.png"),
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
    margin: 0 auto;
    width: 1200px;

    .logo {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
      font-style: italic;

      span {
        font-style: italic;
      }
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
        font-family: " PingFangSC-Regular, PingFang SC";
        font-weight: 400;
        letter-spacing: 1px;

        &:hover {
          color: #ff6a00;
        }
      }

      .active {
        color: #ff6a00;
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
