import axios from "axios";
import React, { useEffect, useState } from "react";
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
    TextInput,
    FlatList,
    ListItem,
    Alert,
    TouchableOpacity,

} from 'react-native';




function ChatScreen({ navigation, route }) {
    let [messageTwo, setMessageTwo] = useState([])
    useEffect(() => {
        axios.get('http://192.168.1.100:3000/chat').then((res) => {
            // console.log(res.data);
            setMessageTwo(res.data);
            console.log(messageTwo);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    const dateCurrent = new Date;
    const day = dateCurrent.getDate();
    const month = dateCurrent.getMonth();
    const year = dateCurrent.getFullYear()


    const [chatData, setChatData] = useState('');

    const [renderData, setRenderData] = useState([]);

    // const addChat = () =>{
    //     console.log(chatdata);
    //     const newChat = {
    //         id:Math.random(),
    //         chat : chatdata,
    //     };
    //     if(chatdata==''){
    //         Alert.alert("Invalid"," Type Error");
    //     }else{
    //         setRenderData([...renderData, newChat]);
    //         setChatData('');
    //     }
    // }




    const ListItem = ({ todo }) => {
        return (<>

            <View style={style.ListItem}>
                <View style={{ flex: 1 }}>

                    <Text style={
                        {
                            color: "white",
                            fontSize: 20,


                        }
                    } >
                        {todo.task}
                    </Text>
                    <Text style={{ color: "white", fontSize: 12, color: "white", textAlign: "left" }}>message sent</Text>
                    <Text style={{ color: "white", fontSize: 12, color: "white", textAlign: "right" }}>{day + "-" + month + "-" + year}</Text>
                </View>

                <TouchableOpacity onPress={() => editChat(todo?.id)} style={style.EditIcon}><Text style={{ fontSize: 13, fontWeight: "bold", color: "white" }}>Edit</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => deleteChat()} style={style.DeleteIcon}><Text style={{ fontSize: 13, fontWeight: "bold", color: "white" }}>Delete</Text></TouchableOpacity>

              


            </View>

            <View style={style.ListItemOther}>
                <View style={{ flex: 0 }}>

                    <Text style={
                        {
                            color: "white",
                            fontSize: 20,


                        }
                    } >
                        {todo.task}
                    </Text>
                </View>

                


            </View>






        </>



        )
    }


    
    //add Chat
    const addChat = () => {
        console.log(chatData);
        const newTodo = {
            id: Math.random(),
            task: chatData,

        };

        if (chatData == "") {
            Alert.alert("Error", "Please enter todo !");
            return;
        }

        else {

            setRenderData([...renderData, newTodo]);
            setChatData('');
        }

        let chatObj = {
            chatData,
        }
        axios.post('http://192.168.1.103:3000/chat', chatObj).then((res) => {
            console.log("data post successfully")
            console.log(chatData)
        }).catch((err) => {
            console.log(err);
        })
    }

    //Delete all Chat
    const clearAll = () => {
        Alert.alert('Confirm', 'Delete all chats ?', [
            {
                text: "No",
            },
            {
                text: "Yes",
                onPress: () => {
                    setRenderData([]),
                    axios.delete('http://192.168.1.103:3000/chat').then((res)=>{
                        console.log("All Chat deleted Successfully");
                    }).catch((err)=>{
                        console.log(err)
                    })


                },
                    
                

            }
        ])

    };

    //delete selecte chat

    const deleteChat = (chatId) => {
        console.log(chatId)
        const newTodo = renderData.filter(item => item.id != chatId)
        setRenderData(newTodo);

    };
    const [editId, setEditId] = useState('');

    //edit chat
    const editChat = (todoId) => {
        let newTodo = renderData.find((elem) => {
            return elem.id === todoId;
        });
        console.log(newTodo);
        //setEditId(newTodo.id)
        setChatData(newTodo.task);
        setEditId(newTodo.id)
        console.log(editId)
    }


    return (
        <>
            <SafeAreaView style={style.main}>
                <View style={{ width: "100%", justifyContent: "space-between", alignItems: "center", flexDirection: "row", padding: 5, backgroundColor: "#075E54", elevation: 40 }}>
                    <View >
                        <Image style={{ width: 50, height: 50, backgroundColor: "black", borderRadius: 40, borderWidth: 2, borderColor: "green" }} source={require('../images/usama3.jpg')} />

                    </View>
                    <View><Text style={{ fontSize: 18, color: "white", fontWeight: "bold  " }}></Text></View>
                    <TouchableOpacity onPress={clearAll} style={{ width: "35%", backgroundColor: "red", borderRadius: 15, padding: 3, elevation: 40 }}><Text style={{ color: "white", fontSize: 16, fontWeight: "bold", textAlign: "center" }}>Delete All Chat</Text></TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={style.center}>




                        {/* <View>
                    <Text style={{color:"white",fontSize:16,marginLeft:15,backgroundColor:"#075E54",marginTop:10,borderRadius:10,padding:5,elevation:20}}>
                     {chatdata}
                        
                    </Text>
                    </View>
                    <View style={{marginLeft:150,marginTop:2,borderRadius:10,justifyContent:"center",alignItems:"center",width:100,padding:5}}>
                    <Text style={{color:"white",fontSize:12,color:"grey"}}>{day+"-"+month+"-"+year}</Text>
                    </View> */}
                    

                        <FlatList
                            showsVerticalScrollIndicator={true}
                            contentContainerStyle={{ width: 2500, height: "100%", padding: 10 }}
                            data={renderData}
                            renderItem={({ item }) => <ListItem todo={item} />}
                        />

                    </View>




                </ScrollView>
                <View style={{ width: "100%", height: 70, justifyContent: "center", alignItems: "center", padding: 5, flexDirection: "row" }}>

                    <TextInput
                        value={chatData}
                        onChangeText={text => setChatData(text)}
                        placeholder="Message" style={{
                            backgroundColor: "white", borderRadius: 40, width: "80%", height: 50, padding: 5,
                            fontSize: 16,
                            elevation: 40,
                            borderWidth: 2,
                            borderColor: "#075E54",

                        }} />
                    <TouchableOpacity onPress={addChat} style={{ width: 60, height: 50, elevation: 30, backgroundColor: "#075E54", marginLeft: 10, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>

                        <Text style={{ fontSize: 16, color: "white" }}>Send</Text>

                    </TouchableOpacity>
                </View>
            </SafeAreaView>


        </>
    )
};


const style = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "white",

    },
    center: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginLeft: 0,
        padding: 5
    },
    ListItem: {
        width: 250,
        padding: 4,
        flexDirection: "row",
        elevation: 40,
        borderRadius: 7,
        marginVertical: 5,
        backgroundColor: "#075E54",
        marginLeft: 100
    },
    ListItemOther: {
        width: 250,
        padding: 4,
        flexDirection: "row",
        elevation: 40,
        borderRadius: 7,
        marginVertical: 5,
        backgroundColor: "black",
        marginRight: 130,


    },
    DeleteIcon: {
        height: 25,
        width: 50,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        elevation: 20,
        borderRadius: 8,
        marginLeft: 5,

    },
    EditIcon: {
        height: 25,
        width: 50,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        elevation: 20,
        borderRadius: 8,
        marginLeft: 5,

    },
})

export default ChatScreen;