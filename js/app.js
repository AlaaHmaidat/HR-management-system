'use strict';

let employeeArr = [];
//BluePrint (constructor) to generate an employee object
function EmployeeInfo(fullName, department, level, imageURL) {
    this.employeeID = randomID();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0;
    employeeArr.push(this);
}
//prototype function for calculating the salary
EmployeeInfo.prototype.salaryFunc = function () {
    console.log("aaaa");
    if (this.level === "senior") {
        let randSalSenior = randomSalary(1500, 2000);
        console.log(1500 * 0.075);
        randSalSenior = randSalSenior - ((randSalSenior * 7.5) / 100);
        console.log(randSalSenior);
        this.salary = Math.ceil(randSalSenior);
    }
    else if (this.level === "mid-senior") {
        let randSalMidSenior = randomSalary(1000, 1500);
        randSalMidSenior = randSalMidSenior - ((randSalMidSenior * 7.5) / 100);
        this.salary = Math.ceil(randSalMidSenior);
    }
    else {
        let randSalJunior = randomSalary(500, 1000);
        randSalJunior = randSalJunior - ((randSalJunior * 7.5) / 100);
        this.salary = Math.ceil(randSalJunior);
    }
}

//random number between the minimum and maximum salary
function randomSalary(min, max) {
    return (Math.random() * (max - min) + min);
}

//create a render prototype function to render each employee name with their salary in the home page

function render() {
    const container = document.getElementById('employee');
    console.log(container);
    container.innerHTML = '';

    //get the arr from the localstorage
    let jsonArr = localStorage.getItem("allEmployee");
    employeeArr = JSON.parse(jsonArr);


    if (employeeArr == null) //localstorage is empty
    {
        employeeArr = [];
    }
    for (let i = 0; i < employeeArr.length; i++) {

        const fieldsetEl = document.createElement('fieldset');
        fieldsetEl.setAttribute("id", "fieldsetid")
        container.appendChild(fieldsetEl);

        let divA = document.createElement('div');

        let divM = document.createElement('div');

        let divD = document.createElement('div');

        let divF = document.createElement('div');

            // display employee img 
            const imgEl = document.createElement('img');
            fieldsetEl.appendChild(imgEl);
            imgEl.setAttribute('src', employeeArr[i].imageURL);
            imgEl.width = "150";
            imgEl.height = "150";

            // display employee name 
            const employeeNameEl = document.createElement('p');
            fieldsetEl.appendChild(employeeNameEl);
            const strNameCap = employeeArr[i].fullName.charAt(0).toUpperCase() + employeeArr[i].fullName.slice(1);
            employeeNameEl.textContent = `Name: ${strNameCap}`
            //let strName =employeeNameEl.innerText = "Name: ";
            //employeeNameEl.textContent = strName + strNameCap;

            // display employee ID 
            const employeeIdEl = document.createElement('p');
            fieldsetEl.appendChild(employeeIdEl);
            employeeIdEl.textContent = `ID: ${employeeArr[i].employeeID}`;

            // display employee Department 
            const employeeDepartmentEl = document.createElement('p');
            const strDeparCap = employeeArr[i].department.charAt(0).toUpperCase() + employeeArr[i].department.slice(1);
            fieldsetEl.appendChild(employeeDepartmentEl);
            employeeDepartmentEl.textContent = `Department: ${strDeparCap}`;

            // display employee level 
            const employeeLevelEl = document.createElement('p');
            fieldsetEl.appendChild(employeeLevelEl);
            const strLevelCap = employeeArr[i].level.charAt(0).toUpperCase() + employeeArr[i].level.slice(1);
            employeeLevelEl.textContent = `Level: ${strLevelCap}`;

            // display employee salary 
            const employeeSalaryEl = document.createElement('p');
            fieldsetEl.appendChild(employeeSalaryEl);
            employeeSalaryEl.textContent = `Salary: ${employeeArr[i].salary}$`;

            // if(this.department=="administration"){
            //     divA.appendChild(fieldsetEl);  
            // }
            // else if(this.department=="marketing"){
            //     divM.appendChild(fieldsetEl); 
            // } 
            // else if(this.department=="development"){
            //     divD.appendChild(fieldsetEl); 
            // }
            // else {
            //     divF.appendChild(fieldsetEl); 
            // }


    }


}

//Create a function to generate a unique four digits employee id number
function randomID() {
    // let unique = new Date().valueOf();
    // return (String(unique).substring(0, 4));
    let unique = Math.floor(1000 + Math.random() * 9000);
    return unique;
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

    // convert into JSON then store the Arr in the local storage
    let jsonArr = JSON.stringify(employeeArr);
    localStorage.setItem("allEmployee", jsonArr);

    render();
}
render();

localStorage.setItem("employeeArr", employeeArr);
