const storedJsonArray = JSON.parse(localStorage.getItem('formDataJsonArray')) || [];
const table = document.createElement('table');
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['Fullname','Date of Birth', 'Username', 'Email', 'Mobile'];
  
headers.forEach(headerText => {
    const th = document.createElement('th');
    th.appendChild(document.createTextNode(headerText));
    headerRow.appendChild(th);
});
  
thead.appendChild(headerRow);
table.appendChild(thead);
 
const tbody = document.createElement('tbody');
 
storedJsonArray.forEach(jsonData => {
    const userData = JSON.parse(jsonData);
    const row = document.createElement('tr');
    const properties = ['fullName', 'dob', 'username', 'email', 'mobile'];
 
    properties.forEach(prop => {
      const cell = document.createElement('td');
      cell.appendChild(document.createTextNode(userData[prop]));
      row.appendChild(cell);
    });
 
tbody.appendChild(row);
});
 
table.appendChild(tbody);
document.getElementById('table').appendChild(table);
