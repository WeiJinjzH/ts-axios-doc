/* 解构 */
let input = [1, 2]
let [first, second] = input

let [a1, ...rest] = [1,2,3,4]
console.log(a1)
console.info(rest)

let o = {
    a2: 'foo',
    b: 10,
    c: [0, 1]
}
// let { a2, b } = o
// let { a2, ...passthrough } = o
// let total = passthrough.b + passthrough.c.length
let { a2: name1, b: name2 } = o // 重命名 创建name1 name2两个变量 let name1 = o.a2

function keepWholeObject(wholeObject: {a: string, b?: number}) { // 表示参数b可选
    let { a, b = 1001 } = wholeObject // 由于b是可选的，很可能是undefined,因此这里可给b一个默认值
}

type C = { a: string, b?: number }
// function f({ a, b }: C) { // 函数声明时的解构

// }
// function f({ a = '', b = 0 } = {}): void { // 当默认参数为空对象时，给a和b一个默认值

// }
function f({ a, b = 0 } = { a: '' }): void { // 若默认参数不为空，而只有一个值有值时，可不给这个默设置默认值   此时调用时一定要传入a属性

}
 