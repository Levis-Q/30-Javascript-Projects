// data to work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Nick',
                'Beecher, Henry', 'Beethoen, Ludwig', 'Begin, Menachen', 'Blloc, Hilare',
                'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
                'Jabu, Sithole', 'Jabulile, Sithole', 'Awethu, Mtyu', 'Esethu, Somngazi',
                'David, Taeman', 'Anele, Nthlobozonke', 'Thabo, Mokwatshane', 'Karabo,Selepe',
                'Phumelele, Msani', 'Tente, Senosha', 'Tumelo, Monyokolo', 'Siyabonga, Hlongwane',
                'Sanele, Hlongwane', 'Snenhlanhla, Hlongwane', 'Zeff, Hlongwane', 'Lazarus, Ditshego',
                'Thato, Ditshego', 'Lerato, Ditshego', 'Kgotso, Ditshego', 'Kabelo, Ditshego', 'Gontse, Ditshego',
]


// Array.prototype.fiften()
//1. Fiften the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(function(inventor) {
    if(inventor.year >= 1500 && inventor.year < 1600) {

// OR UTERLISE THIS ANSWER same results

 /* const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600)) */
        return true; // keep it!
    }
});

console.log(fifteen);
console.table(fifteen);




// Array.prototype.map()
//2. Give us an array of the inventory first and last names
const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(fullNames);

// OR UTERLISE THIS ANSWER
/* 
const fullNames = inventors.map(inventor => `${inventor.first}  ${inventor.last}`);
console.log(fullNames);
 */




// Array.prototype.sort()
//3. Sort the inventors by birthdate, oldest to youngest 

/* 
const ordered = inventors.sort(function(a, b) {
    if(a.year > b.year) {
        return 1;
    }else {
        return -1;
    }
});

console.log(ordered);
console.table(ordered);
 */

// OR UTERLISE THIS ANSWER for a shorter way (turnorary operator sp)
const ordered = inventors.sort((a,b) => a.year > b.year ? 1: -1);
console.log(ordered);
console.table(ordered);



// Array.prototype.reduce()
//4. How many years did all the inventors live?

// OLD WAY TO FIND SOLUTION
/* 
var totalYears = 0;

for (var i = 0; i < inventors.length; i++) {
    totalYears += inventors[i].year
}

console.log(totalYears);  // ANS differs from modern method ANS
 */


// MODERN WAY TO FIND SOLUTION
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
},0);

console.log(totalYears);


//5. Sort the inventors by years lived

// LONG  VERSION ANS
/* 
const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = a.passed - a.year;

    if(lastGuy > nextGuy) {
        return -1;
    } else {
        return 1;
    }
});

console.table(oldest);
 */


// SHORT  VERSION ANS
const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = a.passed - a.year;

    return lastGuy > nextGuy ? -1 : 1;
});
    
console.table(oldest);


//6. creats a list of Boulevands in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/category:Boulevands_in_Paris

//7. Sort Excercise
//Sort the people alphabetically by last 
