"use strict";

function parseAndDisplayName(fullname) {
  let space = fullname.indexOf(" ");
  let firstname = fullname.substring("", space);
  let lastname = fullname.substring(5, 7);
  console.log(space);
  console.log("name: ", fullname);

  console.log("First name: ", firstname);
  console.log("Last name: ", lastname);
}

parseAndDisplayName("Hoko Kusu");
