// 元组 tuple, 是一种特殊的数组, 已知数量和类型. ps: 因为数组元素只支持定义一种类型
// const tuple: [number, string] = [1, 'a']

// let unknown1:unknown = 2; // ok
// let val2: number = unknown1; // 不能将类型“unknown”分配给类型“number”
// let val3: any = unknown1;  // ok

// 接口定义函数
interface Add {
  (x: number, y: number): number
}

// 使用
let add: Add = function(x, y){
  return x + y;
}