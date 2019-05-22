/* 函数
基本示例 函数类型 可选参数和默认参数 this 重载 */

/* 基本示例 */
// 命名函数
function add(x, y) {
    return x + y
}
// 匿名函数
let myAdd = function(x, y) {
    return x + y
}

let z = 100
function addToZ(x, y) {
    return x + y + z
}





/* 函数类型 */
function add1(x: number, y: number): number {
    return x + y
}
let myAdd1: (baseValue: number, increment: number) => number = function(x: number, y: number): number { // 函数类型由参数类型和返回值类型组成
    return x + y
}
let myAdd2: (baseValue: number, increment: number) => number = function(x, y) { // 根据类型推断可以只写一边
    return x + y
}
let myAdd3 = function(x: number, y: number): number { // 根据类型推断可以只写一边
    return x + y
}