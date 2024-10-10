import { add } from "./index.js";
import { divide } from './calculator.js';

test("It adds one and one and returns two", () => {
    // arrange
    const param1 = 1;
    const param2 = 1;
    const expected = 2;

    // act and assert
    expect(add(param1, param2)).toEqual(expected);
});

test('Should throw a error when divided by 0', () => {
    // arrange

    const num1 = 1;
    const num2 = 0;

    // act and assert
    expect(() => divide(num1, num2)).toThrowError('Cant divide by 0');
});

