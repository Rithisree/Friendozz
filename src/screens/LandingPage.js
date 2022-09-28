import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Button, Flex } from '@react-native-material/core'

const LandingPage = ({ navigation }) => {
    return (
        <Box w={"100%"} h={"100%"} style={styles.view1} >
            <Box h={"70%"} w={"100%"} style={styles.view3}>
                <Text style={{ marginLeft: 20, marginBottom: -50 }}>FriendOzz.com</Text>
                <Image
                    style={{ alignSelf: "center", height: "90%", width: "90%", justifyContent: "center" }}
                    source={require("../assets/image1.png")}
                />
            </Box>
            <Box w={"80%"} >
                <Button title="Get Started" color="#009DF5" style={styles.view2} onPress={() => navigation.navigate("SignupScreen")} />
                <Button onPress={()=>navigation.navigate("LoginScreen")} variant="outlined" title="Login" color="white" />
            </Box>

        </Box>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    view1: {
        display: 'flex',
        alignItems: "center",
        backgroundColor: "black",
        justifyContent: "center"

    },
    view2: {
        padding: 5,
        marginBottom: 20
    },
    view3: {
        justifyContent: "center"
    }

})