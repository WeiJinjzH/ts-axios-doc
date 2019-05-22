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



/* 继承 */
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




/* 公共，私有与受保护的修饰符 */
// 默认是公共的，也就是public
class Animal3 {
    private name: string // 此时在外部是访问不到name的
    public constructor(name: string) {
        this.name = name
    }
    public move(distance: number = 0) {
        console.log(`${this.name} move ${distance}`)
    }
}
let cat = new Animal3('cat')
// cat.name = 'p'

/* typescript其实是一个结构型的系统 当去比较两种类型时我们并不在乎它们是从哪来的 如果它们所有类型兼容的话我们认为它们是类型兼容的
但是如果有私有/受保护成员的话情况就不同了 如果一个类型包含一个private成员，那么只有当另一个类型也包含private成员并且它们都是来自同一处声明的时候我们才会认为这两个是类型兼容的 对于受保护的成员也是适用这个规则
*/
class Rhino extends Animal3 {
    constructor() {
        super('Rhino')
    }
}

class Employee {
    private name: string
    constructor(name: string) {
        this.name = name
    }
}
let animal3 = new Animal3('animal3')
let employee = new Employee('goat')
let rhino = new Rhino()
animal3 = rhino
// animal3 = employee // 虽然Animal3和Employee类都有私有的private的name，但是它俩其实不是同一个name，来源不同 因此是不兼容的，但是Rhino是Animal3的子类，name的来源相同，所以兼容




class Person {
    protected name: string
    constructor(name: string) {
        this.name = name
    }
}
class Employee1 extends Person {
    private department: string
    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}`
    }
}
let howard = new Employee1('Howard', 'Sales')
console.log(howard.getElevatorPitch())
// console.log(howard.name) 会报错 因为name是受保护的成员


/* 当一个类的构造函数被保护的时候，是不可以再被new也就是不可以再被实例化的 */
class Girl {
    name: string
    protected constructor(name: string) {
        this.name = name
    }
}
// let girl = new Girl('lili') 会报错 因为Girl的构造函数被保护了





/* readonly 外部只能访问不能修改 */
class Boy {
    readonly name: string
    constructor(name: string) {
        this.name = name
    }
}
let jonh = new Boy('jonh')
// jonh.name = 'kong'

/* 参数属性 */
class Person1 {
    constructor(readonly name: string) { // 参数属性是指在构造函数参数中给一个访问限定符来声明

    }
}
let jonh1 = new Boy('jonh')
console.log(jonh1.name)
// jonh1.name = 'lili'







/* 存取器 */
class Employee2 {
    fullName: string
}
let employee2 = new Employee2()
employee2.fullName = 'Bob Smith'
if (employee2.fullName) {
    console.log(employee2.fullName)
}

const passcode = 'secret1 passcode'
class Employee3 {
    private _fullname: string
    get fullName(): string {
        return this._fullname
    }
    set fullName(newName: string) {
        if (passcode && newName === 'secret passcode') {
            this._fullname = newName
        } else {
            console.log('Error: Unauthorized update of employee!')
        }
    }
}
let employee3 = new Employee3()
employee3.fullName = 'Bob Smith'
if (employee3.fullName) {
    console.log(employee3.fullName)
}






/* 静态属性 */
class Grid {
    static origin = { x: 0, y: 0 }

    scale: number
    constructor(scale: number) {
        this.scale = scale
    }
    calculateDistanceFromOrigin(point: { x: number, y: number }) {
        let xDist = point.x - Grid.origin.x // 定义静态属性之后就可以通过类的本身去访问
        let yDist = point.y - Grid.origin.y
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
    }
}
let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)
console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }))
console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }))






/* 抽象类 */
abstract class Animal4 {
    abstract mackSound(): void // 抽象方法是不能直接实现的，要在它的派生类里面实现
    protected abstract add(): void
    constructor(parameters) {
        
    }
    move(): void {
        console.log('roaming the earth ...!')
    }
}


abstract class Department {
    name: string
    constructor(name: string) {
        this.name = name
    }
    printName(): void {
        console.log(`Department name ${this.name}`)
    }
    abstract printMeeting(): void
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting ad Auditing')
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am')
    }
    gennerateReports(): void {
        console.log('Gennerating Accounting reports...')
    }
}
// let department: Department = new Department() // 不可以直接去实例化一个抽象类
let department: Department = new AccountingDepartment()
department.printName()
department.printMeeting()
// department.gennerateReports() // 这样是不行的 因为department已经定义了Department这样的类型 但是Department中是没有gennerateReports这样的方法的 除非定义的类型是AccountingDepartment类型






/* 类的高级用法 */
class Greeter1 {
    static standerGreeting = 'Hello there'
    greeting: string
    constructor(message?: string) {
        this.greeting = message
    }
    greet() {
        if (this.greeting) {
            return `Hello, ${this.greeting}`
        } else {
            return Greeter1.standerGreeting
        }
    }
}
let greeter1: Greeter1 = new Greeter1()
console.log(greeter1.greet())
let greeterMaker: typeof Greeter1 = Greeter1
greeterMaker.standerGreeting = 'Hay there'
let greeter2: Greeter1 = new greeterMaker()
console.log(greeter2.greet())




/* 类还可以用作接口 */
class Point {
    x1: number
    y1: number
}
interface Point3d extends Point {
    z: number
}
let point3d:Point3d = { x1: 9, y1: 10, z: 11, x: 0, y: 0 }