function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 100, label: 'hhh' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: '#ffffff', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
createSquare({ color: '#000000' });
