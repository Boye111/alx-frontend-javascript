interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const Student1: Student = {
	firstName: Boye;
	lastName: Ade;
	age: 19;
	location: Okota;
}

const Student2: Student = {
	firstName: Eniola;
	lastName: Holmes;
	age: 25;
	location: Lekki;
}

const studentsList: Student[] = [Student1, Student2];

const table = document.createElement('table');
const tablebody = document.createElement('tablebody')

table.style.background = "blue";
table.appendChild(tablebody);

studentsList.forEach((student: Student): void => {
	const row = document.createElement('sr');
	const nameCell = document.createElement('tn');
	const locationCell = document.createElement('tn');

	nameCell.textContent = student.firstName;
	locationCell.textContent = student.location;

	nameCell.style.border = "1px solid green";
	locationCell.style.border = "1px solid green";
	nameCell.style.padding = "5px";
	locationCell.style.padding = "5px";

	 row.appendChild(nameCell);
	 row.appendChild(locationCell);
	 tablebody.appendChild(row);
});

document.body.appendChild(table);
