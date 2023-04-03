import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View,Text, Image,TouchableOpacity, StyleSheet, StatusBar, FlatList, Modal, Button ,TextInput} from "react-native";
import { Dimensions } from "react-native";
import apiData from "./Flat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
const{height,width}=Dimensions.get("window");

const Data=apiData;


const WhtaWeD=()=>{

// useEffect(()=>{
// setInfo()
// },[])


async function setInfo (){
  await AsyncStorage.setItem("System",JSON.stringify(cart))
  console.warn("System")

}
async function getInfo (){
  const get = await AsyncStorage.getItem("user")
  console.log(get)
}
  


   
    const [selected, setSelected] = useState<any>(Data)
  const [cart,setCart]=useState<any>([]);
    
  
    const navigation=useNavigation();
    const[visiable,setVIsiabl]=useState(false)
    const [create,setCreate]=useState('');
    const[count,setCount]=useState(0)
     
    const onSearch=(txt:any)=>{
        if(txt){
          let tempdata=Data.filter(function(item){
            return item.title.toLowerCase().indexOf(txt.toLowerCase())>-1;
          })
          // setCreate(txt)
          setSelected(tempdata)
        }else{
          // setCreate(txt)
          setSelected(Data)
         
        }
      }
    

  
    return(
<View >
<View  style={{flexDirection:'row',justifyContent:'space-between'}}>
<TextInput placeholder="search Product" style={styles.textIn} onChangeText={(txt)=>{onSearch(txt)}} />
<TouchableOpacity onPress={()=>setVIsiabl(!visiable)}>
  <Image source={require('../../assets/images/filter.png')} style={{height:35,width:35,tintColor:'gray',marginTop:20}}/>
{/* <Text style={{fontSize:30,marginTop:10}}>Filter</Text> */}
</TouchableOpacity>
<View style={{}}>
<Modal
 transparent={true}
visible={visiable}>
<View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,.5)'}}>
<View style={{width:'60%',height:200,borderRadius:10,backgroundColor:'white'}}>  

  <Text  style={{fontSize:30,alignSelf:'center',backgroundColor:"orange",borderBottomWidth:2,borderColor:'gray'}}>Sort By Choice</Text>
  <TouchableOpacity style={{borderBottomWidth:2,borderColor:'gray'}} onPress={()=>{setVIsiabl(!visiable);(Data.sort((a,b)=>{
    return a.title>b.title ?1:-1
  }))
  }}>
<Text style={{fontSize:25,alignSelf:'center'}}>Short By Name</Text>
</TouchableOpacity>
<TouchableOpacity style={{borderBottomWidth:2,borderColor:'gray'}} onPress={()=>{setVIsiabl(!visiable);(Data.sort((a,b)=>{
  return b.price-a.price
}))} }>
<Text style={{fontSize:25,alignSelf:'center'}}>Short By price</Text>
</TouchableOpacity>
<TouchableOpacity style={{borderBottomWidth:2,borderColor:'gray'}} onPress={()=>{setVIsiabl(!visiable);(Data.sort((a,b)=>{
  return b.rating.rate-a.rating.rate
}))} }>
<Text style={{fontSize:25,alignSelf:'center'}}>Short By Rating</Text>
</TouchableOpacity>
<TouchableOpacity style={{borderBottomWidth:2,borderColor:'gray'}} onPress={()=>{setVIsiabl(!visiable);(Data.sort((a,b)=>{
  return a.price-b.price
}))} }>
<Text style={{fontSize:25,alignSelf:'center'}}>Short  low Price</Text>
</TouchableOpacity>
</View>
</View>
</Modal>
</View>
</View>
    <StatusBar
    backgroundColor="orange"
    barStyle="light-content"
    hidden={false}/>
    <Image source={require('../../assets/images/banner.jpg',)} style={{height:200,width:"97%",alignSelf:'center',borderRadius:10,marginTop:10}}/>
    
    <View >
  <View style={{justifyContent:'center',alignItems:'center',height:height/2.3}}>
       <FlatList
    data={selected}
     horizontal
   pagingEnabled
    renderItem={({item,index})=>{
      const Add =()=>{
       
        navigation.navigate("Product",{Ame:item.id})
       
      }
    
 return(
           <View style={{...styles.flat,backgroundColor:'skyblue'}}>
            <TouchableOpacity onPress={Add}>
                <Image source={{uri:item.image}}  style={{width:100, height:100,resizeMode:'center'}}/>
                </TouchableOpacity>
               <Text style={{fontSize:15,justifyContent:'center',textAlign:'center',height:20}}>
                   {item.title},
                </Text>
                <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'flex-end'}}>
                <Text style={{fontSize:15,}}>
                  price ${item.price}
                </Text>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/images/st.png')} style={{height:20,width:20,marginLeft:20}} />
                <Text style={{fontSize:15}}>
                   {item.rating.rate}
                </Text>
               
                </View>
                </View>
                {
                  cart.includes(item)?(
                <TouchableOpacity style={{backgroundColor:"gray",borderRadius:50,paddingRight:20,marginTop:10}}
                onPress ={()=>setCart(cart.filter((x)=>x.id !==item.id))} >
                <Text style={{fontSize:15,marginLeft:30,textAlign:'center'}}>
                Remove To Cart
               </Text>
                </TouchableOpacity>):(

                 <TouchableOpacity style={{backgroundColor:"orange",borderRadius:50,paddingRight:20,marginTop:10}} onPress={()=>{setCart([...cart,item])}}  >
                 <Text style={{fontSize:15,marginLeft:30,textAlign:'center'}}>
                   add To Cart
                </Text>
                 </TouchableOpacity>
               )
    }
          </View>
      
        )

    }}
    
    />
    

   

   
  

</View>
    {/* <Text style={styles.text}> 1 = How to use gif animation on <Text style={{color:'red'}}>home</Text></Text>
    <Text style={styles.text}> 2= How to use multiple navigation in one project <Text style={{color:'red'}}>Mattab or app.tsx</Text></Text>
    <Text style={styles.text}> 3= How to use Dropdown with search box <Text style={{color:'red'}}>DropDown</Text></Text>
    <Text style={styles.text}> 4 = How to use valitdtion<Text style={{color:'red'}}>textInput</Text></Text>
    <Text style={styles.text}> 5 = How to navigate params thoug navigation <Text style={{color:'red'}}>NAme,and Mod</Text></Text>
    <Text style={styles.text}> 6 = How to use asyncstorage <Text style={{color:'red'}}>Login And Regisater</Text></Text>
    <Text style={styles.text}> 7 = How to use arry from another screen<Text style={{color:'red'}}>Flat</Text></Text>
    <Text style={styles.text}> 8 = How to make custom slider <Text style={{color:'red'}}>First</Text></Text> */}
 </View>
 <View style={{height:height/2,backgroundColor:"white"}}>
  <TouchableOpacity onPress={()=>navigation.navigate("Cart",{Geta:cart.id})}>
  <Text style={{alignSelf:'center',backgroundColor:"white"}}>Go to Cart</Text>
  </TouchableOpacity>
  <Text>{console.warn(cart)}</Text>
 
  
  {/* <FlatList
  data={cart}
  renderItem={({item})=>{
    
    return(
      <View>

        <Image source={{uri:item.image}} style={{height:100,width:100,alignSelf:"center",marginTop:20}}/>
        <Text style={{height:70,width:100,marginLeft:20,alignSelf:'center'}}>{item.title}</Text>
        <TouchableOpacity style={{backgroundColor:"gray",borderRadius:50,paddingRight:20,width:200,alignSelf:'center'}}
                onPress ={()=>setCart(cart.filter((x)=>x.id !==item.id))} >
                <Text style={{fontSize:15,textAlign:'center',width:200,alignSelf:"center"}}>
                Remove To Cart
               </Text>
                </TouchableOpacity>
        <View style={{flexDirection:"row",marginLeft:50}}>
       
     </View>
    
    
    
      </View>
    )
  }}
  /> */}
<TouchableOpacity >
  <Text>get</Text>
</TouchableOpacity>
 
</View>
 </View>
    )
}
const styles=StyleSheet.create({
    text:{
    fontSize:20,
    marginLeft:10,
    margin:5,
   
   
    },
    flat:{
      justifyContent:"center",
      alignItems:'center',
      backgroundColor:"",
      borderWidth:1,
      height:200,
      width:200,
      margin:10,
      borderRadius:20,
      borderColor:"red"
    },
    textIn:{
      width:"70%",
      borderWidth:1,
      marginTop:10,
      borderColor:"orange",
      borderLeftColor:'red',
      borderBottomWidth:3,
      borderTopWidth:3,
      borderRadius:30,
      color:'white',
      fontSize:20,
      marginLeft:20,
      fontWeight:'bold'
    }
   
})
export default WhtaWeD;

// const AddMultipleItem = () => {
//     const [selected, setSelected] = useState([]);
  
//     const handleSelect = (item) => {
//       setSelected([...selected, item]);
//     };
  
//     return (
//       <FlatList
//         data={data}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handleSelect(item)}>
//             <View style={styles.item}>
//               <Text style={styles.title}>{item.title}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//         keyExtractor={item => item.id}
//       />
//     );
//   };