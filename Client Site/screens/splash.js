import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Pressable
} from 'react-native';


const SplashScreen = ({navigation}) => {

    const home = ()=>{
        navigation.navigate('login')
    }

    return (
        <>
            <SafeAreaView style={style.main}>
                <ScrollView  >
                 <Pressable onPress={home}>
                 <View style={style.center} >
                        <Image style={{width:100,height:100}} source={require("../images/logo.png")}/>
                        <Text style={{fontSize:20,color:"white",fontWeight:"bold"}}>Whatsapp</Text>

                      
                    </View>
                 </Pressable>
                 
                </ScrollView>
            </SafeAreaView>

        </>
    )
}

const style = StyleSheet.create({
    main:{
        width:"100%",
        height:"100%",
        flexDirection:"column",
        backgroundColor:"#075E54",
        justifyContent:"center",
        alignItems:"center",
    },
    center:{
        width:400,
        height:690,
        justifyContent:"center",
        alignItems:"center",
        
    }
})

export default SplashScreen;