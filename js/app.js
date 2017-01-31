//target appropriate DOM elements related to receipt table & 'add to order' card-action elements
let receiptTable = document.getElementsByClassName('receipt-table')[0];
let addToOrderBtns = document.getElementsByClassName('addToOrder');
let subtotalStr = document.getElementById('subtotal');
let subtotal = 0.00;
subtotalStr.innerText = '$' + subtotal.toFixed(2);
let taxStr = document.getElementById('tax');
let tax = 0.00;
taxStr.innerText = '$' + tax.toFixed(2);
let totalStr = document.getElementById('total');
let total = 0.00;
totalStr.innerText = '$' + total.toFixed(2);
// give card-action links functionality
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
//validate inputs & submit forms
let submit = document.getElementById('submit');
submit.addEventListener('click', function() {
  //cart targeting
  let cart = document.getElementsByClassName('receipt-table')[0];
  //input getters
  let nameInput = document.getElementById('name');
  let phoneInput = document.getElementById('phone');
  let addressInput = document.getElementById('address');
  //test cases
  let nameValid = (nameInput.classList[1]==='valid');
  let phoneValid = (phoneInput.classList[1]==='valid');
  let addressValid = (addressInput.classList[2]==='valid');
  //test cases/actions
  if (cart.innerText === '') { Materialize.toast( "Please add items to your cart!", 4000); }
  if (!nameValid) { Materialize.toast( "Don't forget to submit your name!", 4000); }
  if (!phoneValid) { Materialize.toast( "Don't forget to submit your phone number!", 4000 ); }
  if (!addressValid) { Materialize.toast( "Don't forget to submit your address!", 4000); }
  if (cart.innerText!=='' && nameValid && phoneValid && addressValid) {
    Materialize.toast("Success! Unfortunately, Galvanize only caters, so don't be a hater; we'll see you later! ;-D ");
  }
});
