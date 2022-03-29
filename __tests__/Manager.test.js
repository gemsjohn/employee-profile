const Manager = require('../lib/Manager.js');

test('create a new manager profile', () => {
    const manager = new Manager('idenity', 'Manager', '01', 'email@email.com', '01');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.title).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(String));
})