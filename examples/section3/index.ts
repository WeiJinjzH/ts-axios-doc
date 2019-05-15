/* 接口初探 */
interface LabelledValue {
    label: string
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}
let myObj = { size: 100, label: 'hhh' }
printLabel(myObj)


/* 可选属性 */
interface Square {
    color: string
    area: number
}
interface SquareConfig {
    color?: string
    width?: number

    /* 额外属性检查 */
    [propsName: string]: any // 表示当引用SquareConfig时可以除了color或者width之外的属性
}
function createSquare(config: SquareConfig): Square {
    let newSquare = { color: '#ffffff', area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}
createSquare({ color: '#000000', border: '3px' })


/* 只读属性 */
interface Point {
    readonly x:number
    readonly y:number
}
let p1:Point = { x: 10, y: 90 } // 只能在定义的时候给只读属性赋值，之后不可在修改
// p1.x = 99  这样会报错

/* 范型只读数组 */
let o1: number[] = [1,2,3,4]
let ro: ReadonlyArray<number> = o1 // 此时就不能对ro进行修改
// ro[0] = 12
// ro.length = 90
// o1 = ro
o1 = ro as number[] // 此时用类型断言是不会报错的
// 只读属性和const  如果是变量的话用const 如果是属性的话用只读属性




/* 函数类型 */
interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub)
    return result > -1
}
mySearch = function(src, sub) { // 只要传入参数类型正确，返回是boolean类型就OK
    let result = src.search(sub)
    return result > -1
}




/* 可索引类型 */
interface StringArray { // 当用number去索引这个接口的时候它会返回一个string类型的值 也就是数字签名 ts中有数字索引和字符串索引两种类型 这两种类型可以同时使用，但是数字索引必须为字符串索引的子类型
    [index: number]: string
}
let myArray: StringArray
myArray = ['Bob', 'Fred']
let myStr: string = myArray[1]



class Animal {
    name: string
}
class Dog extends Animal {
    breed: string
}
interface NotOkay {
    // [x: number]: Animal 这样是不行的 数字类型是string的子类型
    // [x: string]: Dog

    [x: string]: Animal
    [x: number]: Dog
}

interface NumberDictionaty {
    [index: string]: number
    length: number

    // name: string 这样不行
}

interface ReadonlyStringArray {
    readonly [index: number]: string
}
let myArray1: ReadonlyStringArray = ['Alice', 'Jane']
// myArray1[2] = ['kangkang'] 这样不行





/* 类类型接口 */
interface ClockInterface {
    currentTime: Date
    setTimeout(d: Date)
}
class Clock implements ClockInterface {
    currentTime: Date
    constructor(h: string, m: string) {

    }
    setTimeout(d: Date) {
        this.currentTime = d
    }
}



interface ClockInterface1 { // 实例部分的接口类型
    tick()
}
interface ClockConstrutor { // 构造器部分的接口类型
    new(hour: number, minute: number): ClockInterface1
}
function createClock(ctor: ClockConstrutor, hour: number, minute: number): ClockInterface1 {
    return new ctor(hour, minute)
}
class DigitalClock implements ClockInterface1 {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log('deep deep')
    }
}
class AnalogClock implements ClockInterface1 { // 类有两种接口类型
    constructor(h: number, m: number) {

    }
    tick() {
        console.log('tick toc')
    }
}
let digital = createClock(DigitalClock, 12, 1) // 由于第一个参数是ClockConstrutor的类型，因此它会检测我们的DigitalClock满不满足
let analog = createClock(AnalogClock, 24, 17)





/* 继承接口 */
interface Shape {
    color: string
}
interface PenStrock {
    penWidth: number
}
interface Square extends Shape, PenStrock {
    sideLength: number
}
let square = {} as Square
square.color = '#909090'
square.sideLength = 20
square.penWidth = 100





/* 混合类型 */
interface Counter {
    (start: number): string
    interval: number
    reset(): void
}
function getCunter(): Counter {
    let counter = (function(start: number) {

    }) as Counter
    counter.interval = 123
    counter.reset = function() {

    }
    return counter
}
let c1 = getCunter()
c1(10)
c1.interval = 5.5
c1.reset()