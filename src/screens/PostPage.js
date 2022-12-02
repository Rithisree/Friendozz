import { Image, ScrollView, StyleSheet, Text, View, AsyncStorage, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box } from '@react-native-material/core'
import { showFanPostRoute, updateCountRoute } from '../apiutils/apiutils'
const axios = require("axios").default

const PostPage = ({ navigation }) => {
    const [userId, setUserId] = useState("")
    const [fanPost, setFanPost] = useState("")
    const [likePostId, setLikePostId] = useState("")
    const [disLikePostId, setDisLikePostId] = useState("")
    const [likeStatus, setLikeStatus] = useState("")
    const [disLikeStatus, setDisLikeStatus] = useState("")

    useEffect(() => {
        const getData = async () => {
            if (!(await AsyncStorage.getItem('x-access-token'))) {
                navigation.navigate("LoginScreen")
            } else {
                setUserId(await AsyncStorage.getItem("userId"))
            }

        }
        getData()
    }, [])

    const showPost = async () => {
        const { data } = await axios.get(showFanPostRoute, { headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") } })

        setFanPost(data.data)
    }
    useEffect(() => {
        showPost()
    }, [])

    const updateLikeCount = async () => {
        const { data } = await axios.post(updateCountRoute, {
            "postId": likePostId,
            "status": likeStatus
        }, { headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") } })
        if (data.status) {
            showPost()
            setLikePostId("")
        }
    }

    const updateDisLikeCount = async () => {
        console.log("dislikefunc")
        const { data } = await axios.post(updateCountRoute, {
            "postId": disLikePostId,
            "status": disLikeStatus
        }, { headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") } })
        if (data.status) {
            showPost()
            setDisLikePostId("")
        }
    }


    useEffect(() => {
        if (likePostId !== "") {
            updateLikeCount()
        }
    }, [likePostId])

    useEffect(() => {
        if (disLikePostId !== "") {
            console.log("useeffect")
            updateDisLikeCount()
        }
    }, [disLikePostId])

    return (
        <Box w={"100%"} h={"100%"} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Box h={"8%"} style={{ borderBottomWidth: 1, borderBottomColor: "#D9D9D9", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 5 }}>
                <Box>
                    {fanPost.image ? (
                        <TouchableOpacity onPress={() => navigation.navigate("MyProfileScreen", { userId: userId })}>


                            <Image
                                style={{ width: 45, height: 45, borderRadius: 50 }}
                                source={{ uri: fanPost && fanPost.image }}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => navigation.navigate("MyProfileScreen", { userId: userId })}>
                        <Image
                                style={{ width: 45, height: 45, borderRadius: 50 }}
                                source={require("../assets/hacker.png")}
                        />
                        </TouchableOpacity>
                    )}
                </Box>
                <Text style={{ fontSize: 20, color: "black" }}>FriendOzz.com</Text>
                <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Box>
                        <Image
                            style={{ marginRight: 13 }}
                            source={require("../assets/search.png")}
                        />
                        <Text onPress={() => navigation.navigate("SearchUserScreen")} style={{ position: "absolute", marginLeft: 5, opacity: 0, fontSize: 30 }}>hi</Text>
                    </Box>
                    <Image
                        style={{ marginRight: 10 }}
                        source={require("../assets/addMusic.png")}
                    />
                </Box>
            </Box>

            <ScrollView w={"100%"} style={{ display: "flex" }}>
                {fanPost && fanPost.fanPost.length > 0 && fanPost.fanPost.map((post) => (
                    <Box w={"100%"} style={{ height: 450, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Box w={"88%"} style={{ marginLeft: 3 }}>
                            <Box w={"100%"} h={"90%"}>
                                <Box h={"13%"} style={{ backgroundColor: "white", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Image
                                        style={{ marginLeft: 8 }}
                                        source={require("../assets/threeDot.png")}
                                    />
                                    <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>


                                        <TouchableOpacity onPress={() => {
                                            navigation.navigate("MyProfileScreen", {
                                                userId: post.userId._id
                                            })
                                        }}>
                                            <Box style={{ marginRight: 5 }}>
                                                <Text style={{ textAlign: "right", color: "gray" }}>{post.userId.name}</Text>
                                                <Text style={{ textAlign: "right", color: "gray" }}>Dance Gang</Text>
                                            </Box>
                                        </TouchableOpacity>
                                        <Box>
                                            {post.userId.image ? (
                                                <Image
                                                    style={{ width: 35, height: 35, borderRadius: 50, marginRight: 8 }}
                                                    source={{ uri: post.userId.image }}
                                                />
                                            ) : (
                                                <Image
                                                    style={{ width: 35, height: 35, borderRadius: 50, marginRight: 8 }}
                                                    source={require("../assets/hacker.png")}
                                                />
                                            )}

                                        </Box>

                                    </Box>
                                </Box>
                                <Box h={"85%"} style={{ backgroundColor: "grey" }}>
                                    <Image
                                        style={{ width: "100%", height: "100%" }}
                                        source={{ uri: post.myPostUrl }}
                                    />
                                </Box>
                            </Box>
                            <Box h={"10%"} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginLeft: 5, marginRight: 5 }}>
                                <Image
                                    source={require("../assets/threeDashAdd.png")}
                                />
                                <Text>Description</Text>
                            </Box>
                        </Box>
                        <Box w={"12%"} style={{ borderLeftWidth: 1, borderLeftColor: "#D9D9D9", display: "flex", alignItems: "center" }}>
                            <Box style={{ marginTop: 20 }}>
                                <Image
                                    source={require("../assets/addPerson.png")}
                                />
                            </Box>
                            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 48 }}>
                                <TouchableOpacity onPress={() => { setLikePostId(post._id); setLikeStatus("like"); }}>
                                    {post.likes.length > 0 ? post.likes.map((like) => (
                                        like === fanPost._id ? (
                                            <Image
                                                source={require("../assets/like.png")}
                                            />
                                        ) : (
                                            <Image
                                                source={require("../assets/likeEmpty.png")}
                                            />
                                        )
                                    )) : (
                                        <Image
                                            source={require("../assets/likeEmpty.png")}
                                        />
                                    )}
                                </TouchableOpacity>
                                <Text style={{ fontSize: 12, color: "black" }}>{post.likes.length}</Text>
                            </Box>
                            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 48 }}>
                                <TouchableOpacity onPress={() => { setDisLikePostId(post._id); setDisLikeStatus("dislike"); }}>
                                    {post.dislikes.length > 0 ? post.dislikes.map((dislike) => (
                                        dislike === fanPost._id ? (
                                            <Image
                                                source={require("../assets/filledDislike.png")}
                                            />
                                        ) : (
                                            <Image
                                                source={require("../assets/dislike.png")}
                                            />
                                        )
                                    )) : (
                                        <Image
                                            source={require("../assets/dislike.png")}
                                        />
                                    )}
                                </TouchableOpacity>
                                <Text style={{ fontSize: 12, color: "black" }}>{post.dislikes.length}</Text>
                            </Box>
                            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 48 }}>
                                <Image
                                    source={require("../assets/comment.png")}
                                />
                                <Text style={{ fontSize: 12 }}>224k</Text>
                            </Box>
                            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 48 }}>
                                <Image
                                    source={require("../assets/share.png")}
                                />
                                <Text style={{ fontSize: 12 }}>224k</Text>
                            </Box>
                        </Box>
                    </Box>
                ))
                }
            </ScrollView >


            <Box h={"8%"} w={"100%"} style={{ borderTopWidth: 1, borderTopColor: "#D9D9D9", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                <Image
                    source={require("../assets/home.png")}
                />
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

                <TouchableOpacity onPress={() => { navigation.navigate("ChatScreen") }}>
                    <Image
                        source={require("../assets/message.png")}
                    />
                </TouchableOpacity>
                
            </Box>
        </Box >
    )
}

export default PostPage

const styles = StyleSheet.create({})