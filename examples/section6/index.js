/* 泛型
基本示例 使用泛型变量 泛型类型 泛型类 泛型约束 */
/* 基本示例 */
function identity(arg) {
    return arg;
}
var output = identity('myString'); // 准确类型
var output1 = identity('myString'); // 类型推断
/* 使用泛型变量 */
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
/* 泛型类型 */
var myIdentity = identity;
/* 泛型字面量 */
var myIdentity1 = identity;
var myIdentity2 = identity;
/* 泛型类 */
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var myGenericString = new GenericNumber();
myGenericString.zeroValue = 'Hello ';
myGenericString.add = function (x, y) {
    return x + y;
};
console.log(myGenericString.add(myGenericString.zeroValue, 'Typescript'));
