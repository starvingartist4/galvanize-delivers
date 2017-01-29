let receiptTable = document.getElementsByClassName('receipt-table')[0];
let addToOrderBtns = document.getElementsByClassName('addToOrder');
let itemNames = document.getElementsByClassName('item-name');
let itemPrices = document.getElementsByClassName('item-price');
let subtotalStr = document.getElementById('subtotal');
let subtotal = 0.00;
subtotalStr.innerText = '$' + subtotal.toFixed(2);
let taxStr = document.getElementById('tax');
let tax = 0.00;
taxStr.innerText = '$' + tax.toFixed(2);
let totalStr = document.getElementById('total');
let total = 0.00;
totalStr.innerText = '$' + total.toFixed(2);
for (var i = 0; i < addToOrderBtns.length; i++) {
  let btn = addToOrderBtns[i];
  btn.addEventListener('click', function(evt) {
    let newTableEntry = document.createElement('TR');
    let nameTableData = document.createElement('TD');
    let priceTableData = document.createElement('TD');
    priceTableData.classList.add('right');
    let itemName = this.parentNode.parentNode.children[1].children[0].innerText;
    let itemPrice = this.parentNode.parentNode.children[1].children[1].innerText;
    nameTableData.innerText = itemName;
    priceTableData.innerText = itemPrice;
    let priceNum = parseFloat(itemPrice.slice(1, itemPrice.length));
    subtotal += priceNum;
    tax = subtotal * 0.1;
    total = subtotal + tax;
    subtotalStr.innerText = '$' + subtotal.toFixed(2);
    taxStr.innerText = '$' + tax.toFixed(2);
    totalStr.innerText = '$' + total.toFixed(2);
    newTableEntry.appendChild(nameTableData);
    newTableEntry.appendChild(priceTableData);
    receiptTable.appendChild(newTableEntry);
  });
}
// let submit = document.getElementById('submit');
// submit.addEventListener('click', function() {
//   if ()
// });
