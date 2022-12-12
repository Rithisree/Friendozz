import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Box } from '@react-native-material/core'
import { TextInput } from 'react-native-gesture-handler'
const NewGang = () => {
    const [select, setSelect] = useState(false)
    return (
        <Box w={"100%"} style={{ position: "relative", height: "90%", borderBottomWidth: 1, borderBottomColor: "#D9D9D9", }}>
            <Box style={{ flexDirection: "row", width: "80%", }}>

                <TouchableOpacity >
                    <Image
                        style={{ width: 18, height: 18, margin: 18 }}
                        source={require("../assets/blackLeftArrow.png")}
                    />
                </TouchableOpacity>
                <Box style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <Text style={{ "marginTop": 15, fontSize: 15, fontWeight: "bold", color: "black" }}>New Gang</Text>
                    <Text style={{ "marginTop": 15, fontSize: 15, fontWeight: "bold", color: "blue" }}>Create</Text>
                </Box>


            </Box>

            <Box style={{ padding: 15, marginTop: 15 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>To</Text>

                <TextInput
                    style={{ height: 40, marginLeft: 10, marginTop: 10, width: "95%", backgroundColor: "white", padding: 10, borderRadius: 10 }}
                    placeholder="Search"

                />


            </Box>
            <Box style={{ padding: 15, marginTop: 2, marginLeft: 5 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>Suggested</Text>
                <TouchableOpacity onPress={() => { setSelect(!select) }}>
                    <Box style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>

                        <Box style={{ flexDirection: "row" }}>
                            <Image
                                source={require("../assets/partnership.png")}
                            />
                            <Box >
                                <Text style={{ fontSize: 17, marginLeft: 18, fontWeight: "bold", color: "black" }}>Badri</Text>
                                <Text style={{ fontSize: 14, marginLeft: 15, color: "black" }}>_b_a_d_r_i</Text>
                            </Box>
                        </Box>

                        {select ? (

                            <Image
                                style={{ width: 20, height: 20 }}
                                source={require("../assets/check.png")}
                            />

                        ) : (

                            <Image
                                style={{ width: 20, height: 20 }}
                                source={require("../assets/empty-tick.png")}
                            />

                        )}
                    </Box>
                </TouchableOpacity>


            </Box>

        </Box >
    )
}

export default NewGang

const styles = StyleSheet.create({})