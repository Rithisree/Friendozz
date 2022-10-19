import { AsyncStorage, Image, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { Box } from '@react-native-material/core'
import { ImageGrid } from "react-fb-image-video-grid"
import * as ImagePicker from "react-native-image-picker"
import storage from '@react-native-firebase/storage'
import { useEffect } from 'react'
import { createPostRoute, listPostBasedOnUserRoute, followRequestRoute, unfollowRequestRoute, checkFanRoute } from '../apiutils/apiutils';
import { List } from 'native-base'
import { TouchableOpacity } from 'react-native'

const axios = require("axios").default

const MyProfilePage = ({ navigation, route }) => {
    const [image, setImage] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [ListPost, setListPost] = useState([])
    const [user, setUser] = useState("")
    const [hide, setHide] = useState(true)
    const [fan, setFan] = useState(false)
    const [signinUserId, setSigninUserId] = useState("")
    const { userId } = route.params
    useEffect(() => {
        const getAccess = async () => {
            if (await AsyncStorage.getItem("userId") !== "") {
                setSigninUserId(await AsyncStorage.getItem("userId"))
            }
        }
        getAccess()

    }, [])

    const openImage = () => {
        ImagePicker.launchImageLibrary({ mediaType: 'photo' }, async (resp) => {
            if (resp.didCancel) {
                console.log("User Cancelled")
            }
            setImage(resp.assets[0].uri)
            if (resp) {
                uploadImage()
            }
        })
    }
    console.log(userId)
    useEffect(() => {
        const checkFan = async () => {
            const { data } = await axios.post(checkFanRoute, {
                "receiverId": userId
            }, {
                headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") }
            })

        }
        checkFan()
    }, [])
    const uploadImage = async () => {
        let randomString = (Math.random() + 1).toString(36).substring(7);
        const imageRef = storage().ref(`${"images"}/${randomString}`)
        await imageRef.putFile(image, { contentType: 'image/jpg' }).catch((error) => { throw error })
        const url = await imageRef.getDownloadURL().catch((error) => { throw error });
        setImageUrl(url)
    }
    let createPost = async () => {
        const { data } = await axios.post(createPostRoute, {
            "postUrl": imageUrl
        }, {
            headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") }
        })
        console.log(data.data)
        if (data.status) {
            ToastAndroid.show("Uploaded!", ToastAndroid.LONG)
            setImageUrl("")
        }
    }
    let listPost = async () => {
        const { data } = await axios.get(`${listPostBasedOnUserRoute}/${userId}`, {
            headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") }
        })
        if (data.status) {
            setListPost(data.data.postId)
            setUser(data.data)
        }
        console.log(data.data)
    }

    useEffect(() => {
        if (imageUrl !== "") {
            createPost()
        }
    }, [imageUrl])


    useEffect(() => {
        listPost()
    }, [imageUrl])

    const followRequest = async () => {
        const { data } = await axios.post(followRequestRoute, {
            receiverId: userId
        }, { headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") } })
        console.log(data.data)
        if (data.status) {
            setFan(true)
            listPost()
        }
    }
    const unfollowRequest = async () => {
        console.log("hi")
        const { data } = await axios.post(unfollowRequestRoute, {
            receiverId: userId
        }, { headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") } })
        if (data.status) {
            console.log(data.data)
            listPost()
        }
    }
    return (
        <Box w={"100%"} h={"100%"} bg={"white"}>
            <Box w={"100%"} style={{ position: "relative", height: 90, borderBottomWidth: 1, borderBottomColor: "#D9D9D9", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    <Image
                        style={{ width: 18, height: 18, margin: 18 }}
                        source={require("../assets/blackLeftArrow.png")}
                    />
                    <Text onPress={() => { navigation.goBack() }} style={{ position: "absolute", marginLeft: 5, opacity: 0, fontSize: 30 }}>hi</Text>
                </Box>
                <Box style={{ position: "absolute", top: 25, left: 150, display: "flex", alignItems: "center" }}>
                    <Text style={{ color: "black", fontSize: 20, marginBottom: 5, fontWeight: "bold" }}>Your Profile</Text>
                    <Image
                        style={{ width: 75, height: 75, borderRadius: 50 }}
                        source={{ "uri": user.image }}
                    />
                </Box>
                <Box style={{ display: "flex", flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => { AsyncStorage.removeItem("userId"); navigation.navigate("LoginScreen") }} >
                        <Box>
                            <Image
                                style={{ marginRight: 13 }}
                                source={require("../assets/settings.png")}
                            />
                        </Box>
                    </TouchableOpacity>
                    {user && user._id === signinUserId && (


                        <Box>
                            <Image
                                style={{ marginRight: 10 }}
                                source={require("../assets/addMusicBig.png")}
                            />
                            <Text onPress={() => setHide(false)} style={{ position: "absolute", marginLeft: 5, opacity: 0, fontSize: 30 }}>hi</Text>
                        </Box>
                    )}
                </Box>
            </Box>

            <ScrollView>
                <Box style={{ marginTop: 25, marginLeft: 18 }}>
                    <Image
                        source={require("../assets/group.png")}
                    />
                    <Text style={{ color: "black", fontSize: 18, marginTop: 5 }}>{user && user.name}</Text>
                    <Text style={{ color: "black", fontSize: 15, marginTop: 2 }}>{user && user.username}</Text>
                    <Text style={{ color: "black", fontSize: 15, marginTop: 2 }}>{user && user.bio}</Text>
                    <Text style={{ color: "black", fontSize: 15, fontWeight: "bold", marginTop: 2 }}>...More</Text>
                    <Box style={{ displa: "flex", flexDirection: "row" }}>
                        <Image
                            style={{ marginRight: 10 }}
                            source={require("../assets/link.png")}
                        />
                        <Text>bit.ly/43484</Text>
                    </Box>
                </Box>
                <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 20 }}>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>245</Text>
                        <Text style={{ fontSize: 16, color: "gray" }}>Posts</Text>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>24k</Text>
                        <Text style={{ fontSize: 16, color: "gray" }}>Fans</Text>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>25k</Text>
                        <Text style={{ fontSize: 16, color: "gray" }}>Likes</Text>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>10k</Text>
                        <Text style={{ fontSize: 16, color: "gray" }}>Dislikes</Text>
                    </Box>
                </Box>
                {user && user._id === signinUserId ? (


                    <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 25 }}>

                        <Box style={{ backgroundColor: "#D9D9D9", width: 150, height: 30, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>View Gangs</Text>
                        </Box>
                        <TouchableOpacity onPress={() => { navigation.navigate("EditProfileScreen", { userId: userId }) }}>
                            <Box style={{ backgroundColor: "#D9D9D9", width: 150, height: 30, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>Edit Profile</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                ) : (
                    <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 25 }}>
                        {user && user.followers.length > 0 ? user.followers.map((id) => (
                            id === signinUserId ? (
                                <Box style={{ backgroundColor: "#D9D9D9", width: 150, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Text onPress={() => unfollowRequest()} style={{ fontSize: 18, color: "black" }}>Fan</Text>
                                </Box>
                            ) : (

                                <Box style={{ backgroundColor: "#0093E5", width: 150, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Text onPress={() => followRequest()} style={{ fontSize: 18, color: "white" }}>Be a Fan</Text>
                                </Box>
                            )
                        )) : (
                            <Box style={{ backgroundColor: "#0093E5", width: 150, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Text onPress={() => followRequest()} style={{ fontSize: 18, color: "white" }}>Be a Fan</Text>
                            </Box>

                        )}
                        <TouchableOpacity onPress={() => navigation.navigate("ChatmessageScreen", { userId: user._id })}>
                            <Box style={{ backgroundColor: "#D9D9D9", width: 150, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 18, color: "black" }}>Message</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                )
                }
                <Box>
                    <Box style={{ marginLeft: 10 }}>
                        <Box>
                            <Image
                                style={{ width: 25, height: 25, marginTop: 10, marginBottom: 10 }}
                                source={require("../assets/image.png")}
                            />
                        </Box>
                        <Box style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                            {ListPost.length > 0 && ListPost.map((list) => (
                                <Image
                                    style={{ width: 70, height: 70, margin: 2 }}
                                    source={{ "uri": list && list.myPostUrl }}
                                />
                            ))}
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
                                <Text style={{ color: "black", textAlign: "center" }}>View All Video</Text>
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
                <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
                    <Image
                        source={require("../assets/members.png")}
                    />
                </TouchableOpacity>

                <Image
                    source={require("../assets/notify.png")}
                />
                <Image
                    source={require("../assets/message.png")}
                />
            </Box>

            <Box w={"100%"} style={{ position: "absolute", bottom: 0, transform: hide ? [{ translateY: 350 }] : [{ translateY: 0 }], height: 350, backgroundColor: "white", borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                <Box style={{ width: 35, height: 5, borderRadius: 10, backgroundColor: "grey", marginTop: 10, marginLeft: 180 }}><Text>  </Text></Box>
                <Text onPress={() => { setHide(true); openImage() }} style={{ fontSize: 25, color: "black", marginLeft: 30, marginTop: 30 }}>Post</Text>
            </Box>
        </Box >
    )
}

export default MyProfilePage

const styles = StyleSheet.create({})