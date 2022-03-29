const Intern = require('../lib/Intern.js');

test('create a new intern profile', () => {
    const intern = new Intern('idenity', 'Intern', '01', 'email@email.com', 'UNC');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.title).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})