import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'

export default class Flex extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.firstRow}>
                    <View style={styles.test1}></View>
                    <View style={styles.test2}></View>
                    <View style={styles.test3}></View>
                </View>
                <View style={styles.textPosition}></View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    firstRow: {
        height: 40,
        top: 40,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    test1: {
        width: 68,
        height: 24,
        backgroundColor: '#fff',
    },
    test2: {
        width: 40,
        height: 24,
        backgroundColor: '#fff',
    },
    test3: {
        width: 100,
        height: 24,
        backgroundColor: '#fff',
    },
    textPosition: {
        backgroundColor: 'gray',
        height: 60,
        width: 60,
        position: 'absolute',
        top: 150,
        right: 50
    }
})