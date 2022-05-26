const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, school", () => {
            const engineer = new Engineer(
                "Carissa",
                9,
                "carissa@company.com",
                "carissa"
            );
            expect(engineer).toEqual({
                name: "Carissa",
                id: 9,
                email: "carissa@company.com",
                github: "carissa",
            });
        });
    });

    describe("getGithub", () => {
        it("should return correct value of the engineer's GitHub profile name", () => {
            const engineer = new Engineer(
                "Carissa",
                9,
                "Carissa@company.com",
                "carissa"
            );
            expect(engineer.getGithub()).toEqual("Carissa");
        });
    });

    describe("getRole", () => {
        it("should return 'Engineer' as the role", () => {
            const engineer = new Engineer(
                "Carissa",
                9,
                "carissa@company.com",
                "carissa"
            );
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});