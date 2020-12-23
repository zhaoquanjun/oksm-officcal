<template>
  <div class="solution-page">
    <div class="banner-area"></div>

    <!-- <div class="produce">
      <p class="produce-words">
        我们立志于解决所有客户的合理需求，用最优质的方案，最贴心的服务反馈给信赖我们的客户群体
      </p>
      <p class="produce-words">
        我们的合作从我们的认识开始；规范的流程、及时的沟通、实地的考察、快速的方案制定交付、有保障的后期维护，是我们至始至终的承诺
      </p>
      <p class="produce-words">
        我们的服务范围不局限于客户资质，不论您是大规模的企业，还是小规模的个体需求，又或者是私人诉求，我们都一视同仁，给予您力所能及的服务
      </p>
    </div> -->
    <h3 class="title">解决方案</h3>
    <p class="sub-title">PLAN</p>
    <ul class="resolve-wrapper content-area">
      <li class="step">
        <div class="words-area">
          <h4 class="tit">需求对接</h4>
          <p class="sub-title">DEMAND DOCKING</p>
          <p class="desc">
            您可以通过电话、微信、QQ等线上方式或者直接到我们营业点这两种方式与我们取得联系，描述您的需求，我们会在当下给出您解决方向，以确认是否进一步合作
          </p>
        </div>
        <div class="image-area">
          <img src="@s/images/solution/step1.png" alt="" />
        </div>
      </li>
      <li class="step">
        <div class="image-area">
          <img src="@s/images/solution/step2.png" alt="" />
        </div>
        <div class="words-area">
          <h4 class="tit">需求分析</h4>
          <p class="sub-title">DEMAND ANALYSIS</p>
          <p class="desc">
            针对您的需求，进行专业的解读、分析
          </p>
        </div>
      </li>
      <li class="step">
        <div class="words-area">
          <h4 class="tit">制定方案</h4>
          <p class="sub-title">MAKE PLAN</p>
          <p class="desc">
            结合当下季节以及实际施工场地，综合考虑制定可行性方案；沟通预算成本，筛选最适合您的方案
          </p>
        </div>
        <div class="image-area">
          <img src="@s/images/solution/step1.png" alt="" />
        </div>
      </li>
      <li class="step">
        <div class="image-area">
          <img src="@s/images/solution/step2.png" alt="" />
        </div>
        <div class="words-area">
          <h4 class="tit">方案交付</h4>
          <p class="sub-title">PLAN DELIVERY</p>
          <p class="desc">
            就制定方案沟通、调整，达成共识，完成方案交付
          </p>
        </div>
      </li>
      <li class="step">
        <div class="words-area">
          <h4 class="tit">方案实施</h4>
          <p class="sub-title">PLAN IMPLEMENTATIONn</p>
          <p class="desc">
            签订完成合同，施工队伍入场开始施工，在有效工期内完成施工任务
          </p>
        </div>
        <div class="image-area">
          <img src="@s/images/solution/step1.png" alt="" />
        </div>
      </li>
      <li class="step">
        <div class="image-area">
          <img src="@s/images/solution/step2.png" alt="" />
        </div>
        <div class="words-area">
          <h4 class="tit">交付验收</h4>
          <p class="sub-title">DELIVERY AACCEPTANCE</p>
          <p class="desc">
            施工完毕，校验无误，交付需求方验收、签字
          </p>
        </div>
      </li>
      <li class="step">
        <div class="words-area">
          <h4 class="tit">后期维护</h4>
          <p class="sub-title">LATER MAINTENANCE</p>
          <p class="desc">
            在有效的合同期内，对于工程在保设施进行维护维修，保证稳定有效运行
          </p>
        </div>
        <div class="image-area">
          <img src="@s/images/solution/step1.png" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.solution-page {
  text-align: center;

  .banner-area {
    width: 100%;
    height: 500px;
    background: url("~@s/images/contact/contact_space.png") no-repeat center center;
    background-size: cover;
  }

  .title {
    margin-top: 120px;
  }

  .sub-title {
    padding-top: 8px;
  }

  .produce {
    margin-top: 32px;
    color: #666;

    .produce-words {
      line-height: 27px;
    }
  }

  .resolve-wrapper {
    margin-top: 64px;
    width: 1200px;

    .step {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 64px;

      .image-area {
        width: 700px;

        img {
          width: 100%;
        }
      }

      .words-area {
        padding: 0 56px;
        width: calc(100% - 700px);
        text-align: left;

        .tit {
          font-size: 24px;
          line-height: 40px;
          color: #000;
        }

        .sub-title {
          font-size: 14px;
        }

        .desc {
          line-height: 30px;
          color: rgb(102, 102, 102);
        }
      }
    }
  }
}
</style>
