/**
 * @ auther 七夕
 * @ time 2020-09-30
 */

const animate = {
  // 初始化真个动画事件
  init() {
    this._addScrollEventListener();
  },

  // 全局增加滚动时间监听
  _addScrollEventListener() {
    document.addEventListener("scroll", (e) => {
      this._addSomeTypesOfAnimates(e.target.scrollingElement.scrollTop);
    });
  },

  // 动画效果初始化
  _addSomeTypesOfAnimates(scrollTop) {
    let arr = this._getAllAnimateEle();
    const wh = document.documentElement.clientHeight;
    Array.prototype.forEach.call(arr, (ele) => {
      const animateType = ele.getAttribute("animate");
      if (ele.offsetTop + wh - scrollTop > 0) {

        switch (animateType) {
          case "slide-left":
            this._setSlideLeftPrevStyle(ele);
            break;
          default:
            break;
        }
      }

      setTimeout(() => {
        if (wh + scrollTop - ele.offsetTop > 150) {
          switch (animateType) {
            case "slide-left":
              setTimeout(() => {
                this._setSliderLeftCurrentStyle(ele);
              }, 20);
              break;
            default:
              break;
          }
        }
      });
    });
  },

  // 获取所有动画相关的元素
  _getAllAnimateEle() {
    return document.querySelectorAll(".animate-ele");
  },

  // slide-left prev
  _setSlideLeftPrevStyle(ele) {
    ele.style.transform = "translateX(-100%)";
    ele.style.opacity = "0";
    setTimeout(() => {
      ele.style.transition = "all 1s ease-in-out";
    });
  },

  // slide-left current
  _setSliderLeftCurrentStyle(ele) {
    ele.style.transform = "translateX(0)";
    ele.style.opacity = "1";
  },
};

export default animate;
