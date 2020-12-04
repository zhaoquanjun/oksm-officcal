<template>
  <div
    class="oksm-header--section"
    :class="{ 'bg': hasScrollOverCarousel }"
  >
    <div class="logo">欧科 <span>OK</span></div>
    <ul class="nav-wrapper">
      <li
        class="nav-item"
        :class="{'active': currentPath == item.path}"
        v-for="(item, index) in navs"
        :key="index"
        @click="_handleSkipOtherPage(item)"
      >
        <span class="chinese">{{ item.chinese }}</span>
      </li>
    </ul>
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
        { chinese: "解决方案", english: "solution", value: 3, path: "/solution" },
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
      return this.$route.path
    }
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
        const carouselH = document.getElementById("carousel")
          ? document.getElementById("carousel").clientHeight
          : 0;
        if (document.documentElement.scrollTop + 100 >= carouselH) {
          this.hasScrollOverCarousel = true;
        } else {
          this.hasScrollOverCarousel = false;
        }
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.oksm-header--section {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 48px;
  width: 100%;
  min-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  border-bottom: 1px solid rgba(255,255,255,.15);
  background-color: rgba(0, 0, 0, .3);

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
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .nav-item {
      padding: 0 2vw;
      height: 100px;
      line-height: 100px;
      cursor: pointer;
      color: #FFF;
      font-size: 16px;

      &:hover {
        color: #ff6a00;
      }
    }

    .active {
      color: #ff6a00;
    }
  }
}

.bg {
  background-color: rgba(102, 102, 102, 0.5);
}
</style>
