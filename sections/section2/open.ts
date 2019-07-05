/* 展开 也就是扩展 */
let first1 = [1, 2, 3]
let second1 = [4, 5, 6]
let bothPlus = [0, ...first1, ...second1, 7]
console.log(bothPlus)

let defaults = {
    food: 'spicy',
    price: '$100',
    ambiance: 'noisy',
}
let search = { ...defaults, isNice: true, food: 'rich' }
console.log(search)