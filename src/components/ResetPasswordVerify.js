import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Box } from '@react-native-material/core'
import React, { useState } from 'react'
import MaterialTabs from 'react-native-material-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ResetpasswordverifyotpRoute } from '../apiutils/apiutils';
import ResetPassword from './ResetPassword';
const axios = require('axios').default;

const ResetPasswordVerify = ({ navigation, email, setIsForgetPass }) => {

    const [otp, setOtp] = useState(0)
    const [isVerifyOtp, setIsVerifyOtp] = useState(false)
    const handleVerifyOtp = async () => {
        // try {
        const { data } = await axios.post(ResetpasswordverifyotpRoute, {
            "otp": otp,
            "email": email
        })

        console.log(data)
        if (data.status === true) {
            setIsVerifyOtp(true)
        }
        // } catch (error) {

        // }
    }
    return (
        <Box w={"100%"} h={"100%"}>
            {isVerifyOtp === true ? (
                <ResetPassword setIsForgetPass={setIsForgetPass} email={email} navigation={navigation} />
            ) : (
                <Box>


                    <Box w={"100%"} h={"8%"} style={{ flexDirection: "row", backgroundColor: "black", alignItems: "center", }}>

                        <View>
                            <Image
                                style={{ width: 18, height: 18, margin: 18 }}
                                source={require("../assets/leftarrow.png")}
                            />
                            <Text onPress={() => { navigation.navigate("LandingScreen") }} style={{ position: "absolute", marginLeft: 20, marginTop: 10, color: "white", opacity: 0, fontSize: 24 }}>hi</Text>
                        </View>
                        <Text style={{ color: "white", fontSize: 20 }}>Log In</Text>

                    </Box>

                    <Box style={{ margin: 25 }}>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Enter a valid OTP to reset your password</Text>
                        <Box style={{ marginBottom: 25, marginTop: 40 }}>
                            <Text style={{ color: "black", fontSize: 18, marginBottom: 10 }}>Enter OTP</Text>
                            <TextInput
                                keyboardType='numeric'
                                style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                                placeholder="OTP"
                                onChange={(e) => setOtp(e.nativeEvent.text)}
                            />
                            <Text style={{ textAlign: "right", marginTop: 10, color: "black" }}>Resend OTP</Text>
                        </Box>
                    </Box>



                    <Box style={{ marginTop: 280, marginLeft: 230, backgroundColor: "#009DF5", height: 40, width: 140, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                        <Text onPress={() => handleVerifyOtp()} style={{ color: "black", fontSize: 17 }}>Verify</Text>
                    </Box>
                </Box>
            )}
        </Box >
    )
}

export default ResetPasswordVerify

const styles = StyleSheet.create({})