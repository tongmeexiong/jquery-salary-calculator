$(document).ready(nowReady);

let employeeInfo =[];

function nowReady() {
    console.log('JQ');
    $('.submitButton').on('click', submitInfo)
}

function submitInfo() {
    let newEmployerInfo ={
        firstName: $('.firstNameInput').val(),
        lastName: $('.lastNameInput').val(),
        employeriD: $('.idInput').val(),
        title: $('.titleInput').val(),
        annualSalary: $('.salaryInput').val()
}
    employeeInfo.push(newEmployerInfo);
    console.log('Clicked Submit Button', employeeInfo); 

}