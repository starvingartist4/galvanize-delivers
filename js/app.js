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
let submit = document.getElementById('submit');
submit.addEventListener('click', function() {
  let cart = document.getElementsByClassName('receipt-table')[0];
  let nameInput = document.getElementById('name');
  let phoneInput = document.getElementById('phone');
  let addressInput = document.getElementById('address');
  if (cart.innerText==='') {
    Materialize.toast("Please add items to your cart!")
  }
  if (nameInput.classList[1]!=='valid') {
    Materialize.toast("Don't forget to submit your name!", 4000);
  }
  if (phoneInput.classList[1]!=='valid') {
    Materialize.toast("Don't forget to submit your phone number!", 4000);
  }
  if (addressInput.classList[2]!=='valid') {
    Materialize.toast("Don't forget to submit your address!", 4000);
  }
  if (cart.innerText!=='' && nameInput.classList[1]==='valid' && phoneInput.classList[1]==='valid' && addressInput.classList[2]==='valid') {
    Materialize.toast("Success! Unfortunately, Galvanize only caters, so don't be a hater; we'll see you later! ;-D ");
  }
});
