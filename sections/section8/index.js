/* 高级类型
交叉类型 联合类型 类型保护 可为null的类型 字符串字面量类型 */
/* 交叉类型 */
function extend(first, second) {
    var result = {};
    for (var i in first) {
        result[i] = first[i];
    }
    for (var i in second) {
        result[i] = second[i];
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoLogger = /** @class */ (function () {
    function ConsoLogger() {
    }
    ConsoLogger.prototype.log = function () {
    };
    return ConsoLogger;
}());
var jim = extend(new Person('jim'), new ConsoLogger());
jim.name;
jim.log();
/* 联合类型 */
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string or number got " + padding);
}
padLeft('hello world', 4);
function getSmallPet() {
    return;
}
var pat = getSmallPet();
// pat.layEggs()
// pat.swim()  // 这样是访问不到的
/* 类型保护 接着上面的 */
if (pat.swim) {
    pat.swim();
}
else if (pat.fly) {
    pat.fly();
}
function isFish(pat) {
    return pat !== undefined;
}
// 此时就不用像上面一样判断了
if (isFish(pat)) {
    pat.swim();
}
else {
    pat.fly();
}
// 用类型谓词来重新写上面的padLeft方法
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
function padLeft1(value, padding) {
    // if (isNumber(padding)) {
    if (typeof padding === 'number') { // 因为本身ts有类型保护
        return Array(padding + 1).join(' ') + value;
    }
    // if (isString(padding)) {
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string or number got " + padding);
}
/* instance of类型保护 */
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log('Bird fly');
    };
    Bird.prototype.layEggs = function () {
        console.log('Bird lay eggs');
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log('Fish swim');
    };
    Fish.prototype.layEggs = function () {
        console.log('Fish lay eggs');
    };
    return Fish;
}());
function getRandom() {
    return Math.random() > 0.5 ? new Bird() : new Fish();
}
var pet = getRandom();
if (pet instanceof Bird) {
    pet.fly();
}
if (pet instanceof Fish) {
    pet.swim();
}
/* 可以为null的类型 */
var s = 'foo';
s = null;
var sn = 'bar';
sn = null;
sn = undefined;
function f(x, y) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
f(1, null); // 编译会报错tsc index.ts --strictNullChecks  
// 可选属性也会有相同的处理
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var c = new C();
c.a = 12;
c.a = undefined; // 报错
c.b = 23;
c.b = undefined;
c.b = null; // 报错
function fo(sn) {
    // if (sn === null) {
    //     return 'default'
    // } else {
    //     return sn
    // }
    return sn || 'default';
}
function broken(name) {
    function postFix(epither) {
        return name.charAt(0) + ". the " + epither; // 由于是嵌套函数，因此编译器无法知道name是不是为null 此时只要在name后面加!就好了
    }
    name = name || 'Bob';
    return postFix(name);
}
