import { AsyncStorage, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Box } from '@react-native-material/core'
import { addLinkRoute } from '../apiutils/apiutils'
const axios = require("axios").default
export default function AddLink({ setLinkPage }) {

    const [url, setUrl] = useState("")
    const [title, setTitle] = useState("")

    const createLink = async () => {
        try {
            const { data } = await axios.post(addLinkRoute, {

                "title": title,
                "url": url,
            }, {
                headers: {
                    "x-access-token": await AsyncStorage.getItem("x-access-token")
                }
            })
            if (data.status) {
                setLinkPage(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Box w={"100%"} h={"8%"} >
            <Box w={"100%"} style={{ display: "flex", flexDirection: "row" }}>

                <Box style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                    <Box style={{ display: "flex", flexDirection: "row", }}>
                        <TouchableOpacity onPress={() => { setLinkPage(false) }}>
                            <Image
                                style={{ width: 18, height: 18, margin: 15 }}
                                source={require("../assets/blackLeftArrow.png")}
                            />
                        </TouchableOpacity>
                        <Text style={{ color: "black", fontSize: 20, marginTop: 10 }}>Add Link</Text>
                    </Box>

                    <TouchableOpacity onPress={() => { createLink() }}>
                        <Image
                            style={{ width: 18, height: 18, margin: 15 }}
                            source={require("../assets/charm_tick.png")}
                        />
                    </TouchableOpacity>

                </Box>

            </Box>
            <Box>


                <Box style={{ marginLeft: 15, marginRight: 15, marginTop: 30 }}>
                    <Text style={{ color: "gray" }}>URL</Text>
                    <TextInput
                        style={{ borderBottomWidth: 1, height: 40, color: "black" }}
                        onChange={(e) => setUrl(e.nativeEvent.text)}

                    />
                </Box>


                <Box style={{ marginLeft: 15, marginRight: 15, marginTop: 20 }}>
                    <Text style={{ color: "gray" }}>Title</Text>
                    <TextInput
                        style={{ borderBottomWidth: 1, height: 40, color: "black" }}
                        onChange={(e) => setTitle(e.nativeEvent.text)}
                    />
                </Box>
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({})