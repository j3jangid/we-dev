console.log('1. find bigger no. amaong two values');

let x = 9876;
let y = 3456;

if (x > y) {
    console.log(x + ' is bigger then ' + y);
} else if (y > x) {
    console.log(y + ' is bigger then ' + x);
} else if (x == y) {
    console.log(x + ' is equle to ' + y);
} else {
    console.log("not Valid");
};


console.log('2. Sort 3 Values');
let a = 10;
let b = -4;
let c = 3;

if (a > b && a > c) {
    if (b > c) {
        console.log(a, b, c);
    } else {
        console.log(a, c, b);
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log(b, a, c);
    } else {
        console.log(b, c, a);
    }
} else if (c > a && c > b) {
    if (a > b) {
        console.log(c, a, b);
    } else {
        console.log(c, b, a);
    }
}

console.log('3. Find The Largest Value');

a = 2;
b = 3;
c = 123;
d = 8;
e = 6;

if (a >= b && a >= c && a >= d && a >= e) {
    console.log(a);

} else if (b >= a && b >= c && b >= d && b >= e) {
    console.log(b);

} else if (c >= a && c >= b && c >= d && c >= e) {
    console.log(c);

} else if (d >= a && d >= b && d >= c && d >= e) {
    console.log(d);

} else if (e >= a && e >= b && e >= c && e >= d) {
    console.log(e);

} else {
    console.log("Given Numbers are not Correct");
};

console.log('4. Check odd or even till n');

let n = 20;
let i = 0

while (i <= n) {
    if (i % 2 == 0) {
        console.log(i + ' - is a even Number');
    } else {
        console.log(i + ' - is a odd Number');
    }
    i++;
}

console.log('5. Marks To Grade');


let avgMark = {
    jatin: 45,
    mahesh: 60,
    kailash: 70,
    kamal: 75,
    hariom: 100,
}

let avgMarks = avgMark.hariom

if (avgMarks < 60) {
    console.log("F");
} else if (avgMarks < 70) {
    console.log("D");
} else if (avgMarks < 80) {
    console.log("C");
} else if (avgMarks < 90) {
    console.log("B");
} else if (avgMarks < 100) {
    console.log("A");
} else if (avgMarks = 100) {
    console.log("Full");
} else {
    console.log("Scam");
};


console.log('Q 6. insted');

i = 1;

while (i <= 100) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " FizzBuzz");
    } else if (i % 5 == 0) {
        console.log(i + " Buzz");
    } else if (i % 3 == 0) {
        console.log(i + " Fizz");
    } else {
        console.log(i);
    }
    i++;
}

console.log("Q7. Happy no.");

let h = 1

while (h <= 10) {
    y = h ** 2
    console.log(y);

    h++;
}


console.log("Q.8 happy no. Finder Manual");

let hN = 44;

console.log('Finding HGappy Number for ' + hN);

while (hN > 3) {

    if (hN == 4) {
        console.log("Infinite Loop while " + hN);
        break;
    } else {
        function toSaperateDigits(hN) {
            digitArr = [];
            while (hN > 0) {
                digitArr.unshift(hN % 10);
                hN = Math.floor(hN / 10);
            }
            return digitArr;
        }

        // console.log(toSaperateDigits(hN));

        char = 0;
        for (let i = 0; i < toSaperateDigits(hN).length; i++) {
            newvalue = digitArr[i] ** 2;
            char = char + newvalue;
        }

        hN = char;
        console.log(hN);
    }
}


console.log("Q9 Claculate Empeloy Salary as Per Multi Branches");

salaryOf = {
    Delhi: 3000,
    Ajmer: 4000,
    Alwar: 5000,
    Jaipur: 6000,
    Jodhpur: 7000,
    indor: 8000,
    Hydrabad: 9000,
};

let arr5 = ["jai", "vijay",
    {
        name: "nitin",
        age: 26,
        office: "jaipur",
        Branch: ["Delhi", "Ajmer", "Alwar", "Jaipur", 'kashmir'],
        totalAmt: undefined

    }
]

function totalSalary(arr5, salaryOf) {
    branches = Object.keys(salaryOf);
    let empBranchSalary = [];
    for (let i = 0; i < arr5[2].Branch.length; i++) {
        let empBranch = arr5[2].Branch[i];
        let foundBranch = branches.find((e) => e == empBranch);
        if (foundBranch) {
            empBranchSalary.push(salaryOf[foundBranch]);
        }
    }

    let finalSalary = 0;
    for (let i = 0; i < empBranchSalary.length; i++) {
        finalSalary += empBranchSalary[i];
    }

    return finalSalary;
}

console.log(totalSalary(arr5, salaryOf));



console.log("Q10. Search Movie names");

const movieNames = [
    "Dilwale Dulhania Le Jayenge",
    "Sholay",
    "Lagaan",
    "3 Idiots",
    "Gully Boy",
    "Dangal",
    "Andaz Apna Apna",
    "PK",
    "Rang De Basanti",
    "Queen",
    "Kabhi Khushi Kabhie Gham",
    "Zindagi Na Milegi Dobara",
    "Munna Bhai M.B.B.S.",
    "Bhaag Milkha Bhaag",
    "Padmaavat",
    "Dabangg",
    "Kaho Naa... Pyaar Hai",
    "Mughal-e-Azam",
    "Chak De! India",
    "Om Shanti Om",
    "Gangs of Wasseypur",
    "Hum Aapke Hain Koun..!",
    "Kuch Kuch Hota Hai",
    "Mohabbatein",
    "Kabir Singh",
    "Baahubali: The Beginning",
    "Bahubali 2: The Conclusion",
    "Raazi",
    "Bajrangi Bhaijaan",
    "Barfi!",
    "Lage Raho Munna Bhai",
    "Jab We Met",
    "Swades",
    "Veer-Zaara",
    "Chennai Express",
    "Raanjhanaa",
    "My Name Is Khan",
    "Dil Chahta Hai",
    "Kal Ho Naa Ho",
    "Ra.One",
    "Koi... Mil Gaya",
    "Krrish",
    "Kabhi Alvida Naa Kehna",
    "Kapoor & Sons",
    "Jodhaa Akbar",
    "Devdas",
    "Kuch Naa Kaho",
    "Dil Se..",
    "Lakshya",
    "Krrish 3"
];


let search = "dil";
let caseSearch = search.toLowerCase();

i = 0;
while (i < movieNames.length) {
    movieCase = movieNames[i].toLowerCase();
    res = movieCase.search(caseSearch);
    // console.log(res);
    if (res >= 0) {
        console.log(movieNames[i]);
    }
    i++;
}

console.log("Q10. Search Movie names 2nd Method");

i=0;
while(i<movieNames.length){
    movieCase = movieNames[i].toLowerCase();
    let tempMovie = movieCase.split(" ");
    for (let j = 0; j < tempMovie.length; j++) {
        res = tempMovie[j].search(caseSearch);
        if (res == 0) {
            console.log(movieNames[i]);
            break;
        } 
    }
    i++;
};

console.log("Q11. Palindrome Elements in Arrey");

let pArr = ["anna", "ada", "jatin", "bhavishya", "nitin"];

i = 0;
while (i < pArr.length) {
    let rev = pArr[i].split("").reverse().join("");
    comp = pArr[i] == rev;
    if(comp == true){
        console.log(pArr[i]+ " is Palindrome.");
    }else{
        console.log(pArr[i]+ " is Not Palindrome.");
    }
    i++;
};

