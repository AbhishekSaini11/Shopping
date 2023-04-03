import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { View, Text, Dimensions, ScrollView, TextInput, StyleSheet, TouchableOpacity, FlatList, ToastAndroid, Image, Modal } from "react-native";
import DropDown from "./DropDown";
import apiData from "./Flat";
//  

const { height, width } = Dimensions.get('window');




const Product = ({ route }) => {
  

   
    const [see, setSee] = useState(false)
    const [count, setCount] = useState(1)
    const [cart,setCart]=useState<any>([]);
    // console.warn(cart)
    const get = route.params.Ame

    const System = apiData.filter((item) => {
        if (item.id === get) {
            return item.title

        }

    })


    return (
        <View style={{ flex: 1 }}>
            {/* <DropDown/> */}
            <FlatList
                data={System}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <View 
                                style={{ flex: 1, 
                                justifyContent: 'center', 
                                alignItems: 'center' }}>

                                    <Image source={{ uri: item.image }}
                                     style={{ resizeMode: "center", 
                                     height: 250,
                                     
                                     width: 250,
                                      marginTop: 30, borderRadius: 10 }} />
                                    {/* <Text>{item.title}</Text> */}
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: height / 2.5, backgroundColor: "gray", borderTopLeftRadius: 50, borderTopRightRadius: 40, marginTop: 10, }}>

                                <Text style={{ fontSize: 20, color: "white", marginTop: 10, alignSelf: 'center', margin: 20, fontWeight: 'bold',height:55 }}>{item.title}</Text>
                                <Text style={{ marginLeft: 30 }}>OFFER<Text style={{ color: "yellow", textDecorationLine: "line-through" }}>{(item.price * count) * 1.5}</Text><Text></Text></Text>
                                <View style={{ flexDirection: 'row',alignItems:'center'}}>
                                    <Text style={{ fontSize: 30, color: "orange", fontWeight: "bold", marginLeft: 50 }}>  $ {item.price * count}</Text>
                                   <Image style={{height:28,width:2, marginLeft: 120}} source={require('../../assets/images/st.png')}/>
                                    <Text style={{ fontSize: 30, color: "orange", fontWeight: "bold", }}> {item.rating.rate}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 70, }}>

                                    <TouchableOpacity onPress={() => {
                                        if (count - 1 > 1) {
                                            setCount(count - 1)
                                        } else {
                                            setCount(1)
                                        }
                                    }
                                    }
                                        style={{ alignSelf: 'center', backgroundColor: "orange", height: 20, width: 20 }}>
                                        <Text style={{ fontSize: 20, textAlign: 'center' }}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ alignSelf: 'center', backgroundColor: "white", height: 20, width: 20, textAlign: 'center' }}>{count}</Text>
                                    <TouchableOpacity onPress={() => setCount(count + 1)} style={{ alignSelf: 'center', backgroundColor: "orange", height: 20, width: 20 }}>
                                        <Text style={{ fontSize: 20, }}>+</Text>
                                    </TouchableOpacity>

                                </View>
                                {
                  cart.includes(item)?(
                <TouchableOpacity style={{backgroundColor:"gray",borderRadius:50,paddingRight:20,borderColor:'orange',borderWidth:2,marginLeft:100,marginRight:100,marginTop:10}}
                onPress ={()=>setCart(cart.filter((x)=>x.id !==item.id))} >
                <Text style={{fontSize:15,marginLeft:30,textAlign:'center'}}>
                Remove To Cart
               </Text>
                </TouchableOpacity>):(

                 <TouchableOpacity style={{backgroundColor:"orange",borderRadius:50,paddingRight:20 ,marginLeft:100,marginRight:100,marginTop:10}} onPress={()=>{setCart([...cart,item]);}}  >
                 <Text style={{fontSize:15,marginLeft:30,textAlign:'center'}}>
                   add To Cart
                </Text>
                 </TouchableOpacity>
               )
    }
                                {/* <TouchableOpacity onPress={()=>setCart([...cart,item])}>
                    <Text style={{ fontSize: 30, alignSelf: "center", fontWeight: 'bold', backgroundColor:'orange',marginTop:10}}>Add To Cart</Text>
                </TouchableOpacity> */}
              
                            </View>

                        </View>
                    )
                }}
            />
            <View style={{ height: height / 8, backgroundColor: 'orange' }}>
                <TouchableOpacity  >
                    <Text style={{ fontSize: 30, margin: 20, alignSelf: "center", fontWeight: 'bold', }}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Product;


