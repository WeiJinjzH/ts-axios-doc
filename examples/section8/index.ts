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



/* instance of类型保护 */
class Bird {
    fly() {
        console.log('Bird fly')
    }
    layEggs() {
        console.log('Bird lay eggs')
    }
}
class Fish {
    swim() {
        console.log('Fish swim')
    }
    layEggs() {
        console.log('Fish lay eggs')
    }
}
function getRandom(): Bird | Fish {
    return Math.random() > 0.5 ? new Bird() : new Fish()
}
let pet = getRandom()
if (pet instanceof Bird) {
    pet.fly()
}
if (pet instanceof Fish) {
    pet.swim()
}





/* 可以为null的类型 */
let s = 'foo'
s = null
let sn: string | null = 'bar'
sn = null
sn = undefined

function f(x: number, y?: number) { // 这里的y其实是number或者undefined类型
    return x + (y || 0)
}
f(1, 2)
f(1)
f(1, undefined)
f(1, null) // 编译会报错tsc index.ts --strictNullChecks  


// 可选属性也会有相同的处理

class C {
    a: number
    b?: number
}
let c = new C()
c.a = 12
c.a = undefined // 报错
c.b = 23
c.b = undefined
c.b = null // 报错




function fo(sn: string | null): string { // 要求通过类型保护把null去掉
    // if (sn === null) {
    //     return 'default'
    // } else {
    //     return sn
    // }
    return sn! || 'default'
}
function broken(name: string | null): string {
    function postFix(epithet: string) {
        return `${name!.charAt(0)}. the ${epithet}` // 由于是嵌套函数，因此编译器无法知道name是不是为null 此时只要在name后面加!就好了,就是一种类型断言，我们明确知道它不为null，告诉编译器就好了
    }
    name = name || 'Bob'
    return postFix(name)
}
broken(null) // 此时传入null,在嵌套函数中也不会报错







/* 字符串字面量类型 */
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === 'ease-in') {
            // ...
        } else if (easing === 'ease-out') {
        } else if (easing === 'ease-in-out') {
        } else {
        }
    }
}
let button = new UIElement()
button.animate(0, 0, 'ease-in')
button.animate(0, 0, 'uneasy')