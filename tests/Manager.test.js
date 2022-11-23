const Manager = require('.dist/lib/Manager')

test('creates a Manager Object', () => {
    const manager = new Manager ('Noah', 0602, 'noah@mail.com')
        expect(manager.office.Number).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Noah', 0602, 'noah@mail.com');
    expect(manager.getRole()).toEqual("Manager")

});