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