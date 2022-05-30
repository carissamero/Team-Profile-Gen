const Engineer = require("Lib/Engineer.js");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, school", () => {
            const engineer = new Engineer("Ethan", 456, "ethan@company.com", "Ethan");
            expect(engineer).toEqual({
                name: "Ethan",
                id: 456,
                email: "ethan@company.com",
                github: "Ethan",
            });
        });
    });

    describe("getGithub", () => {
        it("should return correct value of the engineer's GitHub profile name", () => {
            const engineer = new Engineer("Ethan", 456, "ethan@company.com", "Ethan");
            expect(engineer.getGithub()).toEqual("Ethan");
        });
    });

    describe("getRole", () => {
        it("should return 'Engineer' as the role", () => {
            const engineer = new Engineer("Ethan", 456, "ethan@company.com", "Ethan");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});