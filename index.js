// 八种数据类型: undefined, null, boolean, number, string, object, symbol, bigint
// 非严格模式下, undefined和null是所有类型的子类型
// let str: string = 'a';
// str = 'b';
// console.log('111--', str);
// 实现
function add(x, y) {
    if (typeof x === 'string' || typeof y === 'string') {
        return x.toString() + y.toString();
    }
    else {
        return x + y;
    }
}
add(1, 2);
add('1', '2');
