//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync')
let startingFuelLevel
let astronautsAboard
let shuttleAltitude = 0


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startingFuelLevel = input.question('Please enter your fuel level:');
startingFuelLevel = Number(startingFuelLevel);
  
  while (startingFuelLevel < 5000 || startingFuelLevel > 30000) {
     startingFuelLevel = input.question('Invalid input. Please enter a value greater than 5000 but less than 30000:');
     startingFuelLevel = Number(startingFuelLevel);
  }



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
astronautsAboard = input.question('Please enter the number of Astronauts aboard:');
astronautsAboard = Number(astronautsAboard);
  
  while (astronautsAboard <= 0 || astronautsAboard > 7) {
     astronautsAboard = input.question('Invalid input. Please enter a positive value less than or equal to 7:');
     astronautsAboard = Number(astronautsAboard);
  }
 
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuelLevel>0){
  console.log("Fuel: "+((startingFuelLevel-=(astronautsAboard*100)) + "\nAltitude: "+(shuttleAltitude+=50)));
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${shuttleAltitude} km.`);
if (shuttleAltitude >= 2000) {
  console.log("Orbit achieved!");
}
else {
  console.log("Failed to reach orbit.");
}