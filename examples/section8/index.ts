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
pat.layEggs()
// pat.swim()  // 这样是访问不到的