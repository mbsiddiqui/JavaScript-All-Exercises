/* Tasks of Chapters 26-30 */
/* task-01 */
// var myNumber = +prompt("Enter a positive integer: ");
// document.write("<br> number: " + myNumber);
// document.write("<br> round off value " + Math.round(myNumber));
// document.write("<br> floor value " + Math.floor(myNumber));
// document.write("<br> ceil value " + Math.ceil(myNumber));

/* task-02 */
// var myAnotherNumber = +prompt("Enter a negative floating number: ");
// document.write("<br> number: " + myNumber);
// document.write("<br> round off value " + Math.round(myNumber));
// document.write("<br> floor value " + Math.floor(myNumber));
// document.write("<br> ceil value " + Math.ceil(myNumber));

/* task-03 */
// var absoluteNumber = +prompt("Enter a value: ");
// document.write("<br> The absolute value of " + absoluteNumber + " is " + Math.abs(absoluteNumber));

/* task-04 */
/* Math.floor(num) will use equal to or less than the value of "num" */
// var randomDiceValue = (Math.random()) * (Math.floor(7));
// randomDiceValue = Math.floor(randomDiceValue);
// document.write("<br> random dice value: " + randomDiceValue);

/* task-05 */
// var randomToss = (Math.random()) * (Math.floor(2));
// randomToss = Math.floor(randomToss);
// if (randomToss == 0){
//     document.write("<br> " + randomToss);
//     document.write("<br> Random coin value: Heads");
// }
// else{
//     document.write("<br> " + randomToss);
//     document.write("<br> Random coin value: Tails");
// }

/* task-06 */
// var randomNumber = (Math.random()) * (Math.floor(101));
// randomNumber = Math.floor(randomNumber);
// document.write("<br> Random number between 1 and 100: " + randomNumber);

/* task-07 */
// var weight = prompt("Enter your weight in kilograms: ", "50 or 50.2 kgs");
// var parsedWeight = weight.split(" ");
// weight = parsedWeight[0];
// document.write("<br> The weight of user is " + weight + " kilograms");

/* task-08 */
// var randomSecretNum = (Math.random()) * (Math.floor(11));
// randomSecretNum = Math.floor(randomSecretNum);
// var userInput = +prompt("Enter a number between 1 and 10: ");
// if (userInput === randomSecretNum){
//     alert("Congartulations! you guessed it right.");
// }
// else{
//     alert("Try again!");
// }