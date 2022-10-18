<template>
  <transition name="el-loading-fade">
    <div class="ui-loading-mask">
      <div class="ui-loading-center">
        <van-loading color="blue" size="80" class="ui-loading mg-home-loading-h5"></van-loading>
        <div class="ui-loading-text" v-if="text">
          {{ text }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  /**
   * loading组件
   */
  export default {
    name: 'UILoading',
    props: {
      value: {
        type: Boolean,
        default: () => false,
      },
    },
    computed: {
      loadingSize() {
        return this.size || 60;
      },
    },
    data() {
      return {
        size: 60,
        visible: true,
        text: '',
        webIsPc: true,
      };
    },
    methods: {
      handleAfterLeave() {
        this.$emit('after-leave');
      },
      setText(text) {
        this.text = text;
      },
    },
    created() {
      this.visible = this.value;
    },
    watch: {
      visible(val) {
        this.$emit('update:value', val);
      },
    },
  };
</script>

<style lang="less">
  .ui-loading-parent--relative {
    position: relative !important;
    min-height: 60px;
  }
  .ui-loading-parent--hidden {
    position: relative !important;
    min-height: 60px;
  }
  .ui-loading-mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: inherit;
    .ui-loading-center {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .ui-loading {
      min-width: 100px;
      margin: 0 auto;
      text-align: center;
      &-text {
        margin-top: 10px;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        word-break: break-word;
        white-space: pre-wrap;
      }
      .van-loading__text {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
        margin-left: 0;
        font-size: 0;
        box-shadow: 0 0 50px 30px rgba(255, 255, 255, 0) inset;
        transform: translate(-50%, -50%);
        > img {
          //width: 32px;
          //width: 100%;
        }
      }
    }
    .mg-home-loading-h5 {
      .van-loading__text {
        top: 14px; /*no*/
        left: 26px; /*no*/

        > img {
          width: 32px; /*no*/
        }
      }
    }
  }
</style>
