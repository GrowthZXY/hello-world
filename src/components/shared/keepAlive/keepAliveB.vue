<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'KeepAliveB',
    data() {
      return {
        list: ['这不是一段文字1', '这不是一段文字2', '这不是一段文字3', '这不是一段文字4', '这不是一段文字5'],
      };
    },
    mounted() {
      console.log('B mounted');
    },
    destroyed() {
      console.log('B destroyed');
    },
    activated() {
      console.log('B activated');
    },
    deactivated() {
      console.log('B deactivated');
    },
  };
</script>
