/* 类
基本示例 继承 公共，私有与受保护的修饰符 readonly修饰符 存取器 静态属性 抽象类 类的高级技巧 */
class Greeter {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
    greet() {
        return `hello, ${this.greeting}`
    }
}
let greete = new Greeter('world')
greete.greet()