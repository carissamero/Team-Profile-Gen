const Manager = require("../Lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, officeNumber", () => {
            const manager = new Manager("Carissa", 123, "carissa@company.com", "A12");
            expect(manager).toEqual({
                name: "Carissa",
                id: 123,
                email: "carissa@company.com",
                officeNumber: "A12",
            });
        });
    });

    describe("getRole", () => {
        it("should return 'Manager' as the role", () => {
            const manager = new Manager("Carissa", 123, "carissa@company.com", "A12");
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});