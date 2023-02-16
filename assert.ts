// 断言
let str: any = 1;
// 尖括号写法
let strLength: number = (<string>str).length;
// as写法
let strLength2: number = (str as string).length;

// 1. 非空断言
let user: string | null | undefined;
console.log(user!.toUpperCase);

// 2. 确定赋值断言
let value!: number;
console.log(value);


