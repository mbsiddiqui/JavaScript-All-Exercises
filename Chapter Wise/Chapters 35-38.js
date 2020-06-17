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