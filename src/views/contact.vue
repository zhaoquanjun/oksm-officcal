<template>
  <div class="contact-us--page">
    <div class="map-part">
      <div class="address-words">
        <p class="item"><span class="tii">地址：</span> 河北省张家口市张北县民政局南侧欧科商贸有限公司</p>
        <p class="item"><span class="tii">邮箱：</span> 13373133883@163.com</p>
        <p class="item"><span class="tii">电话：</span> 13373133883</p>
        <p class="item"></p>
      </div>
      <div class="address-map">
        <baidu-map
          class="map"
          :style="{ width: map.width, height: map.height }"
          :zoom="map.zoom"
          center="张北县"
          @ready="handler"
          :scroll-wheel-zoom="true"
        >
          <!--比例尺控件-->
          <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
          <!--缩放控件-->
          <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
        </baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
//百度地图
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmScale from "vue-baidu-map/components/controls/Scale";
import BmNavigation from "vue-baidu-map/components/controls/Navigation";
export default {
  name: "amap-page",
  data() {
    return {
      map: {
        width: 600,
        height: 400,
        zoom: 15,
        locationIcon: "Icon",
        autoLocation: true,
        center: {
          //经纬度
          lng: 39.9,
          lat: 116.3,
        },
      },
    };
  },
  components: {
    BaiduMap,
    BmScale,
    BmNavigation
  },
  methods: {
    handler({ BMap, map }) {
      setTimeout(() => {
        var point = new BMap.Point(114.726326, 41.147114);
        map.centerAndZoom(point, 15);
        var marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        var circle = new BMap.Circle(point, 2, {
          strokeColor: "skyblue",
          strokeWeight: 1,
          strokeOpacity: 1,
          Color: "skyblue",
          fillColor: "#f03",
        });
      });

      // map.addOverlay(circle)
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-us--page {
  padding-top: 88px;
  .map-part {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 48px 24px;
    max-width: 1200px;

    .address-part .el-vue-amap-container {
      width: 100%;
    }

    .address-words {
      margin-right: 32px;
      width: 400px;
      line-height: 28px;
      font-weight: 500;
      color: #666;
    }

    .address-map {
      width: 600px;
      height: 400px;

      .map {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
