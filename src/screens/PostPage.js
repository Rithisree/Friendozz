import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box } from '@react-native-material/core'

const PostPage = () => {
  return (
    <Box w={"100%"} h={"100%"} style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <Box h={"8%"} style={{borderBottomWidth:1, borderBottomColor:"#D9D9D9", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:5}}>
            <Image
                style={{width:45, height:45, borderRadius:50}}
                source={require("../assets/avatar.jpg")}
            />
            <Text style={{fontSize:20, color:"black"}}>FriendOzz.com</Text>
            <Box style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <Image
                    style={{marginRight:13}}
                    source={require("../assets/search.png")}
                />
                <Image
                    style={{marginRight:10}}
                    source={require("../assets/addMusic.png")}
                />
            </Box>
        </Box>

        <ScrollView w={"100%"} style={{display:"flex"}}>
            <Box w={"100%"} style={{height:450, display:"flex",flexDirection:"row",  justifyContent:"space-between"}}>
                <Box w={"88%"} style={{marginLeft:3}}>
                    <Box w={"100%"} h={"90%"}>
                        <Box h={"13%"} style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <Image 
                                style={{marginLeft:8}}
                                source={require("../assets/threeDot.png")}
                            />
                            <Box style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                <Box style={{marginRight:5}}>
                                    <Text style={{textAlign:"right"}}>_Rithi._</Text>
                                    <Text style={{textAlign:"right"}}>Dance Gang</Text>
                                </Box>
                                <Box>
                                <Image
                                    style={{width:35, height:35, borderRadius:50, marginRight:8}}
                                    source={require("../assets/avatar.jpg")}
                                />
                                </Box>
                            </Box>
                        </Box>
                        <Box h={"85%"} style={{backgroundColor:"grey"}}>

                        </Box>
                    </Box>
                    <Box h={"10%"} style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginLeft: 5, marginRight:5}}>
                        <Image
                            source={require("../assets/threeDashAdd.png")}
                        />
                        <Text>Description</Text>
                    </Box>
                </Box>
                <Box w={"12%"} style={{borderLeftWidth:1, borderLeftColor:"#D9D9D9", display:"flex", alignItems:"center"}}>
                    <Box style={{marginTop:20}}>
                        <Image
                            source={require("../assets/addPerson.png")}
                        />
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:48}}>
                        <Image
                            source={require("../assets/like.png")}
                        />
                        <Text style={{fontSize:12}}>224k</Text>
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:48}}>
                        <Image
                            source={require("../assets/dislike.png")}
                        />
                        <Text style={{fontSize:12}}>224k</Text>
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:48}}>
                        <Image
                            source={require("../assets/comment.png")}
                        />
                        <Text style={{fontSize:12}}>224k</Text>
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:48}}>
                        <Image
                            source={require("../assets/share.png")}
                        />
                        <Text style={{fontSize:12}}>224k</Text>
                    </Box>
                </Box>
            </Box>

            <Box w={"100%"} style={{height:450, display:"flex",flexDirection:"row",  justifyContent:"space-between"}}>
                <Box w={"88%"} style={{marginLeft:3}}>
                    <Box w={"100%"} h={"90%"}>
                        <Box h={"13%"} style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <Image 
                                style={{marginLeft:8}}
                                source={require("../assets/threeDot.png")}
                            />
                            <Box style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                <Box style={{marginRight:5}}>
                                    <Text style={{textAlign:"right"}}>_Rithi._</Text>
                                    <Text style={{textAlign:"right"}}>Dance Gang</Text>
                                </Box>
                                <Box>
                                <Image
                                    style={{width:35, height:35, borderRadius:50, marginRight:8}}
                                    source={require("../assets/avatar.jpg")}
                                />
                                </Box>
                            </Box>
                        </Box>
                        <Box h={"85%"} style={{backgroundColor:"grey"}}>

                        </Box>
                    </Box>
                    <Box h={"10%"} style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginLeft: 5, marginRight:5}}>
                        <Image
                            source={require("../assets/threeDashAdd.png")}
                        />
                        <Text>Description</Text>
                    </Box>
                </Box>
                <Box w={"12%"} style={{borderLeftWidth:1, borderLeftColor:"#D9D9D9", display:"flex", alignItems:"center"}}>
                    <Box style={{marginTop:20}}>
                        <Image
                            source={require("../assets/addPerson.png")}
                        />
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:48}}>
                        <Image
                            source={require("../assets/like.png")}
                        />
                        <Text style={{fontSize:12}}>224k</Text>
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:48}}>
                        <Image
                            source={require("../assets/dislike.png")}
                        />
                        <Text style={{fontSize:12}}>224k</Text>
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:48}}>
                        <Image
                            source={require("../assets/comment.png")}
                        />
                        <Text style={{fontSize:12}}>224k</Text>
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:48}}>
                        <Image
                            source={require("../assets/share.png")}
                        />
                        <Text style={{fontSize:12}}>224k</Text>
                    </Box>
                </Box>
            </Box>

            <Box w={"100%"} style={{height:450, display:"flex",flexDirection:"row",  justifyContent:"space-between"}}>
                <Box w={"88%"} style={{marginLeft:3}}>
                    <Box w={"100%"} h={"90%"}>
                        <Box h={"13%"} style={{backgroundColor:"white", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <Image 
                                style={{marginLeft:8}}
                                source={require("../assets/threeDot.png")}
                            />
                            <Box style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                <Box style={{marginRight:5}}>
                                    <Text style={{textAlign:"right"}}>_Rithi._</Text>
                                    <Text style={{textAlign:"right"}}>Dance Gang</Text>
                                </Box>
                                <Box>
                                <Image
                                    style={{width:35, height:35, borderRadius:50, marginRight:8}}
                                    source={require("../assets/avatar.jpg")}
                                />
                                </Box>
                            </Box>
                        </Box>
                        <Box h={"85%"} style={{backgroundColor:"grey"}}>

                        </Box>
                    </Box>
                    <Box h={"10%"} style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginLeft: 5, marginRight:5}}>
                        <Image
                            source={require("../assets/threeDashAdd.png")}
                        />
                        <Text>Description</Text>
                    </Box>
                </Box>
                <Box w={"12%"} style={{borderLeftWidth:1, borderLeftColor:"#D9D9D9", display:"flex", alignItems:"center"}}>
                    <Box style={{marginTop:20}}>
                        <Image
                            source={require("../assets/addPerson.png")}
                        />
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:48}}>
                        <Image
                            source={require("../assets/like.png")}
                        />
                        <Text style={{fontSize:12}}>224k</Text>
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:48}}>
                        <Image
                            source={require("../assets/dislike.png")}
                        />
                        <Text style={{fontSize:12}}>224k</Text>
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:48}}>
                        <Image
                            source={require("../assets/comment.png")}
                        />
                        <Text style={{fontSize:12}}>224k</Text>
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:48}}>
                        <Image
                            source={require("../assets/share.png")}
                        />
                        <Text style={{fontSize:12}}>224k</Text>
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

export default PostPage

const styles = StyleSheet.create({})