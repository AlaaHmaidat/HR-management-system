'use strict';
//BluePrint (constructor) to generate an employee object
function EmployeeInfo(employeeID, fullName, department, level, imageURL,salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = salary;
}
//prototype function for calculating the salary
EmployeeInfo.prototype.salaryFunc = function (x) {

    if (this.level === "Senior") {
        let randSalSenior = randomSalary(1500,2000);
        randSalSenior *= 0.075;
        this.salary = Math.ceil(randSalSenior);
    }
    else if (this.level === "Mid-Senior") {
        let randSalMidSenior = randomSalary(1000,1500);
        randSalMidSenior *= 0.075;
        this.salary = Math.ceil(randSalMidSenior);
    }
    else {
        let randSalJunior = randomSalary(500,1000);
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

EmployeeInfo.prototype.render = function(){
    document.write(`<table>${this.fullName} ${this.salary}</table>`);
}

//...............
let femalePic='./img/icon.png';
let malePic='./img/maleicon.png';
let ghazi = new EmployeeInfo (1000 ,'Ghazi Samer','Administration','Senior', malePic);
let lama = new EmployeeInfo (1001 ,'Lana Ali','Finance','Senior', femalePic);
let tamara = new EmployeeInfo (1002 ,'Tamara Ayoub','Marketing','Senior', femalePic);
let safi = new EmployeeInfo (1003 ,'Safi Walid','Administration','Mid-Senior', malePic);
let omar = new EmployeeInfo (1004 ,'Omar Zaid','Development','Senior', malePic);
let rana = new EmployeeInfo (1005 ,'Rana Saleh','Development','Junior', malePic);
let hadi = new EmployeeInfo (1006 ,'Hadi Ahmad','Finance','	Mid-Senior', malePic);
ghazi.render(ghazi.salaryFunc(this.level));
lama.render(lama.salaryFunc(this.level));
tamara.render(tamara.salaryFunc(this.level));
safi.render(safi.salaryFunc(this.level));
omar.render(omar.salaryFunc(this.level));
rana.render(rana.salaryFunc(this.level));
hadi.render(hadi.salaryFunc(this.level));
  