/* 函数
基本示例 函数类型 可选参数和默认参数 this 重载 */

/* 基本示例 */
// 命名函数
function add(x, y) {
    return x + y
}
// 匿名函数
let myAdd = function(x, y) {
    return x + y
}

let z = 100
function addToZ(x, y) {
    return x + y + z
}





/* 函数类型 */
function add1(x: number, y: number): number {
    return x + y
}
let myAdd1: (baseValue: number, increment: number) => number = function(x: number, y: number): number { // 函数类型由参数类型和返回值类型组成
    return x + y
}
let myAdd2: (baseValue: number, increment: number) => number = function(x, y) { // 根据类型推断可以只写一边
    return x + y
}
let myAdd3 = function(x: number, y: number): number { // 根据类型推断可以只写一边
    return x + y
}







/* 可选参数和默认参数 剩余参数 */
function buildName(firstName: string, lastName?: string): string { // 可选参数只能放在后面
    if (lastName) {
        return `${firstName} ${lastName}`
    } else {
        return firstName
    }
}
function buildName1(firstName: string, lastName="Smith"): string { // 默认值 若默认值在前面，必须写一个undefined来获取默认值
    return `${firstName} ${lastName}`
}
function buildName2(firstName="Will", lastName: string): string {
    return `${firstName} ${lastName}`
}
let result1 = buildName("w")
let result2 = buildName1("e")
// let result3 = buildName2("1")
let result4 = buildName2("","1")
let result5 = buildName2(undefined, "1")

function buildName3(firstName: string, ...restOfName: string[]): string { // 剩余参数 restOfName是任意数量的字符串数组 可以没有可以多个
    return firstName
}
let result6 = buildName3("Bob", 'Adams', 'Sr.')

let buildNameFn: (fname: string, ...reName: string[]) => string = buildName3








/* this */
interface Card {
    suit: string
    card: number
}
interface Deck {
    suits: string[]
    cards: number[]
    createCardPicker(this: Deck): () => Card
}
let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'], // 牌的花色
    cards: Array(52),
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52) // 随机从52张牌中抽取一张
            let pickedSuit = Math.floor(pickedCard / 13)

            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13,
            }
        }
    },
}
let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()
console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`)




interface UIElement {
    addClickListener(onClick: (this: void, e: Event) => void): void
}
class Handler {
    type: string
    // onClickBad(this: void, e: Event) {
    //     // this.type = e.type
    //     console.log(e)
    // }
    // 此时还是想要用this的话就将函数改为尖箭头函数
    onClickBad = (e: Event) => {
        this.type = e.type
        console.log(e)
    }
}
let h1 = new Handler()
let uiElement: UIElement = {
    addClickListener() {

    }
}
uiElement.addClickListener(h1.onClickBad) // 由于UIElement的this是void，但是h1的Handler的this是Handler 此时把Handler的this类型改为void的话还是会报错 因为this的类型是void的话就不能再调用this了








/* 函数重载 */
let suits = ['hearts', 'spades', 'clubs', 'diamonds']

// 重载 最精确的定义放在前面
function pickCard(x: { suit: string, card: number }[]): number
function pickCard(x: number): { suit: string, card: number }


function pickCard(x): any {
    if (Array.isArray(x)) {
        let pickedCard = Math.floor(Math.random() * x.length)
        return pickedCard
    } else if (typeof x === 'number') {
        let pickedSuit = Math.floor(x / 13)
        return { suit: suits[pickedSuit], card: x % 13 }
    }
}
let myDeck = [
    { suit: 'spades', card: 3 },
    { suit: 'clubs', card: 10 },
    { suit: 'hearts', card: 4 },
]
let pickedCard1 = myDeck[pickCard(myDeck)]
console.log(`card: ${pickedCard1.card} of ${pickedCard1.suit}`)
let pickedCard2 = pickCard(15)
console.log(`card: ${pickedCard2.card} of ${pickedCard2.suit}`)