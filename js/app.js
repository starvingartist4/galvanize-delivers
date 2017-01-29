let receiptTable = document.getElementsByClassName('receipt-table')[0];
console.log(receiptTable);
let addToOrderBtns = document.getElementsByClassName('addToOrder');
console.log(addToOrderBtns);
let itemNames = document.getElementsByClassName('item-name');
console.log(itemNames);
let itemPrices = document.getElementsByClassName('item-price');
console.log(itemPrices);
for (var i = 0; i < addToOrderBtns.length; i++) {
  let btn = addToOrderBtns[i];
  console.log(btn);
  btn.addEventListener('click', function(evt) {
    let newTableEntry = document.createElement('TR');
    let nameTableData = document.createElement('TD');
    let priceTableData = document.createElement('TD');
    let itemName = this.parentNode.parentNode.children[1].children[0].innerText;
    let itemPrice = this.parentNode.parentNode.children[1].children[1].innerText;
    console.log(itemName);
    let addedEntryName = itemName;
    console.log(addedEntryName);
    let addedEntryPrice = itemPrice;
    console.log(addedEntryPrice);
    nameTableData.innerText = addedEntryName;
    priceTableData.innerText = addedEntryPrice;
    newTableEntry.appendChild(nameTableData);
    newTableEntry.appendChild(priceTableData);
    console.log(newTableEntry);
    receiptTable.appendChild(newTableEntry);
  });
}
