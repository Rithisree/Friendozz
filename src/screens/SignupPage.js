import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Button, Flex, Stack } from '@react-native-material/core'

const SignupPage = ({ navigation }) => {
    return (
        <Box w={"100%"} h={"100%"} style={styles.view1} >
            <Box h={"60%"} w={"100%"} style={styles.view3}>

                <Text style={{ marginLeft: 20, marginBottom: -50 }}>FriendOzz.com</Text>
                <Image
                    style={{ alignSelf: "center", height: "90%", width: "90%", justifyContent: "center" }}
                    source={require("../assets/image1.png")}
                />

            </Box>

            <Box style={{
                backgroundColor: "white", width: "79%", marginLeft: 10,
                marginTop: 5,
                borderRadius: 20,
                borderWidth: 1,
                padding: 5
            }} >
                <Box style={{ padding: 5, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%" }}>
                    <Image
                        source={require("../assets/goog.png")}
                    />
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 18, margin: 5 }}>Enter With Google</Text>
                </Box>
            </Box>

            <Box style={{
                backgroundColor: "#009DF5", marginRight: 40,
                marginLeft: 40,
                borderRadius: 20,
                borderWidth: 1, width: "80%", marginTop: 20
            }} >
                <Box style={{ padding: 5, display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',

                        }}
                        source={require("../assets/facebook.png")}
                    />
                    <Text style={{ color: "black", fontSize: 18, fontWeight: "bold", margin: 5 }}>Enter With Facebook</Text>
                </Box>
            </Box>
            <Box style={{
                backgroundColor: "#009DF5", marginRight: 40,
                marginLeft: 40,
                borderRadius: 20,
                borderWidth: 1, width: "80%", marginTop: 20
            }} >
                <Box style={{ padding: 5, display: "flex", flexDirection: "row", width: "100%", alignItems: "center" }}>

                    <Text onPress={() => navigation.navigate("LoginScreen")} style={{ color: "black", marginLeft: 20, fontSize: 18, padding: 5, fontWeight: "bold", }}>Log in with Phone number/Email</Text>
                </Box>
            </Box>

            <Box style={{ width: "70%", alignItems: "center" }}>
                <Text onPress={() => navigation.navigate("SignInScreen")} style={{ color: "white", marginTop: 10, fontFamily: "verdana", fontSize: 18, fontWeight: "bold", }}>Don’t have an account? <Text style={{ color: "#31FB5D" }}>Sign Up</Text></Text>
                <Text style={{ color: "white", marginTop: 10, fontFamily: "verdana", fontSize: 14 }}>
                    By Signing up, you agree to our terms &
                </Text>
                <Text style={{ color: "white", fontFamily: "verdana", fontSize: 14, }}>Conditions, privacy.</Text>
            </Box>
        </Box >
    )
}

export default SignupPage

const styles = StyleSheet.create({
    view1: {
        display: 'flex',
        alignItems: "center",
        backgroundColor: "black",
        padding: 5

    },
    view2: {
        padding: 5,
        marginBottom: 20
    },
    view3: {
        justifyContent: "center",
        marginTop: 5
    },
    icon1: {
        marginLeft: 10,
        marginTop: 5
    },

})