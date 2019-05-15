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
