// 使用枚举, 第一个枚举默认为0, 后面几个枚举值递增, 类似于{RED: 0, PINK: 1, Blue: 2}
// 1. 普通枚举, 由此类型推断出Color下枚举值为number类型
enum Color {
  RED,
  PINK,
  BLUE,
}

let color1: Color = Color.RED;  // ok
let color2: Color = 1;  // ok
let color3: Color = 'RED';  // error, 不能将类型“"abc"”分配给类型“Color”

// 2. 设置初始值
enum Color {
  RED = 2,
  PINK,
  BLUE,
}

const pink: Color = Color.PINK;
console.log(pink);    // 3

// 3. 字符串枚举
enum Color {
  RED = '红色',
  PINK = '粉色',
  BLUE = '蓝色'
}
const pink: Color = Color.PINK;
console.log(pink);  // 粉色

// 4. 常量枚举(编译后和普通枚举不一样)
const enum Color {
  RED,
  PINK,
  BLUE,
}

const color: Color[] = [Color.RED, Color.PINK, Color.BLUE];
console.log(color); //[0, 1, 2]

// 编译后
var color = [0 /* Color.RED */, 1 /* Color.PINK */, 2 /* Color.BLUE */];
console.log(color); //[0, 1, 2]
