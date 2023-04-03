import React from 'react';
import { Image,KeyboardAvoidingView,View} from "react-native";
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import First from './First';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Name from './Name';
import { Modal } from 'react-native-paper';
import Mod from './Mod';
import WhtaWeD from './whatWeD';
// const Tab = createMaterialBottomTabNavigator();
//  const Tab = createMaterialTopTabNavigator();
 const Tab = createBottomTabNavigator();


const Mattab = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarStyle:{ backgroundColor: "#25415d"}
      
        
    }}
        
      >
  <Tab.Screen name="First" component={First} />
      {/* <Tab.Screen name="Register" component={Register} /> */}
      {/* <Tab.Screen name="Login" component={Login} options={{title:'',tabBarIcon:({focused,color})=>{
        return(
          <Image 
          style={{ width: focused?30:24, height: focused?30:24 ,marginTop:20,
          tintColor:focused ?'orange' :"brown",
        }}
    source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',}}/>
        )
      }}}/> */}
     
      {/* <Tab.Screen name="ForGOt" component={Forgot} /> */}
      <Tab.Screen name="WhatWeD" component={WhtaWeD}  options={{headerShown:false}}/>
      <Tab.Screen name="Name" component={Name}  options={{headerShown:false}}/>
      <Tab.Screen name="Mod" component={Mod}  options={{headerShown:false}}/>
   
    </Tab.Navigator>
  )
}
export default Mattab;