import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { auth } from '../firebase'

class WelcomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       //states
    };
  }
  onopenapp(){
            this.props.navigation.navigate('Home')
  }
    componentDidMount(){
      var comp = this.props.navigation
      auth.onAuthStateChanged(function(user) {
        if (user) {
          comp.navigate('Home')
        }});
    }
    render(){
        return(
            <ScrollView>
              <View style={styles.container}>
                 <Image source={require('../assets/icon.png')} style={styles.image}/>
                 <View style={{
      backgroundColor:'#1A374D'}}>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
        style={[styles.button]}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>   
                    <View style={{  backgroundColor: 'white', padding: 8, margin: 12, borderRadius: 15 }}>
                    <Text style={{ fontSize: 25, color: 'black', marginBottom: 15, textAlign: 'center' }}>
                    Corona is back now. More masks, more waste, and more problems!
                That's why we are here with a solution
                    </Text>
                    </View>
                    <View style={{ backgroundColor: 'white', padding: 8, margin: 12, borderRadius: 15 }}>
                    <Text style={{ fontSize: 25, color: 'black', marginBottom: 15, textAlign: 'center'
                       }}>
                    India has generated over
                  <Text style={{ color: "red"  }}> 45954 Tonnes</Text>{" "}
                  <Text>
                    Of COVID-19 Related Bio-medical Waste In 2 Years, Experts
                    Call To Reduce, Reuse And Segregate{" "}
                    </Text>
                    </Text>
                    <Image source={require('../assets/stock.jpg')} style={{width: 323, height: 267, alignSelf: 'center'}} />
                    </View>
                    <View style={{ backgroundColor: 'white', padding: 8, margin: 12, borderRadius: 15 }}>
                    <Text style={{ fontSize: 25, color: 'black', marginBottom: 15, textAlign: 'center'}}>
                        Around 75 percent of used masks and other pandemic-related waste
            such as gloves and personal protective equipment (PPE) are expected
            to end up in landfills or float on the seas.
            
                        </Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black',textAlign: "right" }}> -UN via ASEAN POST</Text>
                        
                    </View>
                    <View style={{ backgroundColor: 'white', padding: 8, margin: 12, borderRadius: 15 }}>
                    <Text style={{ fontSize: 25, color: 'black', marginBottom: 15, textAlign: 'center'}}>
                        Time to bend the curve!
                        </Text>
                        <Image source={require('../assets/graph.jpg')} style={{width: 330, height: 300, alignSelf: 'center'}} />
                    </View>
                          
                    </View>
                    </View>
     
    </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:'#1A374D',
    },
    image:{
        width: 350,
        height: 350,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 10,
        margin: 40,
        borderRadius: 175
    },
    button: {
      backgroundColor: '#406882',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 10,
      alignSelf: 'center'
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
  })
export default WelcomeScreen;

