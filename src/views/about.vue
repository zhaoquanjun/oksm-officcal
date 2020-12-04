<template>
  <div class="oksm-about--page">
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
          ></div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="introduce-part content-area">
      <div class="logo-area">
        <img :src="logo" alt="" />
      </div>
      <p class="produce-words ale" data-animate="s-l">
        张北欧科网络科技有限公司最早成立于2011年，公司一店座落于张北顺达东苑小区南底商18号，2014正式更名为张北欧科商贸有限公司，并于2017年开设二店，二店座落于张北县民政局大门南侧。随着规模的不断扩大与业务种类的增多，于2020年3月20日正式更名为张北欧科网络科技有限公司，公司是集电脑销售、监控安防、电信服务、网络安装、软硬件维修、数据处理的一体化公司。经过将近10年的努力与发展，已具一定的规模与实力。
        在为用户创造更多价值的同时，张北欧科商贸有限公司更是致力于为不同群体的用户提供更高的应用需求。极力的推动新产品普及及公司的发展步伐。在品牌的规划及产品导入中，张北欧科网络科技有限公司不断的注入新的元素。通过不断努力与积累，我公司正逐步向全方位发展专业化IT公司努力。
      </p>
      <p class="produce-words ale" data-animate="s-r">
        在为用户提供高性价比产品的同时，更注重于为用户提供全心全意的服务，把客户当成我们的朋友。我公司拥有一支强有力的技术服务和销售团体，兢兢业业，勇于创新，抱着与各个厂家和商家团结、合作、开拓、发展的经营宗旨，注重信誉，强调服务，以忘我的敬业精神和精湛的技术为用户提供服务，立志成为本地首屈一指的专业化IT公司。
        诚信为本、质量为先、精益求精、客户至上！我们一直追求能让您满意的产品品质和服务。我们相信有您的支持我们会做的更好。
      </p>
    </div>
    <div class="microcosm-area content-area">
      <div class="name-area">
        <p class="tit">店铺缩影</p>
      </div>
      <div class="image-list">
        <div class="t-image">
          <div class="l-t--image ani-flashCircle">
            <img :src="storeList[0].src" :alt="storeList[0].title" />
          </div>
          <ul class="r-t--image">
            <li class="ani-flashCircle">
              <img :src="storeList[1].src" :alt="storeList[1].title" />
            </li>
            <li class="ani-flashCircle">
              <img :src="storeList[2].src" :alt="storeList[2].title" />
            </li>
          </ul>
        </div>
        <ul class="b-image">
          <li
            v-for="(item, index) in storeList.slice(3)"
            :key="index"
            class="ani-flashCircle"
          >
            <img :src="item.src" :alt="item.title" />
          </li>
        </ul>
      </div>
    </div>

    <div class="future-part">
      <h3 class="title">期许未来</h3>
      <div class="part1 ale" data-animate="s-l">
        <p class="desc">
          我们已经走过了一个十年，接下来就是对下一个十年的期许；
        </p>
      </div>
      <div class="part1 ale" data-animate="s-r">
        <p class="desc">
          期许着在未来的十年，我们与老朋友依旧可以风雨同舟，共同前行；
        </p>
      </div>
      <div class="part1 ale" data-animate="s-l">
        <p class="desc">
          也坚信，不管是十年、二十年、五十年，我们会结下更多的缘分，相互扶持，走向更好的未来；
        </p>
      </div>
      <div class="part1 ale" data-animate="s-r">
        <p class="desc">
          不久的时间，我们将会在线上同步线下的品类以及服务；为了更好的服务于大家，我们将尽快完善线上功能，完成上线，大家耐心期待；
        </p>
      </div>
    </div>
    <div class="code-area content-area">
      <div class="words">
        <h3 class="title">关注我们</h3>
        <p class="tips">
          为了能更及时的将我们的动态信息推送给您，您可以扫码关注我们的公众号；
        </p>
        <p class="tips">
          我们将实时的在公众号推送我们的最新产品以及优惠活动；
        </p>
        <p class="tips">
          感谢您的关注；
        </p>
      </div>
      <div class="code">
        <img :src="code" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require('@s/images/home/logo2.png'),
      code: require('@s/images/about/qrcode.png'),
      carouselList: [
        { src: require('@s/images/about/about1.png'), title: '电脑/监控' },
        { src: require('@s/images/about/about2.png'), title: '电脑/监控' },
        { src: require('@s/images/about/about3.png'), title: '电脑/监控' },
        { src: require('@s/images/about/about4.png'), title: '电脑/监控' },
      ],
      storeList: [
        { src: require('@s/images/about/store1.jpeg'), title: '电脑/监控' },
        { src: require('@s/images/about/store2.jpeg'), title: '电脑/监控' },
        { src: require('@s/images/about/store3.jpeg'), title: '电脑/监控' },
        { src: require('@s/images/about/store4.jpeg'), title: '电脑/监控' },
        { src: require('@s/images/about/store5.jpeg'), title: '电脑/监控' },
        { src: require('@s/images/about/store6.jpeg'), title: '电脑/监控' },
      ],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true, // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true, // 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.oksm-about--page {
  min-width: 1024px;

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
        }
      }
    }
  }

  .introduce-part {
    margin: 0 auto;
    padding: 48px 24px;
    .logo-area {
      width: 300px;

      img {
        width: 100%;
      }
    }

    .produce-words {
      padding-top: 32px;
      font-size: 14px;
      color: #666;
      line-height: 30px;
      text-indent: 30px;
    }
  }

  .microcosm-area {
    padding: 0 24px 48px;

    .name-area {
      padding: 24px 0;
      height: 100%;

      .tit {
        font-size: 24px;
        font-weight: 500;
      }
    }

    .image-list {
      .t-image {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        .l-t--image {
          width: 66.6%;

          img {
            width: 100%;
          }
        }

        .r-t--image {
          width: 33.3%;

          li {
            width: 100%;

            img {
              width: 100%;
            }
          }
        }
      }

      .b-image {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        li {
          width: 33.3%;

          img {
            width: 100%;
          }
        }
      }

      img {
        display: block;
        border: 2px solid #f5f5f5;
        background-size: cover;
      }

      .ani-flashCircle {
        position: relative;
        overflow: hidden;

        &::before {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 2;
          display: block;
          content: '';
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 100%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          opacity: 0;
        }

        &:hover::before {
          animation: circle 1s;
        }

        @keyframes circle {
          0% {
            opacity: 1;
          }
          40% {
            opacity: 1;
          }
          100% {
            width: 200%;
            height: 200%;
            opacity: 0;
          }
        }
      }
    }
  }

  .future-part {
    padding: 48px 24px;
    background: url('~@s/images/about/future.png') no-repeat center center;
    background-size: cover;
    height: 50vw;

    .title {
      padding-top: 32px;
      padding-bottom: 16px;
      text-align: center;
    }

    .desc {
      text-align: center;
    }
  }

  .code-area {
    padding: 48px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 900px;

    .words {
      padding: 0 48px;
      width: 580px;

      .title {
        padding-bottom: 16px;
        text-align: center;
      }

      .tips {
        text-align: center;
        line-height: 32px;
      }
    }

    .code {
      padding-top: 16px;
      width: 280px;
      text-align: center;

      img {
        width: 100%;
      }
    }
  }
}
</style>
