export interface CalculatorAdapter {
    add(num1: number, num2: number): number

    subtract(num1: number, num2: number): number

    multiply(num1: number, num2: number): number

    divide(num1: number, num2: number): number
}

export class CalculatorMock implements CalculatorAdapter {

    add(num1: number, num2: number): number {
        return num1 + num2
    }

    subtract(num1: number, num2: number): number {
        return num1 - num2
    }

    multiply(num1: number, num2: number): number {
        return num1 * num2
    }

    divide(num1: number, num2: number): number {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero")
        }
        return num1 / num2
    }
}