$(document).ready(nowReady);

let employeeInfo =[];
let monthlyCosts = [];

function nowReady() {
    console.log('JQ');
    $('.submitButton').on('click', submitInfo);
    displayInfo();
    calculateAnnualSalary() 
}

function submitInfo() {
    let employeeObject ={
        firstName: $('.firstNameInput').val(),
        lastName: $('.lastNameInput').val(),
        employeriD: $('.idInput').val(),
        title: $('.titleInput').val(),
        annualSalary: $('.salaryInput').val()
}
    employeeInfo.push(employeeObject);
    console.log('Clicked Submit Button', employeeInfo); 
    displayInfo()
}

function displayInfo() {
    console.log('DisplayInfo');
    let employeeInput = $('#salaryCalculated');
    employeeInput.empty();
    for (let i = 0; i < employeeInfo.length; i++ ){
        const calculatedList = `<th>${employeeInfo[i].firstName} ${employeeInfo[i].lastName} 
        ${employeeInfo[i].employeriD} ${employeeInfo[i].title} ${employeeInfo[i].annualSalary}</th>`;
        employeeInput.append(calculatedList);
        calculateAnnualSalary ();
    }
}

function calculateAnnualSalary() {
    console.log('Calculation');
    let totalMonthlyCost = $('.annualSalaryCalculated');
    totalMonthlyCost.empty
    for (let i = 0; i < employeeInfo.length; i++) {
        const monthlyCost = `<th> Monthly Cost </th>`;
    totalMonthlyCost.append(monthlyCost);
    }  
}
