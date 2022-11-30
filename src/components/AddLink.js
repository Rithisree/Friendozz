import { AsyncStorage, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box } from '@react-native-material/core'
import { addLinkRoute, listLinkRoute } from '../apiutils/apiutils'
import ListLink from './ListLink'
const axios = require("axios").default
export default function AddLink({ setLinkPage }) {

    const [url, setUrl] = useState("")
    const [title, setTitle] = useState("")
    const [links, setLinks] = useState([])
    useEffect(() => {
        const getLinks = async () => {
            try {
                const { data } = await axios.get(listLinkRoute, {
                    headers: {
                        "x-access-token": await AsyncStorage.getItem("x-access-token")
                    }
                })
                if (data.status) {
                    setLinks(data.data)
                    console.log(data.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getLinks()
    }, [])
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
        <Box w={"100%"} h={"100%"} >
            {links && links.length > 0 ? (
                <ListLink setLinkPage={setLinkPage} />
            ) : (
                <>
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
                </>
            )}
        </Box>
    )
}

const styles = StyleSheet.create({})