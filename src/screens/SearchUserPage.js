import { Image, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box } from '@react-native-material/core'
import { searchUserRoute } from '../apiutils/apiutils'
const axios = require("axios").default

const SearchUserPage = ({ navigation }) => {
    const [search, setSearch] = useState("")
    const [user, setUser] = useState([])


    const handleSearch = async () => {
        try {
            const { data } = await axios.post(searchUserRoute, {
                "email": search
            })


            if (data.status) {
                console.log(data.data)
                setUser(data.data)
            }

        } catch (error) {
            if (error.response.status) {
                ToastAndroid.show(error.response.data.message, ToastAndroid.LONG)
            }
        }
    }
    useEffect(() => {
        if (search.length > 0) {
            handleSearch()
        }
    }, [search])

    return (
        <Box w={"100%"} h={"100%"}>
            <Box w={"100%"} h={"8%"} style={{ borderBottomWidth: 1, borderBottomColor: "#D9D9D9", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Box style={{ marginLeft: 20 }}>
                        <Image
                            style={{ width: 18, height: 18 }}
                            source={require("../assets/blackLeftArrow.png")}
                        />

                    </Box>
                </TouchableOpacity>

                <Image
                    style={{ marginRight: 20 }}
                    source={require("../assets/settings.png")}
                />
            </Box>
            <ScrollView>
                <Box style={{ display: "flex", marginTop: 15 }}>
                    <TextInput
                        style={{ marginLeft: 40, width: 330, height: 38, backgroundColor: "#D9D9D9", borderRadius: 10 }}
                        placeholder="Search"
                        onChange={(e) => setSearch(e.nativeEvent.text)}
                    />
                    <Image
                        style={{ width: 18, height: 18, position: "absolute", left: 0, top: 9, left: 15 }}
                        source={require("../assets/search.png")}
                    />
                </Box>
                <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                    <TextInput
                        style={{ width: 110, height: 35, backgroundColor: "#D9D9D9", borderRadius: 10 }}
                        placeholder="For You"
                    />
                    <TextInput
                        style={{ marginLeft: 10, width: 110, height: 35, backgroundColor: "#D9D9D9", borderRadius: 10 }}
                        placeholder="Search Gangs"
                    />
                    <TextInput
                        style={{ marginLeft: 10, width: 110, height: 35, backgroundColor: "#D9D9D9", borderRadius: 10 }}
                        placeholder="Search Partner"
                    />
                </Box>
                {search.length > 0 &&
                    <Box style={{ marginTop: 20 }}>
                        {user.length > 0 && user.map((ele, i) => (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate("MyProfileScreen", {
                                userId: ele._id
                            })}>
                                <Box w={"100%"} style={{ height: 45, borderBottomWidth: 1, borderBottomColor: "#D9D9D9", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                                    {ele.image ? (
                                        <Image
                                            style={{ width: 33, height: 33, borderRadius: 50, marginLeft: 20 }}
                                            source={{ uri: ele.image }}
                                        />
                                    ) : (
                                        <Image
                                            style={{ width: 33, height: 33, borderRadius: 50, marginLeft: 20 }}
                                            source={require("../assets/hacker.png")}
                                        />
                                    )}

                                    <Text style={{ marginLeft: 15, color: "gray" }}>{ele.name}</Text>
                                </Box>
                            </TouchableOpacity>
                        ))}
                    </Box>
                }
            </ScrollView>
            <Box h={"8%"} w={"100%"} style={{ borderTopWidth: 1, borderTopColor: "#D9D9D9", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                <Box>
                    <Image
                        source={require("../assets/home.png")}
                    />
                    <Text onPress={() => { navigation.navigate("PostScreen") }} style={{ position: "absolute", marginLeft: 5, opacity: 0, fontSize: 30 }}>hi</Text>
                </Box>
                <Image
                    source={require("../assets/group.png")}
                />
                <Image
                    source={require("../assets/members.png")}
                />
                <Image
                    source={require("../assets/notify.png")}
                />
                <Image
                    source={require("../assets/message.png")}
                />
            </Box>
        </Box>
    )
}

export default SearchUserPage

const styles = StyleSheet.create({})