const employees = [
  {
    firstName: 'Jen',
    lastName: 'Barber',
    id: '4521',
    title: 'Team Lead',
    annualSalary: 80000,
  },
  {
    firstName: 'Maurice',
    lastName: 'Moss',
    id: '8724',
    title: 'Support Team',
    annualSalary: 58000,
  },
  {
    firstName: 'Roy',
    lastName: 'Smith',
    id: '9623',
    title: 'Quality Assurance',
    annualSalary: 48000,
  },
];

onReady();

function onReady() {
  console.log('DOM Ready');
  render(employees);
}

function submitForm(event) {
  event.preventDefault();

  //Create new employee from user input
  const employee = {
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    id: document.getElementById('id').value,
    title: document.getElementById('title').value,
    annualSalary: Number(document.getElementById('annual-salary').value),
  };
  //Push new object to array
  employees.push(employee);

  //Render array
  render(employees);
}

function render(array) {
  const table = document.getElementById('table-body');
  //Clear table
  table.innerHTML = '';
  //Loop through array creating new row with
  for (let i = 0; i < array.length; i++) {
    const row = document.createElement('tr');
    row.id = i;
    row.innerHTML = `
    <td>${array[i].firstName}</td>
    <td>${array[i].lastName}</td>
    <td>${array[i].id}</td>
    <td>${array[i].title}</td>
    <td>${array[i].annualSalary}</td>
    <td><button onclick=deleteEntry(event) >Delete</button></td>
`;
    //Add row to table
    table.appendChild(row);
  }

  const monthlyTotal = document.getElementById('total');
  total.innerText = `Total Monthly: ${calcTotal(employees)}`;
}

function calcTotal(array) {
  return array
    .map((element) => element.annualSalary)
    .reduce((count, sum) => (sum += count), 0);
}

function deleteEntry(event) {
  employees.splice(event.target.parentElement.parentElement.id, 1);

  render(employees);
}
