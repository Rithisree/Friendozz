import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box } from '@react-native-material/core'
import {ImageGrid} from "react-fb-image-video-grid"

const MyProfilePage = () => {
  return (
    <Box w={"100%"} h={"100%"}>
        <Box w={"100%"} style={{position:"relative",height:90, borderBottomWidth:1, borderBottomColor:"#D9D9D9", display:"flex",flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <Image
                style={{ width: 18, height: 18, margin: 18 }}
                source={require("../assets/blackLeftArrow.png")}
            />
            <Box style={{position:"absolute", top:25, left:150, display:"flex", alignItems:"center"}}>
                <Text style={{color:"black", fontSize:20, marginBottom:5}}>Your Profile</Text>
                <Image
                    style={{width:75, height:75, borderRadius:50}}
                    source={require("../assets/avatar.jpg")}
                />
            </Box>
            <Box style={{display:"flex", flexDirection:"row"}}>
                <Image
                    style={{marginRight:13}}
                    source={require("../assets/settings.png")}
                />
                <Image
                    style={{marginRight:10}}
                    source={require("../assets/addMusicBig.png")}
                />
            </Box>
        </Box>

        <ScrollView>
            <Box style={{marginTop:25, marginLeft:18}}>
                <Image
                    source={require("../assets/group.png")}
                />
                <Text style={{color:"black", fontSize:18, marginTop:5}}>Rithi</Text>
                <Text style={{color:"black", fontSize:15, marginTop:2}}>@_.Rithi__</Text>
                <Text style={{color:"black", fontSize:15, marginTop:2}}>Forever is a Myth</Text>
                <Text style={{color:"black", fontSize:15, fontWeight:"bold", marginTop:2}}>...More</Text>
                <Box style={{displa:"flex", flexDirection:"row"}}>
                    <Image
                        style={{marginRight:10}}
                        source={require("../assets/link.png")}
                    />
                    <Text>bit.ly/43484</Text>
                </Box>
            </Box>
            <Box style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent: "space-around", marginTop:20}}>
                <Box style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{fontSize:20, color:"black"}}>245</Text>
                    <Text style={{fontSize:20}}>Posts</Text>
                </Box>
                <Box style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{fontSize:20, color:"black"}}>24k</Text>
                    <Text style={{fontSize:20}}>Fans</Text>
                </Box>
                <Box style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{fontSize:20, color:"black"}}>25k</Text>
                    <Text style={{fontSize:20}}>Likes</Text>
                </Box>
                <Box style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{fontSize:20, color:"black"}}>10k</Text>
                    <Text style={{fontSize:20}}>Dislikes</Text>
                </Box>
            </Box>
            <Box style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around", marginTop: 25 }}>
                <Box style={{backgroundColor:"#D9D9D9", width:150, height:30, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"black"}}>View Gangs</Text>
                </Box>
                <Box style={{backgroundColor:"#D9D9D9", width:150, height:30, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"black"}}>Edit Profile</Text>
                </Box>
            </Box>
            <Box>
                <Box style={{marginLeft:10}}>
                    <Box>
                        <Image
                            style={{ width: 25, height: 25, marginTop:10, marginBottom:10 }}
                            source={require("../assets/image.png")}
                        />
                    </Box>
                    <Box style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                    </Box>
                </Box>
                <Box style={{marginLeft:10}}>
                    <Box>
                        <Image
                            style={{ width: 25, height: 25, marginTop:10, marginBottom:10 }}
                            source={require("../assets/video.png")}
                        />
                    </Box>
                    <Box style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                        <Image
                            style={{width:70, height:70, margin:2}}
                            source={require("../assets/avatar.jpg")}
                        />
                    </Box>
                </Box>
            </Box>
        </ScrollView>

        <Box h={"8%"} w={"100%"} style={{ borderTopWidth:1, borderTopColor:"#D9D9D9", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
            <Image
                source={require("../assets/home.png")}
            />
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

export default MyProfilePage

const styles = StyleSheet.create({})