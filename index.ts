// 八种数据类型: undefined, null, boolean, number, string, object, symbol, bigint
// 非严格模式下, undefined和null是所有类型的子类型
// let str: string = 'a';
// str = 'b';
// console.log('111--', str);

// 枚举
// enum Color {
//   RED,
//   PINK,
//   BLUE,
// }

// 元组类型(tuple)
// const tuple: [number, string] = [1, 'a']

// void类型
// function hello(): void {
//   console.log(111);
// }

// never类型
// function error(): never {
//   throw new Error('error')
// }

// function error1(): never {
//   while(true) {}
// }

// unknown类型
// 对比unknown和any类型
// let value1: any = 1;
// let value2: unknown = 1;

// let value3: number = value1;  // any可以赋值给任何类型
// let value4: number = value2;  // 不能将类型“unknown”分配给类型“number”, unknown只能赋值给unknown和any
// let value5: any = value2;  // unknown可以赋值给any
// let value6: unknown = value2;  // unknown可以赋值给unknown

// let obj1: object = undefined;  // 不能将类型“undefined”分配给类型“object”
// let obj2: object = null; // 不能将类型“null”分配给类型“object”
// let obj3: object = 1; // 不能将类型“number”分配给类型“object”
// let obj4: object = 'a'; // 不能将类型“string”分配给类型“object”
// let obj5: object = true;  // 不能将类型“boolean”分配给类型“object”
// let obj6: object = {} // 正确

// let obj1: Object = undefined; // 不能将类型“undefined”分配给类型“Object”
// let obj2: Object = null; // 不能将类型“null”分配给类型“Object”
// let obj3: Object = 1; // OK
// let obj4: Object = 'a'; // OK
// let obj5: Object = true; // OK
// let obj6: Object = {} // OK

// let obj1: {} = undefined; // 不能将类型“undefined”分配给类型“{}”
// let obj2: {} = null; // 不能将类型“null”分配给类型“{}”
// let obj3: {} = 1; // OK
// let obj4: {} = 'a'; // OK
// let obj5: {} = true; // OK
// let obj6: {} = {} // OK

// 声明类
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi(): void {
//     console.log(`hello ${this.name}`)
//     // return `hello ${this.name}`
//   }
// }
// const person = new Person('alan', 18);
// person.sayHi()

// 函数声明
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// const add1 = function(num1: number, num2: number): number {
//   return num1 + num2;
// }

// 接口定义
// interface Person {
//   name: string,
//   age: number
// }

// // let p1: Person = null;   // 不能将类型“null”分配给类型“Person”
// let p2: Person = {  // OK
//   name: 'alan',
//   age: 18,
// }

// interface fn {
//   (msg: string): number;
// }

// // 定义函数只能用与函数表达式
// let fn1: fn = function(msg: string): number {
//   return +msg;
// }

// interface Iadd {
//   (num1: number, num2: number, extra?: number): void
// }

// let add: Iadd = function() {
  
// }


// 函数声明
// function fn1(num1: number, num2: number): number {
//   return num1 + num2;
// }

// // 函数表达式
// let add = function(num1: number, num2: number): number {
//   return num1 + num2;
// }

// 接口定义函数
// interface IAdd  {
//   (num1: number, num2?: number): number  // num2可选参数
// }
// // num2设置默认值
// let add1: IAdd = function(num1: number, num2: number = 2): number {
//   return num1 + num2
// }
// add1(1);

// // 接口定义对象
// interface IPerson {
//   name: string;
//   age?: number;  // 可选参数
// }

// let p1: IPerson = {
//   name: 'alan',
// }

// 剩余参数
// function add(...nums: number[]): number {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum +=nums[i];
//   }
//   return sum
// }

// // (定义)函数重载
// type Types =  number | string;

// function add(x: number, y: number): number;
// function add(x: string, y: string): string;
// function add(x: string, y: number): string;
// function add(x: number, y: string): string;
// function add(x: Types, y: Types): Types;

// // 实现
// function add (x: number, y: number): number {
//   if(typeof x === 'string' || typeof y === 'string') {
//     return x.toString() + y.toString();
//   } else {
//     return x + y;
//   }
// }

// add(1,2)
// add('1', '2')

// function add3(x, y) {
//   return x + y
// }

type types = number | string

function add(x: number, y: number): number;
function add(x: string, y: string): string;

function add(x: types, y: types) {
  if(typeof x === 'string' || typeof y === 'string') {
    return x.toString() + y.toString();
  }
  return x + y;
 }
 add(1, 2); // 匹配第一个函数声明
 let result = add('aaa', 'bbb'); // 匹配第二个函数声明
 result.split('')