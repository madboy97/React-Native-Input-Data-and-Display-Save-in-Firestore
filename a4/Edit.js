import React, { useState } from 'react';
import { ActivityIndicator, View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {db} from './config';
import {doc,updateDoc} from 'firebase/firestore';



const Edit = ({ navigation, route }) => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [address, setAddress] = useState('');


      

   const update=async ()=>{  
    const data = doc(db, "clients",route.params.id);

    await updateDoc(data, {
        name:name,
    address:address});
    
    alert('Your Data Has Been Updated!')
    navigation.navigate('Display');

}


    return (
        <View>
         <View style={styles.container}>
                <Text  >Name:{route.params.name} </Text>
                <Text  >Email:{route.params.Email} </Text>
                <Text  >ID:{route.params.id} </Text>
            </View>


            <View style={styles.container}>
                <Text style={styles.Text} >Name: </Text>
                <TextInput  style={styles.TextInput}
                    onChangeText={(text) => setname(text)}>
                </TextInput>
            </View>


            <View style={styles.container}>
                <Text style={styles.Text} >Address: </Text>
                <TextInput style={styles.TextInput}
                    onChangeText={(text) => setAddress(text)}>
                </TextInput>
            </View>


            <View style={styles.container}>

                <TouchableOpacity style={{marginLeft:50, backgroundColor: "skyblue",borderWidth:10, alignItems: "center", justifyContent: "center", paddingHorizontal: 10}}
          onPress={update}>
                    <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold", alignSelf: "center", textTransform: "uppercase" }}>Update</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft:50, backgroundColor: "skyblue",borderWidth:10, alignItems: "center", justifyContent: "center", paddingHorizontal: 10}}
          onPress={()=>{navigation.goBack()}}>
                    <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold", alignSelf: "center", textTransform: "uppercase" }}>Go Back</Text>
                </TouchableOpacity>
               
            </View>


        </View>



    )



}


export {Edit};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
      
        marginTop: 10,
        marginBottom:20,

    },

    TextInput: {
        borderRadius: 1,
        borderColor: "skyblue",
        borderWidth: 1,
        width: 250
    },

    Text: {
        fontSize: 15,
        backgroundColor:"lightblue",
        height: 50,
        width:100,
        margin: 12,
        borderWidth: 0,
        padding:5 ,

    },

})