<template>
  <div class="oksm-footer--section">
    <!-- <p class="desc-item">欧科网络科技有限公司</p> -->
    <p class="desc-item" v-if="equ == 'pc'">
      <a
        class="item"
        href="http://beian.miit.gov.cn"
        target="_blank"
        rel="noopener noreferrer"
        >冀ICP备2020030669号-1</a
      ><span class="divider">|</span>
      <a
        class="item"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13072202000052"
        target="_blank"
        ><img src="@s/images/ga.png" alt="" />
        <p>冀公网安备 13072202000052号</p></a
      >
    </p>
    <p class="desc-item" v-if="equ == 'pc'">
      版权所有 欧科网络科技有限公司 © Copyright 2020 - 2030 All Rights
      Reserved
    </p>
    <p class="desc-item" v-else>
      版权所有 欧科网络科技有限公司<br> © Copyright 2020 - 2030 All Rights
      Reserved
    </p>
    <p class="desc-item" v-if="equ == 'mobile'">
      <a
        class="item"
        href="http://beian.miit.gov.cn"
        target="_blank"
        rel="noopener noreferrer"
        >冀ICP备2020030669号-1</a
      ><span class="divider">|</span>
      <a
        class="item"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13072202000052"
        target="_blank"
        ><img src="@s/images/ga.png" alt="" />
        <p>冀公网安备 13072202000052号</p></a
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equ: 'pc'
    }
  },
  created() {
    this.equ = localStorage.getItem('equ') || 'pc'
  }
}
</script>

<style lang="scss" scoped>
.oksm-footer--section {
  padding: 24px 48px;
  color: #fff;
  text-align: center;
  background-color: rgb(51, 51, 51);

  .desc-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 32px;

    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #fff;
      text-decoration: none;

      img {
        margin-right: 4px;
        width: 14px;
      }
    }

    .divider {
      margin: 0 16px;
      color: #ccc;
    }
  }
}

@media screen and (max-width: 1024px) {
  .oksm-footer--section {
    padding: .12rem .1rem;

    .desc-item {
      flex-wrap: wrap;
      font-size: .1rem;
      line-height: .21rem;

      a {
        img {
          margin-right: .04rem;
        }
      }

      .divider {
        margin: 0 .08rem;
      }
    }
  }
}
</style>
