import { View, Text, ScrollView, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../Styles/styles'

export default function LoginScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder='Phone'></TextInput>
                <TextInput style={styles.input} placeholder='Password' secureTextEntry></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}