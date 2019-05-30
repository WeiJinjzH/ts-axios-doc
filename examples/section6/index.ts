/* 泛型
基本示例 使用泛型变量 泛型类型 泛型类 泛型约束 */


/* 基本示例 */
function identity<T>(arg): T { // 它不同于any，当传入number时返回的也是number
    return arg
}
let output = identity<string>('myString') // 准确类型
let output1 = identity('myString') // 类型推断




/* 使用泛型变量 */
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}





/* 泛型类型 */
let myIdentity: <T>(arg: T) => T = identity


/* 泛型字面量 */
let myIdentity1: { <T>(arg: T): T } = identity


interface GenericTdentityFn<T> { // 泛型接口
    (arg: T): T
}
let myIdentity2: GenericTdentityFn<number> = identity








/* 泛型类 */
class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
    return x + y
}
let myGenericString = new GenericNumber<string>()
myGenericString.zeroValue = 'Hello '
myGenericString.add = function(x, y) {
    return x + y
}
console.log(myGenericString.add(myGenericString.zeroValue, 'Typescript'))










/* 泛型约束 */
interface Lengthwise {
    length: number
}


function loggingIdentity1<T extends Lengthwise>(arg: T): T {
    console.log(arg.length) // 前面的解决方案是让参数变成一个数组
    return arg
}
loggingIdentity1({ length: 6 })




function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
let x = { a: 1, b: 2, c: 3, d: 4 }
getProperty(x, 'a')
// getProperty(x, 'm') 这样就不行，因为K继承了T，而传入的x中没有m




// 工厂函数
function create<T>(c: { new(): T }): T {
    return new c()
}



class BeeKeeper {
    hasMask: boolean
}
class LionKeeper {
    nametag: string
}
class Animal {
    numLength: number
}
class Bee extends Animal {
    keeper: BeeKeeper
}
class Lion extends Animal {
    keeper: LionKeeper
}
function createInstance<T>(c: new() => T): T {
    return new c()
}
createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask