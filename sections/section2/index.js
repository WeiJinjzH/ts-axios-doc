/* 变量声明
var let const let和var对比 解构 展开
*/
function f() {
    var a = 30;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
g();
function h(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
h(true); // 返回10
h(false); // 返回undefined 因为var函数声明提前了
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var j = 0; j < currentRow.length; j++) { // 这里用i的话程序不会报错，运行结果是6，不过不是想要的结果
            sum += currentRow[i];
        }
    }
    return sum;
}
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(sumMatrix(matrix));
for (var k = 0; k < 10; k++) {
    setTimeout(function () {
        console.log(k); // 此时输出全部为10 因为JavaScript是单线程的，它会先循环之后才运行异步的console，此时每个i循环之后都已经累加到了10
    }, 100 * k);
}
for (var a = 0; a < 10; a++) {
    (function (a) {
        setTimeout(function () {
            console.log(a);
        }, 100 * a);
    })(a);
}
