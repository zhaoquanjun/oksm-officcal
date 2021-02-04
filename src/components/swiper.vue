<template>
  <div
    class="swiper-wrapper"
    ref="swiper"
    @mousemove="_handleMouseOnSwiper"
    @mouseenter="_handleMouseOnSwiper"
    @mouseleave="_handleMouseOutSwiper"
    @mouseout="_handleMouseOutSwiper"
  >
    <div
      class="swiper-inner"
      ref="inner"
      @mousedown.stop="_handleMouseDown"
      @mousemove="_handleMouseMove"
      @mouseup.stop="_handleMouseup"
      @mouseleave="_handleMouseup"
      @mouseout="_handleMouseup"
    >
      <slot></slot>
    </div>
    <div
      class="swiper-btn--prev"
      v-if="swiperOptions.showBtn && equ == 'pc'"
      :class="{ 'no-events': isMoving }"
      @click="_prev"
    >
      <i class="iconfont icon-tubiaozhizuo--1"></i>
    </div>
    <div
      class="swiper-btn--next"
      v-if="swiperOptions.showBtn && equ == 'pc'"
      :class="{ 'no-events': isMoving }"
      @click="_next"
    >
      <i class="iconfont icon-tubiaozhizuo--"></i>
    </div>
    <div class="swiper-pagination">
      <ul class="pagination">
        <li
          class="pagination-item"
          :class="{
            'no-events': isMoving,
            active:
              index == activeIndex - 1 ||
              (activeIndex == nl + 1 && index == 0) ||
              (activeIndex == 0 && index == nl + 1)
          }"
          :data-index="index + 1"
          v-for="(item, index) in nl"
          :key="index"
          @click="_handleSkipToPage(index)"
        >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    swiperOptions: {
      type: Object,
      default: () => {
        return {
          loop: true,
          autoplay: true,
          showBtn: true,
          showPagination: true,
          duration: 3000
        };
      }
    }
  },
  data() {
    return {
      swiperW: 0, // 容器宽度
      activeIndex: 0, // 当前active项
      timer: null, // 定时器
      nl: null, // nodelength 子元素掐头去尾的长度
      isMoving: false, // 是否在按压移动
      startX: 0, // 起始位置
      disX: 0, // 移动距离
      equ: 'pc'
    };
  },
  created() {
    this.equ = localStorage.getItem('equ') || 'pc'
  },
  mounted() {
    this.init();
    this._addEventListener();
  },
  methods: {
    /**
     * @name 初始化
     */
    init() {
      const wrapperWidth = this.$refs.swiper.clientWidth;
      const wrapperHeight = this.$refs.swiper.clientHeight;
      const nodes = this.$refs.inner.childNodes;
      const pNode = nodes[0].cloneNode(true);
      const lNode = nodes[nodes.length - 1].cloneNode(true);
      this.nl = nodes.length;
      this.$refs.inner.insertBefore(lNode, nodes[0]);
      this.$refs.inner.appendChild(pNode);
      this._initDomSize();
      this._next();
      this.$nextTick(() => {
        this.swiperOptions.autoplay && this._start();
      });
    },
    /**
     * @name 初始化dom尺寸
     */
    _initDomSize() {
      this.$refs.inner.childNodes &&
        Array.prototype.forEach.call(this.$refs.inner.childNodes, ele => {
          ele.style.width = this.$refs.swiper.clientWidth + "px";
        });
      this.$refs.inner.style.width =
        this.$refs.swiper.clientWidth * this.$refs.inner.childNodes.length +
        "px";
      this.swiperW = this.$refs.swiper.clientWidth;
    },
    /**
     * @name 窗口尺寸事件
     */
    _windowResizeEvent() {
      let timer = null;
      window.addEventListener("resize", () => {
        this._stop();
        this._initDomSize();
        this._move();
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
          this._start();
        }, 300);
      });
    },
    /**
     * @name 添加事件
     */
    _addEventListener() {
      this._windowResizeEvent();
    },
    /**
     * @name 开始轮播
     */
    _start() {
      this.timer && clearInterval(this.timer);
      this.timer = setInterval(() => {
        this._next();
      }, this.swiperOptions.duration);
    },
    /**
     * @name 停止轮播
     */
    _stop() {
      this.timer && clearInterval(this.timer);
    },
    /**
     * @name 上一页
     */
    _prev() {
      const wrapperNode = this.$refs.inner;
      if (!wrapperNode.childNodes) return
      if (Math.abs(this.activeIndex) > 1) {
        wrapperNode.style.transition = "all 0.35s ease-in-out";
        --this.activeIndex;
        this._move();
      } else {
        this.activeIndex = 0;
        this._move(() => {
          setTimeout(() => {
            wrapperNode.style.transition = "none";
            this.activeIndex = wrapperNode.childNodes.length - 2;
            this._move();
          }, 300);
        });
      }
    },
    /**
     * @name 下一页
     */
    _next() {
      const wrapperNode = this.$refs.inner;
      if (!wrapperNode.childNodes) return
      if (this.activeIndex < wrapperNode.childNodes.length - 2) {
        wrapperNode.style.transition = "all 0.35s ease-in-out";
        ++this.activeIndex;
        this._move();
      } else {
        ++this.activeIndex;
        this._move(() => {
          setTimeout(() => {
            wrapperNode.style.transition = "none";
            this.activeIndex = 1;
            this._move();
          }, 300);
        });
      }
    },
    /**
     * @name 移动
     */
    _move(callback) {
      this.$refs.inner.style.transform =
        "translate3d(" + -this.swiperW * this.activeIndex + "px, 0, 0)";
      typeof callback == "function" && callback();
    },
    /**
     * @name 跳转
     * @params {index} 索引
     */
    _handleSkipToPage(index) {
      this.activeIndex = index + 1;
      this._move();
    },
    /**
     * @name 鼠标位于轮播图上
     */
    _handleMouseOnSwiper() {
      this.swiperOptions.autoplay && this._stop();
    },
    /**
     * @name 鼠标离开轮播图
     */
    _handleMouseOutSwiper() {
      this.swiperOptions.autoplay && this._start();
    },
    /**
     * @name 鼠标事件-mousedown
     */
    _handleMouseDown(e) {
      this.isMoving = true;
      this.startX = e.pageX;
      this.$refs.inner.style.transition = "none";
    },
    /**
     * @name 鼠标事件-mousemove
     */
    _handleMouseMove(e) {
      if (this.isMoving) {
        const disX = e.pageX - this.startX;
        this.disX += disX;
        const newX = -this.swiperW * this.activeIndex + this.disX;
        this.$refs.inner.style.transform = "translate3d(" + newX + "px, 0, 0)";
        this.startX = e.pageX;
      }
    },
    /**
     * @name 鼠标事件-mouseup
     */
    _handleMouseup() {
      this.isMoving = false;
      this.$refs.inner.style.transition = "all 0.35s ease-in-out"; // 拖动取消动画，避免有延迟状影响小哦过
      this.disX > 250 && this._prev(); // 右滑成功
      this.disX < -250 && this._next(); // 左滑成功
      this.disX = 0;
    },
    /**
     * @name slot--重置active-pagination-item
     * @params {index} 索引
     */
    _resetActivePaginationItem(index = 1) {
      const items = Array.prototype.filter.call(
        this.$refs.pagination.childNodes[0].childNodes[0].childNodes,
        e => {
          return (
            e.nodeType === 1 &&
            e.tagName.toUpperCase() === "LI" &&
            (e.className.toUpperCase() == "PAGINATION-ITEM" ||
              e.className.toUpperCase() == "PAGINATION-ITEM ACTIVE")
          );
        }
      );
      const border = Array.prototype.filter.call(
        this.$refs.pagination.childNodes[0].childNodes[0].childNodes,
        e => {
          return (
            e.nodeType === 1 &&
            e.tagName.toUpperCase() === "LI" &&
            e.className.toUpperCase() == "ACTIVE-BORDER"
          );
        }
      );
      items.forEach((v, k) => {
        let name = "";
        if (k == index - 1) {
          name = "pagination-item active";
        } else {
          name = "pagination-item";
        }
        v.className = name;
      });

      border[0].style.transform =
        "translateX(" + 300 * (index > items.length ? 0 : index - 1) + "px)";
    }
  },
  destroyed() {
    this._stop();
  }
};
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  user-select: none;

  .swiper-inner {
    height: 100%;
    z-index: 19;
    transition: all 0.35s ease-in-out;

    .swiper-slider {
      float: left;
      width: 100%;
    }
  }

  .swiper-btn--prev,
  .swiper-btn--next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    i {
      font-size: 64px;
      color: #fff;
      cursor: pointer;
    }
  }

  .swiper-btn--prev {
    left: 50px;
  }

  .swiper-btn--next {
    right: 50px;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 24px;
    left: 0;
    width: 100%;
    background: transparent;

    .pagination {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      width: 100%;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 8px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #f5f5f5;
        cursor: pointer;

        &.active {
          background: #ed6c00;
        }
      }
    }
  }

  .no-events {
    pointer-events: none;
  }
}

@media screen and (max-width: 1024px) {
  .swiper-wrapper {
    .swiper-pagination {
      bottom: .12rem;

      .pagination {
        li {
          width: .08rem;
          height: .08rem;
        }
      }
    }
  }
}
</style>
