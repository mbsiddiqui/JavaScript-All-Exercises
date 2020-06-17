/* All tasks of Chapters 21-38 */

/* Tasks of Chapters 21-25 */

/* task-01 */
// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName);

/* task-02 */
// var favMobile = prompt("Enter the name of your favorite mobile model: ", "Samsung Galaxy S6 Edge");
// var favMobileLen = favMobile.length;
// document.write("<br> My favorite phone is: " + favMobile);
// document.write("<br> Length of string: " + favMobileLen);

/* task-03 */
// var myWord = "Pakistani";
// var indexOfn = myWord.indexOf("n");
// document.write("<br> String: " + myWord);
// document.write("<br> Index of 'n': " + indexOfn);

/* task-04 */
// var anotherWord = "Hello World";
// var indexOfLastL = anotherWord.lastIndexOf("l");
// document.write("<br> String: " + anotherWord);
// document.write("<br> Last index of 'l': " + indexOfLastL);

/* task-05 */
// var myWord = "Pakistani";
// var indexOf3rdLetter = myWord.charAt(3);
// document.write("<br> String: " + myWord);
// document.write("<br> Character at index 3: " + indexOf3rdLetter);

/* task-06 */
// var firstName = prompt("Enter your first name: ");
// var firstName = firstName + " ";
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName.concat(lastName);
// alert("Hello, " + fullName);

/* task-07 */
// var originalWord = "Hyderabad";
// var afterReplace = originalWord.replace("Hyder", "Islam");
// document.write("<br> City: " + originalWord);
// document.write("<br> After replacement: " + afterReplace);

/* task-08 */
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var updatetdMessage = message.replace(/and/g, "&");
// document.write("<br> Original message: " + message);
// document.write("<br> Updated message: " + updatetdMessage);

/* task-09 */
// var myString = "472";
// var myStringInNumber = parseInt(myString);
// document.write("<br> Value: " + myString);
// document.write("<br> Type: string");
// document.write("<br> Value: " + myStringInNumber);
// document.write("<br> Type: number");

/* task-10 */
// var userInput = prompt("Enter the word: ");
// var userInputInUpperCase = userInput.toUpperCase();
// document.write("<br> User input: " + userInput);
// document.write("<br> Upper case: " + userInputInUpperCase);

/* task-11 */
// var anotherUserInput = prompt("Enter the word: ");
// var sentence = anotherUserInput.toLowerCase().split(" ");
//       for(var i = 0; i< sentence.length; i++){
//          sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//       }
// document.write("<br>")
// document.write(sentence.join(" "));

/* task-12 */
// var num = 35.36;
// num *= 100;
// var numInString = num.toString();
// document.write("<br> Number: " + num);
// document.write("<br> Result: " + numInString);

/* task-13 */
// var userName = prompt("Enter your name: ");
// if ((userName.indexOf("@") > 0) || (userName.indexOf(".") > 0) || (userName.indexOf(",") > 0) || (userName.indexOf("!") > 0)){
//     alert("Please enter a valid username");
// }

/* task-14 */
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am? ");
// var flag = false;
// var index, itemName;
// for (var i = 0; i < A.length; i++){
//     if (A[i] == search.toLowerCase()){
//         flag = true;
//         index = i;
//         itemName = A[i];
//     }
// }
// if (flag){
//     alert(itemName + " is available at index " + index + " in our bakery");
// }
// else{
//     alert("We are sorry. " + itemName + " is not available in our bakery");
// }

/* task-15 */
// var password = prompt("Enter password: ");
// var flag = false;
// var firstPlace = password.charAt(0);
// /* can't start with a number */
// if (firstPlace.charCodeAt() >= 48 && firstPlace.charCodeAt()<= 57){
//     alert("Password can not begin with a number \nPlease enter a valid password");
// }
// /* atleast 6 characters long */
// else if(password.length < 6){
//     alert("Password must contain at least 6 characters \nPlease enter a valid password");
// }
// /* should contain alphabets and numbers */
// else if ('(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/)', password){
//     alert("Password should contain alphabets and numbers \nPlease enter a valid password")
// }

/* task-16 */
// var university = "University of Karachi";
// /* to seperate each character of the string */
// var myArray = university.split("");
// document.write("<br>")
// for (var i = 0; i < myArray.length; i++){
//     document.write(myArray[i]);
//     document.write("<br>")
// }

/* task-17 */
// var anotherAnotherUserInput = prompt("Enter a word: ");
// var lastIndexOfInput = anotherAnotherUserInput.length - 1;
// var lastCharacterOfUserInput = anotherAnotherUserInput.charAt(lastIndexOfInput);
// document.write("<br> User input:" + anotherAnotherUserInput);
// document.write("<br> Last character of input: " + lastCharacterOfUserInput);

/* task-18 */
// var anotherString = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// var myAnotherArray = anotherString.split(" ");
// for (var i = 0; i < myAnotherArray.length; i++){
//     if(myAnotherArray[i].toLowerCase() == "the"){
//         count += 1;
//     }
// }
// var numberOfOccurance = count;
// document.write("<br> Text: " + anotherString);
// document.write("<br> There are " + numberOfOccurance + " occurrence(s) of word 'the'");




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




/* Tasks of Chapters 31-34 */
/* task-01 */
// var date = new Date();
// var currentDate = date;
// document.write("<br>" + currentDate);

/* task-02 */
// var date = new Date();
// var currentMonth = date.getMonth();
// switch(currentMonth){
//     case 0:
//         document.write("<br> Cuurent month: January");
//         break;
//     case 1:
//         document.write("<br> Cuurent month: February");
//         break;
//     case 2:
//         document.write("<br> Cuurent month: March");
//         break;
//     case 3:
//         document.write("<br> Cuurent month: April");
//         break;
//     case 4:
//         document.write("<br> Cuurent month: May");
//         break;
//     case 5:
//         document.write("<br> Cuurent month: June");
//         break;
//     case 6:
//         document.write("<br> Cuurent month: July");
//         break;
//     case 7:
//         document.write("<br> Cuurent month: August");
//         break;
//     case 8:
//         document.write("<br> Cuurent month: September");
//         break;
//     case 9:
//         document.write("<br> Cuurent month: October");
//         break;
//     case 10:
//         document.write("<br> Cuurent month: November");
//         break;
//     case 11:
//         document.write("<br> Cuurent month: December");
//         break;
// }

/* task-03 */
// var date = new Date();
// var currentDay = date.getUTCDay();
// switch(currentDay){
//     case 0:
//         document.write("<br> Cuurent month: Sun");
//         break;
//     case 1:
//         document.write("<br> Cuurent month: Mon");
//         break;
//     case 2:
//         document.write("<br> Cuurent month: Tue");
//         break;
//     case 3:
//         document.write("<br> Cuurent month: Wed");
//         break;
//     case 4:
//         document.write("<br> Cuurent month: Thu");
//         break;
//     case 5:
//         document.write("<br> Cuurent month: Fri");
//         break;
//     case 6:
//         document.write("<br> Cuurent month: Sat");
//         break;
// }

/* task-04 */
// var date = new Date();
// var currentDay = date.getUTCDay();
// switch(currentDay){
//     case 0:
//         document.write("<br> It's Fun day");
//         break;
//     case 6:
//         document.write("<br> It's Fun day");
//         break;
// }

/* task-05 */
// var date = new Date();
// var currDay = date.getDate();
// if (currDay <= 15){
//     document.write("<br> First fifteen days of the month");
// }
// else{
//     document.write("<br> Last days of the month");
// }

/* task-06 */
// var date = new Date();
// var currDate = date;
// document.write("<br> Current Date: " + currDate);
// var millisecondsTillDate = currDate.getTime();
// document.write("<br> Elapsed milliseconds since January 1, 1970: " + millisecondsTillDate);
// var minutesTillDate = millisecondsTillDate/(1000*60*60);
// document.write("<br> Elapsed minutes since January 1, 1970: " + minutesTillDate);

/* task-07 */
// var date = new Date();
// var currentHour = date.getUTCHours();
// if (currentHour <= 12){
//     document.write("<br> It's AM");
// }
// else{
//     document.write("<br> It's PM");
// }

/* task-08 */
// var date = new Date("Dec 31, 2020 00:00:00");
// document.write("<br>" + date);

/* task-09 */
// var date = new Date("June 18, 2015 00:00:00");
// var currentDate = new Date();
// var millisecondsPassed = currentDate.getTime() - date.getTime();
// var daysPassed = millisecondsPassed/(1000*60*60*24);
// document.write("<br> " + daysPassed + " days have passed since 1st Ramadan, 2015");

/* task-10 */
// var refDate = new Date("Dec 5, 2015 22:50:16");
// var begOf2015 = new Date("Jan 1, 2015 00:00:00");
// var diff = refDate.getTime() - begOf2015.getTime();
// var secondsElapsed = diff/(1000*60);
// document.write("<br> On reference date: " + refDate + ",<br>" + secondsElapsed + " seconds had passed since beginning of 2015");

/* task-11 */
// var date = new Date();
// document.write("<br> Current date: " + date);
// var hours = date.getHours();
// document.write("<br> 1 hour ago, it was " + date;

/* task-12 */
// var date = new Date();
// alert("Current date: " + date.toLocaleString());
// date.setDate(date.getDate() - 36500);
// alert("100 years back, it was " + date.toLocaleString());

/* task-13 */
// var userAge = +prompt("Enter your age: ");
// var date = new Date();
// var currYear = date.getFullYear();
// var birthYear = currYear - userAge;
// document.write("<br> Your age is " + userAge);
// document.write("<br> Your birth year is " + birthYear);

/* task-14 */
// var customerName = prompt("Enter customer name: ");
// var date = new Date();
// var billingMonth = date.getMonth();
// switch(billingMonth){
//     case 0:
//         billingMonth = "January";
//         break;
//     case 1:
//         billingMonth = "February";
//         break;
//     case 2:
//         billingMonth = "March";
//         break;
//     case 3:
//         billingMonth = "April";
//         break;
//     case 4:
//         billingMonth = "May";
//         break;
//     case 5:
//         billingMonth = "June";
//         break;
//     case 6:
//         billingMonth = "July";
//         break;
//     case 7:
//         billingMonth = "August";
//         break;
//     case 8:
//         billingMonth = "September";
//         break;
//     case 9:
//         billingMonth = "October";
//         break;
//     case 10:
//         billingMonth = "November";
//         break;
//     case 11:
//         billingMonth = "December";
//         break;
// }
// var unitsConsumed = +prompt("Enter the units consumed: ");
// var chargesPerUnit = +prompt("Enter Per Unit Charges: ");
// var payableWithinDue = unitsConsumed * chargesPerUnit;
// var lateSurcharge = 350;
// var payableAfterDue = payableWithinDue + lateSurcharge;
// document.write("<br><h1>K-Electric Bill</h1>");
// document.write("<br> Customer Name: <b>" + customerName + "</b>");
// document.write("<br> Month: <b>" + billingMonth + "</b>");
// document.write("<br> Number of units: <b>" + unitsConsumed + "</b>");
// document.write("<br> Charges per unit: <b>" + chargesPerUnit + "</b>");
// document.write("<br>");
// document.write("<br> Net amount payable (within due date): <b>" + payableWithinDue + "</b>");
// document.write("<br> Late payment surcharge: <b>" + lateSurcharge + "</b>");
// document.write("<br> Gross amount payable (after due date): <b>" + payableAfterDue + "</b>");




/* Tasks of Chapters 35-38 */
/* task-01 */
// function currentTime(){
//     var date = new Date();
//     document.write("<br> " + date)
// }

/* task-02 */
// function greet(){
//     var firstName = prompt("Enter your first name: ");
//     var lastName = prompt("Enter your last name: ");
//     var fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName);
// }

/* task-03 */
// function add(){
//     var num1 = +prompt("Enter the first num: ");
//     var num2 = +prompt("Enter the second num: ");
//     var result = num1 + num2;
//     return result;
// }

/* task-04 */
// function calculator(num1 = 0, num2 = 0, opr){
//     if (opr === "+"){
//         var res = num1 + num2;
//         document.write("<br> Addition of " + num1 + " and " + num2 + " gives " + res);
//         return res;
//     }
//     else if (opr === "-"){
//         var res = num1 - num2;
//         document.write("<br> Subtraction of " + num1 + " and " + num2 + " gives " + res);
//         return res;
//     }
//     else if (opr === "*"){
//         var res = num1 * num2;
//         document.write("<br> Multiplication of " + num1 + " and " + num2 + " gives " + res);
//         return res;
//     }
//     else if (opr === "/"){
//         var res = num1 / num2;
//         document.write("<br> Division of " + num1 + " and " + num2 + " gives " + res);
//         return res;
//     }
// }

/* task-05 */
// function sqr(val = 1){
//     return val*val;
// }

/* task-06 */
// function fact(num = 1){
//     if ((num == 1) || (num == 0)){
//         return 1;
//     }
//     else{
//         num = num*fact(num-1);
//         return num;
//     }
// }

/* task-07 */
// function counting(start, end){
//     for (var i = start; i <= end; i++){
//         document.write(i, " ");
//     }
// }

/* task-08 */
// function calculateHypotenuse(base, perp){
//     function calculateSquare(val){
//         return val*val
//     }
//     var hyp = calculateSquare(base) + calculateSquare(perp);
//     return hyp;
// }

/* task-09 */
// function triangleArea(width, height){
//     var area = width * height;
//     return area;
// }
// var a = TriangleArea(3, 4);
// alert(a);
// x = 3, y = 4;
// var b = TriangleArea(x, y);
// alert(b);

/* task-10 */
// function isPalindrom(string){
//     var str = string.toLowerCase;
//     var len = str.length;
//     var flag = true;
//     for (var i = 0; i < (len/2); i++){
//         if(str[i] !== str[len - 1 - i]){
//             flag = false;
//         }
//     }
//     if (flag){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// var b = "col";
// var a = isPalindrom(b);
// alert(a);

/* task-11 */
// function toTitleCase(str) {
//     var sentence = str.toLowerCase().split(" ");
//     for (var i = 0; i < sentence.length; i++) {
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     var titleCased = sentence.join(" ");
//     return titleCased;
// }

/* task-12 */
// function longestWord(str) {
//     var sentence = str.split(" ");
//     var wordLength = [];
//     /* to get lengths of all words */
//     for (var i = 0; i < sentence.length; i++) {
//         wordLength[i] = sentence[i].length;
//     }
//     /* to check which word is longest */
//     var indexOfLomgest = 0;
//     for (var i = 0; i < wordLength.length; i++){
//         if (wordLength[i] > wordLength[i-1]){
//             indexOfLomgest = i;
//         }
//     }
//     var longestWord = sentence[indexOfLomgest];
//     return longestWord;
// }

/* task-13 */
// function occurrenceCalc(str, letter){
//     var count = 0;
//     for (var i = 0; i < str.length; i++){
//         if (str[i] === letter){
//             count += 1;
//         }
//     }
//     return count;
// }

/* task-14(a) */
// function calcCircumference(radius){
//     const pi = 3.142;
//     var circum = 2 * pi * radius;
//     var statement = "The circumference is " + circum;
//     return statement;
// }

/* task-14(b) */
// function calcArea(radius){
//     const pi = 3.142;
//     var area = pi * radius * radius;
//     var statement = "The area is " + area;
//     return statement;
// }