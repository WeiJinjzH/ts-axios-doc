/* 基础类型 布尔值 数字 字符串 数组 元祖Tuple 枚举 any void null和undefined never object 类型断言 */
let isDone: boolean = true // 布尔值

let decLiteral: number = 20 // 十进制的数字类型
let hexLiteral: number = 0x14 // 十六进制的数字类型
let bingryLiteral: number = 0b10100 // 二进制的数字类型
let octalLiteral: number = 0o24 // 八进制的数字类型

let myname:string = ''

let list:number[] = [0, 1]
let list1:Array<number> = [0, 9]

// let x[string, number] // 元祖
// x=['o', 9]
// x[3] = 7 // 对于越界元素 它的类型是定义中的联合类型

enum Color1 { // 枚举
    red = 1, // 修改起始编号为1，也可以每个设置编号
    yellow,
    green,
}
let c:Color1 = Color1.red
let colorName:string = Color1[2]
console.log(colorName)

let notSure:any = 4
notSure = 'maybe a string instead'

function warnUser(): void { // void表示没有连接
    console.log('this is my waring message')
}
let unuable:void = null // 毫无意义

// never通常用在函数中，没有返回值或者抛出异常不能做处理的时候
function error(message: string): never {
    throw new Error(message)
}
function faild() {
    return error('something failed')
}
function inifiniteLoop(): never {
    while(true) {

    }
}

// declare function create(o: object | null): void;
// create(o: {i: 0})
// create(o:null)

let someValue:any = 'this is a string'
let strLength:number = (<string>someValue).length // 强制/断言someValue是string类型
let strLength1:number = (someValue as string).length