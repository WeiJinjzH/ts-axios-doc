/* 函数
基本示例 函数类型 可选参数和默认参数 this 重载 */
/* 基本示例 */
// 命名函数
function add(x, y) {
    return x + y;
}
// 匿名函数
var myAdd = function (x, y) {
    return x + y;
};
var z = 100;
function addToZ(x, y) {
    return x + y + z;
}
/* 函数类型 */
function add1(x, y) {
    return x + y;
}
var myAdd1 = function (x, y) {
    return x + y;
};
var myAdd2 = function (x, y) {
    return x + y;
};
var myAdd3 = function (x, y) {
    return x + y;
};
/* 可选参数和默认参数 剩余参数 */
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
function buildName2(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
}
var result1 = buildName("w");
var result2 = buildName1("e");
// let result3 = buildName2("1")
var result4 = buildName2("", "1");
var result5 = buildName2(undefined, "1");
function buildName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName;
}
var result6 = buildName3("Bob", 'Adams', 'Sr.');
var buildNameFn = buildName3;
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52); // 随机从52张牌中抽取一张
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        // onClickBad(this: void, e: Event) {
        //     // this.type = e.type
        //     console.log(e)
        // }
        // 此时还是想要用this的话就将函数改为尖箭头函数
        this.onClickBad = function (e) {
            _this.type = e.type;
            console.log(e);
        };
    }
    return Handler;
}());
var h1 = new Handler();
var uiElement = {
    addClickListener: function () {
    }
};
uiElement.addClickListener(h1.onClickBad); // 由于UIElement的this是void，但是h1的Handler的this是Handler 此时把Handler的this类型改为void的话还是会报错 因为this的类型是void的话就不能再调用this了
/* 函数重载 */
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (Array.isArray(x)) {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    else if (typeof x === 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: 'spades', card: 3 },
    { suit: 'clubs', card: 10 },
    { suit: 'hearts', card: 4 },
];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
