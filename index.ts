// 11. Parameters 用于获得函数的参数类型所组成的元组类型。
// type P1 = Parameters<(a: number, b: string)=>void>; // [number, string]

// // 12. InstanceType 返回构造函数类型T的实例类
// class C {
//   x = 0;
//   y = 0;
// }
// type D = InstanceType<typeof C>;  // C

// 泛型
// interface getLength {
//   length: number
// }

// function getValue<T extends getLength>(val: T): T {
//   console.log(val.length)
//   return val;
// }
// getValue('1')

// typeof
// let p1 = {
//   name: 'alan',
//   age: 20,
//   gender: 'male'
// }

// type People = typeof p1;

// function getName(p: People): string {
//   return p.name
// }
// getName({})

// keyof
// interface Person {
//   name: string,
//   age: number,
//   gender: 'male' | 'female'
// }

// type PersonKey = keyof Person

// function getValueByKey(p: Person, key: PersonKey) {
//   return p[key]
// }

// getValueByKey({ name: "alan", age: 18, gender: "male" }, 'age')

// in
// type Keys = 'a' | 'b' | 'c';

// type Obj = {
//   [p in Keys]: number
// }

// let obj1: Obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// infer 没理解透
type ReturnType1<T> = T extends (...args: any[]) => infer R ? R : any;

// 索引访问符
// interface Person {
//   name: string;
//   age: number
// }

// type x = Person['name'];
// let x1:x = 'a';


// Required
// interface Person {
//   name?: string,
//   age?: number,
//   hobby?: string[]
// }

// const user: Required<Person> = {
//   name: 'alan'
// }

// Partial
// interface Person {
//   name: string,
//   age: number,
//   hobby: string[]
// }

// const user: Partial<Person> = {
//   name: 'alan'
// }

// Exclude
// type T0 = Exclude<'a' | 'b' | 'c', 'a'>
// type T1 = Exclude<string | number | (()=> void), Function> 

// // Extract 取并集
// type T2 = Extract<'a' | 'b' | 'c', 'a' | 'f' | 'c'>; // "a"
// type T3 = Extract<string | number | (()=>void), Function>; // void

// readonly
// interface Person {
//   name: string;
//   gender?: "male" | "female";
// }

// let p1: Readonly<Person> = {
//   name: 'alan',
//   gender: 'male'
// }
// p1.name = 'alan2'

// Record
// type Property = 'key1' | 'key2';
// type Person = Record<Property, string>;

// const p: Person = {
//   key1: 1,
//   key2: 'a',
// }


// Pick
// type Person = {
//   name: string;
//   age:number;
//   gender:string
// }

// type p1 = Pick<Person, 'name' | 'age'>;

// const user: p1 = {
//   name: 'alan',
//   age: 20
// }

// Omit
// interface Person {
//   name: string,
//   age: number,
//   gender: string
// }
// type p2 = Omit<Person, 'age' | 'gender'>
// const user2: p2 = {
//   name: 'alan'
// }

// NonNullable
type P1 = NonNullable<string | number | undefined | null>

// ReturnType
type Func = (value: string) => string;
const test: ReturnType<Func> = '1'

// Parameters
type P2 = Parameters<(a: number, b: string)=> void>;
let arr: P2 = [1, 'a']

// InstanceType
class C {
  x = 0;
  y = 0;
}
type D = InstanceType<typeof C>;
// let d1: D = class E {x=2; y=2}
