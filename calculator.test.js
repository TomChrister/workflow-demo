import { add } from "./index";

test("It adds one and one and returns two", () => {
    // arrange
    const param1 = 1;
    const param2 = 1;
    const expected = 2;

    // act
    expect(add(param1, param2)).toEqual(expected);
});