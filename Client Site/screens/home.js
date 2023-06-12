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
    Pressable,
} from 'react-native';
import AppRoutingStack from "../config/router/appRouting";


const HomeScreen = ({navigation}) => {

    const [username,setUsername] = useState('');
    
    const [name,setName] = useState('');
    const chatScreen = ()=>{
        setName(username);
        const data = {
            name,
        }
         navigation.navigate("chat",data.name)
        console.log(username)
    }


    return (
        <>
            <SafeAreaView style={style.main}>
                <ScrollView>
                    
                    <View style={style.chatBox}>
                        <View >
                            <Image style={style.profileBox} source={require('../images/usama3.jpg')}/>

                        </View>
                        <Pressable onPress={()=>{chatScreen(setUsername("Usama"))}} >
                        <View style={style.nameBox}>
                            <View><Text   style={{color:"black",fontSize:18,fontWeight:"bold"}}>Usama</Text></View>
                            <View><Text style={{color:"grey",fontWeight:"500"}}>someone: Hello i am usama...</Text></View>
                        </View>
                        </Pressable>

                        <View style={style.nameBox}>
                            
                            <View><Text style={{color:"grey",fontWeight:"bold"}}>12:00 pm</Text></View>
                        </View>
                    </View>


                    <View style={style.chatBox}>
                        <View >
                            <Image style={style.profileBox} source={require('../images/shoaib.jpeg')}/>

                        </View>
                        <View style={style.nameBox}>
                            <View><Text style={{color:"black",fontSize:18,fontWeight:"bold"}}>Shoaib</Text></View>
                            <View><Text style={{color:"grey",fontWeight:"500"}}>usama: jldi a</Text></View>
                        </View>

                        <View style={style.nameBox}>
                            
                            <View><Text style={{color:"grey",fontWeight:"bold"}}>1:00 am</Text></View>
                        </View>
                    </View>

                    <View style={style.chatBox}>
                        <View >
                            <Image style={style.profileBox} source={require('../images/sikandar.jpeg')}/>

                        </View>
                        <View style={style.nameBox}>
                            <View><Text style={{color:"black",fontSize:18,fontWeight:"bold"}}>Sikandar Uni</Text></View>
                            <View><Text style={{color:"grey",fontWeight:"500"}}>game me ajao</Text></View>
                        </View>

                        <View style={style.nameBox}>
                            
                            <View><Text style={{color:"grey",fontWeight:"bold"}}>12:00 pm</Text></View>
                        </View>
                    </View>

                    <View style={style.chatBox}>
                        <View >
                            <Image style={style.profileBox} source={require('../images/hamza.jpeg')}/>

                        </View>
                        <View style={style.nameBox}>
                            <View><Text style={{color:"black",fontSize:18,fontWeight:"bold"}}>hamza Uni</Text></View>
                            <View><Text style={{color:"grey",fontWeight:"500"}}>Adda kia haal he</Text></View>
                        </View>

                        <View style={style.nameBox}>
                            
                            <View><Text style={{color:"grey",fontWeight:"bold"}}>12:00 pm</Text></View>
                        </View>
                    </View>


                    <View style={style.chatBox}>
                        <View >
                            <Image style={style.profileBox} source={require('../images/usama3.jpg')}/>

                        </View>
                        <View style={style.nameBox}>
    
                            <View><Text style={{color:"black",fontSize:18,fontWeight:"bold"}}>Group One</Text></View>
                            <View><Text style={{color:"grey",fontWeight:"500"}}>someone: Hello i am usama...</Text></View>
                        </View>

                        <View style={style.nameBox}>
                            
                            <View><Text style={{color:"grey",fontWeight:"bold"}}>12:00 pm</Text></View>
                        </View>
                    </View>


                    <View style={style.chatBox}>
                        <View >
                            <Image style={style.profileBox} source={require('../images/usama3.jpg')}/>

                        </View>
                        <View style={style.nameBox}>
                            <View><Text style={{color:"black",fontSize:18,fontWeight:"bold"}}>Group One</Text></View>
                            <View><Text style={{color:"grey",fontWeight:"500"}}>someone: Hello i am usama...</Text></View>
                        </View>

                        <View style={style.nameBox}>
                            
                            <View><Text style={{color:"grey",fontWeight:"bold"}}>12:00 pm</Text></View>
                        </View>
                    </View>

                    <View style={style.chatBox}>
                        <View >
                            <Image style={style.profileBox} source={require('../images/usama3.jpg')}/>

                        </View>
                        <View style={style.nameBox}>
                            <View><Text style={{color:"black",fontSize:18,fontWeight:"bold"}}>Group One</Text></View>
                            <View><Text style={{color:"grey",fontWeight:"500"}}>someone: Hello i am usama...</Text></View>
                        </View>

                        <View style={style.nameBox}>
                            
                            <View><Text style={{color:"grey",fontWeight:"bold"}}>12:00 pm</Text></View>
                        </View>
                    </View>


                    <View style={style.chatBox}>
                        <View >
                            <Image style={style.profileBox} source={require('../images/usama3.jpg')}/>

                        </View>
                        <View style={style.nameBox}>
                            <View><Text style={{color:"black",fontSize:18,fontWeight:"bold"}}>Group One</Text></View>
                            <View><Text style={{color:"grey",fontWeight:"500"}}>someone: Hello i am usama...</Text></View>
                        </View>

                        <View style={style.nameBox}>
                            
                            <View><Text style={{color:"grey",fontWeight:"bold"}}>12:00 pm</Text></View>
                        </View>
                    </View>


                    <View style={style.chatBox}>
                        <View >
                            <Image style={style.profileBox} source={require('../images/usama3.jpg')}/>

                        </View>
                        <View style={style.nameBox}>
                            <View><Text style={{color:"black",fontSize:18,fontWeight:"bold"}}>Group One</Text></View>
                            <View><Text style={{color:"grey",fontWeight:"500"}}>someone: Hello i am usama...</Text></View>
                        </View>

                        <View style={style.nameBox}>
                            
                            <View><Text style={{color:"grey",fontWeight:"bold"}}>12:00 pm</Text></View>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>

        </>
    )
}

const style = StyleSheet.create({
    main:{
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        
    },
    chatBox:{
        width:"100%",
        height:60,
        marginTop:20,
        padding:5,
        flexDirection:"row",
        
    
    },
    profileBox:{
        width:50,
        height:50,
        borderRadius:40,
        backgroundColor:"#075E54",
        marginLeft:10
    },
    nameBox:{
        width:200,
        height:60,
        
        marginLeft:15,
    }
})


export default HomeScreen;