class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    //console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
    //this.id = "new";
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Dan");
console.log(employee1);
console.log(Department.fiscalYear);

const it = new ITDepartment("d1", ["Dan"]);
it.describe();
it.addEmployee("Max");
it.addEmployee("Dan");
it.printEmployeeInformation();
console.log(it);

const accounts = new AccountingDepartment("d2", []);
accounts.mostRecentReport = "Year end report";
accounts.addReport("Something went wrong...");
console.log(accounts.mostRecentReport);

accounts.describe();
accounts.addEmployee("Dan");
accounts.addEmployee("Max");
accounts.printEmployeeInformation();
accounts.printReports();
console.log(accounts);
