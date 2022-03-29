const Employee = require('../utils/Employee.js');

test('create an employee profile', () => {
    const employee = new Employee('idenity');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.title).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeName).toEqual(expect.any(Number));
})