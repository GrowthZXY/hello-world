export default {
  bind: function (el, binding, vnode) {
    let _this = vnode.context;
    let fn, arg, throttled;
    let isTouch = 'ontouchend' in document;

    if (binding.arg && typeof _this[binding.arg] === 'function') {
      fn = (param) => {
        if (Object.prototype.toString.call(param) === '[object Array]') {
          return () => _this[binding.arg].apply(_this, param);
        } else {
          return () => _this[binding.arg](param);
        }
      };
      arg = binding.value;
    } else if (typeof binding.value === 'function') {
      // eslint-disable-next-line no-unused-vars
      fn = (arg) => binding.value;
    }
    throttled = fn(arg);
    // eslint-disable-next-line no-unused-vars
    el._ev_touch_ = function (e) {
      throttled();
    };
    if (isTouch) {
      //touchstart
      el.addEventListener('touchstart', function (e) {
        binding.modifiers.stop && e.stopPropagation();
        let t = e.touches[0];
        el.startX = t.clientX;
        el.startY = t.clientY;
        el.sTime = +new Date();
      });
      //touchend
      el.addEventListener('touchend', function (e) {
        binding.modifiers.stop && e.stopPropagation();
        let t = e.changedTouches[0];
        el.endX = t.clientX;
        el.endY = t.clientY;
        if (+new Date() - el.sTime < 300) {
          if (Math.abs(el.endX - el.startX) + Math.abs(el.endY - el.startY) < 20) {
            e.preventDefault();
            el._ev_touch_();
          }
        }
      });
    } else {
      //click
      el.addEventListener('click', function (e) {
        binding.modifiers.stop && e.stopPropagation();
        el._ev_touch_();
      });
    }
  },
  // eslint-disable-next-line no-unused-vars
  componentUpdated: function (el, binding) {},
  unbind: function (el) {
    el._ev_touch_ = null;
  },
};
