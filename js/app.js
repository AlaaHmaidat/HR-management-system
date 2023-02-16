'use strict';
//BluePrint (constructor) to generate an employee object
function EmployeeInfo(fullName, department, level, imageURL) {
    this.employeeID = randomID();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0;
}
//prototype function for calculating the salary
EmployeeInfo.prototype.salaryFunc = function () {

    if (this.level === "Senior") {
        let randSalSenior = randomSalary(1500, 2000);
        randSalSenior *= 0.075;
        this.salary = Math.ceil(randSalSenior);
    }
    else if (this.level === "Mid-Senior") {
        let randSalMidSenior = randomSalary(1000, 1500);
        randSalMidSenior *= 0.075;
        this.salary = Math.ceil(randSalMidSenior);
    }
    else {
        let randSalJunior = randomSalary(500, 1000);
        randSalJunior *= 0.075;
        this.salary = Math.ceil(randSalJunior);
    }
}
//random number between the minimum and maximum salary
function randomSalary(min, max) {
    return (Math.random() * (max - min) + min);
}

//create a render prototype function to render each employee name with their salary in the home page
let div = document.getElementById('EmployeeInfo');
let table = document.createElement('table');
div.appendChild(table);

EmployeeInfo.prototype.render = function () {

    const container = document.getElementById('employee');
    console.log(container);

    const divEl = document.createElement('div');
    container.appendChild(divEl);
    // display employee ID 
    const employeeIdEl = document.createElement('h3');
    divEl.appendChild(employeeIdEl);
    employeeIdEl.textContent = this.employeeID;
    // display employee name 
    const employeeNameEl = document.createElement('h3');
    divEl.appendChild(employeeNameEl);
    employeeNameEl.textContent = this.fullName;
    // display employee Department 
    const employeeDepartmentEl = document.createElement('h3');
    divEl.appendChild(employeeDepartmentEl);
    employeeDepartmentEl.textContent = this.department;
    // display employee level 
    const employeeLevelEl = document.createElement('h3');
    divEl.appendChild(employeeLevelEl);
    employeeLevelEl.textContent = this.level;

    // display employee img 
    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src',this.imageURL);
    imgEl.width = "150";
    imgEl.height = "150";

    // display employee salary 
    const employeeSalaryEl = document.createElement('h3');
    divEl.appendChild(employeeSalaryEl);
    employeeSalaryEl.textContent = this.salary;
    //console.log(container);
    // document.write(`<table>${this.fullName} ${this.salary}</table>`);
}
//Create a function to generate a unique four digits employee id number
function randomID() {
    let unique = new Date().valueOf();
    return (String(unique).substring(0, 4));
}

//event listener to get the data from the form instead of having hard coded data
let employeeForm = document.getElementById("EmployeeInfoForm");
employeeForm.addEventListener('submit', addNewEmployeeHandler);

function addNewEmployeeHandler(event) {
    event.preventDefault();
    console.log(event);
    let EmployeeName = event.target.name.value;
    let departmentName = event.target.departments.value;
    let Level = event.target.Levels.value;
    let imgPath = event.target.imgUrl.value;

    let newEmployee = new EmployeeInfo(EmployeeName, departmentName, Level, imgPath);
    newEmployee.salaryFunc();
    newEmployee.render();


}
//...............
let femalePic = './img/icon.png';
let malePic = './img/maleicon.png';
//let ghazi = new EmployeeInfo(1000, 'Ghazi Samer', 'Administration', 'Senior', malePic);
// let lama = new EmployeeInfo(1001, 'Lana Ali', 'Finance', 'Senior', femalePic);
// let tamara = new EmployeeInfo(1002, 'Tamara Ayoub', 'Marketing', 'Senior', femalePic);
// let safi = new EmployeeInfo(1003, 'Safi Walid', 'Administration', 'Mid-Senior', malePic);
// let omar = new EmployeeInfo(1004, 'Omar Zaid', 'Development', 'Senior', malePic);
// let rana = new EmployeeInfo(1005, 'Rana Saleh', 'Development', 'Junior', malePic);
// let hadi = new EmployeeInfo(1006, 'Hadi Ahmad', 'Finance', '	Mid-Senior', malePic);
//ghazi.render(ghazi.salaryFunc(this.level));
// lama.render(lama.salaryFunc(this.level));
// tamara.render(tamara.salaryFunc(this.level));
// safi.render(safi.salaryFunc(this.level));
// omar.render(omar.salaryFunc(this.level));
// rana.render(rana.salaryFunc(this.level));
// hadi.render(hadi.salaryFunc(this.level));
