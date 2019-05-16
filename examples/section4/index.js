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
