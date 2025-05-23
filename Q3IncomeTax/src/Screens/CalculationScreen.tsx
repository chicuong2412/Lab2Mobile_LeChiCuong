import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../Styles/Styles'

export default function CalculationScreen() {
    const [income, setIncome] = React.useState<string>("0");
    const [tax, setTax] = React.useState<string>("");

    function calculateTax(): void {
        const incomeAmount = parseFloat(income);

        if (isNaN(incomeAmount) || incomeAmount < 0) {
            setTax('Invalid income');
            return;
        }

        let taxAmount = 0;
        if (incomeAmount <= 1000000) {
            taxAmount = incomeAmount * 0.1;
        } else if (incomeAmount <= 5000000) {
            taxAmount = 1000000 * 0.1 + (incomeAmount - 1000000) * 0.2;
        } else {
            taxAmount = 1000000 * 0.1 + 4000000 * 0.2 + (incomeAmount - 5000000) * 0.3;
        }

        setTax(`Income Tax: ${taxAmount.toFixed(2)}đ`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Income Tax Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your income"
                keyboardType="numeric"
                placeholderTextColor="#888"
                onChangeText={(text) => setIncome(text)}
                value={income}
            ></TextInput>
            <TouchableOpacity style={styles.button} onPress={calculateTax}>
                <Text style={styles.buttonText}>Calculate Tax</Text>
            </TouchableOpacity>
            <Text style={styles.result}>{tax}</Text>
        </View>
    )
}