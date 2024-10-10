export function add(num1, num2) {
    return num1 + num2;
}
add();

export function minus(num1, num2) {
    return num1 - num2;
}
minus();

export function divide(num1, num2) {
    if (num2 === 0) {
        throw Error('Cant divide by 0');
    }
    return num1 / num2;
}
divide();