// const作用域和let一样，不过const定义之后就不能进行重新赋值了，但是可以修改成员
const a = 9
const kity = {
    name: 'kity',
    numLives: a,
}
kity.name = 'tomy'