<template>
  <div class="oksm-home--page">
    <div class="banner-area">
      <div class="banner-inner content-area">
        <div class="slogan ale" data-animate="s-t">
          <h5 class="title">OUKEWL</h5>
          <p class="desc" v-if="equ == 'pc'">
            集电脑销售、监控安防、电信服务、<br />网络安装、软硬件维修、数据处理等一体化服务
          </p>
          <p class="desc" v-if="equ == 'mobile'">
            电脑、监控、电信、网络、软硬件维修、数据处理等一体化服务
          </p>
        </div>
        <div class="image-area ale" data-animate="s-b">
          <ul class="decoration">
            <li class="decor1"></li>
            <li class="decor2"></li>
          </ul>
          <div class="logo">
            <img src="@s/images/home/banner_logo.png" alt="" />
          </div>
        </div>
      </div>
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
        <span class="read-more" @click="_handleViewSolution" v-if="equ == 'pc'"
          >READ MORE --</span
        >
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
import utils from '@u/utils'
export default {
  data() {
    return {
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
          desc: '历经风雨，留下真诚',
          color: '#409EFF',
        },
        { title: '靠谱的品质', desc: '优质货源，精致商品', color: '#E6A23C' },
        {
          title: '诱人的性价比',
          desc: '量身打造般的选择',
          color: '#F56C6C',
        },
        {
          title: '优质的服务',
          desc: '给予最周到的服务',
          color: '#67C23A',
        },
      ],
      companyImage: require('@s/images/home/company.png'),
      equ: 'pc'
    }
  },
  created() {
    this.equ = utils.getCurrentEquType()
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
    padding-top: 120px;
    padding-bottom: 120px;

    .title {
      font-size: 40px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 45px;
      letter-spacing: 1px;
      text-align: center;
    }
  }

  .banner-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 578px;
    background: url('~@s/images/home/banner_bg.png') no-repeat center center;
    background-size: cover;

    .banner-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      transform: translateY(25px);

      .slogan {
        width: 441px;

        .title {
          font-size: 50px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #fff;
          line-height: 70px;
          letter-spacing: 3px;
          white-space: nowrap;
          text-shadow: 0 2px 4px #e26400;
        }

        .desc {
          margin-top: 24px;
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #fff;
          line-height: 32px;
          letter-spacing: 3px;
          text-shadow: 0 2px 4px #e96700;
        }
      }

      .image-area {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 600px;

        .decoration {
          width: 180px;
          height: 342px;

          li.decor1 {
            margin-top: 60px;
            margin-left: 80px;
            width: 60px;
            height: 60px;
            background-color: #fc9e35;
            border-radius: 10px;
          }

          li.decor2 {
            margin-top: 80px;
            margin-left: 20px;
            width: 90px;
            height: 90px;
            background-color: #fcb067;
            border-radius: 16px;
          }
        }

        .logo {
          background-color: #fff;
          border-radius: 30px;
          box-shadow: 0 2px 10px rgba(252, 158, 53, 0.5);

          img {
            padding: 70px 90px;
            width: 420px;
          }
        }
      }
    }
  }

  .company-part {
    padding-top: 48px;
    padding-bottom: 48px;
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
        padding: 8px 12px;
        width: 100%;
        text-align: center;
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
      font-family: PingFangSC-Medium, PingFang SC;
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
            transform: translate(-50%, -50%);
            width: 100%;
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
      font-family: PingFangSC-Medium, PingFang SC;
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
      font-family: PingFangSC-Medium, PingFang SC;
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

@media screen and (max-width: 1024px) {
  .oksm-home--page {
    .banner-area {
      height: 2.5rem;

      .banner-inner {
        width: 100%;

        .slogan {
          margin-top: -0.1rem;
          margin-right: 0.12rem;
          max-width: 1.6rem;

          .title {
            font-size: 0.2rem;
            line-height: 0.32rem;
          }

          .desc {
            margin-top: 0;
            font-size: 0.1rem;
            line-height: 0.17rem;
          }
        }

        .image-area {
          width: 1.7rem;

          .decoration {
            width: 0.4rem;
            height: 1rem;

            li.decor1 {
              margin-top: 0.1rem;
              margin-left: 0.08rem;
              width: 0.2rem;
              height: 0.2rem;
              border-radius: 0.04rem;
            }

            li.decor2 {
              margin-top: 0.3rem;
              margin-left: 0;
              width: 0.3rem;
              height: 0.3rem;
              border-radius: 0.06rem;
            }
          }

          .logo {
            border-radius: 0.12rem;

            img {
              padding: 0.1rem 0.16rem;
              width: 1.3rem;
            }
          }
        }
      }
    }

    .company-part {
      flex-wrap: wrap;
      .image-part {
        width: 100%;
      }

      .desc-part {
        margin-top: 0.1rem;
        padding: 0;
        width: 100%;

        .title {
          font-size: 0.2rem;
          line-height: .32rem;
        }

        .sub-title {
          margin: 0;
          font-size: .14rem;
          line-height: .21rem;
        }

        .desc {
          margin-top: 0.08rem;
          font-size: .1rem;
          line-height: .21rem;
        }

        .btn {
          margin-top: 0.2rem;
          font-size: .12rem;
          border-radius: .02rem;
        }
      }
    }

    .full-screen {
      .goods-part {
        padding-top: 0.48rem;
        padding-bottom: 0.36rem;

        .title {
          font-size: 0.3rem;
          line-height: 0.36rem;
        }

        .desc {
          margin-top: 0.08rem;
          font-size: .14rem;
          line-height: .21rem;
        }

        .product-list {
          margin-top: 0.36rem;

          li {
            margin-bottom: 0.08rem;
            margin-left: 3%;
            width: 48%;

            .image-wrapper {
              min-height: 1.2rem;
            }

            .words-part {
              padding-top: 0.08rem;

              .product-title {
                font-size: .14rem;
                line-height: .3rem;
              }

              .product-desc {
                font-size: .12rem;
                line-height: .21rem;
              }
            }
          }

          li:nth-child(2n + 1) {
            margin-left: 0;
          }
        }
      }
    }

    .resolve-part {
      padding-top: 0.48rem;
      padding-bottom: 0.36rem;

      .title {
        font-size: 0.3rem;
        line-height: 0.36rem;
      }

      .sub-title {
        margin: 0 auto;
        width: 85%;
        font-size: 0.14rem;
        line-height: 0.21rem;
        text-align: center;
      }

      .plan-wrapper {
        margin-top: 0.36rem;
        width: 100%;

        li {
          .plan-item {
            i {
              width: 32px;
              height: 32px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0.12rem;
              font-size: 0.24rem;
              box-sizing: content-box;
            }

            p.desc {
              margin-top: .08rem;
              font-size: .12rem;
            }
          }

          i.arrow {
            margin-top: -.3rem;
            font-size: .2rem;
          }
        }

        li.bridge {
          right: .28rem;
        }
      }
    }

    .full-screen {
      .service-area {
        padding-top: .48rem;
        padding-bottom: .36rem;

        .title {
          font-size: .3rem;
          line-height: .36rem;
        }

        .desc {
          margin-top: .08rem;
          font-size: .14rem;
          line-height: .21rem;
        }

        .service-list {
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: .36rem;

          .list-item {
            margin-bottom: .2rem;
            width: 40vw;
            height: 40vw;
            max-width: 200px;
            max-height: 200px;

            .tit {
              font-size: .16rem;
            }

            .des {
              font-size: .12rem;
              line-height: .21rem;
            }
          }
        }
      }
    }
  }
}
</style>
