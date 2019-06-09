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