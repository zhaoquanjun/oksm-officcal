<template>
  <div class="contact-us--page">
    <div class="image-space"></div>
    <div class="contact-area content-area">
      <h4 class="title">联系我们</h4>
      <p class="e-title">CONTACT US</p>
      <p class="desc">
        如果您有我们能力范围内的需求，或者合作的意向，请您随时联系，我们随时恭候
      </p>
    </div>
    <div class="map-part content-area">
      <div class="contact-ways">
        <p class="title">欧科网络科技有限公司</p>
        <p class="desc">欧科网络科技有限公司是集电脑销售、监控安防、电信服务、网络安装、软硬件维修、数据处理的一体化公司...</p>
        <p class="pad-t">地址：河北省张家口市张北县民政局南侧欧科网络科技有限公司</p>
        <p>QQ：113128998 | 155313275</p>
        <p>电话：13373133883</p>
        <p>邮箱：113128998@qq.com</p>
      </div>
      <div class="address-map" id="map"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'amap-page',
  data() {
    return {
      map: null,
      doorPhoto: require('@s/images/about/store2.jpeg'),
    }
  },
  created() {
    this._loadScript()
  },
  methods: {
    /**
     * @name 引入地图sdk
     */
    _loadScript() {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src =
        'https://map.qq.com/api/gljs?v=1.exp&key=VAYBZ-KYL6G-2SKQ5-ISX4Q-CNAAV-AQBON&callback=init'
      document.body.appendChild(script)
      script.addEventListener('load', () => {
        this._initMap()
      })
    },
    /**
     * @name 初始化地图控件
     */
    _initMap() {
      const center = new TMap.LatLng(41.140625, 114.720032)
      //定义map变量，调用 TMap.Map() 构造函数创建地图
      this.map = new TMap.Map(document.getElementById('map'), {
        center: center, //设置地图中心点坐标
        zoom: 18, //设置地图缩放级别
        viewMode: '2D', // 视角类型
        pitch: 43.5, //设置俯仰角
        rotation: 45, //设置地图旋转角度
      })
      this._initlawyer()
    },
    /**
     * @name 创建点标记
     */
    _initlawyer() {
      //创建并初始化MultiMarker
      const map = this.map
      const markerLayer = new TMap.MultiMarker({
        map: map, //指定地图容器
        id: 'marker-layer', //图层id
        styles: {
          //点标注的相关样式
          marker: new TMap.MarkerStyle({
            width: 14,
            height: 24,
            anchor: { x: 16, y: 32 },
          }),
        },
        //点标记数据数组
        geometries: [
          {
            id: 'companyPosition', //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
            styleId: 'myStyle', //指定样式id
            position: new TMap.LatLng(41.140625, 114.720032), //点标记坐标位置
            properties: {
              //自定义属性
              title: '欧科网络科技有限公司',
            },
          },
        ],
      })
      this._handSetLocationInfo()
      markerLayer.on('click', this._handleClickMarker)
    },
    /**
     * @name 点击点标记事件
     */
    _handleClickMarker() {
      this._handSetLocationInfo()
    },
    /**
     * @name 创建信息窗口
     */
    _handSetLocationInfo() {
      const infoWindowLocation = new TMap.LatLng(41.140625, 114.720032) //创建一个坐标
      //创建InfoWindow实例，并进行初始化
      const map = this.map
      const infoWindow = new TMap.InfoWindow({
        map: map,
        position: infoWindowLocation,
        //设置infoWindow，content支持直接传入html代码，以实现各类内容格式需求
        content: `<div style="width: 140px;"><img src='${this.doorPhoto}'><p>欧科网络科技有限公司</p></div>`,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.contact-us--page {
  .image-space {
    margin-bottom: 48px;
    height: 460px;
    width: 100%;
    background: url('~@s/images/contact/contact_space.png') no-repeat center center;
  }

  .contact-area {
    .title {
      text-align: center;
    }

    .e-title {
      padding-top: 8px;
      font-size: 14px;
      color: #999;
      text-align: center;
    }

    .desc {
      text-align: center;
    }
  }

  .map-part {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 48px 0;

    .contact-ways {
      padding-right: 80px;
      width: 600px;

      p {
        line-height: 32px;
      }

      .pad-t {
        padding-top: 16px;
      }
    }

    .address-map {
      width: calc(100% - 600px);
      height: 400px;
    }
  }
}
</style>
