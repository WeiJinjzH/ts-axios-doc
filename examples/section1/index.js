/* 基础类型 布尔值 数字 字符串 数组 元祖Tuple 枚举 any void null和undefined never object 类型断言 */
var isDone = true; // 布尔值
var decLiteral = 20; // 十进制的数字类型
var hexLiteral = 0x14; // 十六进制的数字类型
var bingryLiteral = 20; // 二进制的数字类型
var octalLiteral = 20; // 八进制的数字类型
var myname = '';
var list = [0, 1];
var list1 = [0, 9];
// let x[string, number] // 元祖
// x=['o', 9]
// x[3] = 7 // 对于越界元素 它的类型是定义中的联合类型
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["yellow"] = 2] = "yellow";
    Color[Color["green"] = 3] = "green";
})(Color || (Color = {}));
var c = Color.red;
var colorName = Color[2];
console.log(colorName);
