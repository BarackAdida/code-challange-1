// prompts the user to enter basic salary and total benefits
const basicSalary = prompt("Enter basic salary:");
const totalBenefits = prompt("Enter totalBenefits:")
//calculates the gross pay
const grossPay = basicSalary + totalBenefits;
    console.log(`Gross Pay: ${grossPay}`);

let nhifRate;
// if fetchs the coresponding value of nhif rate from the grossPay calculated
if(grossPay <= 5999){
    nhifRate = "150"
} else if(grossPay >= 6000 && grossPay <= 7999) {
    nhifRate = "300"
} else if(grossPay >= 8000 && grossPay <= 11999) {
    nhifRate = "400"
} else if(grossPay >= 12000 && grossPay <= 14999) {
    nhifRate = "500"
} else if(grossPay >= 15000 && grossPay <= 19999) {
    nhifRate = "600"
} else if(grossPay >= 20000 && grossPay <= 24999) {
    nhifRate = "750"
} else if(grossPay >= 25000 && grossPay <= 29999) {
    nhifRate = "850"
} else if(grossPay >= 30000 && grossPay <= 34999) {
    nhifRate = "900"
} else if(grossPay >= 35000 && grossPay <= 39999) {
    nhifRate = "950"
} else if(grossPay >= 40000 && grossPay <= 44999) {
    nhifRate = "1000"
} else if(grossPay >= 45000 && grossPay <= 49999) {
    nhifRate = "1100"
} else if(grossPay >= 50000 && grossPay <= 59999) {
    nhifRate = "1200"
} else if(grossPay >= 60000 && grossPay <= 69999) {
    nhifRate = "1300"
} else if(grossPay >= 70000 && grossPay <= 79999) {
    nhifRate = "1400"
} else if(grossPay >= 80000 && grossPay <= 89999) {
    nhifRate = "1500"
} else if(grossPay >= 90000 && grossPay <= 99999) {
    nhifRate = "1600"
} else  {
    nhifRate = "1700"
}
console.log(`nhif deduction = ${nhifRate}`)

// calculates nssfRate from basic salary
const nssfRate = basicSalary * 0.06
console.log(`nssfRate = ${nssfRate}`)

//calculates the PAYE
const PAYE = nhifRate + nssfRate;
console.log(`PAYE = ${PAYE}`)

//calculates the net salary
const netSalary = grossPay - PAYE;
console.log(`net salary = ${netSalary}`);
