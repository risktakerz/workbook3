"use strict";

function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city);
  console.log(state);
  console.log(zip);
}

displayMailingLabel("Kevin", "23 Hars ave", "BROOKLYN", "NY", 11022);
console.log("-------------");
displayMailingLabel("Gon", "23 Dead Continent ave", "LA", "California", 11022);

function addNumbers(num1, num2) {
  let total = num1 + num2;
  console.log(total);
}
addNumbers(3, 5);
addNumbers(7, 8);
function displayReceipt(totalDue, amountPaid) {
  if (totalDue < amountPaid) {
    console.log("Error now");
    return;
  }
  console.log(`Total Due: ${totalDue}`);
  console.log("-------------");
  console.log(`Amount Paid: ${amountPaid}`);
}
console.log("-------------");
displayReceipt(20, 33333339);
// displayReceipt(300, 39);
// displayReceipt(200, 49);
// displayReceipt(23000, 5600);
console.log("-------------");
