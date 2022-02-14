import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View , FlatList, Image} from 'react-native'
import { auth } from '../firebase'
import centres from '../centredb';

class CentresScreen extends React.Component {
    constructor(){
        super();
        
    }
    
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                 keyExtractor={(item, index) => index.toString()} 
                 data={centres} 
                 renderItem={({item}) => 
                 <View style={{backgroundColor:'white',  marginTop: 20}}>
                 <TouchableOpacity style={styles.item} onPress={
                        () => this.props.navigation.navigate('Centre', {centre: item})
                 }>

                    <Image source={{uri: item.img}} style={styles.image}/>
                    <Text style={styles.itemText}>{item.name}</Text>
                 </TouchableOpacity>
                 </View>
                 }/>
            </View>
        )
    
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1A374D',
        textAlign: 'center'
      },
      item:{

    },
    image:{
        width: 350,
        height: 350,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 10,
    },
    itemText:{
        fontSize: 25,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    }
});

export default CentresScreen
