import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableHighlight, Dimensions} from 'react-native'
import NaviBar from './NaviBar'

export default class Page3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputedNum: '',
            inputedPW: ''
        }
        this.onNaviBarPress = this.onNaviBarPress.bind(this)
        this.naviStatus = [0, 0, 1, 0]
    }
    onNaviBarPress(aNumber){
        switch (aNumber){
            case 0:
                this.props.navigator.replace({name: 'Page1'})
                return
            case 1:
                this.props.navigator.replace({name: 'Page2'})
                return
            case 2:
                return
            case 3:
                this.props.navigator.replace({name: 'Page4'})
                return
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <NaviBar naviBarStatus={this.naviStatus}
                         onNaviBarPress={this.onNaviBarPress()}/>
                <View style={styles.whatLeft}>
                    <Text>栏目 3 内容</Text>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    whatLeft: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: 'black'
    }
})



