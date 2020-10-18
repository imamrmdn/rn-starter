import React from 'react'
import { Text, StyleSheet, View, Button, SafeAreaView, Alert } from 'react-native'



const ComponentScreen = () => {

    const number = 10
    const app = 'Flutter'
    const text = 'Hi There This Application Build on React Native'
    const txt = 'Hi There This Application Build on Flutter'
    const textName = <Text>My Name Imam Ramadhan</Text>
    const buttonOne = <Button
                        title= 'Press Me!'
                        color="#f194ff"
                        onPress={() => Alert.alert('This is Simple Button')}
                    />
    const buttonTwo = <Button
                        title= 'Hit Me!'
                        color=  'blue'
                        onPress={() => Alert.alert('This is Simple Button')}
                    />
 

    if(number != 20){
        return <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.TextStyle}>This is ComponentScreen</Text>
                <Text>{(app != 'Flutter') ? txt : text}</Text>
                {textName}
                <Text style={styles.TextStyle2}>This is Red Text</Text>
                {(number == 10) ? buttonOne : buttonTwo}
            </View>
        </SafeAreaView>
    }else{
        return <Text>Wrong Component</Text>
    }
}


const styles = StyleSheet.create({
    container:{
        margin: 20,
    },
    TextStyle:{
        fontSize: 24,
        color: 'teal',
        fontWeight: 'bold',
    },
    TextStyle2:{
        color: 'red',
        paddingBottom: 30,
    }
})

export default ComponentScreen