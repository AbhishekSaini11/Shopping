import React, { useEffect, useRef, useState } from "react";
import { Text, View, Dimensions, Button, FlatList, TouchableOpacity, TextInput, Image } from "react-native";
import Lottie from 'lottie-react-native';

import { useNavigation } from "@react-navigation/native";
// import { Picker, DatePicker } from 'react-native-wheel-pick';
import apiData from "./Flat";
import TextIn from "./TextInput";
const Data=[{"id":1,
"title":"Long term"},
{"id":2,
"title":"Short term"},
{"id":3,
"title":"Withdrawn"},
{"id":4,
"title":"Discontinued"},
{"id":5,
"title":"National shortage"},
{"id":6,
"title":"supply"},
{"id":7,
"title":"disruption"},
];

const Mod = () => {
  const[add,setAdd]=useState([]);
  const [phone, setPhone] = useState<any>("")
  const [count, setCount] = useState<any>()
  const navigation=useNavigation<any>();
  const inputrf = useRef<any>()
  
   return (
    <View>
    <View>
      <FlatList
                 data={Data}
                 numColumns={3}
                 renderItem={({item})=>{
                    return(
                      <View >
                        <TouchableOpacity onPress={()=>setAdd([...add,item.title])}style={{backgroundColor:"#25415d"}}>
                        <Text style={{margin:30,backgroundColor:"#25415d",color:'white'}}>{item.title}</Text>
                        </TouchableOpacity>
                      
                        
                        
                      </View>
                    )
                    }}
/>

<TouchableOpacity onPress={()=>navigation.navigate("Name",{Get:add})}>
<Text style={{alignSelf:'center',margin:1,fontSize:30}}>Add tag</Text>
</TouchableOpacity>
</View>
<Text>{count}</Text>
</View>



   )
}
export default Mod;





    