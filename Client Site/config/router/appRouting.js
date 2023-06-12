import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from '../../screens/splash';
import HomeScreen from '../../screens/home';
import LoginScreen from '../../screens/login';
import SignupScreen from '../../screens/signup';
import { ScreenStackHeaderBackButtonImage, SearchBar } from 'react-native-screens';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { View,Text } from 'react-native';
import ChatScreen from '../../screens/chat';


const Stack = createNativeStackNavigator();

function AppRoutingStack() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
      
     
      <Stack.Screen
      options={
        {
          statusBarColor:"#075E54",
          headerStyle:{
          backgroundColor:"#075E54",
            
          },
        }
      }
      name="splash" component={SplashScreen} />
      <Stack.Screen 
      options={
        {
          title:"Whatsapp",
         
          statusBarColor:"#075E54",
          headerSearchBarOptions:SearchBar,
          headerLargeTitleShadowVisible : true,
          
          headerStyle:{
          backgroundColor:"#075E54",
            
          },
          headerTintColor:"white",
          
          

        }
      }
      name="home" component={HomeScreen} />
      <Stack.Screen  options={
        {
          statusBarColor:"#128C7E",
          headerStyle:{
            backgroundColor:"#128C7E",
              
            },
            headerTintColor:"white",
        }
      } name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen
      
      options={
        {
          title:"Chat",
          
          statusBarColor:"#075E54",
          headerSearchBarOptions:SearchBar,
          headerLargeTitleShadowVisible : true,
          headerRight: ()=>{
              <>
              <View>
               <Text>

               </Text>

              </View>
              </>
          },
          headerStyle:{
          backgroundColor:"#075E54",
            
          },
          headerTintColor:"white",
          
          

        }
      }
      
      name="chat" component={ChatScreen} />
      
      
    </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppRoutingStack;