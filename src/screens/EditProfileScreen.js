import { AsyncStorage, Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Box } from '@react-native-material/core'
import { TextInput } from 'react-native-gesture-handler'
import * as ImagePicker from "react-native-image-picker"
import { listPostBasedOnUserRoute, listValidUsernameRoute, updateProfileRoute, uploadImageRoute } from '../apiutils/apiutils'
const axios = require("axios").default
import storage from '@react-native-firebase/storage'
import uuid from 'react-native-uuid';
const EditProfileScreen = ({ navigation, route }) => {
    const { userId } = route.params
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [user, setUser] = useState("b")
    const [username, setUsername] = useState("")
    const [userNameError, setUsernameError] = useState("")
    const [image, setImage] = useState("")
    const [imageUrl, setImageUrl] = useState("")

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
    const uploadImage = async () => {
        let randomString = (Math.random() + 1).toString(36).substring(7);
        const imageRef = storage().ref(`${"images"}/${randomString}`)
        await imageRef.putFile(image, { contentType: 'image/jpg' }).catch((error) => { throw error })
        const url = await imageRef.getDownloadURL().catch((error) => { throw error });
        setImageUrl(url)
        listPost()
    }
    let listPost = async () => {
        const { data } = await axios.get(`${listPostBasedOnUserRoute}/${userId}`, {
            headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") }
        })
        if (data.status) {
            setUser(data.data)
        }

    }
    const ValidateUserName = async () => {
        try {
            const { data } = await axios.post(listValidUsernameRoute, {
                "username": username
            }, {
                headers: {
                    "x-access-token": await AsyncStorage.getItem("x-access-token")
                }
            })
            if (data.status) {
                setUsernameError("")
            }
        } catch (error) {
            if (error.response) {
                setUsernameError(error.response.data.message)
            }
        }
    }

    const uploadImageForProfile = async () => {
        try {
            const { data } = await axios.post(uploadImageRoute, {
                "image": imageUrl
            }, {
                headers: {
                    "x-access-token": await AsyncStorage.getItem("x-access-token")
                }
            })
            if (data.status) {
                console.log(data.data)
                ToastAndroid.show("uploaded", ToastAndroid.LONG)
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message)
            }
        }
    }
    useEffect(() => {
        if (imageUrl !== "") {
            uploadImageForProfile()
        }

    }, [imageUrl])
    useEffect(() => {
        if (username !== "") {
            ValidateUserName()
        }

    }, [username]);
    useEffect(() => {
        listPost()
    }, [])

    const updateProfile = async () => {
        const { data } = await axios.post(updateProfileRoute, {
            "username": username,
            "bio": bio,
            "name": name
        }, {
            headers: {
                "x-access-token": await AsyncStorage.getItem("x-access-token")
            }
        })
        if (data.data) {
            navigation.push("MyProfileScreen", { userId: userId })
        }
    }
    return (
        <Box h={"100%"} w={"100%"} bg={"white"}>
            <Box w={"100%"} h={"8%"} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#D9D9D9" }}>
                <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                    <Image
                        style={{ width: 18, height: 18, margin: 15 }}
                        source={require("../assets/blackLeftArrow.png")}
                    />
                    <Text onPress={() => { navigation.goBack() }} style={{ position: "absolute", marginLeft: 15, fontSize: 24, color: "white", opacity: 0 }}>hi</Text>


                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Edit Profile</Text>
                </Box>
                <TouchableOpacity onPress={() => updateProfile()}>
                    <Image
                        style={{ width: 20, height: 20, margin: 15 }}
                        source={require("../assets/charm_tick.png")}
                    />
                </TouchableOpacity>


            </Box>


            <Box style={{ width: "100%", display: "flex", alignItems: "center", marginTop: 10 }}>
                <Box style={{ alignItems: "center" }}>
                    <Image
                        style={{ width: 80, height: 80, borderRadius: 50 }}
                        source={{ "uri": user && user.image && user.image.length > 1 && user.image }}
                    />
                    <Text onPress={() => openImage()} style={{ "fontWeight": "bold", color: "#0093E5", fontSize: 16, marginTop: 10 }}>Change Profile Photo</Text>
                </Box>


            </Box>

            <Box>
                <Box style={{ marginLeft: 15, marginRight: 15, marginTop: 15 }}>
                    <Text style={{ color: "gray" }}>Name</Text>
                    <TextInput
                        style={{ borderBottomWidth: 1, height: 40, color: "black" }}
                        onChange={(e) => setName(e.nativeEvent.text)}
                        defaultValue={user && user.name}
                    />
                </Box>

                <Box style={{ marginLeft: 15, marginRight: 15, marginTop: 15 }}>
                    <Text style={{ color: "gray" }}>Username</Text>
                    <TextInput
                        style={{ borderBottomWidth: 1, height: 40, color: "black" }}
                        defaultValue={user && user.username}
                        onChange={(e) => setUsername(e.nativeEvent.text)}
                    />
                    {userNameError.length > 0 && (
                        <Text>{userNameError}</Text>
                    )}
                </Box>

                <Box style={{ marginLeft: 15, marginRight: 15, marginTop: 15 }}>
                    <Text style={{ color: "gray" }}>Bio</Text>
                    <TextInput
                        style={{ borderBottomWidth: 1, height: 40, color: "black" }}
                        defaultValue={user && user.bio}
                        onChange={(e) => setBio(e.nativeEvent.text)}
                    />
                </Box>

                <Box style={{ marginLeft: 15, marginRight: 15, marginTop: 15 }}>
                    <Text style={{ color: "gray" }}>Mobile Number</Text>
                    <TextInput
                        defaultValue={user && user.mobileNumber}
                        style={{ borderBottomWidth: 1, height: 40, color: "black" }}
                    />
                </Box>

                <Box style={{ marginLeft: 15, marginRight: 15, marginTop: 15 }}>
                    <Text style={{ color: "gray" }}>Email</Text>
                    <TextInput
                        defaultValue={user && user.email}
                        editable={false}
                        style={{ borderBottomWidth: 1, height: 40, color: "black" }}
                    />
                </Box>

                <Box style={{ marginLeft: 15, marginRight: 15, marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: "gray" }}>Links</Text>
                    <Text style={{ color: "gray" }}>1</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({})