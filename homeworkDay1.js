// Section 1

// What types are these?

/* 1.1 */ 1; //number
/* 1.2 */ "cat";//string
/* 1.3 */ true;//boolean
/* 1.4 */ [];//object
/* 1.5 */ {};//object
/* 1.6 */ 1.1;//number
/* 1.7 */ var myVariable;//undefined


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1;//true
/* 2.2 */ "cat";//true
/* 2.3 */ true;//true
/* 2.4 */ NaN;//false
/* 2.5 */ [];//true
/* 2.6 */ {};//true
/* 2.7 */ undefined;//false
/* 2.8 */ "";//false
/* 2.9 */ 0;//false

if(22) {
  console.log("TRUE");
}else{
  console.log("FALSE");
}

// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var number = 21;
// 3.2 Assign a variable that is a string
var text = "I am listening to the music from 2002";
// 3.3 Assign a variable that is a boolean
var truth = true;
// 3.4 Assign a variable that is an object
var collection = ["shoes", "tops", "pants"];

// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

var age = 25;
if(age >= 20){
  console.log("Hey");
}else{
  console.log("Byee");
}
console.log("///////////////////////////SECTION5////////////////////////////////")
// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var firstAnimal = animals[1];
// 5.2. Assign the last element to a variable
var lastAnimal = animals[animals.length-1];
console.log(lastAnimal);
// 5.3. Assign the length of an array to a variable
var animalsLength = animals.length;
console.log(animalsLength);
// 5.4. Add an item to the end of the array
animals.push("dog");
console.log(animals.length);
// 5.5. Add an item to the start of the array
animals.unshift("Cat");
console.log(animals.length);
// 5.6. Assign the index of hedgehog to a variable
animals[2] = "HEDGEHOG";
console.log(animals);

console.log("///////////////////////////SECTION6////////////////////////////////")

// Section 6

// 6.1 Create an array of 5 vegetables

var groceryStore = ["carrot", "parsnip", "leek", "beetroot", "lettuce"];

// 6.2 Loop over the array and write to the console using a "while"

var lengthOfArray = 0;
while(lengthOfArray < groceryStore.length){
  console.log("More veg please!");
  lengthOfArray++;
}
console.log(lengthOfArray);

// 6.3 Loop again using a "for" with a counter

var number = 0;
for(var vegetable in groceryStore){
  number++;
}
console.log(number);

// 6.4 Loop again using a "for of"

for(var vegetable of groceryStore){
  console.log(vegetable + " - try it!");
}

console.log("///////////////////////////SECTION7////////////////////////////////")

// Section 7

var accounts = [
{ name: 'jay',
amount: 125.50,
type: 'personal'
},
{ name: 'val',
amount: 55125.10,
type: 'business'
},
{ name: 'marc',
amount: 400.00,
type: 'personal'
},
{ name: 'keith',
amount: 220.25,
type: 'business'
},
{ name: 'rick',
amount: 1.00,
type: 'personal'
},
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts
total = 0;
for(i = 0; i < accounts.length; i++){
  total += accounts[i].amount;
}

console.log(total);

// 7.2 Find the amount of money in the account with the largest balance

function maxValue(array){
  var total = [];
  for(var account of array){
    total.push(account.amount);
  }
  return Math.max.apply(Math, total);
}

console.log(maxValue(accounts));

// 7.3 Find the name of the account with the smallest balance

function accountMinBal(array){
  balances = [];
  for(i = 0; i< array.length; i++){
    balances.push(array[i].amount);
  }
  var minim = Math.min.apply(Math, balances);
  for(var element of array){
    if(element.amount === minim){
      return element.name;
    }
  }
}
  console.log(accountMinBal(accounts));

// 7.4 Calculate the average bank account value
  
  function averageAccountValue(array){
    var total = 0;
    for(var element of array){
      total += element.amount;
    }
    return total/array.length;
  }

  console.log(averageAccountValue(accounts));

// 7.5 Find the value of marcs bank account

  function findValuesByNames(array, name){
    for(var element of array){
      if(element.name === name.toLowerCase()){
        return element.amount;
      }
    }
  }

  console.log(findValuesByNames(accounts, "Marc"));

// 7.6 Find the holder of the largest bank account
  
  function theRichestGuy(array){
    var max = maxValue(array);
    for(var element of array){
      if(element.amount === max)
        return element.name;
    }
  }

  console.log(theRichestGuy(accounts));

// 7.7 Calculate the total cash in business accounts
  
  function totalBusinessAcc(array){
    var total = 0;
    for(var element of array){
      if(element.type === "business"){
        total += element.amount;
      }
    }
    return total;
  }

  console.log(totalBusinessAcc(accounts));

// 7.8 Find the largest personal account owner
  
  function theRichestPersonalAcc(array){
    personalValues = [];
    for(var element of array){
      if(element.type === "personal")
        personalValues.push(element.amount);
    }
    var max = Math.max.apply(Math, personalValues);
    for(var element of array){
      if(element.amount === max){
        return element.name;
      }
    }
  }

  console.log(theRichestPersonalAcc(accounts));

console.log("///////////////////////////SECTION8////////////////////////////////")
// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {
                name: "Blaise",
                height: 182,
                favourite_food: "beef",

                eat: function(){
                  return "I am eating " + this.favourite_food;
                } 
              }

  console.log(myPerson.eat());

