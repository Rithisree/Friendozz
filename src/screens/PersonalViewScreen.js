import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { Box } from '@react-native-material/core'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialTabs from 'react-native-material-tabs';


const PersonalViewScreen = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (e) => {
        setSelectedTab(e);
    }

    return(
        <Box w={"100%"} h={"100%"} style={{backgroundColor:"white"}}>
            <Box  w={"100%"} h={"8%"} style={{ flexDirection: "row", backgroundColor: "white", alignItems: "center" }}>
                <TouchableOpacity>
                    <Image
                        style={{ width: 18, height: 18, margin: 18 }}
                        source={require("../assets/blackLeftArrow.png")}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>_badri.__</Text>
            </Box>
            <Box>
                <MaterialTabs
                    items={["Partner", "Gangs"]}
                    selectedIndex={selectedTab}
                    onChange={(e) => handleChange(e)}
                    barColor="#ffffff"
                    inactiveTextColor="#000000"
                    indicatorColor="#009DF5"
                    activeTextColor="#000000"
                />
                {selectedTab===0?(
                    <Box w={"100%"}>
                        <Box style={{ display: "flex", flexDirection: "row", alignItems:"center", justifyContent:"space-between", margin:10 }}>
                            <Box style={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                                <Image
                                    style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "pink" }}
                                    source={{ }}
                                />
                                <Box style={{ marginLeft: 15 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>rithi</Text>
                                    <Text style={{fontSize: 16}}>rithi</Text>
                                </Box>
                            </Box>
                            <Box>
                                <Box style={{ backgroundColor: "#0093E5", width: 120, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 18, color: "white" }}>View Profile</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ):(
                    <Box w={"100%"}>
                        <Box style={{ display: "flex", flexDirection: "row", alignItems:"center", justifyContent:"space-between", margin:10 }}>
                            <Box style={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                                <Box style={{marginLeft: 10}}>
                                    <Image
                                        style={{ width: 45, height: 45, borderRadius: 50, backgroundColor:"pink", marginLeft: 6 }}
                                        source={{  }}
                                    />
                                    <Image
                                        style={{ width: 45, height: 45, borderRadius: 50, marginLeft:20, marginTop:-17, backgroundColor:"green" }}
                                        source={{  }}
                                    />
                                    <Image
                                        style={{ width: 45, height: 45, borderRadius: 50, marginLeft:-13,  marginTop:-46, backgroundColor:"grey" }}
                                        source={{  }}
                                    />
                                </Box>
                                <Box style={{ marginLeft: 15 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>rithi</Text>
                                </Box>
                            </Box>
                            <Box>
                                <Box style={{ backgroundColor: "#0093E5", width: 120, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 18, color: "white" }}>View Gang</Text>
                                </Box>
                            </Box>
                        </Box>

                        <Box style={{ display: "flex", flexDirection: "row", alignItems:"center", justifyContent:"space-between", margin:10 }}>
                            <Box style={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                                <Box style={{marginLeft: 10}}>
                                    <Image
                                        style={{ width: 45, height: 45, borderRadius: 50, backgroundColor:"pink", marginLeft: 6 }}
                                        source={{  }}
                                    />
                                    <Image
                                        style={{ width: 45, height: 45, borderRadius: 50, marginLeft:20, marginTop:-17, backgroundColor:"green" }}
                                        source={{  }}
                                    />
                                    <Image
                                        style={{ width: 45, height: 45, borderRadius: 50, marginLeft:-13,  marginTop:-46, backgroundColor:"grey" }}
                                        source={{  }}
                                    />
                                </Box>
                                <Box style={{ marginLeft: 15 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>rithi</Text>
                                </Box>
                            </Box>
                            <Box>
                                <Box style={{ backgroundColor: "#0093E5", width: 120, height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 18, color: "white" }}>View Gang</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default PersonalViewScreen

const styles = StyleSheet.create({})