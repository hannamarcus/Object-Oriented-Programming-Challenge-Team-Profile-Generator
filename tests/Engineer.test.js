const Engineer = require('../lib/Engineer');

test('Can pull GitHub account via constructor'), () => {
    const testValue = "hasGitHubAccount";
    const e = new Engineer("John", 0001, "john.doe@gmail.com", testValue);

    expect(e.github).toBe(testValue);
}

    test("expect getRole() to be \"Engineer\"", () => {
        const testValue = "Engineer";
        const e = new Engineer("John", 0001, "john.doe@gmail.com", "GitHubUser");

        expect(e.getRole()).toBe(testValue);
      });
      
      test("Username from getGitHub()", () => {
        const testValue = "hasGitHubAccount";
        const e = new Engineer("John", 001, "john.doe@gmail.com", testValue);

        expect(e.getGithub()).toBe(testValue);
      });