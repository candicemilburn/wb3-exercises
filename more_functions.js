"use strict"

function displayMailingLabel(name, address, city, state, zipcode){

    console.log(name);
    console.log(address)
    console.log(`${city}, ${state} ${zipcode}`);
}

displayMailingLabel("Candice", "2022 Carter Place", "Arlington", "FL", "265112");


function addNumber(num1, num2){
    let message = num1+num2;
    console.log(num1 + " + " + num2 + " = " + (message));

  }

  let num1 = 22
  let num2 = 62
   
addNumber(22,62)


function displayReceipt(totaldue, amountpaid, changedue,){
    console.log("Total Due: $" + totaldue)
    console.log("Amount Paid: $" + amountpaid)
    console.log("Change Due: $" + (amountpaid-totaldue))
}
displayReceipt(50,60)


