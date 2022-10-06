import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Box } from '@react-native-material/core'
import React, { useState } from 'react'
import MaterialTabs from 'react-native-material-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ForgetPassword = ({ setIsForgetPass, forgetPassPhone, setIsForgetPassPhone }) => {
    return (
        <Box w={"100%"} h={"100%"}>

            <Box w={"100%"} h={"8%"} style={{ flexDirection: "row", backgroundColor: "black", alignItems: "center", }}>

                <View>
                    <Image
                        style={{ width: 18, height: 18, margin: 18 }}
                        source={require("../assets/leftarrow.png")}
                    />
                    <Text onPress={() => { navigation.navigate("SignInScreen") }} style={{ position: "absolute", marginLeft: 20, marginTop: 10, color: "white", opacity: 0, fontSize: 24 }}>hi</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20 }}>Log In</Text>

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
                        />
                    </Box>

                </Box>
            )}


            <Box>
                <Text style={{ textAlign: "center", color: "black" }}>Back to Login ? <Text onPress={() => { setIsForgetPass(false); setIsForgetPassPhone(false) }} style={{ textAlign: "center", color: "black", fontWeight: "bold" }} >Click Here</Text></Text>
            </Box>

            <Box style={{ marginTop: 280, marginLeft: 230, backgroundColor: "#009DF5", height: 40, width: 140, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                <Text onPress={() => navigation.navigate("PostScreen")} style={{ color: "black", fontSize: 17 }}>Verify</Text>
            </Box>
        </Box >
    )
}

export default ForgetPassword

const styles = StyleSheet.create({})