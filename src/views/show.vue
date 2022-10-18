/* eslint-disable no-unused-vars */
<template>
  <div>
    <h1>这是一个详情页</h1>
    <input type="text" v-model="name" />
    <p>{{ userName }}</p>
    <nav>
      <button @click="toggleBox(1)">点击A</button>
      <button @click="toggleBox(2)">点击B</button>
      <button @click="toggleBox(3)">点击C</button>
    </nav>
    <keep-alive>
      <keep-alive-a v-if="state == 1"></keep-alive-a>
      <keep-alive-b v-else-if="state == 2"></keep-alive-b>
      <keep-alive-c v-else></keep-alive-c>
    </keep-alive>
  </div>
</template>
<script>
  import keepAliveA from '@/components/shared/keepAlive/keepAliveA';
  import keepAliveB from '@/components/shared/keepAlive/keepAliveB';
  import keepAliveC from '@/components/shared/keepAlive/keepAliveC';

  export default {
    name: 'Show',
    data() {
      return {
        name: 'xiaoming',
        count: 0,
        state: 1,
      };
    },
    components: { keepAliveA, keepAliveB, keepAliveC },
    mounted() {
      // console.log(this.$store.state.userName);
      // console.log(this.$route.params);
    },
    computed: {
      userName() {
        return this.name;
      },
    },
    methods: {
      toggleBox(_state) {
        this.state = _state;
      },
      deepClone(obj) {
        let objClone = Array.isArray(obj) ? [] : {};
        if (obj && typeof obj === 'object') {
          for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              if (obj[key] && typeof obj[key] === 'object') {
                objClone[key] = this.deepClone(obj[key]);
              } else {
                objClone[key] = obj[key];
              }
            }
          }
        }
        return objClone;
      },
      wake(time) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(`${time / 1000}s 后醒来`);
          }, time);
        });
      },
    },
  };
</script>
