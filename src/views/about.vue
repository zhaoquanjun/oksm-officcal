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
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="produce-part">
      <div class="logo-area">
        <img :src="logo" alt="" />
      </div>
      <p class="produce-words">
        欧科商贸作为一家服务性企业，在业界树立了良好的信誉；客户的认可，客户的需要，正是我们持久坚持品质与服务的动力；坚持从客户利益出发，最优化的服务，最靠谱的承诺，也是我们能在业界历经十年不断壮大的基础；我们注重客户的原始积累，竭诚的服务于每一位“上帝”，您的认可就是我们最好的宣传
      </p>
    </div>
    <div class="years-part">
      <div class="image">
        <img :src="years" alt="" />
      </div>
      <div class="words">
        <h3 class="title">十年沉淀</h3>
        <p class="desc">2010年，一个幸运的年份，欧科商贸有限公司正式成立；</p>
        <p class="desc">
          从附近散客户的培养到企业级别的合作，欧科商贸历经了十年的风风雨雨；
        </p>
        <p class="desc">
          依托的就是自己过硬的品质，对待用户始终如一的承诺和不遗余力的售后服务，赢取了一批又一批客户的信赖；
        </p>
        <p class="desc">
          针对客户群体，给出最合适的选择，是我们始终如一的承诺；我们的信条：不选最贵，只选最合适；
        </p>
      </div>
    </div>
    <div class="future-part">
      <h3 class="title">期许未来</h3>
      <div class="part1">
        <p class="desc">
          我们已经经历了十个年头，接下来就是对下一个十个年头的期许；
        </p>
      </div>
      <div class="part1">
        <p class="desc">
          希望也坚信，在未来的十年、二十年、五十年，我们与老朋友依旧可以风雨同舟，共同前行；
        </p>
      </div>
      <div class="part1">
        <p class="desc">
          期许着在未来的十年，我们能收获更多的新朋友，结下更多的缘分，相互扶持，走向更好的未来；
        </p>
      </div>
      <div class="part1">
        <p class="desc">
          不久的时间，我们将会在线上同步线下的品类以及服务；为了更好的服务于大家，我们将尽快完善线上功能，完成上线，大家耐心期待；
        </p>
      </div>
    </div>
    <div class="code-area">
      <div class="words">
        <h3 class="title">关注我们</h3>
        <p class="tips">
          为了能更及时的将我们的动态信息推送给您，您可以扫码关注我们的公众号；
        </p>
        <p class="tips">
          我们将实时的在公众号推送我们的最近信息；感谢您的关注；
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
      logo: require("@s/images/home/logo2.png"),
      years: require("@s/images/about/years.png"),
      code: require("@s/images/qrcode.png"),
      carouselList: [
        { src: require("@s/images/about/banner3.png"), title: "电脑/监控" },
        { src: require("@s/images/about/banner1.png"), title: "电脑/监控" },
        { src: require("@s/images/about/banner2.png"), title: "电脑/监控" },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
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

  .produce-part {
    margin: 0 auto;
    padding: 48px 24px;
    max-width: 1200px;
    min-width: 1024px;
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
    }
  }

  .years-part {
    margin: 0 auto;
    padding: 48px 24px;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .image {
      padding-right: 48px;
      width: 500px;
    }

    .words {
      padding: 0 48px;

      .title {
        padding-top: 48px;
        padding-bottom: 16px;
      }
    }
  }

  .future-part {
    padding: 48px 24px;
    background: url("~@s/images/about/future.png") no-repeat center center;
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
