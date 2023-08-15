import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, Button, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { collection, query, where, getDocs} from 'firebase/firestore';
import { db } from './config';
import { singleuser } from './Singleuser';

const Search = ({ navigation, route }) => {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [search, setSearch] = useState("");
  const [email, setemail] = useState("");
  const [Gender, setGender] = useState('');
  const [selectedcountry, setSelectedcountry] = useState('');
  const [Phy, setphy] = useState(false);
  const [chem, setchem] = useState(false);
  const [bio, setbio] = useState(false);
  const [Address, setAddress] = useState();
  const [skil, setskil] = useState();

  const singleData = async () => {

        
    
    const q = query (collection(db,"clients"),where("email","==",search));
    let name,email,country,address,Phy,chem,bio,gender,iid;
    var skills=[];
    alert('Searching For:               ' + search)
    
    const querySnapshot=await getDocs(q);
    querySnapshot.forEach((doc) => {
     skills.push(doc.data().skills)
     name=doc.data().name,
     address=doc.data().address,
     email=doc.data().email,
     country=doc.data().country,
     Phy=doc.data().Phy,
     chem=doc.data().chem,
     bio=doc.data().bio,
     iid=doc.id,
     gender=doc.data().gender,
     setid(iid);
     setname(name);
    setemail(email);
    setGender(gender);
    setSelectedcountry(country);sa
    setAddress(address);
    setskil(skills);
    setphy(Phy);
    setchem(chem);
    setbio(bio)

    });
 
  };
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          label="Search Your Email"
          style={styles.TextInput}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'skyblue',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}
        onPress={singleData}
      >
      <Text style={{ color: "black", fontWeight: "bold", fontSize: 30 }}> Search </Text>

      
      </TouchableOpacity>
      <Text style={styles.Text}>Name:{name}</Text>
<Text style={styles.Text}>Email:{email}</Text>
<Text style={styles.Text}>Gender:{Gender}</Text>
<Text style={styles.Text}>country:{selectedcountry}</Text>
<Text style={styles.Text}>Address:{Address}</Text>
<Text style={styles.Text}>Skills:{skil}</Text>

<TouchableOpacity
        style={{
          backgroundColor: 'skyblue',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}
        onPress={()=>{navigation.goBack()}}
      >
      <Text style={{ color: "black", fontWeight: "bold", fontSize: 30 }}> Back </Text>

      
      </TouchableOpacity>

      </View>



    )



}

export{Search};
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
  

  