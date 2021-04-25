import React,{Component}from 'react';
import {View,Text,TextInput,KeyboardAvoidingView,TouchableOpacity,StyleSheet,Alert} from 'react-native';
import db from './config'
import firebase from 'firebase'
import MyHeader from './components/MyHeader'

export default class BookRequest extends Component(){
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:'',
            reasonToRequest:''
        }
    }
    render(){
        return(
            <View>
                <Text>
                    Request A Book
                </Text>
            </View>
            //START HERE
        )
    }
}