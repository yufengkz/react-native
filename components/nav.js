import React, {Component} from 'react'
import { BackHandler, Platform } from 'react-native'
import Navigator from 'react-native-deprecated-custom-components'

import Login from './login'
import WaitingLeaf from './WaitingLeaf'

export default class NaviModule extends Component{
    constructor(props){
        super(props)

        this.state = {
            currentScene: 'Login',
            phoneNumber: '',
            userPW: ''
        }

        this.handleBackSignal = this.handleBackSignal.bind(this)
        this.onLoginPressed = this.onLoginPressed.bind(this)
    }

    onLoginPressed(phone, pass){
        this.setState({
            currentScene: 'Waiting',
            phoneNumber: phone,
            userPW: pass
        })
    }

    render(){
        if(this.state.currentScene === 'Login'){
            return <Login onLoginPressed={this.onLoginPressed}/>
        }else{
            return <WaitingLeaf phoneNumber={this.state.phoneNumber}
                                onGobackPressed={this.handleBackSignal}
                                userPW={this.state.userPW}/>
        }
        return(
            <Navigator initialRoute={{name: 'login'}}
                       configureScene={this.configureScene()}
                       renderScene={this.renderScene} />
        )
    }

    handleBackSignal(){
        if(this.state.currentScene === 'Waiting'){
            this.setState({currentScene: 'Login'})
            return true
        }
    }
    componentDidMount(){
        if(Platform.OS === 'android') BackHandler.addEventListener('hardwareBackPress', this.handleBackSignal)
    }
    componentWillUnmount(){
        if(Platform.OS === 'android') BackHandler.removeEventListener('hardwareBackPress', this.handleBackSignal)
    }
}