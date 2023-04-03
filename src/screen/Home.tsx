import React, { useEffect, useRef, useState } from "react";
import { Text, View,Dimensions, Button,FlatList, StyleSheet, Image ,TouchableOpacity,} from "react-native";
import Lottie from 'lottie-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
 

const Home =()=>{
  const navigation=useNavigation<any>();
  const animationRef=useRef<any>();
 
  useEffect(()=>{
    setTimeout(()=>{
     press2();
    },100)
     },[]);
     const press2= async()=>{
    
       const emailhere =  await AsyncStorage.getItem("gmail")
       if(emailhere==null||emailhere==undefined&&emailhere==""){
        navigation.navigate('Login')
       }else{
        navigation.navigate('Mattab')
      
       }
     }
   return(
    <View  style={styles.container}>
      {/* <Lottie
        ref={animationRef}
        source={require('../screen/animation/136078-feesbee-section-2.json')}
       
        autoPlay={true}
      /> */}
    <TouchableOpacity >
      <Text style={{fontSize:50,color:'orange'}}> WELCOME</Text>
      </TouchableOpacity>


    </View>


    )
}

const styles=StyleSheet.create({
     container:{
      flex:1,
      justifyContent:"center",
      alignItems:'center',
      backgroundColor:'#eff9f7'
     },
     text:{
      
      color:'#eff9f7'
     },
     image:{
      // resizeMode:'center',
      height:'25%',
      width:'40%'
     }



})
  export default Home;