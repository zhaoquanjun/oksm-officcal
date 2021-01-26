<template>
  <div class="recruiting-page">
    <div class="banner-area"></div>

    <div class="content-wrapper">
      <div class="content-inner content-area">
        <h4 class="title">岗位列表</h4>
        <ul class="list">
          <li class="item" v-for="(item, index) in jobs" :key="index" @click="_handleViewJobDetail(item)">
            <p class="name">{{ item.label }}</p>
            <div class="detail">详情 >>></div>
            <div class="prefix">
              <div class="main">{{ item.type }}</div>
              <div class="sub"></div>
            </div>
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
      jobs: [
        {
          label: '题目录入员',
          value: 1,
          type: '全职/兼职',
          desc: '河北省张家口市张北县 · 有从业经验优先 · 专科/本科及以上',
          welfare: ['不打卡', '可兼职', '技能培训', '工资月结', '按量计费'],
          salary: '面议',
          responsibilities: [
            '1. 培训后可独立完成题目录入工作',
            '2. 细心好学，快速适应工作性质，学习工作技能，高效完成工作',
            '3. 认真负责，提交之前完成自审，避免提交错误题目',
            '4. 遵守公司规章制度，完成好本职工作'
          ], // 岗位职责
          specification: [
            '1. 有计算机基础，熟练使用office等办公软件',
            '2. 专科、本科及以上学历',
            '3. 要求本市人员（河北省张家口市、河北省张家口市张北县）',
            '4. 全职人员公司提供工作场所以及电脑等，兼职人员需自备',
            '5. 学习知识快，电脑操作熟练，可短时间培训后独立完成工作任务',
            '6. 全职按时打卡上班，兼职人员自由安排时间；要求题量充足的情况下，完成数量不少于最小量限制（不养闲人浪费资源）',
            '7. 细心负责，认真完成每一道题目，避免错误提交，影响绩效'
          ] // 任职要求
        },
        {
          label: '店内售货/维修员',
          value: 2,
          type: '全职',
          desc: '河北省张家口市张北县 · 有从业经验优先 · 专科/本科及以上',
          welfare: ['不打卡', '技能培训', '工资月结', '灵活请假'],
          salary: '面议',
          responsibilities: [
            '1. 接待来店客户，沟通客户需求，引导客户完成产品购买或者工程咨询',
            '2. 熟练使用电脑打印机等，可以完成常规的复印打印工作',
            '3. 熟悉PS等图像处理工具，可完成简单的抠图、P图等工作',
            '4. 熟悉电脑硬件机理，可完成台式、笔记本的基础维修',
            '5. 细心负责，帮忙完成店铺常规理货等工作',
            '6. 出入清晰，做好进出账目的记录'
          ], // 岗位职责
          specification: [
            '1. 有计算机、监控等方面的基础优先',
            '2. 计算机相关专业优先',
            '3. 专科、本科及以上学历者优先',
            '4. 能独立完成基础的电脑故障判断以及维修，有从业经验者优先',
            '5. 按时上下班，不无故迟到早退',
            '6. 沟通能力好，待人热情，耐心好者优先'
          ] // 任职要求
        },
      ],
    }
  },
  methods: {
    _handleViewJobDetail(item) {
      localStorage.setItem('job', JSON.stringify(item))
      this.$router.push('/detail')
    }
  }
}
</script>

<style lang="scss" scoped>
.recruiting-page {
  text-align: center;

  .banner-area {
    width: 100%;
    height: 500px;
    background: url('~@s/images/recruiting/recruiting.png') no-repeat center
      center;
    background-size: cover;
  }

  .content-wrapper {
    padding: 80px 0 64px;
    background-color: #f5f5f5;

    .title {
      font-size: 22px;
      color: #333;
      line-height: 22px;
      text-align: left;
    }

    .list {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 64px;

      li {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(50% - 24px);
        padding: 60px 24px 24px;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        transition: all .2s ease-in-out;

        .name {
          font-size: 18px;
          color: #333;
          line-height: 24px;
        }

        .detail {
          font-size: 14px;
          color: #666;
          line-height: 20px;
        }

        .prefix {
          position: absolute;
          top: -20px;
          left: -25px;
          width: 100%;
          background-color: transparent;

          .main {
            width: 180px;
            height: 46px;
            text-align: center;
            line-height: 46px;
            font-size: 18px;
            color: #fff;
            background-color: #c5a359;
          }

          .sub {
            margin-left: 1px;
            margin-top: -3px;
            width: 0;
            height: 0;
            border-left: 17px solid transparent;
            border-right: 17px solid transparent;
            border-bottom: 17px solid #ab8940;
            transform: rotate(45deg);
          }
        }

        &:hover {
          cursor: pointer;
          transform: translate3d(0, -2px, 10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05)
        }
      }
    }
  }
}
</style>
