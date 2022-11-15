// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// unit test for isPhoneNumber functions
test('(858) 000-0000 isPhoneNumber true', () => {
    expect(functions.isPhoneNumber('(858) 000-0000')).toBe(true);
});
test('858-000-0000 isPhoneNumber true', () => {
    expect(functions.isPhoneNumber('858-000-0000')).toBe(true);
});
test('858-000-ABCD isPhoneNumber false', () => {
    expect(functions.isPhoneNumber('858-000-ABCD')).toBe(false);
});
test('858-00ABCD isPhoneNumber false', () => {
    expect(functions.isPhoneNumber('858-00ABCD')).toBe(false);
});

// unit test for isEmail functions
test('name.lastname@gmail.com isEmail true', () => {
    expect(functions.isEmail('namelastname@gmail.com')).toBe(true);
});
test('name.lastname@gmail.fr isEmail true', () => {
    expect(functions.isEmail('name_lastname@gmail.fr')).toBe(true);
});
test('lastnam@gmail isEmail false', () => {
    expect(functions.isEmail('lastnam@gmail')).toBe(false);
});
test('@gmail.com isEmail false', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});

// unit test for isStrongPassword functions
test('password isStrongPassword true', () => {
    expect(functions.isStrongPassword('password')).toBe(true);
});
test('password_1234 isStrongPassword true', () => {
    expect(functions.isStrongPassword('password_1234')).toBe(true);
});
test('one isStrongPassword false', () => {
    expect(functions.isStrongPassword('one')).toBe(false);
});
test('password1234! isStrongPassword false', () => {
    expect(functions.isStrongPassword('password1234!')).toBe(false);
});

// unit test for isDate functions
test('1/1/1999 isDate true', () => {
    expect(functions.isDate('1/1/1999')).toBe(true);
});
test('00/00/0000 isDate true', () => {
    expect(functions.isDate('00/00/0000')).toBe(true);
});
test('1999/01/21 isDate false', () => {
    expect(functions.isDate('1999/01/21')).toBe(false);
});
test('1/1/99 isDate false', () => {
    expect(functions.isDate('1/1/99')).toBe(false);
});

// unit test for isHexColor functions
test('#000000 isHexColor true', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('#123 isHexColor true', () => {
    expect(functions.isHexColor('123')).toBe(true);
});
test('#Gff isHexColor false', () => {
    expect(functions.isHexColor('#Gff')).toBe(false);
});
test('000fffa isHexColor false', () => {
    expect(functions.isHexColor('000fffa')).toBe(false);
});
