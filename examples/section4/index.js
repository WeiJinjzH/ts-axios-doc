var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* 类
基本示例 继承 公共，私有与受保护的修饰符 readonly修饰符 存取器 静态属性 抽象类 类的高级技巧 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello, " + this.greeting;
    };
    return Greeter;
}());
var greete = new Greeter('world');
greete.greet();
/* 继承 */
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Animal1 move " + distance);
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog1;
}(Animal1));
var dog1 = new Dog1();
dog1.bark();
dog1.move(20);
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " move " + distance);
    };
    return Animal2;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal2));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 65; }
        console.log('Glophing...');
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Animal2));
var sam = new Snake('sammy');
var tom = new Horse('tommy');
tom.move(99);
sam.move();
/* 公共，私有与受保护的修饰符 */
// 默认是公共的，也就是public
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    Animal3.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " move " + distance);
    };
    return Animal3;
}());
var cat = new Animal3('cat');
// cat.name = 'p'
/* typescript其实是一个结构型的系统 当去比较两种类型时我们并不在乎它们是从哪来的 如果它们所有类型兼容的话我们认为它们是类型兼容的
但是如果有私有/受保护成员的话情况就不同了 如果一个类型包含一个private成员，那么只有当另一个类型也包含private成员并且它们都是来自同一处声明的时候我们才会认为这两个是类型兼容的 对于受保护的成员也是适用这个规则
*/
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'Rhino') || this;
    }
    return Rhino;
}(Animal3));
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    return Employee;
}());
var animal3 = new Animal3('animal3');
var employee = new Employee('goat');
var rhino = new Rhino();
animal3 = rhino;
// animal3 = employee // 虽然Animal3和Employee类都有私有的private的name，但是它俩其实不是同一个name，来源不同 因此是不兼容的，但是Rhino是Animal3的子类，name的来源相同，所以兼容
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department;
    };
    return Employee1;
}(Person));
var howard = new Employee1('Howard', 'Sales');
console.log(howard.getElevatorPitch());
// console.log(howard.name) 会报错 因为name是受保护的成员
