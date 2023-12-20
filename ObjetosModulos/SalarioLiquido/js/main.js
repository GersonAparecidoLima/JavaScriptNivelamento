import Employee from './models/employee.js';
import * as salaryService from './Services/salary-service.js';

//split('\n') já converteu para um vetor
const data = document.getElementById("grossSalaryInput").innerHTML.split('\n');

//Number(data[1]) já converte o string para numero
const employee = new Employee(data[0], Number(data[1]));

const netSalary = salaryService.netSalary(employee);

console.log(`Funcionário = ${employee.name}`)
console.log(`Salário bruto = ${employee.grossSalary.toFixed(2)}`)
console.log(`Salário líquido = ${netSalary.toFixed(2)}`);