import { Calculator } from './Calculator'
import { CalculatorAdapter, CalculatorMock } from './adapters/CalculatorAdapter'


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
const calculatorAdapter = new CalculatorMock()
const calculator = new Calculator(calculatorAdapter)


readline.question('digite o primeiro número: ', (num1: string) => {
    readline.question('digite o segundo número: ', (num2: string) => {
      
      const x1 = parseFloat(num1)
      const x2 = parseFloat(num2)
      
      readline.question('digite a operação que deseja (+, -, *, /, ^): ', (operator: string) => {
        switch (operator) {
          case '+':
            console.log("resultado da soma:", calculator.add(x1, x2))
            break
          case '-':
            console.log("resultado da subtração:", calculator.subtract(x1, x2))
            break
          case '*':
            console.log("resultado da multiplicação:", calculator.multiply(x1, x2))
            break
          case '/':
            try{
              console.log("resultado da divisão:", calculator.divide(x1, x2))
            } catch (error){
                return error
            }
            break
          default:
            console.log("operação inválida")
            break
        }

      readline.close()
      })
    })
})