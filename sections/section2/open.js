var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* 展开 也就是扩展 */
var first1 = [1, 2, 3];
var second1 = [4, 5, 6];
var bothPlus = [0].concat(first1, second1, [7]);
console.log(bothPlus);
var defaults = {
    food: 'spicy',
    price: '$100',
    ambiance: 'noisy'
};
var search = __assign({}, defaults, { isNice: true });
console.log(search);
