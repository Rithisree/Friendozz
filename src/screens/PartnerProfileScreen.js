import { AsyncStorage, Image, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { Box } from '@react-native-material/core'
import * as ImagePicker from "react-native-image-picker"
import storage from '@react-native-firebase/storage'
import { useEffect } from 'react'
import { createPostRoute, listPostBasedOnUserRoute, followRequestRoute, unfollowRequestRoute, checkFanRoute, listPartnerRoute } from '../apiutils/apiutils';
import { TouchableOpacity } from 'react-native'

const axios = require("axios").default

const PartnerProfileScreen = ({ navigation, route }) => {
    const [image, setImage] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [ListPost, setListPost] = useState([])
    const [user, setUser] = useState("")
    const [hide, setHide] = useState(true)
    const [fan, setFan] = useState(false)
    const [fan1, setFan1] = useState(false)
    const [postCount, setPostCount] = useState(0)
    const [followingCount, setfollowingCount] = useState(0)
    const [likesCount, setlikesCount] = useState(0)
    const [dislikesCount, setdislikesCount] = useState(0)
    const [partnerData, setPartnerData] = useState()
    const { userId } = route.params
    const [partnerId, setPartnerId] = useState()
    const [signinUserId, setSigninUserId] = useState("")

    useEffect(() => {
        const getAccess = async () => {
            if (await AsyncStorage.getItem("userId") !== "") {
                setSigninUserId(await AsyncStorage.getItem("userId"))
            }
        }
        getAccess()

    }, [])

    const followRequest = async (id) => {

        const { data } = await axios.post(followRequestRoute, {
            receiverId: id
        }, { headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") } })

        if (data.status) {
            setFan(true)
        }
    }
    const unfollowRequest = async (id) => {
        console.log(id)
        const { data } = await axios.post(unfollowRequestRoute, {
            receiverId: id
        }, { headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") } })
        if (data.status) {
            console.log(data.data)
            setFan(false)
        }
    }

    const followRequest1 = async (id) => {
        console.log(id)
        const { data } = await axios.post(followRequestRoute, {
            receiverId: id
        }, { headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") } })
        console.log(data.data)
        if (data.status) {
            setFan1(true)
        }
    }
    const unfollowRequest1 = async (id) => {
        console.log(id)
        const { data } = await axios.post(unfollowRequestRoute, {
            receiverId: id
        }, { headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") } })
        if (data.status) {
            console.log(data.data)
            setFan1(false)
        }
    }

    useEffect(() => {
        const getPartner = async () => {
            try {
                const { data } = await axios.post(listPartnerRoute, {
                    "userId": userId
                }, {
                    headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") }
                })

                if (data.status) {
                    console.log(data.data)
                    setPartnerData(data.data)
                    setPartnerId(data.data.partner._id)
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (userId !== "" || userId !== undefined) {
            getPartner()
        }
    }, [userId])

    useEffect(() => {
        const checkFan = async () => {
            const { data } = await axios.post(checkFanRoute, {
                "receiverId": userId
            }, {
                headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") }
            })

            if (data.status) {
                console.log(data.data)
                setFan(true)
            }

        }
        checkFan()
    }, [])

    useEffect(() => {
        const checkFan = async () => {
            const { data } = await axios.post(checkFanRoute, {
                "receiverId": partnerData.partner._id
            }, {
                headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") }
            })

            if (data.status) {
                setFan1(true)
            }

        }
        if (partnerData) {
            checkFan()
        }

    }, [])

    return (
        <Box w={"100%"} h={"100%"} bg={"white"}>
            <Box w={"100%"} style={{ position: "relative", height: 60, borderBottomWidth: 1, borderBottomColor: "#D9D9D9", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    <Image
                        style={{ width: 18, height: 18, margin: 18 }}
                        source={require("../assets/blackLeftArrow.png")}
                    />
                    <Text onPress={() => { navigation.push("MyProfileScreen", { userId: userId }) }} style={{ position: "absolute", marginLeft: 5, opacity: 0, fontSize: 30 }}>hi</Text>
                </Box>


                <TouchableOpacity>
                    <Image
                        style={{ marginRight: 13 }}
                        source={require("../assets/threeDot.png")}
                    />
                </TouchableOpacity>
            </Box>

            <ScrollView>
                <Box style={{ marginTop: 20, marginLeft: 18, marginRight: 18, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Image
                        source={require("../assets/members.png")}
                    />
                    <Box>
                        <Image
                            style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: "pink" }}
                            source={{ uri: partnerData && partnerData.image }}
                        />
                        <Image
                            style={{ width: 60, height: 60, borderRadius: 50, marginLeft: 20, marginTop: -28, backgroundColor: "green" }}
                            source={{ uri: partnerData && partnerData.partner.image }}
                        />
                    </Box>
                    <Image
                        source={require("../assets/notify.png")}
                    />
                </Box>
                <Box style={{ marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Text>Partner since 2022 July</Text>
                    <Box style={{ marginTop: 15, backgroundColor: "#0093E5", width: 150, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Text onPress={() => followRequest()} style={{ fontSize: 18, color: "white" }}>Be a Fan</Text>
                    </Box>
                </Box>
                <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 20, marginLeft: 40, marginRight: 40, marginBottom: 15 }}>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>{followingCount && followingCount}</Text>
                        <Text style={{ fontSize: 16, color: "gray" }}>Fans</Text>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>{likesCount}</Text>
                        <Text style={{ fontSize: 16, color: "gray" }}>Likes</Text>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>{dislikesCount && dislikesCount}</Text>
                        <Text style={{ fontSize: 16, color: "gray" }}>Dislikes</Text>
                    </Box>
                </Box>

                <Box>
                    <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                        <Box style={{ display: "flex", flexDirection: "row" }}>
                            <Image
                                style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: "pink" }}
                                source={{ uri: partnerData && partnerData.image }}
                            />
                            <Box style={{ marginLeft: 15 }}>
                                <Text style={{ fontWeight: "bold" }}>{partnerData && partnerData.name}</Text>
                                <Text>{partnerData && partnerData.username}</Text>
                            </Box>
                        </Box>
                        <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            {/* {partnerData && partnerData._id===signinUserId ?(null):(
                            <> */}
                            {fan ? (
                                <Box style={{ backgroundColor: "#D9D9D9", width: 100, height: 30, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                                    <Text onPress={() => unfollowRequest(partnerData._id)} style={{ fontSize: 18, color: "black" }}>Fan</Text>
                                </Box>
                            ) : (
                                <Box style={{ backgroundColor: "#0093E5", width: 100, height: 30, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                                    <Text onPress={() => followRequest(partnerData._id)} style={{ fontSize: 18, color: "white" }}>Be a Fan</Text>
                                </Box>
                            )}<Image
                                style={{}}
                                source={require("../assets/threeDot.png")}
                            />

                            {/* </>
                            )} */}
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                        <Box style={{ display: "flex", flexDirection: "row" }}>
                            <Image
                                style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: "green" }}
                                source={{ uri: partnerData && partnerData.partner.image }}
                            />
                            <Box style={{ marginLeft: 15 }}>
                                <Text style={{ fontWeight: "bold" }}>{partnerData && partnerData.partner.name}</Text>
                                <Text>{partnerData && partnerData.partner.username}</Text>
                            </Box>
                        </Box>
                        <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            {partnerData && partnerData.partner._id === signinUserId ? (null) : (

                                fan1 ? (
                                    <>
                                        <Box style={{ backgroundColor: "#D9D9D9", width: 100, height: 30, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                                            <Text onPress={() => unfollowRequest1(partnerId)} style={{ fontSize: 18, color: "black" }}>Fan</Text>
                                        </Box>
                                        <Image
                                            style={{}}
                                            source={require("../assets/threeDot.png")}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Box style={{ backgroundColor: "#0093E5", width: 100, height: 30, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                                            <Text onPress={() => followRequest1(partnerId)} style={{ fontSize: 18, color: "white" }}>Be a Fan</Text>
                                        </Box>
                                        <Image
                                            style={{}}
                                            source={require("../assets/threeDot.png")}
                                        />
                                    </>
                                )

                            )}


                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Box style={{ marginLeft: 10 }}>
                        <Box>
                            <Image
                                style={{ width: 25, height: 25, marginTop: 10, marginBottom: 10 }}
                                source={require("../assets/image.png")}
                            />
                        </Box>
                        <Box style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                            <Image
                                style={{ width: 70, height: 70, margin: 2 }}
                                source={require("../assets/avatar.jpg")}

                            />
                            <Box style={{ width: 70, height: 70, margin: 2, backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: "black", textAlign: "center", fontWeight: "bold" }}>View All Photo</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{ marginLeft: 10 }}>
                        <Box>
                            <Image
                                style={{ width: 25, height: 25, marginTop: 10, marginBottom: 10 }}
                                source={require("../assets/video.png")}
                            />
                        </Box>
                        <Box style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                            <Image
                                style={{ width: 70, height: 70, margin: 2 }}
                                source={require("../assets/avatar.jpg")}
                            />
                            <Image
                                style={{ width: 70, height: 70, margin: 2 }}
                                source={require("../assets/avatar.jpg")}
                            />
                            <Image
                                style={{ width: 70, height: 70, margin: 2 }}
                                source={require("../assets/avatar.jpg")}
                            />
                            <Image
                                style={{ width: 70, height: 70, margin: 2 }}
                                source={require("../assets/avatar.jpg")}
                            />
                            <Image
                                style={{ width: 70, height: 70, margin: 2 }}
                                source={require("../assets/avatar.jpg")}
                            />
                            <Image
                                style={{ width: 70, height: 70, margin: 2 }}
                                source={require("../assets/avatar.jpg")}
                            />
                            <Image
                                style={{ width: 70, height: 70, margin: 2 }}
                                source={require("../assets/avatar.jpg")}
                            />
                            <Image
                                style={{ width: 70, height: 70, margin: 2 }}
                                source={require("../assets/avatar.jpg")}
                            />
                            <Image
                                style={{ width: 70, height: 70, margin: 2 }}
                                source={require("../assets/avatar.jpg")}
                            />
                            <Box style={{ width: 70, height: 70, margin: 2, backgroundColor: "#D9D9D9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: "black", textAlign: "center", fontWeight: "bold" }}>View All Video</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ScrollView >

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

                <TouchableOpacity onPress={() => { navigation.navigate("ChatScreen") }}>
                    <Image
                        source={require("../assets/message.png")}
                    />
                </TouchableOpacity>
            </Box>

            <Box w={"100%"} style={{ position: "absolute", bottom: 0, transform: hide ? [{ translateY: 350 }] : [{ translateY: 0 }], height: 350, backgroundColor: "white", borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                <Box style={{ width: 35, height: 5, borderRadius: 10, backgroundColor: "grey", marginTop: 10, marginLeft: 180 }}><Text>  </Text></Box>
                <Text onPress={() => { setHide(true); openImage() }} style={{ fontSize: 25, color: "black", marginLeft: 30, marginTop: 30 }}>Post</Text>
            </Box>
        </Box >
    )
}

export default PartnerProfileScreen

const styles = StyleSheet.create({})