const Employee = require('./Employee');

test('creates an employee object', () => {
    const employee = new Employee('Mackenzie', 0531, 'marsh.mackenzie@gmail.com');

expect(employee.name).toEqual(expect.any(String));
expect(employee.name).toEqual(expect.any(String));
expect(employee.email).toEqual(expect.any(String));

});

test( 'get employee name', () => {
    const employee = new Employee('Mackenzie', 0531, 'marsh.mackenzie@gmail.com')
    expect(employee.getName())
});