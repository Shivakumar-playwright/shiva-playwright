//if statements
let age = 23;
if (age >= 18) {
    console.log("he is an adult")
}

if (1 === "1") {
    console.log("true")
}

//else statements

if (10 == 1) {
    console.log("condition is true")
} else {
    console.log("condition is false")
}

let name1 = "shiva"
let name2 = "Shiva"

if (name1 == name2) {
    console.log("names are same")
} else {
    console.log("names are different")
}

//else if statements
//else if is used to check multiple conditions
let score = 92;

if (score >= 90) {
    console.log("you got A grade")
} else if (score >= 80) {
    console.log("you got B grade")
} else if (score >= 70) {
    console.log("you got C grade")
} else if (score >= 60) {
    console.log("you got D grade")
} else {
    console.log("you got F grade")
}

//switch statements
//switch is used to check multiple values of a variable

let week = "monday"
switch (week) {
    case "monday":
        console.log("today is monday")
        break;
    case "tuesday":
        console.log("today is tuesday")
        break;
    case "wednesday":
        console.log("today is wednesday")
        break;
    case "thursday":
        console.log("today is thursday")
        break;
    case "friday":
        console.log("today is friday")
        break;
    case "saturday":
        console.log("today is saturday")
        break;
    case "sunday":
        console.log("today is sunday")
        break;
    default:
        console.log("invalid day")
}

