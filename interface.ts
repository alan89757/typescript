// 1. 普通接口定义
interface IEmployee {
  empCode: number;
  empName?: string;   // 可选属性
  getSalary: (x: number) => number;  // 箭头函数
  getManagerName(y: number): string;  // 普通函数
}

// 接口对象声明
let employee: IEmployee = {
  empCode: 1,
  getSalary: (x: number) => 1,
  getManagerName: (y: number) => "1",
};
// 接口索引声明
let getSalary: IEmployee['getSalary'] = function (x: number): number {
  return x;
};
// 接口索引声明
let code: IEmployee['empCode'] = 123;

// 2. 接口定义类型
interface KeyPair {
  key: number;
  value: string;
}
// 对比type定义类型, 可理解为别名
type KeyPairType  = { key: number, value: string }

let keyPair1: KeyPair = { key: 1, value: 'a' }
let keyPair2: KeyPairType = { key: 2, value: 'b' }

// 3. 接口定义函数
interface KeyValueProcessor {
  (key: number, value: string): void;
}

function addKeyValue(key:number, value:string):void {
  console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

let fn1: KeyValueProcessor = (x: number, value: string)=>{}

let kvp: KeyValueProcessor = addKeyValue;

// 4. 接口定义数组类型??
interface INumList {
  [index: number]: number;
}
let num: INumList = [1,2,3];

interface IStringList {
  [index: string]: string
}
let list: IStringList = {
  'ts': 'typescript'
}

// 5. 可选参数
interface IEmployee2 {
  empCode: number;
  empName: string;
  empDept?: string;
}

let empObj1:IEmployee2 = {   // OK
  empCode:1,
  empName:"Steve"
}

// 6. 只读属性
interface Citizen {
  name: string;
  readonly  SSN: number;
}

let personObj: Citizen = { name: 'alan', SSN: 10000 }
personObj.SSN = 10001;  // 只读属性,不能赋值

// 7. 扩展接口 extends
interface IPerson {
  name: string;
  gender: string;
}

interface IEmployee extends IPerson {
  empCode: number;
}

// 接口自动合并类型
interface IPerson2 {
  name: string;
  gender: string;
}
interface IPerson2 {
  empCode: number;
}

let person1: IEmployee = {
  name: "alan",
  gender: "male",
  empCode: 100,
};

let person2: IPerson2 = {
  name: "alan1",
  gender: "male",
  empCode: 200,
};

// 8. implements实现接口
interface IEmployee3 {
  empCode: number;
  name: string;
  getSalary: (empCode: number) => number;
}
class Employee3 implements IEmployee3 {
  empCode: number;
  name: string;
  constructor(code: number, name: string) {
    this.empCode = code;
    this.name = name;
  }
  getSalary(empCode: number): number {
    return 20000;
  }
}
let emp = new Employee3(1, "Steve");


