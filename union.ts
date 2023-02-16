// 1. 联合类型
let status1: string | number = 1;

// 2. 类型别名
type StatusTypes = string | number;
let status2: StatusTypes = 2;

// 3. 交叉类型(取并集)
interface IpersonA{
  name: string,
  age: number
}
interface IpersonB {
  name: string,
  gender: string
}

let person3: IpersonA & IpersonB = {
  name: 'alan',
  age: 10,
  gender: 'male'
}

// 同一个key, 不同的类型(交叉类型)
interface IpersonC {
  name: string
}

interface IpersonD {
  name: number
}

function testFn(params: IpersonC & IpersonD) {
  console.log(params)
}

testFn({name: 'alan'})  // error, 不能将类型“string”分配给类型“never”