import { Calculator } from './Calculator'
import { CalculatorAdapter, CalculatorMock } from './adapters/CalculatorAdapter'


describe("Calculator", () => {

    describe("testing add", () =>
        test("somando dois números e comparando a saída", () => {
            const calculatorInstance = new CalculatorMock()
            expect(calculatorInstance.add(1, 1)).toEqual(2)
    }))

    describe("testing subtract", () =>
    test("subtraindo dois números e comparando a saída", () => {
        const calculatorInstance = new CalculatorMock()
        expect(calculatorInstance.subtract(7, 4)).toEqual(3)
    }))

    describe("testing multiply", () =>
    test("multiplicando dois números e comparando a saída", () => {
        const calculatorInstance = new CalculatorMock()
        expect(calculatorInstance.multiply(6, 3)).toEqual(10);
    }))

    describe("testing divide", () =>
    test("dividindo dois números e comparando a saída", () => {
        const calculatorInstance = new CalculatorMock()
        expect(calculatorInstance.divide(6, 3)).toEqual(2);
    }))
})