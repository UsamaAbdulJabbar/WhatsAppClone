import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home';

//stack navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/splash';
import { SearchBar } from 'react-native-screens';



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


 function TabNavigationApp() {
  return (

    <NavigationContainer>
   
      {/* <Stack.Navigator>
        
       
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
            headerBackVisible:false,
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
        name="home" component={HomeScreen} />
        
      </Stack.Navigator> 
       */}


      <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />    
        <Tab.Screen name="Settings" component={SettingsScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>

    


  )
    };


 

  export default TabNavigationApp;