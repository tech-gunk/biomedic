import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            name: '',
            address: '',
            phone: ''
        }
    }
    render(){
        return(
            <View style={styles.container}>
                
            </View>
        )
    }
}