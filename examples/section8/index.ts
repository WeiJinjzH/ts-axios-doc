/* 高级类型
交叉类型 联合类型 类型保护 可为null的类型 字符串字面量类型 */



/* 交叉类型 */
function extend<T, U>(first: T, second: U): T & U {
    let result = {} as T & U

    for(let i in first) {
        result[i] = first[i] as any
    }
    for (let i in second) {
        result[i] = second[i] as any
    }
    return result
}

class Person {
    constructor(public name: string) {

    }
}
interface Loggable {
    log(): void
}
class ConsoLogger implements Loggable {
    log() {

    }
}
var jim = extend(new Person('jim'), new ConsoLogger())
jim.name
jim.log()






/* 联合类型 */
function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number got ${padding}`)
}
padLeft('hello world', 4)

// 联合类型是几种类型之一 交叉类型是几种类型之和


// 如果一个值是联合类型 则只能访问这个联合类型的共同资源
interface Bird {
    fly()
    layEggs()
}
interface Fish {
    swim()
    layEggs()
}
function getSmallPet(): Fish | Bird {
    return 
}
let pat = getSmallPet()
// pat.layEggs()
// pat.swim()  // 这样是访问不到的



/* 类型保护 接着上面的 */
if ((pat as Fish).swim) {
    (pat as Fish).swim()
} else if ((pat as Bird).fly) {
    (pat as Bird).fly()
}

function isFish(pat: Fish | Bird): pat is Fish { // 类型谓词
    return (pat as Fish) !== undefined
}

// 此时就不用像上面一样判断了
if (isFish(pat)) {
    pat.swim()
} else {
    pat.fly()
}

// 用类型谓词来重新写上面的padLeft方法
function isNumber(x: any): x is number {
    return typeof x === 'number'
}
function isString(x: any): x is string {
    return typeof x === 'string'
}
function padLeft1(value: string, padding: string | number) {
    // if (isNumber(padding)) {
    if (typeof padding === 'number') { // 因为本身ts有类型保护
        return Array(padding + 1).join(' ') + value
    }
    // if (isString(padding)) {
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number got ${padding}`)
}