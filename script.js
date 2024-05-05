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

function onReady() {
  console.log('DOM Ready');
  render();
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
  console.log(employee);

  //Render array
  render();
}

function render(array) {
  const table = document.getElementById('employees-table');
  for (const item of array) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${item.firstName.value}</td>
    <td>${item.firstName.value}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
`;
    table.appendChild(row);
  }
}

function deleteEntry(event) {}
