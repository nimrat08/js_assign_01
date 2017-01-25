let A=[];
let myArr=process.argv;
let mealCost=A.push(Number(myArr[2]));
let tipPercent=A.push(Number(myArr[3]));
let tipAmount=myArr[3]/100*myArr[2];
const totalOwing=Number(myArr[2])+tipAmount;


console.log(totalOwing);
