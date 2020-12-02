/**
 * @ auther 七夕
 * @ time 2020-09-30
 */

const animate = {
  // 初始化真个动画事件
  init() {
    this._addSomeTypesOfAnimates()
    this._addScrollEventListener()
  },

  // 全局增加滚动时间监听
  _addScrollEventListener() {
    document.addEventListener('scroll', (e) => {
      this._addSomeTypesOfAnimates(e.target.scrollingElement.scrollTop)
    })
  },

  /**
   *
   * @name 动画效果初始化
   * @param {*} scrollTop 滚动距离
   */
  _addSomeTypesOfAnimates(scrollTop = 0) {
    let arr = this._getAllAnimateEle()
    const wh = document.documentElement.clientHeight
    Array.prototype.forEach.call(arr, (ele) => {
      const animateType = ele.getAttribute('data-animate')
      if (ele.offsetTop - wh - scrollTop < 500) {
        this._setPrevAnimate(animateType, ele)
      }
      if (ele.offsetTop - wh - scrollTop < 0) {
        this._setCurrentAnimate(animateType, ele)
      }
    })
  },

  /**
   *
   * @name 设置前置动画
   * @param {*} animateType 动画类型
   * @param {*} ele 元素本身
   */
  _setPrevAnimate(animateType, ele) {
    switch (animateType) {
      case 's-l':
        this._setSlideLeftPrevStyle(ele)
        break
      case 's-t':
        this._setSlideTopPrevStyle(ele)
        break
      case 's-r':
        this._setSlideRightPrevStyle(ele)
        break
      case 's-b':
        this._setSlideBottomPrevStyle(ele)
        break
      case 'list':
        this._setListPrevStyle(ele)
        break
      default:
        break
    }
  },

  /**
   * @name 设置后置动画
   * @param {*} animateType 动画类型
   * @param {*} ele 元素本身
   */
  _setCurrentAnimate(animateType, ele) {
    setTimeout(() => {}, 500)
    switch (animateType) {
      case 's-l':
        setTimeout(() => {
          this._setSliderLeftCurrentStyle(ele)
        }, 20)
        break
      case 's-t':
        setTimeout(() => {
          this._setSliderTopCurrentStyle(ele)
        }, 20)
        break
      case 's-r':
        setTimeout(() => {
          this._setSliderRightCurrentStyle(ele)
        }, 20)
        break
      case 's-b':
        setTimeout(() => {
          this._setSliderBottomCurrentStyle(ele)
        }, 20)
        break
      case 'list':
        this._setListCurrentStyle(ele)
        break
      default:
        break
    }
    this._removeAnimate(ele)
  },

  /**
   * @name 获取所有动画相关的元素
   */
  _getAllAnimateEle() {
    return document.querySelectorAll('.ale')
  },

  /**
   *
   * @name prev-animate
   * @param {*} ele 元素
   */
  // slide-left prev
  _setSlideLeftPrevStyle(ele) {
    ele.style.transform = 'translateX(-100%)'
    ele.style.opacity = '0'
  },

  // slide-top prev
  _setSlideTopPrevStyle(ele) {
    ele.style.transform = 'translateY(-100%)'
    ele.style.opacity = '0'
  },

  // slide-right prev
  _setSlideRightPrevStyle(ele) {
    ele.style.transform = 'translateX(100%)'
    ele.style.opacity = '0'
  },

  // slide-bottom prev
  _setSlideBottomPrevStyle(ele) {
    ele.style.transform = 'translateY(100%)'
    ele.style.opacity = '0'
  },

  // list prev
  _setListPrevStyle(ele) {
    Array.prototype.forEach.call(ele.childNodes, (e) => {
      this._setSlideTopPrevStyle(e)
    })
  },

  /**
   *
   * @name current-animate
   * @param {*} ele 元素
   */
  // slide-left current
  _setSliderLeftCurrentStyle(ele) {
    ele.style.transition = 'all 1s ease-in-out'
    ele.style.transform = 'translateX(0)'
    ele.style.opacity = '1'
  },

  // slide-top current
  _setSliderTopCurrentStyle(ele) {
    ele.style.transition = 'all 1s ease-in-out'
    ele.style.transform = 'translateY(0)'
    ele.style.opacity = '1'
  },

  // slide-right current
  _setSliderRightCurrentStyle(ele) {
    ele.style.transition = 'all 1s ease-in-out'
    ele.style.transform = 'translateX(0)'
    ele.style.opacity = '1'
  },

  // slide-bottom current
  _setSliderBottomCurrentStyle(ele) {
    ele.style.transition = 'all 1s ease-in-out'
    ele.style.transform = 'translateY(0)'
    ele.style.opacity = '1'
  },

  // list current
  _setListCurrentStyle(ele) {
    Array.prototype.forEach.call(ele.childNodes, (e, i) => {
      setTimeout(() => {
        this._setSliderTopCurrentStyle(e)
        this._removeAnimate(e)
        setTimeout(() => {
          e.style.transition = 'all .25s ease-in-out'
        }, 150)
      }, 250 * i)
    })
  },

  /**
   *
   * @name 清除动画效果
   * @param {*} ele 元素
   */
  _removeAnimate(ele) {
    ele.removeAttribute('data-animate')
  },
}

export default animate
