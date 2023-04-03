import React, { useState, useSyncExternalStore, useRef, useEffect, } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
    View, Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    ToastAndroid, ScrollView, Alert

} from "react-native";
import { useNavigation } from "@react-navigation/native";




const Register = () => {
    // console.log(height,width)
    // console.log(width*0.9)

    const navigation = useNavigation<any>();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showWarnimg, setShowWarnimg] = useState<any>(false)
    const see = (text: any) => {
      const regex = /^[0]?[789]\d{8}$/
      setPhone(text)
  if (regex.test(phone)) {
        setShowWarnimg("")
  
        
      } else {
        setShowWarnimg('this is invalid')
       
      }
    }
   
  
    async function setInfo(){
             await AsyncStorage.setItem("user",name)
             await AsyncStorage.setItem("mobile",phone)
             await AsyncStorage.setItem("gmail",email)
             await AsyncStorage.setItem("pass",password)
             if(name==""||phone==""){
                ToastAndroid.show('please enter the All info',
                ToastAndroid.SHORT)
             }else{
                navigation.navigate("Login")
             }
            
    }
//     async function getInfo(){
//         const getthere=await AsyncStorage.getItem("user")
        
//         console.log(getthere)
       
// }
    return (
        <ScrollView style={{ flex: 1,backgroundColor:"#2321" }}>
            <View >

                <View style={styles.container}>

                    <Text style={{ fontSize: 30, marginTop: 60,fontWeight:'bold' }}> Register</Text>
                    <TextInput placeholder="enter your name" value={name}
                        onChangeText={(txt) => setName(txt)} style={styles.text}/>
                    
                    <TextInput placeholder="enter your phone" value={phone}  keyboardType={"numeric"}
                        onChangeText={(text) => see(text)} style={styles.text} />
                        <Text>{showWarnimg}</Text>
                  
                    <TextInput placeholder="enter your email" value={email} autoCapitalize={'none'}
                        onChangeText={(txt) => setEmail(txt)} style={styles.text} />
                   
                    <TextInput placeholder="enter your password" value={password} 
                        onChangeText={(txt) => setPassword(txt)} secureTextEntry={true} style={styles.text} />
                        
                        </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.Touch}  onPress={setInfo}  >
                        <Text style={styles.submit}>submit</Text>
                    </TouchableOpacity>
                    <Text>have an acc? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{color:'orange',fontWeight:'bold',fontSize:30}}>Login </Text></TouchableOpacity>
                        {/* <TouchableOpacity onPress={getInfo}>
                        <Text style={{color:'orange',fontWeight:'bold',fontSize:30}}>Login </Text></TouchableOpacity>
                        <Text>{setName}</Text> */}
                </View>

            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:
    {
        justifyContent: "center",
        alignItems: 'center'
    },
    text:
    {
        textAlign: 'center',
        width: 250,
        margin: 10,
        borderWidth: 3,
        borderColor: 'orange',
        borderRadius: 20,
        color: 'orange',
        backgroundColor:"#2321"

    },
    submit: {
        fontSize: 20,
        // textAlign:'center',

        color: "white",
    },
    Touch: {
        backgroundColor: 'orange',
        width: 250,
        padding: 7,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
    }

})
export default Register;