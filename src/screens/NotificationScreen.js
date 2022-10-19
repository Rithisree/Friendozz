import { AsyncStorage, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box } from '@react-native-material/core'
import {listNotificationRoute} from "../apiutils/apiutils"
const axios = require("axios").default

const NotificationScreen = () => {
    const [notify, setNotify] = useState([])
    const listNotification = async() => {
        const {data} = await axios.get(listNotificationRoute,{headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") }})
        setNotify(data.data)
    }
    useEffect(()=>{
        listNotification()
    },[])
  return (
    <Box w={"100%"} h={"100%"} bg={"white"}>
        <Box  w={"100%"} style={{height:60, borderBottomWidth:1, borderBottomColor:"gray", display:"flex", flexDirection:"row", alignItems:"center"}}>
            <Image
                style={{marginLeft:20}}
                source={require("../assets/blackLeftArrow.png")}
            />
            <Text style={{color:"black", fontSize:18, marginLeft:90}}>159 Comments</Text>
        </Box>
        <ScrollView>
            {notify.length>0 && notify.map((ele) => (
                <Box w={"100%"} style={{ margin:10, display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <Image
                        style={{ width: 40, height: 40, borderRadius: 50, marginRight: 8 }}
                        source={require("../assets/avatar.jpg")}
                    />
                    <Box>
                        <Box style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                            <Text style={{fontWeight:"bold", color:"black", fontSize:18}}>{ele.senderId.name}: </Text>
                            <Text style={{ color:"black", fontSize:16}}>{ele.message}</Text>
                        </Box>
                        <Box style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                            <Image
                                style={{width:25, height:25}}
                                source={require("../assets/share1.png")}
                            />
                            <Box style={{display:"flex", flexDirection:"row", alignItems:"center", marginLeft:20}}>
                                <Image
                                    style={{width:25, height:25}}
                                    source={require("../assets/likeEmpty.png")}
                                />
                                <Text>12</Text>
                            </Box>
                            <Box style={{display:"flex", flexDirection:"row", alignItems:"center", marginLeft:20}}>
                                <Image
                                    style={{width:19, height:19}}
                                    source={require("../assets/dislike.png")}
                                />
                                <Text>12</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{marginLeft:80}}>
                        <Text>5D ago</Text>
                    </Box>
                </Box>
            ))}
        </ScrollView>
    </Box>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({})