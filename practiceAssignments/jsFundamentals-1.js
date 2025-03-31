//Declaring Variables and logging it to the console
let country = "Nepal";
let language = "Nepali";
let continent = "Asia";
let population = 10;

console.log(population / 2);

// population++; //Increasing the population by 1

console.log(population);
console.log(population > 6);

let avgPopulation = 33;
console.log(population < avgPopulation);

let description =
  country +
  " is in " +
  continent +
  ", " +
  "and it's " +
  population +
  " million people speak " +
  language +
  ".";

console.log(description);

//Using String Literals
description = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
console.log(description);

//If/Else Statements
if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average.`
  );
}

//Type Conversion and Coercion
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 50); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

//== VS ===
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 Border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No Borders!");
// }

//Logical Operators
let isIsland = false;
if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}. :)`);
} else {
  console.log(`${country} doesn't meet your criteria. :(`);
}

//Switch Statement
