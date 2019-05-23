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
/* this */
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52); // 随机从52张牌中抽取一张
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suits: _this.suits[pickedSuit],
                cards: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.cards + " of " + pickedCard.suits);
