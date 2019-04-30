/* output
25.2 C = 77.36 F
*/

let ctemp = parseFloat(prompt("Enter temperature in C: "));
let ftemp = ctemp*9/5+32;
// console.log("%f c = %f \n", ctemp,ftemp);
console.log(ctemp+'c = '+ftemp+'F \n');