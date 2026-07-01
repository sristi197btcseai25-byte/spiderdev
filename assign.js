// Student Result Calculator

// Input
const prompt = require("prompt-sync")();
let studentName = prompt("Enter Student Name:");

let marks = [];
let total = 0;

// Taking marks of 5 subjects
for (let i = 0; i < 5; i++) {
    let mark = Number(prompt("Enter marks for Subject " + (i + 1)));

    // Validation
    while (mark < 0 || mark > 100) {
        mark = Number(prompt("Invalid! Enter marks between 0 and 100:"));
    }

    marks[i] = mark;
    total = total + mark;
}

// Calculations
let average = total / 5;
let percentage = average;

// Highest and Lowest Marks
let highest = marks[0];
let lowest = marks[0];

for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }

    if (marks[i] < lowest) {
        lowest = marks[i];
    }
}

// Grade and Rank
let grade = "";
let rank = "";

if (percentage >= 90) {
    grade = "A+";
    rank = "A+";
}
else if (percentage >= 80) {
    grade = "A";
    rank = "A";
}
else if (percentage >= 70) {
    grade = "B";
    rank = "B";
}
else if (percentage >= 50) {
    grade = "C";
    rank = "C";
}
else {
    grade = "Fail";
    rank = "Fail";
}

// Display Subject Marks
document.write("<h2>Student Result</h2>");
document.write("Name: " + studentName + "<br><br>");

document.write("<b>Subject Marks:</b><br>");

for (let i = 0; i < marks.length; i++) {
    document.write("Subject " + (i + 1) + ": " + marks[i] + "<br>");
}

document.write("<br>Total Marks: " + total);
document.write("<br>Average: " + average);
document.write("<br>Percentage: " + percentage + "%");
document.write("<br>Grade: " + grade);
document.write("<br>Rank: " + rank);
document.write("<br>Highest Marks: " + highest);
document.write("<br>Lowest Marks: " + lowest);

// Switch Statement for Motivation
let day = prompt("Enter today's day (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday)");

document.write("<br><br><b>Motivational Message:</b><br>");

switch(day) {
    case "Monday":
        document.write("New week, new goals!");
        break;

    case "Tuesday":
        document.write("Keep working hard!");
        break;

    case "Wednesday":
        document.write("Halfway to success!");
        break;

    case "Thursday":
        document.write("Stay focused!");
        break;

    case "Friday":
        document.write("Finish the week strong!");
        break;

    case "Saturday":
        document.write("Learn something new today!");
        break;

    case "Sunday":
        document.write("Rest and get ready for a new week!");
        break;

    default:
        document.write("Please enter a valid day.");
}

//2
// const prompt = require("prompt-sync")();

// let customer;

// do {
//     console.log("\n===== SIMPLE BILLING SYSTEM =====");

//     let numberOfProducts = Number(prompt("Enter number of products: "));

//     let totalBill = 0;
//     let expensiveProduct = "";
//     let highestPrice = 0;

//     // Loop for multiple products
//     for (let i = 1; i <= numberOfProducts; i++) {

//         console.log("\nProduct " + i);

//         let productName = prompt("Enter product name: ");
//         let quantity = Number(prompt("Enter quantity: "));
//         let price = Number(prompt("Enter price: "));

//         let amount = quantity * price;

//         console.log("Amount = " + amount);

//         totalBill = totalBill + amount;

//         // Find most expensive product
//         if (price > highestPrice) {
//             highestPrice = price;
//             expensiveProduct = productName;
//         }
//     }

//     console.log("\nTotal Bill = " + totalBill);

//     // Discount
//     let discount = 0;

//     if (totalBill >= 5000) {
//         discount = totalBill * 0.20;
//     }
//     else if (totalBill >= 3000) {
//         discount = totalBill * 0.10;
//     }
//     else if (totalBill >= 1000) {
//         discount = totalBill * 0.05;
//     }
//     else {
//         discount = 0;
//     }

//     let billAfterDiscount = totalBill - discount;

//     // GST (18%)
//     let gst = billAfterDiscount * 0.18;

//     let finalBill = billAfterDiscount + gst;

//     console.log("\nDiscount = " + discount);
//     console.log("GST = " + gst);
//     console.log("Final Bill = " + finalBill.toFixed(2));

//     console.log("Most Expensive Product = " + expensiveProduct);

//     // Payment Method
//     let payment = prompt("\nEnter Payment Method (Cash/UPI/Card): ");

//     switch (payment.toLowerCase()) {
//         case "cash":
//             console.log("Payment by Cash.");
//             break;

//         case "upi":
//             console.log("Payment by UPI.");
//             break;

//         case "card":
//             console.log("Payment by Card.");
//             break;

//         default:
//             console.log("Invalid Payment Method.");
//     }

//     customer = prompt("\nCalculate bill for another customer? (yes/no): ");

// } while (customer.toLowerCase() == "yes");

// console.log("\nThank You!");