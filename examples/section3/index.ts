/* 接口初探 */
interface LabelledValue {
    label: string
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}
let myObj = { size: 100, label: 'hhh' }
printLabel(myObj)


/* 可选属性 */
interface Square {
    color: string
    area: number
}
interface SquareConfig {
    color?: string
    width?: number
}
function createSquare(config: SquareConfig): Square {
    let newSquare = { color: '#ffffff', area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}
createSquare({ color: '#000000' })