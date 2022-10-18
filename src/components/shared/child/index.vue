<template>
    <div>
        <h2>这是一个子组件</h2>
        <button @click="add">组件点击递增</button>
        <p>{{ count }}</p>
        <!-- <input type="text" v-model="childValue" @input="childInputChange" /> -->
        <!-- <input type="text" v-model="childData" @input="childInputChange2" /> -->
        <small-child></small-child>
    </div>
</template>
<script>
    import SmallChild from './smallChild/';
    export default {
        name: 'Home',
        data() {
            return {
                count: this.pCount,
                childValue: this.fatherValue,
                childData: this.data,
            };
        },
        components: {
            SmallChild,
        },

        model: {
            prop: 'fatherValue',
            event: 'childInputChange',
        },
        props: {
            pCount: {
                type: Number,
                default: 0,
            },
            fatherValue: String,
            data: {
                default: '',
                type: String,
            },
        },
        inheritAttrs: true,
        mounted() {},
        watch: {
            fatherValue(v) {
                console.log(v);
                this.childValue = v;
            },
            data() {
                this.childData = this.data;
            },
        },
        methods: {
            add() {
                this.count++;
                this.send();
            },
            updateCount(val) {
                this.count = val;
            },
            send() {
                this.$emit('sendMsg', this.count);
            },
            childInputChange() {
                this.$emit('childInputChange', this.childValue);
            },
            childInputChange2() {
                console.log(this.childData);
                this.$emit('update:data', this.childData);
            },
        },
    };
</script>
