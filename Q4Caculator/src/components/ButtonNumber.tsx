import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../Styles/Styles'

export default function ButtonNumber({ num, handleNumberInput }:
    { num: number, handleNumberInput: (num: number) => void }) {
    return (

        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(num)}>
            <Text style={styles.textDark}>{num}</Text>
        </TouchableOpacity>
    )
}