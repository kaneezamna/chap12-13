// character type check//

// let chart = prompt("Enter a character:");
// let asciiCode = chart

// if (asciiCode >= 48 && asciiCode <= 57) {
//     document.write("The character is a number.");
// } 
// else if (asciiCode >= 65 && asciiCode <= 90) {
//     document.write ("The character is an uppercase letter.");
// } 
// else if (asciiCode >= 97 && asciiCode <= 122) {
//     document.write("The character is a lowercase letter.");
// } 
// else {
//     document.write("The character is not a number or letter.");
// }


// check integer and display the larger and eqaul also//


// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 > num2) {
//         document.write('The larger number is ',num1);
//     } 
//     else if (num2 > num1) {
//         document.write('The larger number is', num2);
//     } 
//     else if (num1===num2){
//         document.write("Both numbers are equal.");
//     }
//     else{
//         document.write("Invalid inputs!");
//     }
    
    // state number is positive negitive or zero//

//     let num = prompt("enter a number");
    
//     if (number > 0) {
//     document.write("The number is positive.");
//      }
//     else if (number < 0) {
//     document.write("The number is negative.");
//    } 
//     else {
//     document.write("The number is zero.");
//    }
    
// character length check its vowel value//

// let inputChar = prompt("Enter a single character to check if it's a vowel:");


// if (inputChar.length === 1) {
//     let vowels = "aeiouAEIOU";
//     if (vowels.includes(inputChar)) {
//         document.write("True . It is a vowel.");
//     } else {
//         document.write("False . It is not a vowel.");
//     }
// } else {
//     document.write("Please enter only a single character!");
// }

// password validation checking//


// let corectPass = "karachi";
// let inputPassword = prompt("Enter your password:");

// if (!inputPassword) {
//     document.write("Please enter your password.");
// }
//  else if (inputPassword === corectPass) {
//     document.write("Correct! The password you entered matches the original password.");
// }
//  else {
//     document.write("Incorrect password.");
// }
    
// fix the if/else if statement//

let greeting;
let hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
 else {
    greeting = "Good evening";
}
document.write(greeting);

// time format check//

let time = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7 PM):"));
if (time >= 0 && time < 1200) {
    document.wwrite("Good Morning");
} else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    document.write("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    document.write("Good Night");
} else {
    document.write("Invalid time entered.!");
}

    