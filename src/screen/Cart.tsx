import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image,FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



const Cart = ({ route }) => {
    

    const Sys = route?.params?.Geta;
    // const[cart,setCart]=useState(Sys)
 console.warn(Sys)
    // const[cart,setCart]=useState(Sys)

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={Sys}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', marginTop: 10 ,borderBottomWidth:1,borderColor:"gray",margin:10}}>
                                <Image source={{ uri: item.image }} style={{ height: 120, width: 100, resizeMode: 'center',marginRight:12,borderRadius:10}} />
                                <View>
                                    <Text style={{ width: 100, height: 38,fontWeight:'bold',marginTop:12 }}>{item.title}</Text>
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{flexDirection:'row',backgroundColor:'#388e3c',width:40}}>
                                       
                                        <Text style={{   }}>{item.rating.rate}</Text>
                                        <Image source={require('../../assets/images/st.png')} style={{ height: 15, width: 15, }} />
                                    </View>
                                    <Text>({item.rating.count})</Text>
                                    </View>
                                    <Text style={{color:'black',marginTop:20}}>RS.{item.price}</Text>
                                </View>
                               
                            {/* <TouchableOpacity style={{backgroundColor:"gray",borderRadius:50,paddingRight:20,marginTop:10}}
                onPress ={()=>setCart(false)} >
                <Text style={{fontSize:15,marginLeft:30,textAlign:'center'}}>
                Remove To Cart
               </Text>
                </TouchableOpacity>  */}
                            </View>
                        </View>
                    )
                }}

            />

        </View>
    )
}
export default Cart;