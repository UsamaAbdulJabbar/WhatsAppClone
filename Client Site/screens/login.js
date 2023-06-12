import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    Touchable,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { Icon } from "react-native-vector-icons/icon";


const LoginScreen = ({navigation}) => {

    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber,setMobileNumber] = useState('');
    const userObj = {
        username,
        mobileNumber,
        password,
    }
    const login = () =>{
        

        if(!username){
            Alert.alert("Error","Required : Username");
            return;
        };
        if(!mobileNumber){
            Alert.alert("Error","Required : Mobile Number");
            return;
        };
        if(!password){
            Alert.alert("Error","Required : Password");
            return;
        }else{
            console.log(userObj)
        setUsername('')
        setMobileNumber('');
        setPassword('');
        navigation.navigate('home')
        }
        
        
        
    }

    const signUp = ()=>{
            navigation.navigate("signup")
    }
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={style.main}>
                        <View style={{alignItems:"center"}}>
                            <Image style={{width:110,height:110,marginTop:20}} source={require("../images/logo.png")} />
                            <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Whatsapp</Text>
                        </View>

                        <View style={style.loginView}>
                            <View style={{alignItems:"center",marginTop:10}}>
                                <Text style={{fontSize:26,color:"#075E54",fontWeight:"bold"}}>Welcome Buddy</Text>
                                
                            </View>
                                <View style={{alignItems:"center",marginTop:10}}>
                                    <TextInput value={username} onChangeText={(e)=>{setUsername(e)}} placeholder="username"  style={{elevation:20,backgroundColor:"white",width:"70%",borderRadius:8,fontSize:16,borderWidth:2, borderColor:"#128C7E",marginTop:10}} />
                                    <TextInput value={mobileNumber} onChangeText={(e)=>{setMobileNumber(e)}} placeholder="Mobile"  style={{elevation:20,backgroundColor:"white",width:"70%",borderRadius:8,fontSize:16,borderWidth:2, borderColor:"#128C7E",marginTop:10}} />
                                    <TextInput secureTextEntry={true} value={password} onChangeText={(e)=>{setPassword(e)}} placeholder="Password"  style={{elevation:20,backgroundColor:"white",width:"70%",borderRadius:8,fontSize:16,borderWidth:2, borderColor:"#128C7E",marginTop:10}} />
                                </View>

                                <View style={{alignItems:"center",marginTop:10}}>
                                    <TouchableOpacity onPress={login} style={{width:"40%",alignItems:"center",backgroundColor:"#34B7F1",height:40,borderRadius:8,elevation:30,justifyContent:"center"}}>
                                        <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>Login</Text>
                                    </TouchableOpacity>
                                </View>

                                
                                    <View style={{alignItems:"center",marginTop:10}}>
                                    <Text>Or login with</Text>
                                    </View>

                                <View style={{alignItems:"center",marginTop:20,flexDirection:"row",justifyContent:"center"}}>
                                    <TouchableOpacity style={{marginTop:10,padding:5}}>
                                        <Image style={{width:50,height:50}}  source={require('../images/googleLogo.png')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{marginTop:10,padding:5}}>
                                        <Image style={{width:50,height:50}}  source={require('../images/facebookLogo.png')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{marginTop:10,padding:5}}>
                                        <Image style={{width:40,height:40}}  source={require('../images/instaLogo.png')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{alignItems:"center",marginTop:10}}>
                                    <Text>Or Don't have an account</Text>
                                    
                                    </View>

                                <TouchableOpacity onPress={signUp}>
                                    
                                <View style={{alignItems:"center",marginTop:10}}>
                                    <Text style={{color:"blue"}}>Create Account</Text>
                                    
                                    </View>
                                </TouchableOpacity>

                                <View style={{alignItems:"center",marginTop:10}}>
                                    <Text >Developed By : Usama Softech Solution</Text>
                                    
                                    </View>

                        </View>
                            
                        
                    </View>
                </ScrollView>
            </SafeAreaView>

        </> 
    )
}

const style =StyleSheet.create({
    main:{
        width:"100%",
        height:"100%",
        flex:1,
        backgroundColor:"#128C7E",
        alignItems:"center",

    },
    loginView:{
        marginTop:50,
        width:"100%",
        height:"100 %",
        backgroundColor:"white",
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        
    }
})

export default LoginScreen;