import { StyleSheet, Text, View, TextInput, AsyncStorage, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Box } from '@react-native-material/core'
import { Image } from 'react-native'
const axios = require("axios").default;
import { createMessageRoute, listMessageRoute } from '../apiutils/apiutils';
import { useState } from 'react';

const ChatmessageScreen = ({ navigation, route }) => {
    const { userId } = route.params
    const [message, setMessage] = useState("")
    const [listMsg, setListMsg] = useState([])

    const sendMessage = async () => {
        const header = await AsyncStorage.getItem("x-access-token")
        const { data } = await axios.post(createMessageRoute, {
            receiverId: userId,
            msg: message
        }, { headers: { "x-access-token": header } })
        console.log(data.data)

        if (data.status) {
            listMessage()
            setMessage("")
        }
    }

    const listMessage = async () => {
        const header = await AsyncStorage.getItem("x-access-token")
        const { data } = await axios.post(listMessageRoute, {
            receiverId: userId
        }, { headers: { "x-access-token": header } })
        setListMsg(data.data)
        console.log(data.data)
    }

    useEffect(() => {
        listMessage()
    }, [])

    return (
        <Box w={"100%"} h={"100%"}>
            <Box style={{ borderBottomWidth: 1, borderBottomColor: "#D9D9D9", height: 55, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Box>
                            <Image
                                style={{ width: 18, height: 18, marginLeft: 20 }}
                                source={require("../assets/blackLeftArrow.png")}
                            />

                        </Box>
                    </TouchableOpacity>
                    <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
                        <Image
                            style={{ width: 35, height: 35, borderRadius: 20 }}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Box style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: "bold", color: "black", fontSize: 18 }}>{listMsg.length > 0 && listMsg[0].receiverId.name}</Text>
                            <Text>_b_a_d_r_i</Text>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Image
                        style={{ marginRight: 10 }}
                        source={require("../assets/threeDot.png")}
                    />
                    <Text onPress={() => { navigation.navigate("SignInScreen") }} style={{ position: "absolute", marginLeft: 14, fontSize: 20, right: 10, color: "white", opacity: 0 }}>hi</Text>
                </Box>
            </Box>
            <ScrollView>
                {listMsg.length > 0 && listMsg.map((msg) => (
                    msg.messages.length > 0 && msg.messages.map((msgs) => (
                        <Box>
                            {msgs.receiverId !== userId ? (
                                <Box style={{ marginLeft: 15, marginTop: 5, marginBottom: 5, flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                    <Image
                                        style={{ width: 30, height: 30, borderRadius: 20 }}
                                        source={require("../assets/avatar.jpg")}
                                    />
                                    <Box style={{ backgroundColor: "#0093E5", maxWidth: 280, borderRadius: 10, marginLeft: 10 }}>
                                        <Text style={{ fontSize: 18, color: "white", margin: 7 }}>{msgs.message}</Text>
                                    </Box>
                                </Box>
                            ) : (
                                <Box style={{ marginRight: 15, marginTop: 5, marginBottom: 5, flexDirection: "row", justifyContent: "flex-end" }}>
                                    <Box style={{ backgroundColor: "#D9D9D9", maxWidth: 280, borderRadius: 10 }}>
                                        <Text style={{ fontSize: 18, color: "black", margin: 7 }}>{msgs.message}</Text>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    ))
                ))}
            </ScrollView>
            <Box w={"100%"} style={{ marginBottom: 5 }}>
                <TextInput
                    style={{ width: 330, height: 50, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 20, marginLeft: 10 }}
                    placeholder="Enter Message"
                    onChange={(e) => setMessage(e.nativeEvent.text)}
                    value={message}
                />
                <Text onPress={() => sendMessage()} style={{ "position": "absolute", right: 10, marginTop: 15, fontWeight: "bold" }}>Send</Text>
            </Box>
        </Box>
    )
}

export default ChatmessageScreen

const styles = StyleSheet.create({})