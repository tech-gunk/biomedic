import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View , FlatList, Image} from 'react-native'
import { auth, database } from '../firebase'
import centres from '../centredb';

class Orders extends React.Component {
    constructor(){
        super();
        this.state={
            orders: []
        }
    }
    loadData=async()=>{
        await database.ref('/user/'+auth.currentUser.uid+'/centres').on('value', (snapshot) => {
            snapshot.forEach((child) => {
                this.setState({
                    orders: [...this.state.orders, child.val()]
                })
            })
            console.log(this.state.orders)
        })
    }
    componentDidMount(){
        this.loadData();
        
    }
    render(){
        if(this.state.orders){
        return(
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.orders}
                    renderItem={({item}) =>
                    <View style={{backgroundColor:'white',  marginTop: 20}}>
                
                <Text style={styles.itemText}>{item.time}</Text>
                    <Image source={{uri: centres[item.id-1].img}} style={styles.image}/>
                    <Text style={styles.itemText}>{centres[item.id-1].name}</Text>
                 </View>
        }/>
                    </View>
        )
        }else{
            return(
                <View style={styles.container}>
                    <Text>Loading...</Text>
                </View>
            )
        }
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
    }
});

export default Orders
