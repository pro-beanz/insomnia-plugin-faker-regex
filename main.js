import RandExp from 'randexp';

export const templateTags = [{
    name: 'fakerRegex',
    displayName: 'Randomized Regular Expression',
    description: 'Generate a random string based on a Regex input.',
    args: [
        {
            displayName: 'Regular Expression',
            description: 'Regular expression to generate value with.',
            type: 'string',
            defaultValue: ''
        }
    ],
    async run (context, regex) {
        return new RandExp(regex.replace('\\\\', '\\')).gen();
    }
}];
