import { AsyncStorage, Image, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { Box } from '@react-native-material/core'
import { ImageGrid } from "react-fb-image-video-grid"
import * as ImagePicker from "react-native-image-picker"
import storage from '@react-native-firebase/storage'
import { useEffect } from 'react'
import { createPostRoute, listPostBasedOnUserRoute } from '../apiutils/apiutils';
import { List } from 'native-base'
import { TouchableOpacity } from 'react-native'

const axios = require("axios").default

const MyProfilePage = ({ navigation, route }) => {
    const [image, setImage] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [ListPost, setListPost] = useState([])
    const [user, setUser] = useState("")
    const [hide, setHide] = useState(true)
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
    console.log(image)
    console.log(userId)
    const uploadImage = async () => {
        const imageRef = storage().ref(`${"images"}/${"rithi1" + "image.png"}`)
        await imageRef.putFile(image, { contentType: 'image/jpg' }).catch((error) => { throw error })
        const url = await imageRef.getDownloadURL().catch((error) => { throw error });
        setImageUrl(url)
    }
    let createPost = async () => {
        const { data } = await axios.post(createPostRoute, {
            "email": "badri82301@gmail.com",
            "postUrl": imageUrl
        })
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
        console.log(data.data.postId)
    }
    useEffect(() => {
        if (imageUrl !== "") {
            createPost()
        }
    }, [imageUrl])


    useEffect(() => {
        listPost()
    }, [imageUrl])
    console.log("xaccess", signinUserId)
    return (
        <Box w={"100%"} h={"100%"}>
            <Box w={"100%"} style={{ position: "relative", height: 90, borderBottomWidth: 1, borderBottomColor: "#D9D9D9", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    <Image
                        style={{ width: 18, height: 18, margin: 18 }}
                        source={require("../assets/blackLeftArrow.png")}
                    />
                    <Text onPress={() => { navigation.goBack() }} style={{ position: "absolute", marginLeft: 5, opacity: 0, fontSize: 30 }}>hi</Text>
                </Box>
                <Box style={{ position: "absolute", top: 25, left: 150, display: "flex", alignItems: "center" }}>
                    <Text style={{ color: "black", fontSize: 20, marginBottom: 5 }}>Your Profile</Text>
                    <Image
                        style={{ width: 75, height: 75, borderRadius: 50 }}
                        source={require("../assets/avatar.jpg")}
                    />
                </Box>
                <Box style={{ display: "flex", flexDirection: "row" }}>
                    <Image
                        style={{ marginRight: 13 }}
                        source={require("../assets/settings.png")}
                    />
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
                    <Text style={{ color: "black", fontSize: 15, marginTop: 2 }}>@_.Rithi__</Text>
                    <Text style={{ color: "black", fontSize: 15, marginTop: 2 }}>Forever is a Myth</Text>
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
                        <Text style={{ fontSize: 20, color: "black" }}>245</Text>
                        <Text style={{ fontSize: 20 }}>Posts</Text>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "black" }}>24k</Text>
                        <Text style={{ fontSize: 20 }}>Fans</Text>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "black" }}>25k</Text>
                        <Text style={{ fontSize: 20 }}>Likes</Text>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "black" }}>10k</Text>
                        <Text style={{ fontSize: 20 }}>Dislikes</Text>
                    </Box>
                </Box>
                {user && user._id === signinUserId ? (


                    <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 25 }}>

                        <Box style={{ backgroundColor: "#D9D9D9", width: 150, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18, color: "black" }}>View Gangs</Text>
                        </Box>
                        <Box style={{ backgroundColor: "#D9D9D9", width: 150, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18, color: "black" }}>Edit Profile</Text>
                        </Box>
                    </Box>
                ) : (
                    <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 25 }}>

                        <Box style={{ backgroundColor: "#0093E5", width: 150, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18, color: "white" }}>Be a Fan</Text>
                        </Box>
                        <TouchableOpacity onPress={() => navigation.navigate("ChatmessageScreen", {userId:user._id})}>
                            <Box style={{ backgroundColor: "#D9D9D9", width: 150, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 18, color: "black" }}>Message</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                )}
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
                            <Box style={{ width: 70, height: 70, margin: 2, backgroundColor: "#D9D9D9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: "black", textAlign: "center" }}>View All Photo</Text>
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

            <Box w={"100%"} style={{ position: "absolute", bottom: 0, transform: hide ? [{ translateY: 350 }] : [{ translateY: 0 }], height: 350, backgroundColor: "white", borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                <Box style={{ width: 35, height: 5, borderRadius: 10, backgroundColor: "grey", marginTop: 10, marginLeft: 180 }}><Text>  </Text></Box>
                <Text onPress={() => { setHide(true); openImage() }} style={{ fontSize: 25, color: "black", marginLeft: 30, marginTop: 30 }}>Post</Text>
            </Box>
        </Box>
    )
}

export default MyProfilePage

const styles = StyleSheet.create({})