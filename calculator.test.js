import { add } from "./index";

test("It adds one and one and returns two", () => {
    // arrange
    const param1 = 1;
    const param2 = 1;
    const expected = 2;

    // act and assert
    expect(add(param1, param2)).toEqual(expected);
});

import { divide } from './index';

test('Should throw a error when divided by 0', () => {
    // arrange

    const param1 = 1;
    const param2 = 0;

    // act and assert
    expect(() => divide(param1, param2)).toThrow('Cant divide by 0');
})