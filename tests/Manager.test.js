const Manager = require('../lib/manager')

test("ckeck and see if employee is generated", ()=>{
    it("should show a new object that extends the employee class", ()=>{
        const e = new Manager();
        expect(typeof(e)).toBe("object");
    })
});

test("Can set name via constructor arguments", () => {
    const name = "foo";
    const e = new Manager(name);
    expect(e.name).toBe(name);
  });
  
  // this is for the class constructor's this.id
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", testValue);
    expect(e.id).toBe(testValue);
  });
  
  // this is for the class constructor's this.email
  
  test("Can set email via constructor argument", () => {
    const emailTest = "test@test.com";
    const e = new Manager("Foo", 1, emailTest);
    expect(e.email).toBe(emailTest);
  });

  test("Can get officeNumber via getOfficeNumber", () => {
    const testValue = "123";
    const e = new Manager("Foo", 1, testValue);
    expect(e.getGitub()).toBe(testValue);
  });