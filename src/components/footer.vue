<template>
  <div class="oksm-footer--section">
    <p class="desc-item">欧科商贸有限公司</p>
    <p class="desc-item"></p>
    <p class="desc-item">版权所有 欧科商贸有限公司 © Copyright 2020 - 2030.欧科商贸 All Rights Reserved</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qrcode: require("@s/images/qrcode.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.oksm-footer--section {
  padding: 24px 48px;
  min-width: 1024px;
  color: #fff;
  text-align: center;
  background-color: rgb(51, 51, 51);

  .desc-item {
    font-size: 12px;
    line-height: 32px;
  }
}
</style>
