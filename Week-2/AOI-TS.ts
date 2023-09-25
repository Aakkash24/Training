type Address = {
  PA: string;
  TA: string;
};

type ContactInfo = {
  email: string;
  mobile: string;
};

type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  position: string;
  address: Address;
  contactInfo: ContactInfo;
};

const employees: Employee[] = [
  {
    name: 'Aakkash',
    age: 10,
    position: 'Software Engineer',
    address: { PA: 'ABC Street', TA: 'XVZ City' },
    contactInfo: { email: '123@example.com', mobile: '123-456-7890' }
  },
  {
    name: 'James',
    age: 99,
    position: 'Software Manager',
    address: { PA: '456 St', TA: 'OPE City' },
    contactInfo: { email: '456@example.com', mobile: '987-654-3210' }
  }
];

function displayEmployeeInfo(employee: Employee): void {
  console.log(`Name: ${employee.name}`);
  console.log(`Age: ${employee.age}`);
  console.log(`Position: ${employee.position}`);
  console.log(`Address: ${employee.address.PA}, ${employee.address.TA}`);
  console.log(`Contact Email: ${employee.contactInfo.email}`);
  console.log(`Contact Phone: ${employee.contactInfo.mobile}`);
}

function displayEmployees(employees: Employee[]): void {
  for (const employee of employees) {
    displayEmployeeInfo(employee);
  }
}

displayEmployees(employees);
