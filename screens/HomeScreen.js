import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
export const navigationRef = React.createRef();

const HomeScreen = () => {
  const navigation = useNavigation()
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  const gotocentres = async() => {
    await navigation.navigate("Centres")
  }
  const gotoorders = async()=>{
    await navigation.navigate("Orders")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={gotocentres}
        style={[styles.button]}
      >
        <Text style={styles.buttonText}>Book a van</Text>
      </TouchableOpacity>   
      <TouchableOpacity
        onPress={gotoorders}
        style={[styles.button]}
      >
        <Text style={styles.buttonText}>My orders</Text>
      </TouchableOpacity>     
      <TouchableOpacity
        onPress={handleSignOut}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1A374D'
  },
  button: {
    backgroundColor: '#406882',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
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