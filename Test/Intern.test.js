const Intern = require("Lib/Intern.js");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, school", () => {
            const intern = new Intern(
                "Rachel",
                897,
                "rachel@company.com",
                "University of Texas at Austin"
            );
            expect(intern).toEqual({
                name: "Rachel",
                id: 897,
                email: "rachel@company.com",
                school: "University of Texas at Austin",
            });
        });
    });

    describe("getSchool", () => {
        it("should return correct value of the intern's school", () => {
            const intern = new Intern(
                "Rachel",
                897,
                "rachel@company.com",
                "University of Texas at Austin"
            );
            expect(intern.getSchool()).toEqual("University of Texas at Austin");
        });
    });

    describe("getRole", () => {
        it("should return 'Intern' as the role", () => {
            const intern = new Intern(
                "Rachel",
                897,
                "rachel@company.com",
                "University of Texas at Austin"
            );
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});