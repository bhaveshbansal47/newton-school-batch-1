function calcTotal() {
    // my code will execute here only
}

function fetchPriceNodes() {
    const selector = '[data-ns-test]'
    const nodes = document.querySelectorAll(selector)
    // array of price nodes and length of this array as
    // per example will be 4
}

function sumOfAllPriceNodes(nodes) {
    let sum = 0
    for(let i = 0; i < nodes.length; i++) {
        const priceText = nodes[i].innerText // price in string
        const price = Number(priceText) //price in number
        sum += price
    }
}
// totalPrice is nothing but 303
function appendGrandTotalRow(totalPrice) {
    const row = document.createElement('tr')
    const column1 = document.createElement('td')
    const column2 = document.createElement('td')
    column1.innerText = 'Grand Total'
    column2.innerText = totalPrice
    column2.setAttribute('data-ns-test', 'grandTotal')
    row.appendChild(column1)
    row.appendChild(column2)
}