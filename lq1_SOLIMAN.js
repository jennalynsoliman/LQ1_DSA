//a.personal data storage using var
//PERSONA 1
var persona1Name = "Maria Delos Santos Las Marias";
var persona1Age = 25;
var persona1Address = "Upper Session Road, Baguio City, Benguet";
//PERSONA 2
var persona2Name = "Juan Gamoso Dela Cruz";
var persona2Age = 28;
var persona2Address = "San Nicolas, Candon City, Ilocos Sur";

//b. re arrange the name sequence
// using split(), splitting the names
let reArrangeper1 = persona1Name.split(" ");
let reArrangeper2 = persona2Name.split(" ");

//re arrange the parts of the name, the double quote and the plus sign have effect in arranging the names it takes
//lead on where to put it or to arranged it
//for re arangging parts of persona 1 long name
let lastName1 = reArrangeper1.slice(3).join(" ").toUpperCase(); //for the first part which is the LAS MARIAS
let firstMidName1 = reArrangeper1.slice(0, 3).join(" ") //for first Name AND mIDDLE nAME
let fullyArrangedPer1Nm = `${lastName1},  ${firstMidName1}`; //combining the fully arranged name of the persona 1 also used dollar sign and backticks to evaluate the expresssion


// for the persona 2
let lastName2 = reArrangeper2.slice(3).join(" ").toUpperCase(); 
let firstMidName2 = reArrangeper2.slice(0, 3).join(" ") 
let fullyArrangedPer2Nm = `${lastName2},  ${firstMidName2}`;

//let persona2AranggedName = reArrangeper2[1] + ", " + reArrangeper2[0] + " " + reArrangeper2.slice(2).join("");

console.log(fullyArrangedPer1Nm); //to print the fully arranged name
console.log(fullyArrangedPer2Nm);

//c. console log output
console.log(fullyArrangedPer1Nm, persona1Age, persona1Address);
console.log(fullyArrangedPer2Nm, persona2Age, persona2Address);

//To length the Persona 1's and 2's name and their address
//d.variables manipulation
console.log(persona1Name.length);
console.log(persona2Name.length);
console.log(persona1Address.length);
console.log(persona2Address.length);

//e.applying the different kind operations
//using let to declare the variable can also used const on it
let sumOfAllNumericValues = persona1Age + persona2Age;
let addSubMulti = persona1Age + persona2Age - persona1Name.length * persona2Name.length;
let raiseTheLenght = persona1Address.length ** persona2Address.length

//printing the results of the different kind of operation
console.log(sumOfAllNumericValues);
console.log(addSubMulti);
console.log(raiseTheLenght);