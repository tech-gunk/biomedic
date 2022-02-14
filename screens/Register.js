import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View , FlatList, Image, KeyboardAvoidingView, TextInput, Alert} from 'react-native'
import { auth, database } from '../firebase'
export const navigationRef = React.createRef();
class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            address:'',
            name:'',
            phone:''
        }
    }
    registerUser = () => {
        if(this.state.name && this.state.phone && this.state.address){
          database.ref('/user/'+auth.currentUser.uid+'/centres').push({
            id: this.props.route.params.centre.id,
            address: this.state.address,
            name: this.state.name,
            phone: this.state.phone,
            time: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
        }).then(()=>{
        Alert.alert('Registered Successfully');   
        });
        }else{
            Alert.alert('Please fill all the details');
        }
    }
    render(){
        return(
            <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={this.state.name}
          onChangeText={text => this.setState({name:text})}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone"
          keyboardType='numeric'
          maxLength={10}
          value={this.state.phone}
          onChangeText={text => this.setState({phone:text})}
          style={styles.input}
        />
        <TextInput
          placeholder={"Address"}
          multiline={true}
          value={this.state.address}
          onChangeText={text => this.setState({address:text})}
          style={styles.inputAdd}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={this.registerUser}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1A374D'
      },
      inputContainer: {
        width: '80%',
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      },
      inputAdd: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        height: 100
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      button: {
        backgroundColor: '#406882',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#406882',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      buttonOutlineText: {
        color: '#406882',
        fontWeight: '700',
        fontSize: 16,
      },
});

export default Register
