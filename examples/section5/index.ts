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







/* 可选参数和默认参数 剩余参数 */
function buildName(firstName: string, lastName?: string): string { // 可选参数只能放在后面
    if (lastName) {
        return `${firstName} ${lastName}`
    } else {
        return firstName
    }
}
function buildName1(firstName: string, lastName="Smith"): string { // 默认值 若默认值在前面，必须写一个undefined来获取默认值
    return `${firstName} ${lastName}`
}
function buildName2(firstName="Will", lastName: string): string {
    return `${firstName} ${lastName}`
}
let result1 = buildName("w")
let result2 = buildName1("e")
// let result3 = buildName2("1")
let result4 = buildName2("","1")
let result5 = buildName2(undefined, "1")

function buildName3(firstName: string, ...restOfName: string[]): string { // 剩余参数 restOfName是任意数量的字符串数组 可以没有可以多个
    return firstName
}
let result6 = buildName3("Bob", 'Adams', 'Sr.')

let buildNameFn: (fname: string, ...reName: string[]) => string = buildName3