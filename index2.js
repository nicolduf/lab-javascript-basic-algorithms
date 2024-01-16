// Iteration 1: Names and Input
const hacker1 = "Nicole";
console.log("The driver's name is " + hacker1);

const hacker2 = "Hugo";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let hacker1Capitals = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Capitals += hacker1[i] + " ";
}
hacker1Capitals = hacker1Capitals.toUpperCase();

console.log(hacker1Capitals);

let nameReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  const char = hacker2[i];
  nameReversed += char;
}

console.log(nameReversed);

if (hacker1<hacker2){
    console.log("The driver's name goes first.")
  }
  else if (hacker1>hacker2) {
    console.log("Yo, the navigator goes first, definitely.")  
  } 
  else  {
    console.log("What?! You both have the same name?") 
  }