'use strict';
let passEmpArr = JSON.parse(localStorage.getItem("allEmployee"));

function render() {


    if (passEmpArr == null) //localstorage is empty
    {
        passEmpArr = [];
    }

    //creates a <table> element and a <tbody> element
    const tbl = document.getElementById('employeeTable');
    const tblBody = document.createElement("tbody");
    let countA = 0, countM = 0, countD = 0, countF = 0;
    let avgA = 0, avgM = 0, avgD = 0, avgF = 0;
    let salA = 0, salM = 0, salD = 0, salF = 0;

    //creating all cells
    for (let i = 0; i < 5; i++) { //creating row
        //creates a table row
        const row = document.createElement("tr");

        for (let j = 0; j < 4; j++) {//creating column
            //Create a <td> and <th>

            if (i == 0) {
                const headercell = document.createElement("th");
                headercell.classList.add("styleth");

                if (i == 0 && j == 0) {
                    headercell.textContent = `Department Name`;
                }
                else if (i == 0 && j == 1) {
                    headercell.textContent = `Number of employees`;
                }
                else if (i == 0 && j == 2) {
                    headercell.textContent = `Average salary`;
                }
                else {
                    headercell.textContent = `Total salary`;
                }
                row.appendChild(headercell);
            }
            if (i > 0) {
                const cell = document.createElement("td");
                cell.classList.add("styleth");

                if (i == 1 && j == 0) {//Department Name (Administration)
                    cell.textContent = `Administration`;
                }
                else if (i == 2 && j == 0) {//Department Name (Marketing)
                    cell.textContent = `Marketing`;
                }
                else if (i == 3 && j == 0) {//Department Name (Development)
                    cell.textContent = `Development`;
                }
                else if (i == 4 && j == 0) {//Department Name (Finance)
                    cell.textContent = `Finance`;
                }
                //.................................................................end the first column
                else if (i == 1 && j == 1) {//Number of employees (Administration)

                    for (let a = 0; a < passEmpArr.length; a++) {
                        if (passEmpArr[a].department == `administration`) {
                            countA++;
                            cell.textContent = countA;
                        }
                    }
                }
                else if (i == 2 && j == 1) {//Number of employees (Marketing)
                    for (let m = 0; m < passEmpArr.length; m++) {
                        if (passEmpArr[m].department == `marketing`) {
                            countM++;
                            cell.textContent = countM;
                        }
                    }
                }
                else if (i == 3 && j == 1) {//Number of employees (Development)
                    for (let d = 0; d < passEmpArr.length; d++) {
                        if (passEmpArr[d].department == `development`) {
                            countD++;
                            cell.textContent = countD;
                        }
                    }
                }
                else if (i == 4 && j == 1) {//Number of employees (Finance)
                    for (let f = 0; f < passEmpArr.length; f++) {
                        if (passEmpArr[f].department == `finance`) {
                            countF++;
                            cell.textContent = countF;
                        }
                    }
                }//.................................................................end the second column
                else if (i == 1 && j == 2) {//Average salary (Administration)
                    for (let a = 0; a < passEmpArr.length; a++) {
                        if (passEmpArr[a].department == `administration`) {
                            salA += passEmpArr[a].salary;
                            avgA = salA / countA;
                            cell.textContent = avgA;
                        }
                    }
                }
                else if (i == 2 && j == 2) {//Average salary (Marketing)
                    for (let m = 0; m < passEmpArr.length; m++) {
                        if (passEmpArr[m].department == `marketing`) {
                            salM += passEmpArr[m].salary;
                            avgM = salM / countM;
                            cell.textContent = avgM;
                        }
                    }


                }
                else if (i == 3 && j == 2) {//Average salary (Development)
                    for (let d = 0; d < passEmpArr.length; d++) {
                        if (passEmpArr[d].department == `development`) {
                            salD += passEmpArr[d].salary;
                            avgD = salD / countD;
                            cell.textContent = avgD;

                        }
                    }
                }
                else if (i == 4 && j == 2) {//Average salary (Finance)
                    for (let f = 0; f < passEmpArr.length; f++) {
                        if (passEmpArr[f].department == `finance`) {
                            salF += passEmpArr[f].salary;
                            avgF = salF / countF;
                            cell.textContent = avgF;
                        }
                    }
                }//.................................................................end the third column
                else if (i == 1 && j == 3) {//Total salary (Administration)
                    cell.textContent = salA;

                }
                else if (i == 2 && j == 3) {//Total salary (Marketing)
                    cell.textContent = salM;

                }
                else if (i == 3 && j == 3) {//Total salary (Development)
                    cell.textContent = salD;

                }
                else {//Total salary (Finance)
                    cell.textContent = salF;

                }//.................................................................end the fourth column

                row.appendChild(cell);
            }

        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

}
render();
