/* 泛型
基本示例 使用泛型变量 泛型类型 泛型类 泛型约束 */


/* 基本示例 */
function identity<T>(arg): T { // 它不同于any，当传入number时返回的也是number
    return arg
}
let output = identity<string>('myString') // 准确类型
let output1 = identity('myString') // 类型推断




/* 使用泛型变量 */
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}