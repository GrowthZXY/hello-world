<template>
    <div>
        <ul>
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'KeepAliveC',
        data() {
            return {
                list: [
                    '这真的不是一段文字吗1',
                    '这真的不是一段文字吗2',
                    '这真的不是一段文字吗3',
                    '这真的不是一段文字吗4',
                    '这真的不是一段文字吗5',
                ],
            };
        },
        mounted() {
            console.log('C mounted');
        },
        destroyed() {
            console.log('C destroyed');
        },
        activated() {
            console.log('C activated');
        },
        deactivated() {
            console.log('C deactivated');
        },
    };
</script>
