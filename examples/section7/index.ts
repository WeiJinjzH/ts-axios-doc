/* 类型推断
基础 最佳通用类型 上下文类型 */


/* 基础 */
let x1 = [0, 1, null] // 数字和null的联合类型


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