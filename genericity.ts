

// 我们可以通过+/-来指定添加还是删除

type OptionalTestInterface<T> = {
  [p in keyof T]+?:T[p]
}
type TestInterface = {
  name?:string,
  age?:number
}
type newTestInterface = OptionalTestInterface<TestInterface>

