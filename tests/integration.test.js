const { generateText, checkAndGenerate } = require('../util');

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Max', 29);
    expect(text).toBe('Max (29 years old)')
});