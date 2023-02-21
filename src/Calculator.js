import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [value, setValue] = useState('0');
    const [prevValue, setPrevValue] = useState('');
    const [operation, setOperation] = useState('');

    const handleNumberClick = (number) => {
        if(value === '0') {
            setValue(number);
        } else {
            setValue(value + number);
        }
    };

    const HandleClearClick = () => {

    }

}