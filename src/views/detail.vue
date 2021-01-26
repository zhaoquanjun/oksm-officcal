<template>
  <div class="recruiting-page">
    <div class="banner-area">
      <div class="banner-content content-area">
        <p class="status">最新</p>
        <h4 class="job">
          {{ jobs.label }} <span class="salary-range">{{ jobs.salary }}</span>
        </h4>
        <p class="desc">{{ jobs.desc }}</p>
        <ul class="welfare-list">
          <li class="item" v-for="(item, index) in jobs.welfare" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="content-inner content-area">
        <h3 class="content-title">职位描述</h3>
        <p class="tit">岗位要求：</p>
        <p class="text" v-for="(item, index ) in jobs.specification" :key="index + Math.random()">{{ item }}；</p>
        <p class="tit">岗位职责：</p>
        <p class="text" v-for="(item, index ) in jobs.responsibilities" :key="index + Math.random()">{{ item }}；</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: {
        label: '',
        value: 1,
        type: '',
        desc: '',
        welfare: [],
        salary: '',
        experience: '',
        responsibilities: [], // 岗位职责
        specification: [], // 任职要求
      },
    }
  },
  created() {
    this.jobs = JSON.parse(localStorage.getItem('job'))
  },
}
</script>

<style lang="scss" scoped>
.recruiting-page {
  text-align: center;

  .banner-area {
    padding: 24px 0;
    width: 100%;
    background: url('~@s/images/recruiting/detail-bg.jpg') no-repeat center
      center;
    background-size: cover;
    text-align: left;

    .status {
      margin-top: 80px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
      line-height: 20px;
      text-align: left;
    }

    .job {
      font-size: 32px;
      line-height: 45px;
      padding: 11px 0 8px;
      color: #fff;

      .salary-range {
        padding-left: 16px;
        color: #fa6a43;
        height: 42px;
        font-size: 30px;
        line-height: 42px;
        font-weight: 600;
      }
    }

    .desc {
      margin-top: 0;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 10px;
    }

    .welfare-list {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 8px;

      li {
        padding: 0 15px;
        margin-right: 10px;
        margin-bottom: 10px;
        border: 1px solid #5ed5c8;
        color: #5ed5c8;
        height: 23px;
        line-height: 23px;
        border-radius: 13px;
      }
    }
  }

  .content-wrapper {
    padding: 80px 0 64px;
    background-color: #f5f5f5; // #f6f6f8

    .content-title {
      padding: 0 0 10px 0;
      font-size: 15px;
      text-align: left;
      font-weight: 700;
      color: #424a5e;
      line-height: 50px;
      margin-bottom: 0;
      background: url('~@s/images/recruiting/line-sec.png') 0 45px no-repeat;
    }

    .tit, .text {
      color: #61687c;
      font-size: 14px;
      text-align: left;
      line-height: 36px;
    }
  }
}
</style>
