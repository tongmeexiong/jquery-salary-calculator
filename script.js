$(document).ready(nowReady);

let employeeInfo = [];
let id = [];
let sumOfSalary = 0;
let monthlyAdjustment = 12;


function nowReady() {
    console.log('JQ');
    $('.submitButton').on('click', submitInfo);
    displayInfo();
    calculateMonthlyAdjustment();
    $('.deleteButton').on('click', deleteButton);
}

function submitInfo() {
    let employeeObject = {
        firstName: $('.firstNameInput').val(),
        lastName: $('.lastNameInput').val(),
        employeriD: $('.idInput').val(),
        title: $('.titleInput').val(),
        annualSalary: $('.salaryInput').val()
    }
    employeeInfo.push(employeeObject);
    sumOfSalary += parseFloat(employeeObject.annualSalary);
    console.log('Clicked Submit Button', employeeInfo);
    console.log(sumOfSalary);
    displayInfo()
}

function displayInfo() {
    console.log('DisplayInfo');
    let employeeInput = $('#salaryCalculated');
    employeeInput.empty();
    for (let i = 0; i < employeeInfo.length; i++) {
        const calculatedList = `<ul>${employeeInfo[i].firstName} ${employeeInfo[i].lastName} 
        ${employeeInfo[i].employeriD} ${employeeInfo[i].title} ${employeeInfo[i].annualSalary} $</ul>`;

        employeeInput.append(calculatedList);
        calculateMonthlyAdjustment()
    }
}


function calculateMonthlyAdjustment() {
    console.log('Calculation');
    let totalMonthlyCost = $('.annualSalaryCalculated');
    totalMonthlyCost.empty();
        let theMonthlyCost = sumOfSalary / 12;
        totalMonthlyCost.append(`<div>Total Monthly: ${theMonthlyCost} </div>`);
    }


    function deleteButton() {
        console.log('Delete Button');
        let employeeObject = {
            firstName: $('.firstNameInput').val(),
            lastName: $('.lastNameInput').val(),
            employeriD: $('.idInput').val(),
            title: $('.titleInput').val(),
            annualSalary: $('.salaryInput').val()
    }
    id.push(employeeObject.employeriD)
        for(let i = 0; i < employeeInfo.length; i++) {
            if (employeeInfo[i].employeriD === employeeObject.employeriD);
            employeeInfo.splice(i,1);
            
        }
        submitInfo();
    }
