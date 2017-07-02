'use strict';
import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TextInput,
} from 'react-native'

var styles = StyleSheet.create({

    flex: {
        flex: 1,
    },
    green : {
        backgroundColor: '#cd2d1c'
    },

    flexDirection: {
        flexDirection: 'row',
    },
    topStaus: {
        marginTop:25,
    },

    inputHeight: {
        height: 45,
    },

    inputs: {
        height: 45,
        borderWidth: 1,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: '#CCC',
        borderRadius: 4,
    },

    btn: {
        width: 55,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23bfff',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,

    },

    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },

    result: {
        marginTop: 1,
        marginRight: 5,
        marginLeft: 5,
        height:200,
        borderColor: '#ccc',
        borderTopWidth: 1,

    },

    item: {
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopWidth: 0,
    }

})

export default class Search extends Component{
    //初始化方法
    constructor(props){
        super(props)
        return{
            show: false
        };
    }

    //获取value值调用的方法
    getValue(text) {
        var value = text;
        this.setState({
            show: true,
            value: value
        });
    }

    //隐藏
    hide(val){
        this.setState({
            show: false,
            value: val
        })
    }

    render(){
        return(
            <View style = {[styles.flex,styles.topStaus]}>
                <View style = {[styles.flex]}>
                    <View style={[styles.flexDirection,styles.inputHeight]}>
                        <View style = {styles.flex}>
                            <TextInput style = {styles.inputs}
                                       returnKeyType = "search"
                                       placeholder= "请输入搜索关键字"
                                       onEndEditing = {this.hide.bind(this,this.state.value)}
                                       value = {this.state.value}
                                       onChangeText = {this.getValue}/>
                        </View>
                        <View style = {styles.btn}>
                            <Text style = {styles.search} onPress = {this.hide.bind(this,this.state.value)}>搜索</Text>
                        </View>
                    </View>

                    //结果列表
                    {this.state.show?
                        <View style = {[styles.result]}>
                            <Text onPress= {this.hide.bind(this,this.state.value + '街')}
                                  style = {styles.item}
                                  numberOfLines = {1}>{this.state.value}街</Text>
                            <Text onPress = {this.hide.bind(this,this.state.value + '商厦')}
                                  style = {styles.item}
                                  numberOfLines = {1}>{this.state.value}商厦</Text>
                            <Text onPress = {this.hide.bind(this,111 + this.state.value + '超市')}
                                  style = {styles.item}
                                  numberOfLines = {1}>111{this.state.value}超市</Text>
                            <Text onPress = {this.hide.bind(this,this.state.value + '车站')}
                                  style = {styles.item}
                                  numberOfLines = {1}>{this.state.value}车站</Text>
                            <Text onPress = {this.hide.bind(this,'办公' + this.state.value + '大厦')}
                                  style = {styles.item}
                                  numberOfLines = {1}>办公{this.state.value}大厦</Text>
                        </View>
                        :null
                    }
                </View>
            </View>
        )
    }

}

