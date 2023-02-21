import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [value, setValue] = useState('0');
    const [prevValue, setPrevValue] = useState('');
    const [operation, setOperation] = useState('');

    const handleNumberClick = (number) => {
        if (value === '0') {
            setValue(number);
        } else {
            setValue(value + number);
        }
    };

    const handleClearClick = () => {
        setValue('0');
        setPrevValue('');
        setOperation('');
    };

    const handleOperationClick = (op) => {
        setPrevValue(value);
        setValue('0');
        setOperation(op);
    };

    const handleEqualsClick = () => {
        const currentValue = parseFloat(value);
        const previousValue = parseFloat(prevValue);

        switch (operation) {
            case '+':
                setValue((previousValue + currentValue).toString());
                break;
            case '-':
                setValue((previousValue - currentValue).toString());
                break;
            case 'x':
                setValue((previousValue * currentValue).toString());
                break;
            case '/':
                setValue((previousValue / currentValue).toString());
                break;
            default:
                setValue(currentValue.toString());
                break;
        }

        setPrevValue('');
        setOperation('');
    };

    return (
        <div className="calculator">
            <div className="calculator-display">{value}</div>
            <button className="calculator-button" onClick={handleClearClick}>
                AC
            </button>
            <button className="calculator-button" onClick={() => handleOperationClick('/')}>
                &divide;
            </button>
            <button className="calculator-button" onClick={() => handleOperationClick('x')}>
                &times;
            </button>
            <button className="calculator-button" onClick={() => handleOperationClick('-')}>
                &ndash;
            </button>
            <button className="calculator-button" onClick={() => handleNumberClick('7')}>
                7
            </button>
            <button className="calculator-button" onClick={() => handleNumberClick('8')}>
                8
            </button>
            <button className="calculator-button" onClick={() => handleNumberClick('9')}>
                9
            </button>
            <button className="calculator-button" onClick={() => handleOperationClick('+')}>
                +
            </button>
            <button className="calculator-button" onClick={() => handleNumberClick('4')}>
                4
            </button>
            <button className="calculator-button" onClick={() => handleNumberClick('5')}>
                5
            </button>
            <button className="calculator-button" onClick={() => handleNumberClick('6')}>
                6
            </button>
            <button className="calculator-button" onClick={handleEqualsClick}>
                =
            </button>
            <button className="calculator-button" onClick={() => handleNumberClick('1')}>
                1
            </button>
            <button className="calculator-button" onClick={() => handleNumberClick('2')}>
                2
            </button>
            <button className="calculator-button" onClick={() => handleNumberClick('3')}>
                3
            </button>
            <button className="calculator-button calculator-button-double" onClick={() => handleNumberClick('0')}>
                0
            </button>
            <button className="calculator-button" onClick={() => handleNumberClick('.')}>
                .
            </button>
        </div>
    );
};

export default Calculator;