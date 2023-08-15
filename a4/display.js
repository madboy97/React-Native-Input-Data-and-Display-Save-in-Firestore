import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { db } from './config';
import { doc, getDocs, collection } from 'firebase/firestore';




const Display = ({ navigation,route }) => {
  const [fire, setUsers] = useState([]);
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "clients"));
    var data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setUsers(data);
  };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ backgroundColor: "skyblue", alignItems: "center", justifyContent: "center", paddingHorizontal: 20}}
          onPress={getData}
        >
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 30 }}> Get Data</Text>
        </TouchableOpacity>
        
      </View>
      <Text>            Name             Email                  Country</Text>
      <FlatList
        data={fire}
        renderItem={({ item }) => (

          <View style={{flexDirection:"row", marginTop:20}}>
                   <TouchableOpacity
          style={{}}
          onPress={()=>{navigation.navigate('Singleuser',{email:item.email})}}
        >
          <Text style={{ color: "black", fontWeight: "bold",fontSize:10 }}>Select</Text>
        </TouchableOpacity>
          <Text style={{flexDirection:'row',fontSize:10}}>       {item.name}      {item.email}       {item.country}</Text>
          
          </View>
        )}
      />
      <TouchableOpacity 
        style={{ backgroundColor: "skyblue",borderWidth:1, alignItems: "center", justifyContent: "center",marginTop:100}}
        onPress={()=>{navigation.navigate('Search')}}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 30 }}> Search </Text>
        </TouchableOpacity>
      <TouchableOpacity
          style={{ backgroundColor: "skyblue",borderWidth:1, alignItems: "center", justifyContent: "center",marginTop:50}}
          onPress={()=>{navigation.goBack()}}>
        
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 30 }}> Back</Text>
        </TouchableOpacity>
    </View>
  );
};

export { Display };

const styles = StyleSheet.create({
  Text: {
    marginTop: 40,
    fontSize: 20,
  },
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
});
