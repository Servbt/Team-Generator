const Engineer = require('../lib/engineer')

test("ckeck and see if employee is generated", ()=>{
    it("should show a new object that extends the employee class", ()=>{
        const emp = new Engineer();
        expect(typeof(e)).toBe("object");
    })
});

test("Can set name via constructor arguments", () => {
    const name = "foo";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
  });
  
  // this is for the class constructor's this.id
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Engineer("Foo", testValue);
    expect(e.id).toBe(testValue);
  });
  
  // this is for the class constructor's this.email
  
  test("Can set email via constructor argument", () => {
    const emailTest = "test@test.com";
    const e = new Engineer("Foo", 1, emailTest);
    expect(e.email).toBe(emailTest);
  });

  test("Can get github via getGithub()", () => {
    const testValue = "Github.test";
    const e = new Engineer("Foo", 1, testValue);
    expect(e.getGitub()).toBe(testValue);
  });