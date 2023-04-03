import React, { useEffect, useRef, useState } from "react";
import { Text, View, Dimensions, Button, FlatList, StyleSheet, Image, TouchableOpacity, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Lottie from 'lottie-react-native';


import { useNavigation } from "@react-navigation/native";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
const { height, width } = Dimensions.get('window')

const First = () => {
  const navigation = useNavigation<any>();
  const animationRef = useRef<any>();
  const [name, setName] = useState<any>('')
  const [number, setNumber] = useState(0);
  useEffect(() => {
    press2();
  }, [])

const delate= async()=>{
  await AsyncStorage.clear()
}

  const press2 = async () => {
    const userhere = await AsyncStorage.getItem("user")
    console.log(userhere)
    setName(userhere)

  }
  const press3 = async () => {
    // const userhere =  await AsyncStorage.getItem("user")
    // const emailhere =  await AsyncStorage.getItem("gmail")
    // const passhere =  await AsyncStorage.getItem("pass")
    //  console.log(userhere)
    // setName(userhere)
    const userhere = await AsyncStorage.removeItem("user")
    const emailhere = await AsyncStorage.removeItem("gmail")
    const passhere = await AsyncStorage.removeItem("pass")


    // for remove multiple keys do this 
    //   AsyncStorage.getAllKeys()
    //       .then(keys => AsyncStorage.multiRemove(keys))

  }
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [currantIndex, setCurrantIndex] = useState<any>();
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={delate}>
        <Text>Delate</Text>
      </TouchableOpacity>
      <Text style={{ color: 'red', fontSize: 30, }}> Welcome to our App</Text>
      <View style={{ height: height / 2 }}>

        <FlatList
          showsHorizontalScrollIndicator={false}

          horizontal
          pagingEnabled
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrantIndex((x / width).toFixed(0));
          }}
          data={data}
          renderItem={({ item, index }) => {
            
            return (
              <View style={{
                width: width,
                height: height / 2,
                justifyContent: 'center',
                alignItems: "center"
              }}
              >

                <TouchableOpacity disabled
                  style={{
                    backgroundColor: "orange",
                    height: "90%", width: '90%',
                    borderRadius: 10
                  }}>
                  {/* <Lottie
                    ref={animationRef}
                    source={require('../screen/animation/136078-feesbee-section-2.json')}

                    autoPlay={true}
                  /> */}
                </TouchableOpacity>

              </View>


            )

          }} />



        <View style={{ flexDirection: 'row', width: width, justifyContent: "center", alignItems: 'center' }} >
          {
            data.map((item, index) => {
              return (
                <View style={{
                  width: currantIndex == index ? 50 : 8,
                  height: 8,
                  backgroundColor: currantIndex == index ? 'orange' : "gray",
                  borderRadius: currantIndex == index ? 5 : 5,
                  marginLeft: 5
                   }}>
                    
                </View>
              )
            })
          }
        </View>
       
      </View>

      {/* <Text> Welcome {name}</Text>
    


      {/* </View> */}
    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#eff9f7'
  },
  text: {

    color: '#eff9f7'
  },
  image: {
    // resizeMode:'center',
    height: '25%',
    width: '40%'
  }



})
export default First;