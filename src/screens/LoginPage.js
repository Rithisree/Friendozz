import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Box } from '@react-native-material/core'
import React, { useState } from 'react'
import MaterialTabs from 'react-native-material-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ForgetPassword from '../components/ForgetPassword';
import { LoginRoute, LoginViaNumberRoute } from '../apiutils/apiutils';
import { ToastAndroid } from 'react-native';
import { AsyncStorage } from 'react-native';
const axios = require("axios").default;
const Login = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [email, setEmail] = useState("")
  const [mobileNumber, setMobileNumber] = useState(0)
  const [password, setPassword] = useState("")

  const handleChange = (e) => {
    setSelectedTab(e);
  }
  const navigatTo = () => {
    navigation.navigate("LandingScreen")
  }
  const [forgetPass, setIsForgetPass] = useState(false)
  const [forgetPassPhone, setIsForgetPassPhone] = useState(false)

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(LoginRoute, {
        "email": email,
        "password": password
      })
      console.log(data)
      if (data.status) {
        await AsyncStorage.setItem("x-access-token", data.token)
        navigation.navigate("PostScreen")
      }
    } catch (error) {
      if (error.response.status) {
        ToastAndroid.show(error.response.data.message, ToastAndroid.LONG)
      }
    }
  }
  const handleLoginViaMobileNumber = async () => {
    try {
      const { data } = await axios.post(LoginViaNumberRoute, {
        "mobileNumber": mobileNumber,
        "password": password
      })
      console.log(data)
      if (data.status) {
        navigation.navigate("PostScreen")
      }

    } catch (error) {
      if (error.response.status) {
        ToastAndroid.show(error.response.data.message, ToastAndroid.LONG)
      }
    }
  }
  return (
    <Box>
      {forgetPass === true || forgetPassPhone === true ? (
        <ForgetPassword navigation={navigation} setIsForgetPass={setIsForgetPass} setIsForgetPassPhone={setIsForgetPassPhone} forgetPassPhone={forgetPassPhone} />
      ) : (
        <Box w={"100%"} h={"100%"}>

          <Box w={"100%"} h={"8%"} style={{ flexDirection: "row", backgroundColor: "black", alignItems: "center" }}>

            <View>
              <Image
                style={{ width: 18, height: 18, margin: 18 }}
                source={require("../assets/leftarrow.png")}
              />
              <Text onPress={() => { navigation.navigate("SignInScreen") }} style={{ position: "absolute", marginLeft: 20, marginTop: 10, color: "white", opacity: 0, fontSize: 24 }}>hi</Text>
            </View>
            <Text style={{ color: "white", fontSize: 20 }}>Log In</Text>

          </Box>

          <Box>
            <MaterialTabs
              items={["Phone Number", "Email"]}
              selectedIndex={selectedTab}
              onChange={(e) => handleChange(e)}
              barColor="#ffffff"
              inactiveTextColor="#000000"
              indicatorColor="#009DF5"
              activeTextColor="#000000"
            />
          </Box>


          {
            selectedTab === 0 ? (
              <Box style={{ margin: 18 }}>
                <Text style={{ color: "black" }}>Enter a valid Phone number and password to login to your account</Text>
                <Box style={{ marginBottom: 25, marginTop: 40 }}>
                  <Text style={{ color: "black", fontSize: 18 }}>Phone Number</Text>
                  <TextInput
                    style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                    placeholder="Phone Number"
                    onChange={(e) => setMobileNumber(e.nativeEvent.text)}
                  />
                </Box>
                <Box>
                  <Text style={{ color: "black", fontSize: 18 }}>Password</Text>
                  <TextInput
                    style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                    placeholder="Minimum 6 characters"
                    secureTextEntry={true}
                    onChange={(e) => setPassword(e.nativeEvent.text)}
                  />
                </Box>
                <Box style={{ marginTop: 30 }}>
                  <Text onPress={() => { setIsForgetPassPhone(true) }} style={{ textAlign: "center", color: "black", fontWeight: "bold" }}>Forget Password?</Text>
                </Box>
                <Box style={{ marginTop: 220, marginLeft: 200, backgroundColor: "#009DF5", height: 40, width: 140, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                  <Text onPress={() => handleLoginViaMobileNumber()} style={{ color: "black", fontSize: 17 }}>Log In</Text>
                </Box>
              </Box>
            ) : (
              <Box style={{ margin: 18 }}>
                <Text style={{ color: "black" }}>Enter a valid E-Mail Id and password to login to your account</Text>
                <Box style={{ marginBottom: 25, marginTop: 40 }}>
                  <Text style={{ color: "black", fontSize: 18 }}>E-Mail</Text>
                  <TextInput
                    style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                    placeholder="email"
                    onChange={(e) => setEmail(e.nativeEvent.text)}
                  />
                </Box>
                <Box>
                  <Text style={{ color: "black", fontSize: 18 }}>Password</Text>
                  <TextInput
                    style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                    placeholder="Minimum 6 characters"
                    onChange={(e) => setPassword(e.nativeEvent.text)}
                    secureTextEntry={true}
                  />
                </Box>
                <Box style={{ marginTop: 30 }}>
                  <Text onPress={() => { setIsForgetPass(true) }} style={{ textAlign: "center", color: "black", fontWeight: "bold" }}>Forget Password?</Text>
                </Box>
                <Box style={{ marginTop: 220, marginLeft: 200, backgroundColor: "#009DF5", height: 40, width: 140, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                  <Text onPress={() => handleLogin()} style={{ color: "black", fontSize: 17 }}>Log In</Text>
                </Box>
              </Box>
            )
          }



        </Box >
      )}

    </Box>
  );
}

export default Login

const styles = StyleSheet.create({})