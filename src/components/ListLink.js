import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Box } from '@react-native-material/core'
import { listLinkRoute } from '../apiutils/apiutils'
import { useState } from 'react'
import { AsyncStorage } from 'react-native'
import { TouchableOpacity } from 'react-native'
const axios = require("axios").default
import UpdateLink from "../components/UpdateLink"
const ListLink = ({ setLinkPage }) => {

    const [data, setData] = useState("")
    const [updatedata, setupdateData] = useState(false)
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(listLinkRoute, {
                headers: {
                    "x-access-token": await AsyncStorage.getItem("x-access-token")
                }
            })

            if (data.status) {
                console.log(data.data)
                setData(data.data)
            }
        }
        getData()
    }, [])
    return (
        <Box w={"100%"} h={"100%"} style={{ flex: 1 }}>
            {updatedata ? (
                <UpdateLink setLinkPage={setLinkPage} data={data} setupdateData={setupdateData} />
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
                                <Text style={{ color: "black", fontSize: 20, marginTop: 10 }}>Links</Text>
                            </Box>

                            <TouchableOpacity onPress={() => { updateLink() }}>
                                <Image
                                    style={{ width: 18, height: 18, margin: 15 }}
                                    source={require("../assets/charm_tick.png")}
                                />
                            </TouchableOpacity>

                        </Box>
                    </Box>

                    {data && data.map((item) => (
                        <Box style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "90%", borderBottomColor: "gray", borderBottomWidth: 1, paddingBottom: 30, paddingTop: 30 }}>
                            <Box style={{ flexDirection: "row", marginTop: 10 }}>
                                <Image style={{ width: 40, height: 40 }} source={require("../assets/avatar.jpg")} />
                                <Box style={{ marginLeft: 25, }}>
                                    <Text>{item && item.title}</Text>
                                    <Text>{item && item.url}</Text>
                                </Box>
                            </Box>
                            <TouchableOpacity onPress={() => {
                                setupdateData(true)
                            }}>

                                <Image style={{ width: 30, height: 30, tintColor: "gray", marginRight: 20 }} source={require("../assets/next.png")} />
                            </TouchableOpacity>
                        </Box>
                    ))}
                </>
            )}

        </Box>

    )
}

export default ListLink

const styles = StyleSheet.create({})