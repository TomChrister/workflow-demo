import { divide } from './calculator.js';

test('Should throw a error when divided by 0', () => {
    // arrange

    const num1 = 1;
    const num2 = 0;

    // act and assert
    expect(() => divide(num1, num2)).toThrowError('Cant divide by 0');
});

