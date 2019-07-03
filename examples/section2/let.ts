function f(input: boolean) {
    let a = 0
    if (input) {
        let b = a + 1
        return b
    }
    // return b // 这里会报错
}
// let定义的变量只在当前块级作用域有效，它不会声明提前
// let不能重复定义

function sumMatrix(matrix: number[][]) {
    let sum = 0
    for (let i = 0; i<matrix.length; i++) {
        let currentRow = matrix[i]
        for (let j = 0; j < currentRow.length; j ++) { // 这里写i也是想要的结果
            sum += currentRow[i]
        }
    }
    return sum
}
console.log(sumMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))

for (let i = 0; i < 10; i ++) {
    setTimeout(() => {
        console.log(i)
    }, i * 100);
}