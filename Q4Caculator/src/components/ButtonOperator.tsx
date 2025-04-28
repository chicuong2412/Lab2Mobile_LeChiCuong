import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../Styles/Styles'

export default function ButtonOperator({operator, handleOperatorInput}:
    { operator: string | null, handleOperatorInput: (operator: string | null) => void }) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput(operator)}>
            <Text style={styles.textOrange}>{operator}</Text>
        </TouchableOpacity>
    )
}