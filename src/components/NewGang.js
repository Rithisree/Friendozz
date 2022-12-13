import { Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, AsyncStorage, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box } from '@react-native-material/core'
import { TextInput } from 'react-native-gesture-handler'
import { searchUserExceptOwnerRoute, createGangRoute } from '../apiutils/apiutils'
const axios = require("axios").default

const NewGang = ({setnewGang}) => {
    const [select, setSelect] = useState(false)

    const [search, setSearch] = useState("")
    const [user, setUser] = useState([])
    let [selectedUser, setSelectedUser] = useState([])
    const [selectedId, setSelectedId] = useState([])
    selectedUser = Array.from(new Set(selectedUser))
    const handleSearch = async () => {
        try {
            const { data } = await axios.post(searchUserExceptOwnerRoute, {
                "email": search
            }, { headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") } })


            if (data.status) {
                console.log(data.data)
                setUser(data.data)
            }

        } catch (error) {
            if (error.response.status) {
                ToastAndroid.show(error.response.data.message, ToastAndroid.LONG)
            }
        }
    }
    useEffect(() => {
        if (search.length > 0) {
            handleSearch()
        }
    }, [search])

    const onpress = (ele) => {
        const newData = selectedUser.filter((item) => {
          return item !== ele.name;
        });
        setSelectedUser(newData);
      };

      const onpressId = (ele) => {
        const newData = selectedId.filter((item) => {
          return item !== ele._id;
        });
        setSelectedId(newData);
      };
    
    const handleCreate  = async() => {
        try {
            const { data } = await axios.post(createGangRoute, {
                gangName:"New Gang",
                members:selectedId
            }, { headers: { "x-access-token": await AsyncStorage.getItem("x-access-token") } })
            if (data.status) {
              ToastAndroid.show(data.data, ToastAndroid.LONG)
            }

        } catch (error) {
            if (error.response.status) {
                ToastAndroid.show(error.response.data.message, ToastAndroid.LONG)
            }
        }
    }
    return (
        <Box w={"100%"} style={{ position: "relative", height: "90%", borderBottomWidth: 1, borderBottomColor: "#D9D9D9", }}>
            <Box style={{ flexDirection: "row", width: "80%", }}>

                <TouchableOpacity onPress={()=>setnewGang(false)}>
                    <Image
                        style={{ width: 18, height: 18, margin: 18 }}
                        source={require("../assets/blackLeftArrow.png")}
                    />
                </TouchableOpacity>
                <Box style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <Text style={{ "marginTop": 15, fontSize: 15, fontWeight: "bold", color: "black" }}>New Gang</Text>
                    <Text onPress={()=>handleCreate()} style={{ "marginTop": 15, fontSize: 15, fontWeight: "bold", color: "blue" }}>Create</Text>
                </Box>


            </Box>

            <Box style={{ padding: 15, marginTop: 15 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>To</Text>

                <TextInput
                    style={{ height: 40, marginLeft: 10, marginTop: 10, width: "95%", backgroundColor: "white", padding: 10, borderRadius: 10 }}
                    placeholder="Search"
                    onChange={(e) => setSearch(e.nativeEvent.text)}
                />


            </Box>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "black", marginLeft:20 }}>Suggested</Text>
            {user && user.map((ele) => (
                <Box style={{ padding: 15, marginTop: 2, marginLeft: 5 }}>
                    
                    <TouchableOpacity>
                        <Box style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>

                            <Box style={{ flexDirection: "row" }}>
                                <Image
                                    source={require("../assets/partnership.png")}
                                />
                                <Box >
                                    <Text style={{ fontSize: 17, marginLeft: 18, fontWeight: "bold", color: "black" }}>{ele.name}</Text>
                                    <Text style={{ fontSize: 14, marginLeft: 15, color: "black" }}>_b_a_d_r_i</Text>
                                </Box>
                            </Box>

                            { selectedUser.includes(ele.name) ? (
                                <TouchableOpacity onPress={()=>{onpress(ele);onpressId(ele)}}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={require("../assets/check.png")}
                                />
                                 </TouchableOpacity>

                            ) : (    
                                <TouchableOpacity  onPress={() => {setSelectedId([...selectedId, ele._id]);setSelectedUser([...selectedUser, ele.name]);setSelect(!select) }}>                      
                                    <Image
                                        style={{ width: 20, height: 20 }}
                                        source={require("../assets/empty-tick.png")}
                                    />
                                </TouchableOpacity>      
                            )}
                        </Box>
                    </TouchableOpacity>


                </Box>
            ))}
        </Box >
    )
}

export default NewGang

const styles = StyleSheet.create({})