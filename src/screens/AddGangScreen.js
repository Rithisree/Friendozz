import { View, Text } from 'react-native'
import React from 'react'
import { Box } from '@react-native-material/core'

const AddGangScreen = () => {
    return (
        <Box w={"100%"} h={"8%"}>
            <Box w={"100%"} style={{ flexDirection: "row", backgroundColor: "black", alignItems: "center" }}>

                <View>
                    <Image
                        style={{ width: 18, height: 18, margin: 18 }}
                        source={require("../assets/leftarrow.png")}
                    />
                    <Text onPress={() => { navigation.navigate("SignInScreen") }} style={{ position: "absolute", marginLeft: 20, marginTop: 10, color: "white", opacity: 0, fontSize: 24 }}>hi</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20 }}>Log In</Text>
            </Box>
        </Box>
    )
}

export default AddGangScreen