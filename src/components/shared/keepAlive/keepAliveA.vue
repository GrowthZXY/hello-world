<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <input type="text" />
  </div>
</template>
<script>
  export default {
    name: 'KeepAliveA',
    data() {
      return {
        list: ['这是一段文字1', '这是一段文字2', '这是一段文字3', '这是一段文字4', '这是一段文字5'],
      };
    },
    mounted() {
      console.log('A mounted');
    },
    destroyed() {
      console.log('A destroyed');
    },
    activated() {
      console.log('A activated');
      let list = JSON.parse(JSON.stringify(this.list));
      setTimeout(() => {
        for (let k in list) {
          list[k] += '1';
        }
        this.list = list;
      }, 1000);
    },
    deactivated() {
      console.log('A deactivated');
    },
  };
</script>
