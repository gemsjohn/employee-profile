const Employee = require('../lib/Employee.js');

test('create a new employee profile', () => {
    const employee = new Employee('idenity', '01', 'email@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
})