import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import styles from '../Styles/Styles'
import ButtonNumber from '../components/ButtonNumber'
import React, { useState } from 'react';
import ButtonOperator from '../components/ButtonOperator';

export default function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState<string | null>(null);
    const [firstValue, setFirstValue] = useState('');

    const handleNumberInput = (num: number) => {
        if (displayValue === '0') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    const handleOperatorInput = (operator: string | null) => {
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    };

    const handleEqual = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);

        if (operator === '+') {
            setDisplayValue((num1 + num2).toString());
        } else if (operator === '-') {
            setDisplayValue((num1 - num2).toString());
        } else if (operator === 'x') {
            setDisplayValue((num1 * num2).toString());
        } else if (operator === '÷') {
            setDisplayValue((num1 / num2).toString());
        }

        setOperator(null);
        setFirstValue('');
    };

    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstValue('');
    };



    return (
        <View style={styles.container}>
            <View style={styles.textDisplay}>
                <Text style={styles.textResult}>{displayValue}</Text>
            </View>
            <View style={styles.keyboardContainer}>
                <View style={styles.row}>
                    <ButtonNumber key={7} num={7} handleNumberInput={handleNumberInput} />
                    <ButtonNumber key={8} num={8} handleNumberInput={handleNumberInput} />
                    <ButtonNumber key={9} num={9} handleNumberInput={handleNumberInput} />
                    <ButtonOperator key={"÷"} operator={"÷"} handleOperatorInput={handleOperatorInput} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber key={4} num={4} handleNumberInput={handleNumberInput} />
                    <ButtonNumber key={5} num={5} handleNumberInput={handleNumberInput} />
                    <ButtonNumber key={6} num={6} handleNumberInput={handleNumberInput} />
                    <ButtonOperator key={"x"} operator={"x"} handleOperatorInput={handleOperatorInput} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber key={1} num={1} handleNumberInput={handleNumberInput} />
                    <ButtonNumber key={2} num={2} handleNumberInput={handleNumberInput} />
                    <ButtonNumber key={3} num={3} handleNumberInput={handleNumberInput} />
                    <ButtonOperator key={"-"} operator={"-"} handleOperatorInput={handleOperatorInput} />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.buttonZero} onPress={() => handleNumberInput(0)}>
                        <Text style={styles.textDark}>0</Text>
                    </TouchableOpacity>
                    <ButtonOperator key={"+"} operator={"+"} handleOperatorInput={handleOperatorInput} />
                    <TouchableOpacity style={styles.equalButton} onPress={handleEqual}>
                        <Text style={styles.textWhite}>=</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                        <Text style={styles.textDark}>C</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}