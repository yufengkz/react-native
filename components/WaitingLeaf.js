import React, {Component} from 'react'
import {Dimensions, StyleSheet, Text, View} from 'react-native'

import PropTypes from 'prop-types'

let w = Dimensions.get('window').width * 0.05

export default class WaitingLeaf extends Component{
    constructor(props){
        super(props)
    }
    onGobackPressed(){
        this.props.onGobackPressed()
    }
    render(){
        return(
            <View style={styles.box}>
                <Text style={styles.textPromptStyle}>登陆使用手机号: {this.props.phoneNumber}</Text>
                <Text style={styles.textPromptStyle}>登陆使用密码: {this.props.userPW}</Text>
                <Text style={styles.bigTextPrompt} onPress={ () => this.onGobackPressed()}> 返回</Text>
            </View>
        )
    }
}

WaitingLeaf.propTypes ={
    phoneNumber: PropTypes.string,
    userPW: PropTypes.string
}


let styles = StyleSheet.create({
    box: {
        flex: 1,
        marginTop: 50,
    },
    textPromptStyle: {
        fontSize: 20,
        margin: w,
        backgroundColor: '#F06292'
    },
    bigTextPrompt: {
        height: 50,
        lineHeight: 50,
        margin: w,
        backgroundColor: '#F06292',
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
})