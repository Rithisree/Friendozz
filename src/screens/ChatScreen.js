import { AsyncStorage, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box } from '@react-native-material/core'
import { Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { listContactseRoute } from '../apiutils/apiutils'
const axios = require("axios").default;

const ChatScreen = ({ navigation }) => {

    const [users, setUsers] = useState([])

    const getData = async () => {
        console.log("hi")
        try {
            console.log("try")
            const { data } = await axios.get(listContactseRoute, {
                headers: {
                    "x-access-token": await AsyncStorage.getItem("x-access-token")
                }
            })
            console.log(data.data)
            setUsers(data.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <Box w={"100%"} h={"100%"} bg={"white"}>
            <Box w={"100%"} h={"5%"} style={{ flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: 'space-between' }}>

                <View>
                    <Image
                        style={{ width: 18, height: 18, margin: 20 }}
                        source={require("../assets/blackLeftArrow.png")}
                    />
                    <Text onPress={() => { navigation.navigate("PostScreen") }} style={{ position: "absolute", marginLeft: 20, marginTop: 10, color: "white", opacity: 0, fontSize: 24 }}>hi</Text>
                </View>
                <Image
                    style={{ marginRight: 8, color: "white" }}
                    source={require("../assets/threeDot.png")}
                />
                <Text onPress={() => { navigation.navigate("SignInScreen") }} style={{ position: "absolute", marginLeft: 20, marginTop: 10, color: "white", fontSize: 24, right: 10, opacity: 0 }}>hi</Text>
            </Box>

            <Box>

                <Box w={"100%"} style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <View>
                        <Image
                            style={{ width: 55, height: 55, margin: 20 }}
                            source={require("../assets/Gang.png")}
                        />
                        <Text style={{ position: "absolute", marginLeft: 20, marginTop: 10, color: "white", opacity: 0, fontSize: 24 }}>hi</Text>
                        <Text onPress={() => { navigation.navigate("GangsChatScreen") }} style={{ fontWeight: "bold", color: "black", marginTop: -5 }}>Gangs-Box</Text>
                    </View>

                    <View>
                        <Image
                            style={{ width: 55, height: 55, margin: 20 }}
                            source={require("../assets/Partner-Box.png")}
                        />

                        <Text onPress={() => { navigation.navigate("PrivatePartnerScreen") }} style={{ fontWeight: "bold", color: "black", marginTop: -5 }}>Partners-Inbox</Text>
                    </View>


                </Box>

                <Box>
                    <Box>
                        <TextInput
                            style={{ height: 40, marginLeft: 10, marginTop: 10, width: "95%", backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                            placeholder="Search"

                        />
                    </Box>

                    <Box style={{ marginBottom: 10 }}>
                        <Text style={{ fontWeight: "bold", color: "black", marginTop: 10, marginLeft: 15 }}>All Messages</Text>
                    </Box>

                    {users.addContacts && users.addContacts.map((user, i) => (
                        <TouchableOpacity key={i} onPress={() => navigation.navigate("ChatmessageScreen", { userId: user._id })}>
                            <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                                <Box style={{ flexDirection: "row" }}>

                                    {user.image ? (
                                        <Image
                                            style={{ width: 35, height: 35, borderRadius: 50, marginLeft: 10 }}
                                            source={{ uri: user.image }}
                                        />
                                    ) : (
                                        <Image
                                            style={{ width: 35, height: 35, borderRadius: 50, marginLeft: 10 }}
                                            source={require("../assets/avatar.jpg")}
                                        />
                                    )}
                                    <Box style={{ marginLeft: 10 }}>
                                        <Text style={{ textAlign: "left", fontWeight: "bold", color: "black" }}>{user.name}</Text>
                                        <Text style={{ textAlign: "left" }}>{user.email ? user.email : user.mobileNumber}</Text>
                                    </Box>
                                </Box>

                                <Box style={{ marginRight: 20 }}>
                                    <Text style={{ textAlign: "right" }}>Feb,18</Text>
                                    <Text style={{ textAlign: "right" }}>18:23</Text>
                                </Box>
                            </Box>
                        </TouchableOpacity>
                    ))}
                </Box>

            </Box>

            <Box h={"8%"} w={"100%"} style={{ borderTopWidth: 1, borderTopColor: "#D9D9D9", backgroundColor: "white", position: "absolute", bottom: 0 }}>
                <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("PostScreen")}>
                        <Image
                            source={require("../assets/home.png")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate("GroupProfileScreen") }}>
                        <Image
                            source={require("../assets/group.png")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate("PartnerProfileScreen") }}>
                        <Image
                            source={require("../assets/members.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
                        <Image
                            source={require("../assets/notify.png")}
                        />
                    </TouchableOpacity>

                    <Image
                        source={require("../assets/message.png")}
                    />
                </Box>
            </Box>
        </Box >
    )
}

export default ChatScreen

const styles = StyleSheet.create({})