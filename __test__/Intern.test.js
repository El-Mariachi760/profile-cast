const Intern = require('../lib/Intern')

// check if school name returns
test('to get school', () => {
    const intern = new Intern('Dman', 1035, 'dman@dman.com', 'ITT Tech')

    expect(intern.schoolName).toEqual(expect.any(String));
})

// check getGithub()

test('to check getGithub()', () => {
    const intern = new Intern('Dman', 1035, 'dman@dman.com', 'ITT Tech')

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.schoolName.toString()));
})

test('to check getRole()', () => {
    const intern = new Intern('Dman', 1035, 'dman@dman.com', 'ITT Tech')

    expect(intern.getRole()).toEqual("Intern");
})