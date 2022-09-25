import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Button, Flex, Stack } from '@react-native-material/core'

const SignupPage = ({ navigation }) => {
    return (
        <Box w={"100%"} h={"100%"} style={styles.view1} >
            <Box h={"70%"} w={"100%"} style={styles.view3}>

                <Text style={{ marginLeft: 20, marginBottom: -50 }}>FriendOzz.com</Text>
                <Image
                    style={{ alignSelf: "center", height: "90%", width: "90%", justifyContent: "center" }}
                    source={require("../assets/image1.png")}
                />

            </Box>
        </Box>
    )
}

export default SignupPage

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
    },
    icon1: {
        marginLeft: 10,
        marginTop: 5
    },

})