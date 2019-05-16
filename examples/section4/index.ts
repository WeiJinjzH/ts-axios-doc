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




class Animal1 {
    move(distance: number = 0) {
        console.log(`Animal1 move ${distance}`)
    }
}
class Dog1 extends Animal1 {
    bark() {
        console.log('Woof! Woof!')
    }
}
const dog1 = new Dog1()
dog1.bark()
dog1.move(20)




class Animal2 {
    name: string
    constructor(name: string) {
        this.name = name
    }
    move(distance: number = 0) {
        console.log(`${this.name} move ${distance}`)
    }
}
class Snake extends Animal2 {
    constructor(name: string) {
        super(name)
    }
    move(distance: number = 5) {
        console.log('Slithering...')
        super.move(distance)
    }
}
class Horse extends Animal2 {
    constructor(name: string) {
        super(name)
    }
    move(distance: number = 65) {
        console.log('Glophing...')
        super.move(distance)
    }
}
let sam = new Snake('sammy')
let tom: Animal2 = new Horse('tommy')
tom.move(99)
sam.move()