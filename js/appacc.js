'use strict';
let passEmpArr = localStorage.getItem("employeeArr");
console.log(passEmpArr);
function render() {

    //get the arr from the localstorage
    // let jsonArr = localStorage.getItem("allEmployee");
    // employeeArr = JSON.parse(jsonArr);

    // creates a <table> element and a <tbody> element
    const tbl = document.getElementById('employeeTable');
    const tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < 5; i++) {
        // creates a table row
        const row = document.createElement("tr");

        for (let j = 0; j < 4; j++) {
            // Create a <td> and <th>

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
                }
                else if (i == 2 && j == 1) {//Number of employees (Marketing)
                }
                else if (i == 3 && j == 1) {//Number of employees (Development)
                }
                else if (i == 4 && j == 1) {//Number of employees (Finance)
                }//.................................................................end the second column
                else if (i == 1 && j == 2) {//Average salary (Administration)
                }
                else if (i == 2 && j == 2) {//Average salary (Marketing)
                }
                else if (i == 3 && j == 2) {//Average salary (Development)
                }
                else if (i == 4 && j == 2) {//Average salary (Finance)
                }//.................................................................end the third column
                else if (i == 1 && j == 3) {//Total salary (Administration)
                }
                else if (i == 2 && j == 3) {//Total salary (Marketing)
                }
                else if (i == 3 && j == 3) {//Total salary (Development)
                }
                else {//Total salary (Finance)
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
