import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Box } from '@react-native-material/core'
import React, { useState } from 'react'
import { ResendVerifyOtpRoute, VerifyOtpRoute } from '../apiutils/apiutils';
import { ToastAndroid } from 'react-native';
const axios = require("axios").default;
const VerifyOtp = ({ emailVerifyOtp, navigation, email }) => {

    const [otp, setOtp] = useState(0)
    const handleOtp = async () => {
        try {
            const { data } = await axios.post(VerifyOtpRoute, {
                "otp": otp,
                "email": email
            })
            console.log(data)
            if (data.status) {
                navigation.navigate("LoginScreen")
            }
        } catch (error) {
            if (error.response.status) {
                ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)
            }
        }
    }
    const handleResendOtp = async () => {
        try {
            const { data } = await axios.post(ResendVerifyOtpRoute, {
                "email": email
            })
            console.log(data)
            if (data.status) {
                ToastAndroid.show(data.data, ToastAndroid.SHORT)
            }
        } catch (error) {
            if (error.response.status) {
                ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)
            }
        }
    }
    return (
        <Box w={"100%"} h={"100%"}>

            <Box w={"100%"} h={"8%"} style={{ flexDirection: "row", backgroundColor: "black", alignItems: "center", }}>

                <View>
                    <Image
                        style={{ width: 18, height: 18, margin: 18 }}
                        source={require("../assets/leftarrow.png")}
                    />
                    <Text onPress={() => { navigation.navigate("LandingScreen") }} style={{ position: "absolute", marginLeft: 20, marginTop: 10, color: "white", opacity: 0, fontSize: 24 }}>hi</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20 }}>Verify OTP</Text>

            </Box>

            {emailVerifyOtp === false ? (
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
                    <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Enter a valid OTP to verify your account</Text>
                    <Box style={{ marginBottom: 25, marginTop: 40 }}>
                        <Text style={{ color: "black", fontSize: 18, marginBottom: 10 }}>Enter OTP</Text>
                        <TextInput
                            keyboardType='numeric'
                            style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                            placeholder="OTP"
                            onChange={(e) => setOtp(e.nativeEvent.text)}
                        />
                        <Text onPress={() => handleResendOtp()} style={{ textAlign: "right", marginTop: 10, color: "black" }}>Resend OTP</Text>
                    </Box>
                </Box>
            )}


            <Box style={{ marginTop: 280, marginLeft: 230, backgroundColor: "#009DF5", height: 40, width: 140, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                <Text onPress={() => handleOtp()} style={{ color: "black", fontSize: 17 }}>Verify</Text>
            </Box>
        </Box >
    )
}

export default VerifyOtp

const styles = StyleSheet.create({})