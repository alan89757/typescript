// 使用枚举, 第一个枚举默认为0, 后面几个枚举值递增, 类似于{RED: 0, PINK: 1, Blue: 2}
// 1. 普通枚举, 由此类型推断出Color下枚举值为number类型
// enum Color {
//   RED,
//   PINK,
//   BLUE,
// }
var color = [0 /* Color.RED */, 1 /* Color.PINK */, 2 /* Color.BLUE */];
console.log(color); //[0, 1, 2]
