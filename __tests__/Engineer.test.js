const Engineer = require('../lib/Engineer.js');

test('create a new engineer profile', () => {
    const engineer = new Engineer('idenity', 'Engineer', '01', 'email@email.com', 'gemsjohn');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.title).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})