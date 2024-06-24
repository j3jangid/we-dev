// if else condition

let value = "?";

if (value % 1 == 0) {
    console.log("Number");

} else if (value >= "a" && value <= "z") {
    console.log("smallAlphabet");

} else if (value >= "A" && value <= "Z") {
    console.log("capitalAlphabet");

} else {
    console.log("symbol");
};


console.log("leap Year Finder")

let year = 1900;

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(year + " is a leap year");

} else {
    console.log(year + " is not a leap year");
}

console.log("marks system");

let marks = 100;

if (marks < 33) {
    console.log('Fail');
} else if (marks < 45) {
    console.log("Pass With 3rd Div.");
} else if (marks < 60) {
    console.log("Pass With 2nd Div");
} else if (marks <= 90) {
    console.log("Pass With 1st Div");
} else if (marks <= 100) {
    console.log("You are a Topper");
} else {
    console.log("This is a Scam");
}


if (marks >= 33) {
    if (marks > 100) {
        console.log("invalid");
    } else {
        if (marks > 90) {
            console.log("Topper");
        } else {
            if (marks >= 60) {
                console.log("First Div")
            } else {
                if (marks >= 45) {
                    console.log("Second Div");
                } else {
                    console.log("Third Div.");
                }

            }

        }

    }

} else {
    console.log("fail");
}



// Switch Case

console.log("switchCase");

let day = 0

switch (day) {
    case 0: console.log("Sunday");
        
        break;
    case 1: console.log("Monday");
        
        break;
    case 2: console.log("Tuesday");
        
        break;
    case 3: console.log("Wednesday");
        
        break;
    case 4: console.log("Thrusday");
        
        break;
    case 5: console.log("Friday");
        
        break;
    case 6: console.log("Saturday");
        
        break;
        
    default: console.log("Invalid Day");
        break;
}