let direction = true;
export default {
  componentUpdated(el, binding) {
    if (binding && binding.value && binding.value.direction !== binding.oldValue.direction) {
      direction = binding.value.direction;
    }
  },
  bind(el, binding) {
    el = el.touches ? el.touches[0] : el;
    const sUserAgent = window.navigator.userAgent.toLowerCase();
    const bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
    const bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os';
    const bIsMidp = sUserAgent.match(/midp/i) == 'midp';
    const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
    const bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb';
    const bIsAndroid = sUserAgent.match(/android/i) == 'android';
    const bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
    const bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
    const isPhone = bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM; // true H5端， false PC端

    let selector = '';
    let autoEdge = true;
    let enableFun;
    if (binding && binding.value) {
      if (typeof binding.value === 'string') {
        selector = binding.value;
      } else {
        selector = binding.value.selector;
        autoEdge = binding.value.autoEdge === undefined ? true : binding.value.autoEdge;
        enableFun = binding.value.enableFun;
        direction = binding.value.direction === undefined ? true : binding.value.direction;
      }
    }

    if (!isPhone) {
      el.onmousedown = (e) => {
        if (enableFun && typeof enableFun === 'function') {
          if (!enableFun()) {
            return;
          }
        }
        el.style.transition = '';
        // 算出鼠标相对元素的位置
        const disX = e.clientX - el.offsetLeft;
        const disY = e.clientY - el.offsetTop;

        // 获取body的页面可视宽高
        let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

        // 传入对应id（'#app'）或者class（'.app'）
        if (selector) {
          const tagDom = document.querySelector(`${selector}`);
          clientWidth = tagDom.clientWidth;
          clientHeight = tagDom.clientHeight;
        }

        document.body.style = 'user-select: none;';
        document.onmousemove = (doc) => {
          // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let L = doc.clientX - disX;
          let T = doc.clientY - disY;

          // 限制拖拽范围
          if (L < 0) L = 0;
          else if (L > clientWidth - el.offsetWidth) L = clientWidth - el.offsetWidth;

          if (T < 0) T = 0;
          else if (T > clientHeight - el.offsetHeight) T = clientHeight - el.offsetHeight;

          // 移动当前元素
          el.style.left = `${L}px`;
          el.style.top = `${T}px`;
        };

        document.onmouseup = () => {
          if (autoEdge) {
            el.style.transition = 'left .5s';
            el.style.left = 0;
          }
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    } else {
      el.ontouchstart = (e) => {
        el.style.transition = '';
        e = e.touches ? e.touches[0] : e;
        // 算出鼠标相对元素的位置
        const disX = e.clientX - el.offsetLeft;
        const disY = e.clientY - el.offsetTop;

        //获取body的页面可视宽高
        let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

        document.body.style = 'user-select: none;';
        document.ontouchmove = (e) => {
          e = e.touches ? e.touches[0] : e;

          // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let L = e.clientX - disX;
          let T = e.clientY - disY;

          // 限制拖拽范围
          if (L < 0) L = 0;
          else if (L > clientWidth - el.offsetWidth) L = clientWidth - el.offsetWidth;

          if (T < 0) T = 0;
          else if (T > clientHeight - el.offsetHeight) T = clientHeight - el.offsetHeight;

          // 移动当前元素
          el.style.left = `${L}px`;
          el.style.top = `${T}px`;
          // 阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
          document.addEventListener('touchmove', () => {}, false);
        };

        document.ontouchend = () => {
          if (autoEdge) {
            if (direction) {
              el.style.transition = 'left .5s';
              el.style.left = 0;
            } else {
              el.style.transition = 'top .5s';
              el.style.top = `${clientHeight - 130}px`;
            }
          }
          document.ontouchmove = null;
          document.ontouchend = null;
        };
      };
    }
  },
};
