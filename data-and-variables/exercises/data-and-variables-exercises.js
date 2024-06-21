// Declare and assign the variables below
const milesPerKilometer = 0.621;
let nameSpaceShuttle = "Determination";
let shuttleSpeed = 17500; //mph
let distanceMars = 225000000; //km
let distanceMoon = 384400; //km
 
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(milesPerKilometer));
console.log(typeof(nameSpaceShuttle));
console.log(typeof(shuttleSpeed));
console.log(typeof(distanceMars));
console.log(typeof(distanceMoon));

// Calculate a space mission below
let milesToMars = distanceMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

console.log(nameSpaceShuttle + " will take " + daysToMars + " days to reach Mars.")

// Calculate a trip to the moon below
let milesToMoon = distanceMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24



// Print the results of the trip to the moon below

console.log(nameSpaceShuttle + " will take " + daysToMoon + " days to reach the Moon.")