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











