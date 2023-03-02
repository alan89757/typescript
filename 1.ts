// 实现报错, 如何解决
type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  //不能将类型“{ id: number; kind: string; }”分配给类型“T”。
  // "{ id: number; kind: string; }" 可赋给 "T" 类型的约束，但可以使用约束 "User" 的其他子类型实例化 "T"。
  return {
    id: u.id,
    kind: 'customer'
  }
}

// 解决方式一
function makeCustomer2<T extends User>(u: T): T {
  return {
    ...u,
    id: u.id,
    kind: 'customer'
  }
}

// 解决方式二
function makeCustomer3<T extends User>(u: T): User {
  return {
    id: u.id,
    kind: 'customer'
  }
}