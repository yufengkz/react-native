import React from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, Alert } from 'react-native'

let widthOfMargin = Dimensions.get('window').width * 0.05
export default class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            inputedNum: '',
            inputedPW: ''
        }
        this.getPhoneNum.bind(this)
        this.getPassNum.bind(this)
    }
    getPhoneNum(num){
        this.setState( {inputedNum: num} )
    }
    getPassNum(num){
        this.setState( {inputedPW: num})
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titlebox}>
                    <Text style={styles.title}>登陆</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textTip}>请输入手机号码：{this.state.inputedNum}</Text>
                    <TextInput style={styles.textInputStyle}
                               placeholder={'请输入手机号'}
                               onChangeText={(num) => {this.getPhoneNum(num)}}/>
                    <Text style={styles.textTip}>请输入手机号码：{this.state.inputedPW}</Text>
                    <TextInput style={styles.textInputStyle}
                               placeholder={'请输入密码'}
                               onChangeText={(pass) => {this.getPassNum(pass)}}/>
                    <Text style={styles.btn} onPress={() => {this.userPressConfirm()}}>确定</Text>
                    <Text style={styles.btn} onPress={() => {this.userPressAddressBook()}}>通讯录</Text>

                </View>
            </View>
        )
    }
    userPressConfirm(){
        Alert.alert(
            '提示',
            `确定使用 ${this.state.inputedNum} 号码登陆吗？`,
            [
                {text: '取消', onPress: (() => {}), style: 'cencel'},
                {text: '确定', onPress: this.jumpToWaiting.bind(this)},
            ]
        )
    }
    jumpToWaiting(){
        this.props.onLoginPressed(this.state.inputedNum, this.state.inputedPW)
    }
    userPressAddressBook(){
        Alert.alert(
            `提示`,
            `此功能正在开发中...`,
            [
                {text: '确定', onPress: (() => {}), style: 'cencel'}
            ]
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    titlebox: {
        height: 50,
        backgroundColor: '#F06292'
    },
    title: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginTop: 25
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 16
    },
    textTip: {
        margin: 10,
        fontSize: 16
    },
    btn: {
        height: 40,
        lineHeight: 40,
        margin: 10,
        backgroundColor: '#F06292',
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    }
})