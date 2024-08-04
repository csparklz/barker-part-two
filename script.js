console.log("Script is running"); 
const userName = prompt("Welcome to GC mini golf! What is your name?");
console.log(`User name: ${userName}`); 
const numberOfHoles = parseInt(prompt(`Hi, ${userName}! Would you like to play 3 or 6 holes?`));
console.log(`Number of holes: ${numberOfHoles}`); 
let totalPutts = 0;
const parPerHole = 3;
const totalPar = numberOfHoles * parPerHole;
console.log(`Total par for the course: ${totalPar}`); 
for (let i = 1; i <= numberOfHoles; i++) {
    const putts = parseInt(prompt(`How many putts for hole ${i}? (par: ${parPerHole})`));
    console.log(`Putts for hole ${i}: ${putts}`); 
    totalPutts += putts;
}
console.log(`Total putts: ${totalPutts}`);
alert(`Total putts: ${totalPutts}`); 
const totalParResult = totalPutts - totalPar;
console.log(`Total par result: ${totalParResult}`);
alert(`Total par result: ${totalParResult}`); 
if (totalParResult > 0) {
    console.log(`Nice try, ${userName}... Your total par was: +${totalParResult}.`);
    alert(`Nice try, ${userName}... Your total par was: +${totalParResult}.`);
} else if (totalParResult < 0) {
    console.log(`Great job, ${userName}! Your total par was: ${totalParResult}.`);
    alert(`Great job, ${userName}! Your total par was: ${totalParResult}.`);
} else {
    console.log(`Good game, ${userName}. Your total par was: 0.`);
    alert(`Good game, ${userName}. Your total par was: 0.`);
}