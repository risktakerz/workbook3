"use strict";

function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city);
  console.log(state);
  console.log(zip);
}

displayMailingLabel("Kevin", "23 Hars ave", "BROOKLYN", "NY", 11022);
displayMailingLabel("Gon", "23 Dead Continent ave", "LA", "California", 11022);

function addNumbers(num1, num2) {
  let total = num1 + num2;
  console.log(total);
}
addNumbers(3, 5);
addNumbers(7, 8);
function displayReceipt(totalDue, amountPaid) {
  console.log(`Total Due: ${totalDue}`);
  console.log(`Amount Paid: ${amountPaid}`);
}

displayReceipt(300, 39);
displayReceipt(200, 49);
displayReceipt(23000, 5600);
console.log("-------------");
