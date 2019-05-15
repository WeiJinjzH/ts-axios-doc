interface LabelledValue {
    label: string
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}
let myObj = { size: 100, label: 'hhh' }
printLabel(myObj)