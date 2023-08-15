import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { db } from './config';
import { doc, getDocs, collection, query, where,deleteDoc } from 'firebase/firestore';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';





const Singleuser=({route,navigation})=>{
    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [Gender, setGender] = useState('');
    const [selectedcountry, setSelectedcountry] = useState('');
    const [Phy, setphy] = useState(false);
    const [chem, setchem] = useState(false);
    const [bio, setbio] = useState(false);
    const [Address, setAddress] = useState();
    const [skil, setskil] = useState();


  

    const singleData = async () => {

        
    
        const q = query (collection(db,"clients"),where("email","==",route.params.email));
        let name,email,country,address,Phy,chem,bio,gender,iid;
        var skills=[];
        
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
        setSelectedcountry(country);
        setAddress(address);
        setskil(skills);
        setphy(Phy);
        setchem(chem);
        setbio(bio)

        });
     
      };
  

      useEffect(() => {
        singleData()
    });
    const Delete=async ()=>{
        await deleteDoc(doc(db, "clients",id));
        navigation.navigate('Display')
        }
return(
<View>

<Text style={styles.Text}>Name:{name}</Text>
<Text style={styles.Text}>Email:{email}</Text>
<Text style={styles.Text}>Gender:{Gender}</Text>
<Text style={styles.Text}>country:{selectedcountry}</Text>
<Text style={styles.Text}>Address:{Address}</Text>
<Text style={styles.Text}>Skills:{skil}</Text>
<View style={styles.container}>
        <TouchableOpacity
          style={{ backgroundColor: "skyblue",borderWidth:1, alignItems: "center", justifyContent: "center", paddingHorizontal: 10}}
          onPress={()=>{navigation.navigate('Edit',{name:name,Email:email,id:id})}}
        >
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 30 }}> Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft:190, backgroundColor: "skyblue",borderWidth:1, alignItems: "center", justifyContent: "center", paddingHorizontal: 10}}
          onPress={Delete}
        >
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 30 }}> Delete</Text>
        </TouchableOpacity>
        
      </View>
<View style={styles.containercolumn}>
      <TouchableOpacity
          style={{ backgroundColor: "skyblue",borderWidth:1, alignItems: "center", justifyContent: "center", paddingHorizontal: 10}}
          onPress={()=>{navigation.goBack()}}>
        
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 30 }}> Back</Text>
        </TouchableOpacity>
</View>

</View>
)



}
export{Singleuser};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
      
        marginTop: 10,
        marginBottom:20,

    },
    containercolumn: {
      flexDirection: 'column',
    
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
        fontSize: 20,
        margin: 12,
        padding:5 ,

    },

})