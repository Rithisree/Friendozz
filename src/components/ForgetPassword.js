import { StyleSheet, Text, View, Image, TextInput, ToastAndroid } from 'react-native'
import { Box } from '@react-native-material/core'
import React, { useState } from 'react'
import MaterialTabs from 'react-native-material-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ForgetPasswordRoute } from '../apiutils/apiutils';
import ResetPasswordVerify from './ResetPasswordVerify';

const axios = require('axios').default;

const ForgetPassword = ({ setIsForgetPass, forgetPassPhone, setIsForgetPassPhone, navigation }) => {
    const [email, setEmail] = useState("")
    const [passwordVerify, setPasswordVerify] = useState(false)
    const [emailVerifyOtp, setEmailVerifyOtp] = useState(false)
    const handlePasswordUsingEmail = async () => {
        try {
            const { data } = await axios.post(ForgetPasswordRoute, {
                "email": email
            })
            console.log(data)
            if (data.status === true) {
                setPasswordVerify(true)
                setEmailVerifyOtp(true)
                ToastAndroid.show(data.data, ToastAndroid.LONG)
            }
        } catch (error) {
            if (error.response.status) {
                ToastAndroid.show(error.response.data.message, ToastAndroid.LONG)
            }
        }
    }
    return (
        <Box w={"100%"} h={"100%"}>
            {passwordVerify === true ? (
                <ResetPasswordVerify setIsForgetPass={setIsForgetPass} emailVerifyOtp={emailVerifyOtp} email={email} />
            ) : (
                <Box>

                    <Box w={"100%"} h={"8%"} style={{ flexDirection: "row", backgroundColor: "black", alignItems: "center", }}>

                        <View>
                            <Image
                                style={{ width: 18, height: 18, margin: 18 }}
                                source={require("../assets/leftarrow.png")}
                            />
                            <Text onPress={() => { setIsForgetPass(false) }} style={{ position: "absolute", marginLeft: 20, marginTop: 10, color: "white", opacity: 0, fontSize: 24 }}>hi</Text>
                        </View>
                        <Text style={{ color: "white", fontSize: 20 }}>Forget Password</Text>

                    </Box>

                    {forgetPassPhone === true ? (
                        <Box style={{ margin: 25 }}>
                            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Enter a valid Phone number to reset your password</Text>
                            <Box style={{ marginBottom: 25, marginTop: 40 }}>
                                <Text style={{ color: "black", fontSize: 18 }}>Phone Number</Text>
                                <TextInput
                                    style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                                    placeholder="Phone Number"
                                />
                            </Box>
                        </Box>
                    ) : (
                        <Box style={{ margin: 25 }}>
                            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Enter a valid email to reset your password</Text>
                            <Box style={{ marginBottom: 25, marginTop: 40 }}>
                                <Text style={{ color: "black", fontSize: 18 }}>Email</Text>
                                <TextInput
                                    style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.nativeEvent.text)}
                                />
                            </Box>
                        </Box>
                    )}


                    <Box>
                        <Text style={{ textAlign: "center", color: "black" }}>Back to Login ? <Text onPress={() => { setIsForgetPass(false); setIsForgetPassPhone(false) }} style={{ textAlign: "center", color: "black", fontWeight: "bold" }} >Click Here</Text></Text>
                    </Box>

                    <Box style={{ marginTop: 280, marginLeft: 230, backgroundColor: "#009DF5", height: 40, width: 140, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                        <Text onPress={() => handlePasswordUsingEmail()} style={{ color: "black", fontSize: 17 }}>Verify</Text>
                    </Box>
                </Box>
            )}
        </Box >
    )
}

export default ForgetPassword

const styles = StyleSheet.create({})