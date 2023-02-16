// 接口定义函数
// interface Add {

//   (x: number, y: number): number;
// }

// let add1: Add = function(x, y) {
//   return 1;
// }

// add(1,2)

// interface Api {
//   [key: string]: (data: object)=> Promise<any>
// }

// let api1: Api = function(data) {
//   return Promise.resolve(true)
// };

// 函数重载
function add3(x: number, y: number): number;
function add3(x: string, y: string): string;
function add3(x: any, y: any): any {
  return x + y;
}
