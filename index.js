// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops






if (hacker1.length > hacker2.length) {

console.log (`The drivers has the longest name, it has ${hacker1.length} characters`);
  
}  

else if (hacker1.length < hacker2.length) {

console.log (`The drivers has the longest name, it has ${hacker2.length} characters`);
  
}  

else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}




let hacker1Capitals = '';
for(let i=0; i<hacker1.length;i++){
    hacker1Capitals += hacker1[i] + ' ';
}
hacker1Capitals = hacker1Capitals.toUpperCase();

console.log(hacker1Capitals);




let nameReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--){
const char = hacker2 [i];
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






let longest = ""
if(hacker1.length >= hacker2.length){
  longest = hacker1
}

else {
  longest = hacker2
}

for(let i = 0; i < longest.length; i++){
  const hacker1Letter = hacker1[i]
  const hacker2Letter = hacker2[i]
  if (hacker1 === hacker2){
  console.log("What?! You both have the same name?")
  break
  }

  if(hacker1Letter < hacker2Letter || hacker1Letter === undefined){
    console.log("The driver's name goes first")
    break
  }

  else if (hacker1Letter < hacker2Letter ){
    console.log("Yo, the navigator goes first, definetly")
    break
  }
}