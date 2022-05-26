const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, school", () => {
            const engineer = new Engineer("Hank", 765, "hank@company.com", "hank");
            expect(engineer).toEqual({
                name: "Hank",
                id: 765,
                email: "hank@company.com",
                github: "hank",
            });
        });
    });

    describe("getGithub", () => {
        it("should return correct value of the engineer's GitHub profile name", () => {
            const engineer = new Engineer("Hank", 765, "hank@company.com", "hank");
            expect(engineer.getGithub()).toEqual("Hank");
        });
    });

    describe("getRole", () => {
        it("should return 'Engineer' as the role", () => {
            const engineer = new Engineer("Hank", 765, "hank@company.com", "hank");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});