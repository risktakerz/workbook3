const pickupDate = document.getElementById("pickupInput");
const numberOfDaysInput = document.getElementById("numberOfDaysInput");
const addOns = document.getElementById("tolls");
const gps = document.getElementById("gps");
const roadside = document.getElementById("roadside");
const raido1 = document.getElementById("noChecked");
const raido2 = document.getElementById("YesChecked");
const totalPosition = document.getElementById("spacethis");
const carRecipet = document.getElementById("carRecipet");
const Under25Recipet = document.getElementById("Under25Recipet");
const totalRecipet = document.getElementById("totalReciept");
const baseCostPerDay = 29.99;

function calculateTotalCost() {
  let extraCharges = 0;
  let under25fee = 0;
  const numberOfDays = parseInt(numberOfDaysInput.value);

  let carRentalCost = baseCostPerDay * numberOfDays;
  carRecipet.innerText = carRentalCost;

  if (tolls.checked) {
    extraCharges += 3.95 * numberOfDays;
    OptionsRecipet.innerText = extraCharges.toFixed(2);
  }

  if (gps.checked) {
    extraCharges += 2.95 * numberOfDays;
    OptionsRecipet.innerText = extraCharges.toFixed(2);
  }

  if (roadside.checked) {
    extraCharges += 2.95 * numberOfDays;
    OptionsRecipet.innerText = extraCharges.toFixed(2);
  }

  if (yesChecked.checked) {
    under25fee += carRentalCost * 0.3;
    Under25Recipet.innerText = under25fee.toFixed(2);
  }
}
