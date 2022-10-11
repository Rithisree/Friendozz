import { StyleSheet, Text, View, Image, TextInput, ToastAndroid } from 'react-native'
import { Box } from '@react-native-material/core'
import React, { useState } from 'react'
import { ResetpasswordRoute } from '../apiutils/apiutils';

const axios = require('axios').default;

const ResetPassword = ({ email, navigation }) => {
    const [newPassword, setnewPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const handlePassword = async () => {
        try {
            if (newPassword !== confirmPassword) {
                ToastAndroid.show("password not matched", ToastAndroid.LONG)
            } else {
                const { data } = await axios.post(ResetpasswordRoute, {
                    "password": newPassword,
                    "email": email
                })
                console.log(data)
                if (data.status === true) {
                    ToastAndroid.show(data.data, ToastAndroid.LONG)
                    navigation.navigate("LoginScreen")
                }
            }
        } catch (error) {
            if (error.response.status) {
                ToastAndroid.show(error.response.data.message, ToastAndroid.LONG)
            }
        }
    }
    return (
        <Box w={"100%"} h={"100%"}>
            <Box>
                <Box w={"100%"} h={"8%"} style={{ flexDirection: "row", backgroundColor: "black", alignItems: "center", }}>
                    <View>
                        <Image
                            style={{ width: 18, height: 18, margin: 18 }}
                            source={require("../assets/leftarrow.png")}
                        />
                        <Text onPress={() => { navigation.navigate("SignInScreen") }} style={{ position: "absolute", marginLeft: 20, marginTop: 10, color: "white", opacity: 0, fontSize: 24 }}>hi</Text>
                    </View>
                    <Text style={{ color: "white", fontSize: 20 }}>Reset Password</Text>
                </Box>

                <Box style={{ margin: 25 }}>
                    <Box style={{ marginBottom: 25, marginTop: 40 }}>
                        <Text style={{ color: "black", fontSize: 18 }}>New Password</Text>
                        <TextInput
                            style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                            placeholder="new password"
                            onChange={(e) => setnewPassword(e.nativeEvent.text)}
                        />
                    </Box>

                    <Box style={{ marginBottom: 25, marginTop: 40 }}>
                        <Text style={{ color: "black", fontSize: 18 }}>Confirm Password</Text>
                        <TextInput
                            style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                            placeholder="confirm password"
                            onChange={(e) => setconfirmPassword(e.nativeEvent.text)}
                        />
                    </Box>
                </Box>



                <Box style={{ marginTop: 280, marginLeft: 230, backgroundColor: "#009DF5", height: 40, width: 140, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                    <Text onPress={() => handlePassword()} style={{ color: "black", fontSize: 17 }}>Change Password</Text>
                </Box>
            </Box>

        </Box >
    )
}

export default ResetPassword

const styles = StyleSheet.create({})