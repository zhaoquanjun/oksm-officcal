<template>
  <div class="oksm-home--page min-width">
    <div class="caousel-area">
      <swiper>
        <div
          class="swiper-slider"
          v-for="(item, index) in carousels"
          :key="index"
          :style="{
            background: `url(${item.src}) no-repeat center center`,
            backgroundSize: 'cover',
          }"
        >
          <div class="content-center">
            <h4 class="title-ch ale" data-animate="s-t">{{ item.desc }}</h4>
            <p class="title-es ale" data-animate="s-b">{{ item.edes }}</p>
          </div>
        </div>
      </swiper>
    </div>
    <div class="company-part content-area">
      <div class="image-part ani-flashShine ale" data-animate="s-l">
        <img :src="companyImage" alt />
      </div>
      <div class="desc-part ale" data-animate="s-r">
        <p class="title">公司简介</p>
        <p class="sub-title">COMPANY PROFILE</p>
        <p class="desc">
          张北欧科网络科技有限公司最早成立于2011年，公司一店座落于张北顺达东苑小区南底商18号，2014正式更名为张北欧科商贸有限公司，并于2017年开设二店，二店座落于张北县民政局大门南侧...
        </p>
        <div class="btn" @click="_handleViewAbout">Read more --</div>
      </div>
    </div>
    <div class="full-screen">
      <div class="plate-section goods-part content-area">
        <p class="title">数码类概览</p>
        <p class="desc">公司经营各种电脑、数码、监控等设备</p>
        <ul class="product-list ale" data-animate="list">
          <li
            class="list-item"
            v-for="(item, index) in productList"
            :key="index"
          >
            <div
              class="image-wrapper"
              :style="{
                backgroundImage: `url(${item.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
              }"
            ></div>
            <div class="words-part">
              <p class="product-title">{{ item.title }}</p>
              <p class="product-desc">{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="resolve-part plate-section content-area">
      <p class="title">
        解决方案
        <span class="read-more" @click="_handleViewSolution">READ MORE --</span>
      </p>
      <p class="sub-title">
        立足于每一位客户需求点，规范的流程，最短时间产出最优方案
      </p>
      <ul class="plan-wrapper prev">
        <li v-for="(item, index) in plans.prev" :key="index">
          <div class="plan-item" v-if="item.desc">
            <i class="iconfont" :class="item.icon"></i>
            <p class="desc">{{ item.desc }}</p>
          </div>
          <i
            v-else
            class="iconfont arrow"
            :class="item.arrow"
            :style="{ transform: 'rotate(' + item.deg + 'deg)' }"
          ></i>
        </li>
        <li class="bridge">
          <i
            class="iconfont arrow icon-jiantou1"
            :style="{ transform: 'rotate(' + 80 + 'deg)' }"
          ></i>
        </li>
      </ul>
      <ul class="plan-wrapper next">
        <li v-for="(item, index) in plans.next" :key="index">
          <div class="plan-item" v-if="item.desc">
            <i class="iconfont" :class="item.icon"></i>
            <p class="desc">{{ item.desc }}</p>
          </div>
          <i
            v-else
            class="iconfont arrow"
            :class="item.arrow"
            :style="{ transform: 'rotate(' + item.deg + 'deg)' }"
          ></i>
        </li>
      </ul>
    </div>
    <div class="full-screen">
      <div class="service-area  plate-section content-area">
        <p class="title">经营理念</p>
        <p class="desc">客户至上的理念，是一贯的坚持</p>
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
import Swiper from '@c/swiper'
export default {
  data() {
    return {
      carousels: [
        {
          src: require('@s/images/home/home1.png'),
          title: '电脑，监控，网络工程，机房，线上线下电子产品销售',
          desc: '尽心尽力的服务',
          edes: 'THE DEDICATED SERVICE',
        },
        {
          src: require('@s/images/home/home2.png'),
          title: '电脑，监控，网络工程，机房，线上线下电子产品销售',
          desc: '优秀靠谱的品质',
          edes: 'THE EXCELLENT QUALITY',
        },
        {
          src: require('@s/images/home/home3.png'),
          title: '电脑，监控，网络工程，机房，线上线下电子产品销售',
          desc: '高价值的解决方案',
          edes: 'THE HIGH-VALUE SOLUTIONS',
        },
        {
          src: require('@s/images/home/home4.png'),
          title: '电脑，监控，网络工程，机房，线上线下电子产品销售',
          desc: '值得信赖的选择',
          edes: 'A TRUSTWORTHY CHOICE',
        },
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
      plans: {
        prev: [
          {
            icon: 'icon-ziyuan',
            desc: '需求对接',
          },
          { arrow: 'icon-jiantou1', deg: 0 },
          {
            icon: 'icon-fenxi',
            desc: '需求分析',
          },
          { arrow: 'icon-jiantou1', deg: 0 },
          {
            icon: 'icon-fangan3',
            desc: '制定方案',
          },
        ],
        next: [
          {
            icon: 'icon-weihu1',
            desc: '后期维护',
          },
          { arrow: 'icon-jiantou1', deg: 180 },
          {
            icon: 'icon-yanshou3',
            desc: '交付验收',
          },
          { arrow: 'icon-jiantou1', deg: 180 },
          {
            icon: 'icon-shishi',
            desc: '工程实施',
          },
          { arrow: 'icon-jiantou1', deg: 180 },
          {
            icon: 'icon-jiaofu1',
            desc: '方案交付',
          },
        ],
      },
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
    }
  },
  components: {
    Swiper,
  },
  methods: {
    _handleViewAbout() {
      this.$router.push('/about')
    },
    _handleViewSolution() {
      this.$router.push('/solution')
    },
  },
}
</script>
<style lang="scss" scoped>
.oksm-home--page {
  .full-screen {
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
  }

  .plate-section {
    padding: 120px 24px;

    .title {
      font-size: 40px;
      font-family: 'PingFangSC-Medium, PingFang SC';
      font-weight: 500;
      color: #333333;
      line-height: 45px;
      letter-spacing: 1px;
      text-align: center;
    }
  }

  .caousel-area {
    width: 100%;

    .swiper-slider {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;

      .content-center {
        width: 100%;
        color: #fff;
        text-align: center;

        h4.title-ch {
          width: 100%;
          font-size: 5vw;
        }

        p.title-es {
          width: 100%;
          font-size: 3vw;
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
        margin: 4px;
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

  .goods-part {
    .title {
      text-align: center;
      font-size: 40px;
      font-family: 'PingFangSC-Medium, PingFang SC';
      font-weight: 500;
      color: #333333;
      line-height: 45px;
      letter-spacing: 1px;
    }

    .desc {
      text-align: center;
      color: #999;
    }

    .product-list {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-top: 80px;

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
          height: 14vw;
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
          transform: translate3d(0, -2px, 0) !important;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
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

  .resolve-part {
    .title {
      font-size: 40px;
      font-family: 'PingFangSC-Medium, PingFang SC';
      font-weight: 500;
      color: #333333;
      line-height: 45px;
      letter-spacing: 1px;
      text-align: center;

      .read-more {
        padding-left: 16px;
        font-size: 14px;
        font-weight: normal;
        line-height: 28px;

        &:hover {
          color: #ff6a00;
          cursor: pointer;
        }
      }
    }

    .sub-title {
      padding-top: 16px;
      font-size: 14px;
      color: #999;
      text-align: center;
    }

    .plan-wrapper {
      position: relative;
      margin: 80px auto 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 960px;

      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.25s ease-in-out;

        .plan-item {
          i {
            display: block;
            padding: 32px;
            font-size: 40px;
            color: #666;
            border: 1px solid #d7d8d9;
            border-radius: 50%;
          }

          p.desc {
            font-size: 16px;
            text-align: center;
          }
        }

        i.arrow {
          margin-top: -20px;
          display: block;
          transform-origin: center;
          font-size: 32px;
          color: #999;
        }

        &:hover {
          cursor: pointer;
          transform: translate3d(0, -3px, 0);

          .plan-item {
            i {
              border-color: #ff6a00;
            }
          }

          .desc {
            color: #ff6a00;
          }

          i {
            color: #ff6a00;
          }
        }
      }

      .bridge {
        position: absolute;
        right: 85px;
        top: 135%;
      }
    }

    .next {
      margin-top: 100px;
    }
  }

  .service-area {
    .title {
      font-size: 40px;
      font-family: 'PingFangSC-Medium, PingFang SC';
      font-weight: 500;
      color: #333333;
      line-height: 45px;
      letter-spacing: 1px;
      text-align: center;
    }

    .desc {
      text-align: center;
      color: #999;
    }

    .service-list {
      margin-top: 80px;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-wrap: wrap;

      .list-item {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
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
