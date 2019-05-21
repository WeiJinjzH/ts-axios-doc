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
/* 当一个类的构造函数被保护的时候，是不可以再被new也就是不可以再被实例化的 */
var Girl = /** @class */ (function () {
    function Girl(name) {
        this.name = name;
    }
    return Girl;
}());
// let girl = new Girl('lili') 会报错 因为Girl的构造函数被保护了
/* readonly 外部只能访问不能修改 */
var Boy = /** @class */ (function () {
    function Boy(name) {
        this.name = name;
    }
    return Boy;
}());
var jonh = new Boy('jonh');
// jonh.name = 'kong'
/* 参数属性 */
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var jonh1 = new Boy('jonh');
console.log(jonh1.name);
// jonh1.name = 'lili'
/* 存取器 */
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    return Employee2;
}());
var employee2 = new Employee2();
employee2.fullName = 'Bob Smith';
if (employee2.fullName) {
    console.log(employee2.fullName);
}
var passcode = 'secret1 passcode';
var Employee3 = /** @class */ (function () {
    function Employee3() {
    }
    Object.defineProperty(Employee3.prototype, "fullName", {
        get: function () {
            return this._fullname;
        },
        set: function (newName) {
            if (passcode && newName === 'secret passcode') {
                this._fullname = newName;
            }
            else {
                console.log('Error: Unauthorized update of employee!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee3;
}());
var employee3 = new Employee3();
employee3.fullName = 'Bob Smith';
if (employee3.fullName) {
    console.log(employee3.fullName);
}
/* 静态属性 */
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x; // 定义静态属性之后就可以通过类的本身去访问
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }));
/* 抽象类 */
var Animal4 = /** @class */ (function () {
    function Animal4(parameters) {
    }
    Animal4.prototype.move = function () {
        console.log('roaming the earth ...!');
    };
    return Animal4;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting ad Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am');
    };
    AccountingDepartment.prototype.gennerateReports = function () {
        console.log('Gennerating Accounting reports...');
    };
    return AccountingDepartment;
}(Department));
// let department: Department = new Department() // 不可以直接去实例化一个抽象类
var department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.gennerateReports() // 这样是不行的 因为department已经定义了Department这样的类型 但是Department中是没有gennerateReports这样的方法的 除非定义的类型是AccountingDepartment类型
