"use strict";

let ACME = "ACME:123-L";
let DI = "DI:12345-M ";
let ACE = "ACE:1-12";

function getSupplier(code) {
  let colon = code.indexOf(":");
  let supplier = code.substring(0, colon);
  return supplier;
}

getSupplier(ACME);

function getProductNumber(code) {
  // that returns all characters between the : and -
  let colon = code.indexOf(":");
  let hyph = code.indexOf("-");
  let between = code.substring(colon + 1, hyph);
  return between
}

getProductNumber(DI);

function getSize(code) {
  // that returns all characters after the -

  console.log("test");
}
getSize(ACE);
