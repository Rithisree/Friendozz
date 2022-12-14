import { AsyncStorage, Image, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { Box } from '@react-native-material/core'
import * as ImagePicker from "react-native-image-picker"
import storage from '@react-native-firebase/storage'
import { useEffect } from 'react'
import { createPostRoute, listGangByIdRoute, listPostBasedOnUserRoute, followRequestRoute, unfollowRequestRoute, checkFanRoute } from '../apiutils/apiutils';
import { TouchableOpacity } from 'react-native'

const axios = require("axios").default

const GroupProfileScreen = ({ navigation, route }) => {
    const [image, setImage] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [ListPost, setListPost] = useState([])
    const [user, setUser] = useState("")
    const [hide, setHide] = useState(true)
    const [fan, setFan] = useState(false)
    const [postCount, setPostCount] = useState(0)
    const [followingCount, setfollowingCount] = useState(0)
    const [likesCount, setlikesCount] = useState(0)
    const [dislikesCount, setdislikesCount] = useState(0)
    const [signinUserId, setSigninUserId] = useState("")
    const [gang, setGang] = useState("")

    const {gangId} = route.params
    console.log("gangId",gangId)
    
    const displayGang = async() => {
        try {
            const { data } = await axios.post(listGangByIdRoute,{
                gangId:gangId
            }, {
                headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") }
            })
            if (data.status) {
                setGang(data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if(gangId!==""){
            displayGang()
        }
    }, [gangId])
    
    console.log(gang)

    return (
        <Box w={"100%"} h={"100%"} bg={"white"}>
            <Box w={"100%"} style={{ position: "relative", height: 60, borderBottomWidth: 1, borderBottomColor: "#D9D9D9", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    <Image
                        style={{ width: 18, height: 18, margin: 18 }}
                        source={require("../assets/blackLeftArrow.png")}
                    />
                    <Text onPress={() => { navigation.goBack() }} style={{ position: "absolute", marginLeft: 5, opacity: 0, fontSize: 30 }}>hi</Text>
                </Box>
               
               
                    <TouchableOpacity> 
                        <Image
                            style={{ marginRight: 13 }}
                            source={require("../assets/threeDot.png")}
                        />
                    </TouchableOpacity>
            </Box>

            <ScrollView>
                <Box style={{ marginTop: 20, marginLeft: 18, marginRight:18, display:"flex", flexDirection:"row",justifyContent:"space-between" }}>
                    <Image
                        source={require("../assets/group.png")}
                    />
                    <Box>
                        <Image
                            style={{ width: 60, height: 60, borderRadius: 50, backgroundColor:"pink" }}
                            source={{ uri:gang && gang.userId.image }}
                        />
                        <Image
                            style={{ width: 60, height: 60, borderRadius: 50, marginLeft:20, marginTop:-28, backgroundColor:"green" }}
                            source={{ uri:gang && gang.members[0].image }}
                        />
                        <Image
                            style={{ width: 60, height: 60, borderRadius: 50, marginLeft:-18,  marginTop:-55, backgroundColor:"grey" }}
                            source={{ uri:gang && gang.members[1].image }}
                        />
                    </Box>
                    <Image
                        source={require("../assets/notify.png")}
                    />
                </Box>
                <Box style={{ marginTop:10, display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Text>{gang && gang.gangName}</Text>
                    <Box style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <Box style={{ marginTop:15, marginRight: 10, backgroundColor: "#0093E5", width: 120, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18, color: "white" }}>Be a Fan</Text>
                        </Box>
                        <Box style={{ marginTop:15, marginLeft: 10, backgroundColor: "#D9D9D9", width: 120, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18, color: "black" }}>View All</Text>
                        </Box>
                    </Box>
                </Box>
                <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 20, marginLeft:40, marginRight: 40, marginBottom:15 }}>
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
                    <Box style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:10}}>
                        <Box style={{display:"flex", flexDirection:"row"}}>
                            <Image
                                style={{ width: 45, height: 45, borderRadius: 50, backgroundColor:"pink" }}
                                source={{ uri:gang && gang.userId.image }}
                            />
                            <Box style={{marginLeft:15}}>
                                <Text style={{color:"gray"}}>Controller</Text>
                                <Text style={{fontWeight:"bold"}}>{gang && gang.userId.name}</Text>
                                <Text>{gang && gang.userId.username}</Text>
                            </Box>
                        </Box>
                        <Box style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                            <Box style={{ backgroundColor: "#0093E5", width: 100, height: 30, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", marginRight:15 }}>
                                <Text onPress={() => followRequest()} style={{ fontSize: 18, color: "white" }}>Be a Fan</Text>
                            </Box>
                            <Image
                                style={{ }}
                                source={require("../assets/threeDot.png")}
                            />
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
                                <Text style={{ color: "black", textAlign: "center", fontWeight:"bold" }}>View All Video</Text>
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

export default GroupProfileScreen

const styles = StyleSheet.create({})