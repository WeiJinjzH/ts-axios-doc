/* 类型推断
基础 最佳通用类型 上下文类型 */


/* 基础 */
let x1 = [0, 1, null] // 数字和null的联合类型





/* 最佳通用类 */
// 有些类型共享一个结构 但是它们却没有一个类型能作为所有候选类型的一个超级类型
class Animals {
    numLength: number
}
class Bees extends Animals {

}
class Lions extends Animals {

}
// let zoo = [new Bees(), new Lions()] // 我们想要zoo推断出它是animals数组这样的类型，但是数组中是没有明确的对象是animal类型的，因此不能推断出我们想要的结果
let zoo: Animals[] = [new Bees(), new Lions()]







/* 上下文类型 */
window.onmousedown = function(mouseEvent) {
    // console.log(mouseEvent.clickTime) // 此时会报错 因为它会根据onmousedown的类型去推断右边函数的类型 从而去推断出函数参数的类型 但是函数参数是event，它没有clickTime属性因此会报错
}

window.onmousedown = function(mouseEvent: any) { // 此时明确规定参数类型，上下文类型几句会被忽略 因此就不会报错
    console.log(mouseEvent.clickTime)
}
// 根据上面Animals的例子
function createZoo(): Animals[] {
    return [new Bees(), new Lions()] // 此时就会有3个候选类型 Animals就会作为最佳通用类型
}