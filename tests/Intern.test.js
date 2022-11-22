const Intern = require('./dist/lib/Intern');

test('create and intern object', () => {
    const intern =new Intern(Michele, 0907, 'michele@mail.com','MSU');

    expect(intern.school) .toEqual(expect.any(String));
});

test('get employee school', () => {
    const intern = new Intern('Michele', 0907, 'MSU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get role of employee', () => {
    const intern = new Intern(('Michele', 0907, 'MSU'));

    expect(intern.getRole()).toEqual("Intern");

});