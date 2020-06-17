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