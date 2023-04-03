import React, { useEffect, useRef, useState } from "react";
import { Text, View,Dimensions, Button,FlatList, StyleSheet, Image ,TouchableOpacity,TextInput,ScrollView} from "react-native";
import Lottie from 'lottie-react-native';

import { useNavigation } from "@react-navigation/native";
 

const TextIn =()=>{
    const [phone, setPhone] = useState<any>("")
  const [showWarnimg, setShowWarnimg] = useState<any>(false)
  const see = (text: any) => {
    const regex = /^[0]?[789]\d{8}$/
    setPhone(text)
if (regex.test(phone ||phone.length!==8)) {
      setShowWarnimg(()=>(<Image style={{height:40,width:40,resizeMode:'center'}} source={require('../../assets/images/jt.png')}/>)

      )
    } else {
      setShowWarnimg('this is invalid')
     
    }
  }
 
   return(
    <View  style={{}}>
        <View style={{backgroundColor:"blue",marginTop:30,borderRadius:20}}>
     <TextInput
        value={phone}
        onChangeText={(text) => see(text)}
        style={{ borderWidth: 1, width:300, borderRadius: 20 ,backgroundColor:"white",}}
        placeholder="enete here"

      />
       <Text style={{color:'white',marginLeft:30}} >Enter your email</Text>
      <Text style={{color:'red'}}>{showWarnimg}</Text>
      
     
     
      </View>
   
     

    </View>


    )
}




  export default TextIn;