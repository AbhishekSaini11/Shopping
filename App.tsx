import React, { useState } from 'react';
import Item from './src/screen/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screen/Login';
import Home from './src/screen/Home';
import Register from './src/screen/Register';
import First from './src/screen/First';
import Forgot from './src/screen/Forgot';
import Mattab from './src/screen/Mattab';
import Name from './src/screen/Name';
import Mod from './src/screen/Mod';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert, FlatList
} from 'react-native';
import Product from './src/screen/Product';
import Cart from './src/screen/Cart';




const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Gest" component={Gest} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Mattab" component={Mattab} />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="Mod" component={Mod} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
  
        
      </Stack.Navigator>
    </NavigationContainer>


    //   const [shoppingList, setShoppingList] = useState<IItem[]>([]);
    //   let name :string = "amil";  return(

    //     <View>
    //       <Text> hello</Text>
    //       <AddItem
    //           setShoppingList={setShoppingList}
    //           shoppingList={shoppingList}
    //         />
    //         <FlatList
    //           data={shoppingList}
    //           keyExtractor={(item, index) => `${item.item}-${index}`}
    //           renderItem={({item}) => (
    //             <Item item={item.item} quantity={item.quantity} />
    //           )}
    //         />

    //        </View>

  )
};




export default App;
