interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const std1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const std2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

const studentsList: Student[] = [std1, std2];

const table = document.createElement("table") as HTMLElement;

studentsList.forEach((student) => {
  const row = document.createElement("tr") as HTMLElement;
  const firstNameCell = document.createElement("td") as HTMLElement;
  const locationCell = document.createElement("td") as HTMLElement;

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
