const Employee = require("Lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id and email if provided valid arguements", () => {
            const employee = new Employee("Carissa", 123, "carissa@company.com");

            expect(employee.name).toEqual("Carissa");
            expect(employee.id).toEqual(123);
            expect(employee.email).toEqual("carissa@company.com");
        });
    });

    describe("getName", () => {
        it("should return a string of the employee's name", () => {
            const employee = new Employee("Ethan", 456, "ethan@company.com");
            expect(employee.getName()).toEqual("Ethan");
        });
    });

    describe("getID", () => {
        it("should return a number that matches employee's ID", () => {
            const employee = new Employee("Rachel", 897, "rachel@company.com");

            expect(employee.getId()).toEqual(897);
        });
    });

    describe("getEmail", () => {
        it("should return a string of the employee's email", () => {
            const employee = new Employee("Hank", 765, "hank@company.com");
            expect(employee.getEmail()).toEqual("hank@company.com");
        });
    });

    describe("getRole", () => {
        it("should return 'Employee' as the initial role", () => {
            const employee = new Employee("Gracie", 0, "gracie@company.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});