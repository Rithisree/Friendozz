import { StyleSheet, Text, View, TextInput, AsyncStorage } from 'react-native'
import React from 'react'
import { Box } from '@react-native-material/core'
import { Image } from 'react-native'
const axios = require("axios").default;
import { createMessageRoute } from '../apiutils/apiutils';
import { useState } from 'react';

const ChatmessageScreen = ({ navigation, route }) => {
    const {userId} = route.params
    const [message, setMessage] = useState("")
    const sendMessage = async() => {
        const header = await AsyncStorage.getItem("x-access-token")
        const {data} = await axios.post(createMessageRoute, {
            receiverId:userId,
            msg:message
        },{headers:{"x-access-token":header}})
        console.log(data.data)
    }
    console.log(message)
    return (
        <Box w={"100%"} h={"100%"} bg={"white"}>
            <Box w={"100%"} h={"5%"} style={{ flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: 'space-between' }}>

                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Box>
                        <Image
                            style={{ width: 18, height: 18, marginTop: 20, marginLeft: 20 }}
                            source={require("../assets/blackLeftArrow.png")}
                        />
                        <Text onPress={() => { navigation.goBack() }} style={{ position: "absolute", marginLeft: 20, marginTop: 10, color: "white", opacity: 0, fontSize: 24 }}>hi</Text>
                    </Box>
                    <Box style={{ display: "flex", flexDirection: "row", marginTop: 15, marginLeft: 20, alignItems: "center" }}>
                        <Image
                            style={{ width: 35, height: 35, borderRadius: 20 }}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Box>
                            <Text style={{ fontWeight: "bold", color: "black", fontSize: 18, marginLeft: 15 }}>Badri</Text>
                            <Text style={{ marginLeft: 15 }}>_b_a_d_r_i</Text>
                        </Box>

                    </Box>

                </View>
                <Image
                    style={{ marginRight: 8, marginTop: 20, color: "white" }}
                    source={require("../assets/threeDot.png")}
                />
                <Text onPress={() => { navigation.navigate("SignInScreen") }} style={{ position: "absolute", marginLeft: 20, marginTop: 10, color: "white", fontSize: 24, right: 10, opacity: 0 }}>hi</Text>
            </Box>

            <Box style={{ marginTop: 40, marginLeft: 30, flexDirection: "row" }}>
                <Image
                    style={{ width: 35, height: 35, borderRadius: 20 }}
                    source={require("../assets/avatar.jpg")}
                />
                <Box style={{ backgroundColor: "pink", alignSelf: 'flex-start', paddingRight: 10, paddingLeft: 10, borderRadius: 10, marginTop: 10, marginLeft: 10 }}>

                    <Text>Hi</Text>

                </Box>
            </Box>

            <Box style={{ marginTop: 10, marginRight: 30, flexDirection: "row", justifyContent: "flex-end" }}>

                <Box style={{ backgroundColor: "pink", alignSelf: 'flex-start', paddingRight: 10, paddingLeft: 10, borderRadius: 10, marginLeft: 10 }}>

                    <Text>Hi</Text>

                </Box>
            </Box>

            <Box style={{ marginTop: 40, marginLeft: 30, flexDirection: "row" }}>
                <Image
                    style={{ width: 35, height: 35, borderRadius: 20 }}
                    source={require("../assets/avatar.jpg")}
                />
                <Box style={{ backgroundColor: "pink", alignSelf: 'flex-start', paddingRight: 10, paddingLeft: 10, borderRadius: 10, marginTop: 10, marginLeft: 10 }}>

                    <Text>Hi,How are You</Text>

                </Box>
            </Box>

            <Box style={{ marginTop: 40, marginRight: 30, flexDirection: "row", justifyContent: "flex-end" }}>

                <Box style={{ backgroundColor: "pink", alignSelf: 'flex-start', paddingRight: 10, paddingLeft: 10, borderRadius: 10, marginLeft: 10 }}>

                    <Text>Im FIne,How About you</Text>

                </Box>
            </Box>


            <Box style={{ position: "absolute", bottom: 5, width: "100%" }}>
                <TextInput
                    style={{ height: 50, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 20 }}
                    placeholder="Enter Message"
                    onChange={(e)=>setMessage(e.nativeEvent.text)}
                />
                <Text onPress={()=>sendMessage()} style={{ "position": "absolute", right: 15, marginTop: 15, fontWeight: "bold" }}>Send</Text>
            </Box>
        </Box>

    )
}

export default ChatmessageScreen

const styles = StyleSheet.create({})