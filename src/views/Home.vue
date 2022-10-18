<template>
    <div class="home">
        <div class="outer">
            <div class="inner"></div>
        </div>
        <img alt="Vue logo" src="../assets/logo.png" />
        <button id="btn">节流</button>
        <!-- <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler" scroll-wheel-zoom></baidu-map> -->
        <div>
            <button @click="add">点击增加</button>
            <button @click="bindlink">点击跳转</button>
            <p>数字递增{{ count }}</p>
        </div>
        <p>父组件中的值：{{ data }}</p>
        <child :pCount="count" @sendMsg="receiveChild" ref="childEle"></child>
        <!-- 父子组件异步通信 -->
        <!-- <child v-model="value"></child>
    <p>父组件中的值：{{ value }}</p> -->
        <!-- <child :data.sync="data"></child> -->

        <!-- <ui-loading></ui-loading> -->
        <word>我想自定义组件中的内容</word>
        <p ref="msgEle">{{ msg }}</p>
        <p v-for="item in arr" :key="`${item.a}+cc`">{{ item.a }}----{{ item.b }}</p>
    </div>
</template>

<script>
    import child from '@/components/shared/child';
    import { throttle } from '@/utils/base';
    // import func from '../../vue-temp/vue-editor-bridge';

    export default {
        name: 'Home',
        data() {
            return {
                count: 1,
                msg: '这是一段文章消息',
                value: '父组件数据',
                data: '父组件数据',
                arr: [
                    { a: 1, b: 2 },
                    { a: 3, b: 4 },
                    { a: 6, b: 7 },
                ],
                childName: '',
                center: { lng: 0, lat: 0 },
                zoom: 1,
            };
        },
        components: {
            child,
        },
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {
            // function task(msg,delay=1000){
            //     return new Promise(resolve=>{
            //         setTimeout(()=>{resolve(msg)},delay)
            //     })
            // }

            // let arrr = [1,2,3]
            // arrr.forEach(async (v)=>{
            //     const result = await task(v)
            //     console.log(result)
            // })

            // arrr.reduce(async (prv,cur)=>{
            //     await prv;
            //     let delay = Math.random()*1000;
            //     console.log(delay)
            //     const result = await task(cur,delay)
            //     console.log(111,result)
            // },null)

            async function p1(params) {
                return 'p1' + params;
            }

            async function p2(params) {
                return 'p2' + params;
            }
            async function p3(params) {
                return 'p3' + params;
            }

            [p1, p2, p3].reduce(async (pre, cur) => {
                await pre;
                return cur('你好');
            });

            // function pipe(...args){
            //     return function(params){
            //        return args.reduce(function(val,cur){
            //         return cur(val);
            //        },params)
            //     }
            // }
            // let c = pipe(p1,p2,p3)('你好')
            // console.log(c)

            // function action(weapon){
            //         let killedPeople = 0;
            //         switch(weapon){
            //             case 1:
            //                 killedPeople = 30;
            //                 break;
            //                 case 2:
            //                     killedPeople = 50;
            //                     break;
            //                     case 3:
            //                         killedPeople = 100;
            //                     break;
            //                     default:
            //                         break;
            //         }
            //         console.log(killedPeople)

            // }
            // let c = action;
            // c(1)
            // c(2)
            // c(2)
            // c()

            // const promise = new Promise((resolve,reject)=>{
            //     resolve('success1')
            //     reject('error')
            //     resolve('success2')
            // })

            // promise.then(res=>{
            //     console.log('then:',res)
            // }).catch(err=>{
            //     console.log('catch:',err)
            // })

            // let o = {
            //     a:10,
            //     b:{
            //         a:12,
            //         fn:function(){
            //             console.log(this.a)
            //         }
            //     }
            // }
            // var j = o.b.fn;
            // o.b.fn();
            // j();

            // const pxxx = new Promise((resolve,reject)=>{
            //     console.log(1)
            //     resolve()
            //     console.log(2)
            //     reject('error')
            // })

            // pxxx.then(()=>{
            //     console.log(3)
            // }).catch(err=>{
            //     console.log(err)
            // })
            // console.log(4)

            // let btnEle = document.getElementById('btn');
            // btnEle.addEventListener(
            //     'click',
            //     throttle(function (res) {
            //         console.log(res);
            //     }, 2000)
            // );

            //深拷贝
            // let obj = {
            //   name: '小明',
            //   age: 18,
            //   study: {
            //     courese: '数学',
            //     grade: '一年级',
            //   },
            // };
            // let obj2 = Object.assign(obj);
            // obj2.study.grade = '二年级';
            // console.log(obj);
            // console.log(obj2);

            let arr = ['小明', 18, ['数学', '一年级']];
            // let arr2 = JSON.parse(JSON.stringify(arr));
            // let arr2 = arr.concat();
            let arr2 = arr.slice();
            arr2[2][0] = '英语';

            // console.log(arr);
            // console.log(arr2);

            //父子通信
            setTimeout(() => {
                this.value += '已修改';
                this.data += '已修改';
            }, 2000);

            this.$store.state.userName = '李明';
            // this.updateMsg();
            //深度拷贝 数据不渲染问题
            setTimeout(() => {
                let arr1 = this.deepClone(this.arr);
                arr1[0] = { a: 10, b: 20 };
                this.arr = arr1;
            }, 1000);
            //3、数组求和
            // let arr = [];
            // for (let i = 0; i < 1000; i++) {
            //   arr.push(i);
            // }
            // let startTime = new Date().getTime();
            // function sum(arr) {
            //   var s = 0;
            //   arr.forEach((val) => {
            //     s += val;
            //   });
            //   return s;
            // }
            // console.log(sum(arr));
            // let endTime = new Date().getTime();
            // console.log(endTime - startTime);

            //4、自增函数
            // let funId = function (_id) {
            //   let id = _id ? _id : 100;
            //   return function () {
            //     return id--;
            //   };
            // };
            // let getId = funId(200);
            // console.log(getId());
            // console.log(getId());
            // console.log(getId());

            //5、this问题
            // let a = { name: 'lihua' };
            // function fn1(a, b) {
            //   console.log(arguments);
            //   console.log(a + b);
            // }
            // let f = fn1.bind(a, 1, 2);
            // f();

            //6、继承的方法
            //（1）原型链
            function Animal(name) {
                // 属性
                this.name = name || 'Animal';
                // 实例方法
                this.sleep = function () {
                    console.log(this.name + '正在睡觉！');
                };
            }
            // 原型方法
            Animal.prototype.eat = function (food) {
                console.log(this.name + '正在吃：' + food);
            };

            // function Cat() {}
            // Cat.prototype = new Animal();
            // Cat.prototype.name = 'cat';
            // let cat = new Cat();
            // cat.sleep();
            // cat.eat('fish');

            //（2）构造继承
            // function Cat(name) {
            //   Animal.call(this); //使用父类的构造函数
            //   this.name = name || 'Tom'; //子类自己的属性
            // }
            // Test Code
            // var cat = new Cat();
            // console.log(cat.name); //Tom
            // console.log(cat.sleep());
            // console.log(cat instanceof Animal); // false //子类实例不是父类的实例
            // console.log(cat instanceof Cat); // true  //子类实例是子类的实例

            // (3)class关键字
        },
        beforeUpdate() {},
        updated() {},
        beforeDestroy() {},
        destroyed() {},
        watch: {},
        methods: {
            handler({ BMap, map }) {
                console.log(BMap, map);
                this.center.lng = 116.404;
                this.center.lat = 39.915;
                this.zoom = 15;
            },
            deepClone(obj) {
                let objClone = Array.isArray(obj) ? [] : {};
                if (obj && typeof obj === 'object' && obj != null) {
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
            add() {
                this.count++;
                this.invokeChild();
            },
            receiveChild(val) {
                this.count = val;
            },
            invokeChild() {
                this.$refs.childEle.updateCount(this.count);
            },
            updateMsg() {
                this.msg = '这是更新后的文章消息';
                console.log(this.$refs.msgEle.textContent);
                this.$nextTick(() => {
                    console.log(this.$refs.msgEle.textContent);
                });
            },
            bindlink() {
                // this.$router.push({ name: 'Show', params: { id: 445 } });
                this.$router.push({ path: '/show/1' });
            },
        },
    };
</script>
<style scoped>
    .map {
        width: 100%;
        height: 300px;
    }
    .outer {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .inner {
        width: 20%;
        padding-bottom: 20%;
        background: blue;
    }
</style>
