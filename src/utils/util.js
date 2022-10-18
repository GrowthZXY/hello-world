//排序
let arr = [3, 4, 5, 221, 30, 6, 1, 70, 2, 3, 30, 4, 1, 9, 7];

//1.冒泡
// let temp;
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
//     console.log(arr);
// }

//2.选择
// let temp;
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

//3.快速
// function quickSort(arr) {
//     if (arr.length <= 1) return arr;
//     let minIndex = Math.floor(arr.length / 2);
//     let minVal = arr.splice(minIndex, 1)[0];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < minVal) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return quickSort(left).concat(minVal, quickSort(right));
// }
// console.log(quickSort(arr));

//4.插入
for (let i = 1; i < arr.length; i++) {
  let n = i - 1;
  let cur = arr[i];
  while (arr[n] > cur && n >= 0) {
    arr[n + 1] = arr[n];
    n--;
  }
  arr[n + 1] = cur;
}
console.log(arr);

// //
// var fun = function() {
//     this.info = { name: 1 };
// };

// fun.prototype = {
//     info: {
//         name: '‘peter’',
//         age: 25,
//     },
// };

// var a = new fun();
// var b = new fun();

// a.info.name = '‘jack’';
// b.info.name = '‘tom’';
// console.log(a.info.name);
// console.log(b.info.name);

//九九乘法表
// for (let i = 0; i < 10; i++) {
//     for (let j = i; j > 0; j--) {
//         console.log(i + 'X' + j + '=' + i * j);
//     }
// }

// var arr = [1, 4, 2, 6, 1, 7, 4];
// var newArray = arr.reduce(
//     (prev, item) => (prev.includes(item) ? prev : prev.concat(item)), []
// );
// console.log(newArray);

// var person = [{
//         name: 'xiaoming',
//         age: 18,
//     },
//     {
//         name: 'xiaohong',
//         age: 17,
//     },
//     {
//         name: 'xiaogang',
//         age: 17,
//     },
// ];

// function groupBy(objectArray, property) {
//     return objectArray.reduce(function(acc, obj) {
//         var key = obj[property];
//         if (!acc[key]) {
//             acc[key] = [];
//         }
//         acc[key].push(obj);
//         return acc;
//     }, {});
// }
// var groupedPerson = groupBy(person, 'age');
// console.log(groupedPerson);

// var arrString = 'abcdaabcb';

// let obj = arrString.split('').reduce(function(res, cur) {
//     res[cur] ? res[cur]++ : (res[cur] = 1);
//     return res;
// }, {});
// let max = 0;
// let maxString = {};
// for (let key in obj) {
//     if (max < obj[key]) {
//         max = obj[key];
//     }
// }
// for (let key in obj) {
//     if (max == obj[key]) {
//         maxString[key] = max;
//     }
// }
// console.log(obj);
// console.log(maxString);

// function Parent1() {
//     this.age = 22;
// }
// Parent1.prototype.fn = function() {
//     console.log(this.age);
//     // return "parent1"
// };

// function Child1() {
//     this.age = 12;
//     Parent1.call(this);
// }
// let child1 = new Child1();
// child1.fn();
// console.log(child1);

//数组去重
// let arr = [
//     1,
//     2,
//     3,
//     4,
//     2,
//     3,
//     4,
//     5,
//     4,
//     NaN,
//     NaN,
//     null,
//     null,
//     undefined,
//     undefined,
//     true,
//     true,
//     false,
//     false,
//     '',
//     '',
// ];

// let c = arr.reduce((res, cur) => {
//     if (!res.includes(cur)) {
//         res.push(cur);
//     }
//     return res;
// }, []);
// console.log(c);

// export const getArr = function(arr) {
//     let obj = {};
//     let newArr = [];
//     arr.forEach((item) => {
//         if (!obj[item]) {
//             obj[item] = true;
//             newArr.push(item);
//         }
//     });
//     return newArr;
// };

// function getArr(arr) {
//     return arr.filter((item, index) => {
//         return arr.indexOf(item) === index;
//     });
// }

// function getArr(arr) {
//     let newArr = [];
//     arr.forEach((item) => {
//         if (!newArr.includes(item)) {
//             newArr.push(item);
//         }
//     });
//     return newArr;
// }

// function getArr(arr) {
//     let newArr = [];
//     arr.forEach((item) => {
//         if (newArr.indexOf(item) === -1) {
//             newArr.push(item);
//         }
//     });
//     return newArr;
// }

// function getArr(arr) {
//     return [...new Set(arr)];
// }

// console.log(getArr(arr));

//面试题
// function Foo() {
//     Foo.a = function() {
//         console.log(1);
//     };
//     this.a = function() {
//         console.log(2);
//     };
// }
// Foo.prototype.a = function() {
//     console.log(3);
// };
// Foo.a = function() {
//     console.log(4);
// };
// Foo.a();
// let obj = new Foo();
// obj.a();
// Foo.a();
// console.log(obj);

// for (var i = 0; i < 10; i++) {
//     setTimeout(
//         ((i) => {
//             return function() {
//                 console.log(i);
//             };
//         })(i),
//         1000 * i
//     );
// }

// let a = [1, 2, 3].map(parseInt);
// console.log(a);

// const A = {
//     name: 'apple',
//     showName: function(...param1) {
//         console.log(this.name, ...param1);
//     },
// };
// let pear = { name: 'pear' };
// A.showName.call(pear, 'ppp');
// A.showName.apply(pear, [1, 2]);
// const method = A.showName.bind(pear, 'aa');
// method();

// let arr = [1, 2, 1, 3, 4, 2];
// let arr2 = arr.find((v) => v == 1);
// console.log(arr2);

// export const asyncDate = async function () {
//   async function async1() {
//     console.log(1);
//     await async2();
//     console.log(2);
//   }

//   async function async2() {
//     console.log(3);
//   }

//   Promise.resolve().then(() => {
//     console.log(4);
//   });

//   setTimeout(() => {
//     console.log(5);
//   });

//   await async1();
//   console.log(6);
// };

// export const asyncDate = async function () {
//   async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
//   }
//   async function async2() {
//     //async2做出如下更改：
//     new Promise(function (resolve) {
//       console.log('promise1');
//       resolve();
//     }).then(function () {
//       console.log('promise2');
//     });
//   }
//   console.log('script start');

//   setTimeout(function () {
//     console.log('setTimeout');
//   }, 0);
//   async1();

//   new Promise(function (resolve) {
//     console.log('promise3');
//     resolve();
//   }).then(function () {
//     console.log('promise4');
//   });

//   console.log('script end');
// };

// asyncDate();

// export const asyncDate = async function () {
//   async function async1() {
//     console.log(1);
//     await async2();
//     console.log(2);
//   }

//   async function async2() {
//     console.log(3);
//   }

//   Promise.resolve().then(() => {
//     console.log(4);
//   });

//   setTimeout(() => {
//     console.log(5);
//   });

//   await async1();
//   console.log(6);
// };

// export const asyncDate = async function () {
//   async function a1() {
//     console.log('a1 start');
//     await a2();
//     console.log('a1 end');
//   }
//   async function a2() {
//     console.log('a2');
//   }

//   console.log('script start');

//   setTimeout(() => {
//     console.log('setTimeout');
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log('promise1');
//   });

//   a1();

//   let promise2 = new Promise((resolve) => {
//     resolve('promise2.then');
//     console.log('promise2');
//   });

//   promise2.then((res) => {
//     console.log(res);
//     Promise.resolve().then(() => {
//       console.log('promise3');
//     });
//   });
//   console.log('script end');

//   /*
//   script start
//   a1 start
//   a2
//   promise2
//   script end
//   promise1
//   a1 end
//   promise2.then
//   promise3
//   setTimeout
//   */
// };

// asyncDate();
