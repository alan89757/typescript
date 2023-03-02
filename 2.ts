// 本道题我们希望参数 a 和 b 的类型都是一致的，即 a 和 b 同时为 number 或 string 类型。当它们的类型不一致的值，TS 类型检查器能自动提示对应的错误信息。
// 方法一
type CustomType1 = number | string;

function fn(a: number, b: number): number;
function fn(a: string, b: string): string;

function fn(x: CustomType1, y: CustomType1): CustomType1 {
  return x;
}

fn(2, 3); // Ok
fn(1, 'a'); // Error
fn('a', 2); // Error
fn('a', 'b') // Ok

// 方法二
const isStrArr = (a: string[] | number[]): a is string[] => typeof a[0] === 'string'

function f(...args: string[] | number[]) {
  if (isStrArr(args)) {
    return args[0] + ':' + args[1];
  } else {
    return args[0] + args[1];
  }
}

f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b') // Ok


