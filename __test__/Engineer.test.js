const Engineer = require('../lib/Engineer')

// check if Github username returns
test('to get Github Username', () => {
    const engineer = new Engineer('Cman', 1019, 'cman@cman.com', 'cman360')

    expect(engineer.gitHubUserName).toEqual(expect.any(String));
})

// check getGithub()

test('to check getGithub()', () => {
    const engineer = new Engineer('Cman', 1019, 'cman@cman.com', 'cman360')

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.gitHubUserName.toString()));
})