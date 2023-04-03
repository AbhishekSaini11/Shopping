import React, { useRef, useState } from "react";
import { View, Text, Dimensions, ScrollView, TextInput, StyleSheet, TouchableOpacity, FlatList, ToastAndroid } from "react-native";
import DATA from "./Flat";
const Teams=[{id:1,
            "title": "Chennai Super Kings"},
   {id:2,
   "title":"Delhi Capitals"},
   {id:3,
    "title":"Gujarat Titans"},
   {id:4,
    "title":"Kolkata Knight Riders"},
   {id:5,
    "title":"Lucknow Super Giants"},
   {id:6,
    "title":"Mumbai Indians"},
{id:7,
    "title":"Punjab Kings"},
{id:8,
    "title":"Rajasthan Royals"},
{id:9,
    "title":"Royal Challengers Bangalore"},
{id:10,
    "title":"Sunrisers Hyderabad"}]

const DropDown = () => {
    
    const searchRef=useRef<any>();
    const [num,setNum]=useState(0);
    const [data,setData]=useState(Teams)
    const [select, setselect] = useState("select Team")
    const [click, setClick] = useState(false)
    const onSearch=(txt: string)=>{
        if(txt!=="")
        {  
            let tempData=data.filter(item=>{
            
            return item.title.toLowerCase().indexOf(txt.toLowerCase())>-1;
           
        });
        setData(tempData)
    }else{
       
        setData(Teams)
    }
      
    };
    return (
        <View style={styles.container}>
          
            <Text style={{ marginTop: 100, alignSelf: 'center' }}>Select Your Team</Text>
            <TouchableOpacity style={styles.select} onPress={() => setClick(!click)}>
                <Text>{select}</Text>
                <Text style={{ marginRight: 4 }}> Select team</Text>
            </TouchableOpacity>
            {click ?
                <View style={styles.option}>
                 <TextInput placeholder="search Team" style={styles.searc} onChangeText={(txt)=>{onSearch(txt)}}
                 ref={searchRef}
                />
                 <FlatList
                 data={data}
                 renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>{setselect(item.title);
                            onSearch("");
                            setClick(false);
                             searchRef.current.clear();
                          
                            
                        }}>
                            
                        <Text style={styles.list}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                 }}

                 
                 />

                </View> 
                
                
                : null}

        </View>



    )
}
const styles = StyleSheet.create({
    container:
    {
        flex: 1,

        backgroundColor: 'pink',
        // justifyContent:'center',
        // alignItems:'center'

    },
    select: {
      elevation:4,
        justifyContent: "space-between",
        borderColor: 'black',
        width: "80%",
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 50,
        alignSelf: 'center',
        paddingLeft:10,
        paddingRight:10,
        borderRadius:5
    },
    option: {
      borderColor: 'black',
        width: "80%",
        height: "50%",
     alignSelf: 'center',
        elevation:4
    },
    searc:{
        width: "90%",
        height: 50,
    // borderWidth:0.40,
        margin:10,
        alignSelf:'center',
        padding:10,
        borderRadius:3,
        elevation:1,
        borderBottomWidth:.8
        
    },
list:{
    width: "90%",
    height: 50,
    elevation:3,
 
    alignSelf:'center',
    padding:10,
    borderBottomWidth:1,
    fontWeight:'bold'
}
})
export default DropDown;