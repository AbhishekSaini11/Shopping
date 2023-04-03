import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { View, Text, Dimensions, ScrollView, TextInput, StyleSheet, TouchableOpacity, FlatList, ToastAndroid, Image, StatusBar, Modal } from "react-native";
import { Picker } from "react-native-wheel-pick";
import DropDown from "./DropDown";
import apiData from "./Flat";
import Product from "./Product";
//  

const { height, width } = Dimensions.get('window');




const Name = ({ route }) => {


    const Gru = route?.params?.Get;
    const [clare, setClare] = useState(Gru)
    // console.warn(Gru)

    //   let dut=  Gru.map((item:any)=>{
    //         return (
    //        <Text style={{margin:10,backgroundColor:"skyblue"}}>{item }</Text>

    //      ) })


    const navigation = useNavigation<any>();
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const inputref = useRef<any>();
    const [see, setSee] = useState(true)
const[select,setSelected]=useState("select teams")
    const addChip = () => {


        let tempData = data;
        if (text == "") {
            ToastAndroid.show('plese enter the value',
                ToastAndroid.SHORT)
        } else {
            tempData.push(text);

            let temp = [];
            tempData.map((item) => {
                temp.push(item);
            });
            inputref.current.clear();
            setData(temp);

        }

    };
    const deleteData = (index: number) => {
        let tempData = data;
        let temp = tempData.filter((item, ind) => {
            return index != ind;
        });
        setData(temp);
    }


    return (
        <View >
            <ScrollView>
                <StatusBar
                    backgroundColor={'#25415d'} />

                <View style={styles.container}>
                    <Text style={styles.firstText}>Search</Text>
                </View>
                <View >
                    <Text style={{ color: "gray", margin: 10, fontSize: 12, fontWeight: 'bold' }}>
                        Select Teams and then at the bottom of the teams list, select Join or create a list, select Join or create a
                    </Text>
                    <Text style={{
                        color: "#25415d",
                        fontSize: 15,
                        marginLeft: 10, fontWeight: '600'
                    }}>Which team woul you like to search ?</Text>
                </View>
                <View style={{ marginTop: 8 }}>
                    <View style={{ borderWidth: 1, marginLeft: 10, height: 43, width: 120, borderRadius: 10, borderTopColor: "#003366", borderBottomColor: "#003366" }}>
                        {see ?


                            <TouchableOpacity onPress={() => setSee(!see)}>
                                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around' }}>
                                    <Image style={{ height: 20, width: 20, tintColor: '#003366', marginLeft: 3 }} source={require('../../assets/images/p.png')} />
                                    <Text style={{ color: "#003366", textAlign: 'center', fontWeight: 500 }}>{select}</Text>
                                </View>
                            </TouchableOpacity>
                            :
                            <View style={{}}>
                                <Modal
                                    transparent={true}

                                    style={{ height: height / 2, width: width, alignSelf: 'center' }}>
                                    <View style={{ flex: 1,alignItems:'center', backgroundColor: 'rgba(0,0,0,.5)' }}>
                                        <View style={{height:170,width:220,justifyContent:'center',alignItems:'center',backgroundColor:'#FFFFFF',borderRadius:20,marginTop:50}}>
                                             <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Choose Team</Text>
                                            <View style={{ flex: 1, alignSelf: 'center', justifyContent:'center' }}>

                                                <Picker
                                                    style={{ width: 200, height: 100, }}
                                                    selectedValue='item4'
                                                    pickerData={['csk', 'Gt', 'Mi', 'Rcb', 'Dc', 'Sh', 'Kx1P', 'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7']}

                                                    onValueChange={(value: any) =>{setSelected(value);setSee(!see)}}
                                                    selectLineSize={4}

                                                    textSize={20}


                                                    selectTextColor='green'
                                                    isShowSelectBackground={false} // Default is true
                                                    selectBackgroundColor='#8080801A'
                                                />

                                                <TouchableOpacity onPress={() => setSee(!see)} style={{ backgroundColor: "#25415d", width: 200 }}>
                                                    <Text style={{ color: "white", textAlign: 'center', marginTop: 4, fontWeight: 500, }}> Done</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>

                            </View>
                        }
                    </View>


                    <Text style={{ color: "gray", fontWeight: 'bold', marginLeft: 10, fontSize: 13, marginTop: 8 }}>Searching In</Text>
                    <Text style={{ color: "gray", fontWeight: 'bold', marginLeft: 10, fontSize: 15, marginTop: 10 }}>Out of stoke/Pharmacist team </Text>
                </View>



                <View >
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: '#003366', fontWeight: '600', marginLeft: 10, fontSize: 15, marginTop: 15 }}>Search by Tags</Text>
                        <Text style={{ color: "gray", fontWeight: '500', marginLeft: 10, fontSize: 13, marginTop: 15.99 }} >Add up to 8 tags</Text>
                    </View>
                    <View style={{ height: 128 }}>
                        <TouchableOpacity style={styles.addTag} onPress={() => navigation.navigate('Mod')} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Image style={{ height: 20, width: 20, tintColor: '#003366' }} source={require('../../assets/images/p.png')} />
                                <Text style={styles.addTagText}>Add tag</Text>
                            </View>
                        </TouchableOpacity>
                        <Modal visible={false}>

                        </Modal>

                        <Text style={{ marginLeft: 10, fontWeight: 600 }}>Selected Tags</Text>

                        {/* <Text >{dut}</Text> */}

                        <FlatList
                            data={Gru}
                            numColumns={4}

                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <Text style={{ backgroundColor: "#b8e2fc", marginLeft: 8, borderRadius: 7, textAlign: 'center', marginTop: 2, fontWeight: "bold" }}>{item}</Text>
                                )
                            }}

                        />


                    </View>
                </View>

                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, marginLeft: 10, color: "#003366", fontWeight: "bold" }}>Search by Keywords</Text>
                        <Text style={{ color: "gray", fontWeight: '500', marginLeft: 10, fontSize: 13 }} >Add up to 8 tags</Text>
                    </View>
                    <View style={{ justifyContent: "center", }}>

                        <TextInput
                            style={styles.textIn} placeholder="type your keyword here"
                            onChangeText={(txt) => { setText(txt) }}
                            value={text}
                            ref={inputref}
                            maxLength={5} />
                        <Text style={{ marginLeft: 10, fontWeight: 600, margin: 14 }}>Selected Keywords</Text>
                        <TouchableOpacity style={styles.add} onPress={() => { addChip() }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                <Image style={{ height: 20, width: 20, tintColor: '#003366' }} source={require('../../assets/images/m.png')} />
                                <Text style={{ color: "#003366", fontSize: 13,fontWeight:'500' }}>Add keyword</Text>
                            </View>
                        </TouchableOpacity>

                        {/* <Text>{text}</Text> */}
                        {/* <View> <View> */}
                        <View style={{ height: 60 }}>

                            <FlatList
                                numColumns={4}
                                data={data}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={styles.flat}>
                                            <Text style={{ margin: 3, fontWeight: '600' }}>
                                                {item}
                                            </Text>
                                            <TouchableOpacity
                                                onPress={() => deleteData(index)}>
                                                <Text style={{ fontSize: 19, marginLeft: 8 }}>*
                                                </Text>
                                            </TouchableOpacity>
                                        </View>


                                    )
                                }}

                            />
                        </View>
                        <View style={{ marginLeft: 10, height: 45, width: 100, backgroundColor: '#25415d', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Image style={{ height: 25, width: 25, tintColor: 'white', marginTop: 7 }} source={require('../../assets/images/find.png')} />
                            <Text style={{ color: 'white', fontSize: 17, marginTop: 6, marginRight: 3 }}>Search</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#25415d",

        justifyContent: 'flex-end',
        height: 80

    },
    firstText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '5%'
    },
    addTag: {
        width: 100,
        borderWidth: 1, padding: 8,
        borderRadius: 10,
        borderRightColor: "#003366",
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 5
    },

    addTagText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#003366',
        fontWeight:'500'
    },

    flat:
    {
        flexDirection: 'row',
        borderRadius: 6,
        padding: 1,
        margin: 4,
        borderColor: '#003366',
        backgroundColor: '#b8e2fc',
        marginTop: 10,
        marginLeft: 10
    },
    textIn: {
        width: 385,
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
        borderColor: "gray",
        margin: 10,
        marginLeft: 10,
        height: 40
    },
    add: {
        borderRadius: 10,
        borderWidth: 1,
        width: 120,
        height: 42,
        marginLeft: 10,
        marginTop: 4 ,
        padding: 4,
        borderTopColor: 'gray',
        borderRightColor: 'gray',
        borderTopWidth: 2,
        borderRightWidth: 2

    },



})
export default Name;

