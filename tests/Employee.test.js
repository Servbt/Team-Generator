// INSTRUCTOR PROVIDED // 

const Employee = require("../lib/Employee");

desbribe("Can instantiate Employee instance", () => {
  it("should have an new object made with the class constructor", ()=> {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  }
    )
});

// this is for the class constructor's this.name

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

// this is for the class constructor's this.id

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

// this is for the class constructor's this.email

test("Can set email via constructor argument", () => {
  const emailTest = "test@test.com";
  const e = new Employee("Foo", 1, emailTest);
  expect(e.email).toBe(emailTest);
});

// this is for the class constructor's method for getting a name

test("Can get name via getName()", () => {
  const nameTest = "Alice";
  const e = new Employee(nameTest);
  expect(e.getName()).toBe(nameTest);
});

// this is for the class constructor's method for getting an id

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

// this is for the class contructor's method for getting an email

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

// this is for the class contructor's method for getting a role name


test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});