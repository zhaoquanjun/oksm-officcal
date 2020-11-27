<template>
  <div class="oksm-home--page min-width">
    <div class="caousel-area" id="carousel">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in carouselList" :key="index">
          <div
            class="carousel-inner"
            :style="{
              backgroundImage: `url(${item.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
            }"
          >
            <template>
              <p class="inner-title" :class="{ show: hasReady }">
                {{ item.cdes }}
              </p>
              <p class="inner-desc" :class="{ show: hasReady }">
                {{ item.edes }}
              </p>
            </template>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="content-area">
      <div class="company-part animate-ele">
        <div class="image-part ani-flashShine">
          <img :src="companyImage" alt />
        </div>
        <div class="desc-part">
          <p class="title">公司简介</p>
          <p class="sub-title">COMPANY PROFILE</p>
          <p class="desc">
            张北欧科网络科技有限公司最早成立于2011年，公司一店座落于张北顺达东苑小区南底商18号，2014正式更名为张北欧科商贸有限公司，并于2017年开设二店，二店座落于张北县民政局大门南侧...
          </p>
          <div class="btn" @click="_handleViewAbout">Read more --</div>
        </div>
      </div>
      <div class="plate-section buiness-range animate-ele" animate="fade">
        <p class="title">经营品类概览</p>
        <ul class="product-list">
          <li v-for="(item, index) in productList" :key="index">
            <div
              class="image-wrapper"
              :style="{
                backgroundImage: `url(${item.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
              }"
            >
            </div>
            <div class="words-part">
              <p class="product-title">{{ item.title }}</p>
              <p class="product-desc">{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="plate-section service-area animate-ele">
        <p class="title">经营理念</p>
        <ul class="service-list">
          <li
            class="list-item"
            v-for="(item, index) in serviceList"
            :key="index"
            :style="{ backgroundColor: item.color }"
          >
            <p class="tit">{{ item.title }}</p>
            <p class="des">{{ item.desc }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carouselList: [
        { src: require('@s/images/home/banner1.png'), title: '电脑/监控', cdes: '尽心尽力的服务', edes: 'THE DEDICATED SERVICE' },
        { src: require('@s/images/home/banner2.png'), title: '电脑/监控', cdes: '值得信赖的选择', edes: 'A TRUSTWORTHY CHOICE' },
      ],
      productList: [
        {
          title: '笔记本',
          desc: '各品牌笔记本电脑',
          src: require('@s/images/home/mac.png'),
        },
        {
          title: '台式机',
          desc: '各品牌台式电脑',
          src: require('@s/images/home/pc.png'),
        },
        {
          title: 'iPad',
          desc: '各品牌平板电脑',
          src: require('@s/images/home/ipad.png'),
        },
        {
          title: '监控设备',
          desc: '高清数字监控设备',
          src: require('@s/images/home/monitoring.png'),
        },
        {
          title: '充电器',
          desc: '电脑配件',
          src: require('@s/images/home/pc_charger.png'),
        },
        {
          title: '显卡',
          desc: '电脑配件',
          src: require('@s/images/home/graphics_card.png'),
        },
        {
          title: '电源',
          desc: '电脑配件',
          src: require('@s/images/home/power.png'),
        },
        {
          title: '手机配件',
          desc: '各品牌手机数据线',
          src: require('@s/images/home/cable.png'),
        },
      ],
      serviceList: [
        {
          title: '时间的沉淀',
          desc: '历经时间风雨，留下了真诚',
          color: '#409EFF',
        },
        { title: '靠谱的品质', desc: '优质货源，精致商品', color: '#E6A23C' },
        {
          title: '诱人的性价比',
          desc: '不选最贵，只选最适合',
          color: '#F56C6C',
        },
        {
          title: '优质的服务',
          desc: '尽最大努力，给每一位用户最优质的服务',
          color: '#67C23A',
        },
      ],
      companyImage: require('@s/images/home/company.png'),
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
      hasReady: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.hasReady = true
    })
  },
  methods: {
    _handleViewAbout() {
      this.$router.push('/about')
    },
  },
}
</script>
<style lang="scss" scoped>
.oksm-home--page {
  .plate-section {
    padding: 48px 24px;

    .title {
      font-size: 20px;
      font-weight: 400;
      color: #666;
    }
  }

  .caousel-area {
    width: 100%;

    .swiper-wrapper {
      .swiper-slide {
        .carousel-inner {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          flex-wrap: wrap;
          width: 100%;
          height: 50vw;

          .inner-title {
            font-size: 6vw;
            font-weight: bold;
            color: #fff;
            text-align: center;
            width: 100%;
            opacity: 0;
            transform: translateY(-100%);
            transition: all 1s ease-in-out;
          }

          .inner-desc {
            font-size: 4vw;
            font-weight: bold;
            color: #fff;
            text-align: center;
            width: 100%;
            opacity: 0;
            transform: translateY(100%);
            transition: all 1s ease-in-out;
          }

          .show {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }
  }

  .company-part {
    padding: 48px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .image-part,
    .desc-part {
      width: 50%;

      .sub-title {
        text-align: left;
      }

      .btn {
        margin-top: 32px;
      }
    }

    .image-part {
      overflow: hidden;
      cursor: pointer;
    }

    .ani-flashShine {
      position: relative;

      &::before {
        position: absolute;
        top: 0;
        left: -75%;
        z-index: 2;
        display: block;
        content: '';
        width: 50%;
        height: 100%;
        background: -webkit-linear-gradient(
          left,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.3) 100%
        );
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.3) 100%
        );
        -webkit-transform: skewX(-25deg);
        transform: skewX(-25deg);
      }

      &:hover::before {
        animation: shine 0.75s;
      }

      @keyframes shine {
        100% {
          left: 125%;
        }
      }
    }

    .desc-part {
      padding: 0 48px;
    }
  }

  .buiness-range {
    padding: 48px 24px;
    background-color: #f5f5f5;

    .title {
      text-align: center;
    }

    .product-list {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-top: 32px;

      li {
        margin-left: 2%;
        margin-bottom: 16px;
        padding-bottom: 24px;
        width: 23.5%;
        max-width: 380px;
        background-color: #fff;
        border-radius: 1px;
        transition: all 0.25s ease-in-out;

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 13vw;
          min-height: 155px;
          overflow: hidden;

          img {
            position: absolute;
            left: 50%;
            top: 50%;
            // top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            // height: 100%;
          }
        }

        .words-part {
          padding-top: 16px;

          .product-title {
            font-size: 14px;
            color: #666;
            text-align: center;
            line-height: 30px;
          }

          .product-desc {
            font-size: 12px;
            color: #999;
            text-align: center;
            line-height: 21px;
          }
        }

        &:hover {
          transform: translate3d(0, -2px, 0);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
      }

      li:first-of-type {
        margin-left: 0;
      }

      li:nth-child(5n) {
        margin-left: 0;
      }
    }
  }

  .service-area {
    .title {
      text-align: center;
    }

    .service-list {
      margin-top: 32px;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-wrap: wrap;

      .list-item {
        margin-bottom: 16px;
        padding: 60px 24px;
        border-radius: 12px;
        color: #fff;
        text-align: center;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        transition: all 0.35s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }

        .tit {
          font-size: 18px;
          font-weight: 500;
        }

        .des {
          padding-top: 14px;
          color: #eee;
        }
      }
    }
  }
}
</style>
