import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert ,ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Register from './Register';
import Forgot from './Forgot';
import Home from './Home';
import First from './First';



const Login = () => {
   
    const navigation = useNavigation<any>();

   
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<any>('');
    // useEffect(()=>{
    //   press2();
    // },[])





       const press2= async()=>{
        const userhere =  await AsyncStorage.getItem("user")
         const emailhere =  await AsyncStorage.getItem("gmail")
         const passhere =  await AsyncStorage.getItem("pass")
          console.log(emailhere)
        console.log(passhere)

         if(email==emailhere||password==passhere){
           navigation.replace('Mattab')
         }
         else{
        //  Alert.alert('warning','plesse provide the write data')
           ToastAndroid.showWithGravity('plese enter the valid information',
           ToastAndroid.SHORT,
           ToastAndroid.TOP)

         }
         // console.log(emailhere)
       }
    return (
    

        <View style={styles.container}>
            <Text style={{color:'orange',fontSize:40,marginBottom:30,fontWeight:'bold'}}>Login</Text>
            <TextInput placeholder='EMAIL' style={styles.textInput}
                onChangeText={(val) => setEmail(val)} value={email} />

            <TextInput placeholder='PASSWORD' style={{ ...styles.textInput, margin: 20 }} secureTextEntry={true}
                onChangeText={(vale) => setPassword(vale)} value={password} maxLength={8}/>
                 <TouchableOpacity style={{ marginTop: 20 }} onPress={()=>navigation.navigate("Forgot")}>

  <Text style={{ marginLeft:180,bottom:35,color:"orange" }}>forgot password<Text style={{color:"black",fontSize:15}}> ?</Text></Text>
    </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={press2} >
                <Text style={styles.text}>Login</Text>

            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ color: "orange", fontWeight: 'bold' }}>New user Register</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Register')}>
                    <Text style={{color:"black",fontWeight:'bold'}}>SignUp?</Text>
                </TouchableOpacity>
               
                {/* <Text>{email}</Text> */}
            </View>
        </View>
      
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#2321"

    },
    textInput: {

        borderWidth: 2,
        width: 300,
        borderRadius: 20,
        borderColor: 'orange',
        color: 'gray', textAlign: 'center',
        backgroundColor: "#2321"
    },
    touch: {
        backgroundColor: 'orange', width: '75%', padding: 8, borderRadius: 20
    },
    text: {
        color: 'white', fontSize: 20, textAlign: 'center',fontWeight:'bold'
    }

})
export default Login;