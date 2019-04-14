$(document).ready(nowReady);

let employeeInfo =[];
let monthlyCosts = [];
let monthlyAdjustment = 12;
let sumOfSalary = 0;


function nowReady() {
    console.log('JQ');
    $('.submitButton').on('click', submitInfo);
    displayInfo();
    calculateMonthlyAdjustment() 
    addAnnualSalary()
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
    monthlyCosts.push(employeeObject.annualSalary);
    console.log('Clicked Submit Button', employeeInfo); 
    displayInfo()
}

function displayInfo() {
    console.log('DisplayInfo');
    let employeeInput = $('#salaryCalculated');
    employeeInput.empty();
    for (let i = 0; i < employeeInfo.length; i++ ){
        const calculatedList = `<ul>${employeeInfo[i].firstName} ${employeeInfo[i].lastName} 
        ${employeeInfo[i].employeriD} ${employeeInfo[i].title} ${employeeInfo[i].annualSalary}</ul>`;
        employeeInput.append(calculatedList);
        calculateMonthlyAdjustment()
        addAnnualSalary() 
    }
}


function addAnnualSalary() {
    for (let i = 0; i < monthlyCosts.length; i++) {
        sumOfSalary = sumOfSalary + monthlyCosts[i];
    }
}

function calculateMonthlyAdjustment() {
    console.log('Calculation');
    let totalMonthlyCost = $('.annualSalaryCalculated');
    totalMonthlyCost.empty ();
    for (let i = 0; i < monthlyCosts.length; i++) {
        let theMonthlyCost = sumOfSalary / monthlyAdjustment;
        totalMonthlyCost.append(theMonthlyCost);
    }  
}
