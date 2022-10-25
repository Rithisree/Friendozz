import { StyleSheet, Text, View, Image, TextInput, ToastAndroid } from 'react-native'
import { Box } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import MaterialTabs from 'react-native-material-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import axios from "axios"
import { signUpRoute, signUpViaMobileRoute, listValidUsernameSignInRoute } from '../apiutils/apiutils';
import VerifyOtp from '../components/VerifyOtp';
const axios = require('axios').default;

const SignIn = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [emailVerifyOtp, setEmailVerifyOtp] = useState(false);
  const [isSignup, setIsSignup] = useState(false);


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobileNumber, setMobileNumber] = useState(0)
  const [username, setUsername] = useState("")
  const [userNameError, setUsernameError] = useState("")


  const handleChange = (e) => {
    setSelectedTab(e);
  }


  const signUp = async () => {
    try {
      const { data } = await axios.post(signUpRoute, {
        "name": name,
        "email": email,
        "password": password
      })

      if (data.status === true) {
        ToastAndroid.show(data.data, ToastAndroid.SHORT);
        setEmailVerifyOtp(true)
        setIsSignup(true)
      }
    } catch (error) {
     
      if (error.response.status) {
        ToastAndroid.show(error.response.data.message, ToastAndroid.LONG);
      }
    }
  }
  const signUpViaMobile = async () => {
    try {
      const { data } = await axios.post(signUpViaMobileRoute, {
        "name": name,
        "mobileNumber": mobileNumber,
        "password": password
      })


      if (data.status === true) {
        ToastAndroid.show(data.data, ToastAndroid.SHORT);
      }
    } catch (error) {
      
      if (error.response.status) {
        ToastAndroid.show(error.response.data.message, ToastAndroid.LONG);
      }
    }
  }

  const ValidateUserName = async () => {
    try {
        const { data } = await axios.post(listValidUsernameSignInRoute, {
            "username": username
        })
        if (data.status) {
            setUsernameError("")
        }
        
    } catch (error) {
        if (error.response) {
            setUsernameError(error.response.data.message)
        }
    }
}
useEffect(() => {
  if (username !== "") {
      ValidateUserName()
  }

}, [username]);


  return (
    <Box w={"100%"} h={"100%"}>
      {
        isSignup === true ? (<VerifyOtp navigation={navigation} emailVerifyOtp={emailVerifyOtp} email={email} />) : (null)
      }
      <Box w={"100%"} h={"8%"} style={{ display: "flex", flexDirection: "row", backgroundColor: "black", alignItems: "center" }}>

        <Image
          style={{ width: 18, height: 18, margin: 15 }}
          source={require("../assets/leftarrow.png")}
        />
        <Text onPress={() => { navigation.navigate("LandingScreen") }} style={{ position: "absolute", marginLeft: 15, fontSize: 24, color: "white", opacity: 0 }}>hi</Text>


        <Text style={{ color: "white", fontSize: 20 }}>Sign Up</Text>
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

      {selectedTab === 0 ? (
        <Box style={{ margin: 18 }}>
          <Text style={{ color: "black", fontFamily: "verdana" }}>Enter a valid Phone number and password to set your account</Text>
          <Text style={{ color: "black" }}>If You have an account ? <Text onPress={() => navigation.navigate("LoginScreen")} style={{ color: "black", fontWeight: "bold" }}>Login</Text></Text>
          <Box style={{  marginBottom:userNameError.length > 0 ? 0 : 25, marginTop: 40, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Box>
              <Text style={{ color: "black", fontSize: 18 }}>First Name</Text>
              <TextInput
                style={{ height: 40, width: 175, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                placeholder="First Name"
                onChange={(e) => setName(e.nativeEvent.text)}
              />
            </Box>
            <Box>
              <Text style={{ color: "black", fontSize: 18 }}>User Name</Text>
              <TextInput
                style={{  height: 40, width: 175, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                placeholder="User Name"
                onChange={(e) => setUsername(e.nativeEvent.text)}
              />
            </Box>
          </Box>
          {userNameError.length > 0 && (
                        <Text style={{marginBottom:20, marginLeft:185}}>{userNameError}</Text>
          )}
          <Box style={{ marginBottom: 25 }}>
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
          <Box>
            <Text style={{ margin: 18, fontSize: 12, color: "black" }}>By Signing up, you agree to our Terms & Conditions, Privacy</Text>
          </Box>

          <Box style={{ marginTop: 120, marginLeft: 180, backgroundColor: "#009DF5", height: 40, width: 170, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
            <Text onPress={() => signUpViaMobile()} style={{ color: "black", fontSize: 17, fontWeight: "500" }}>Create an account</Text>
          </Box>
        </Box>
      ) : (
        <Box style={{ margin: 18 }}>
          <Text style={{ color: "black" }}>Enter a valid E-Mail Id and password to set your account</Text>
          <Text style={{ color: "black" }}>If You have an account ? <Text onPress={() => navigation.navigate("LoginScreen")} style={{ color: "black", fontWeight: "bold" }}>Login</Text></Text>
          <Box style={{  marginBottom:userNameError.length > 0 ? 0 : 25, marginTop: 40, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Box>
              <Text style={{ color: "black", fontSize: 18 }}>First Name</Text>
              <TextInput

                onChange={(e) => setName(e.nativeEvent.text)}
                style={{ height: 40, width: 175, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                placeholder="First Name"
              />
            </Box>
            <Box>
              <Text style={{ color: "black", fontSize: 18 }}>User Name</Text>
              <TextInput
                style={{ height: 40, width: 175, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                placeholder="User Name"
                onChange={(e) => setUsername(e.nativeEvent.text)}
              />
            </Box>
          </Box>
          {userNameError.length > 0 && (
                        <Text style={{marginBottom:20, marginLeft:185}}>{userNameError}</Text>
          )}
          <Box style={{ marginBottom: 25 }}>
            <Text style={{ color: "black", fontSize: 18 }}>Email</Text>
            <TextInput
              onChange={(e) => setEmail(e.nativeEvent.text)}
              style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
              placeholder="Valid Email"
            />
          </Box>
          <Box>
            <Text style={{ color: "black", fontSize: 18 }}>Password</Text>
            <TextInput
              onChange={(e) => setPassword(e.nativeEvent.text)}
              style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
              placeholder="Minimum 6 characters"
              secureTextEntry={true}
            />
          </Box>
          <Box>
            <Text style={{ margin: 18, fontSize: 12, color: "black" }}>By Signing up, you agree to our Terms & Conditions, Privacy</Text>
          </Box>

          <Box style={{ marginTop: 120, marginLeft: 180, backgroundColor: "#009DF5", height: 40, width: 170, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
            <Text onPress={() => signUp()} style={{ color: "black", fontSize: 17, fontWeight: "500" }}>Create an account</Text>
          </Box>
        </Box>
      )}

    </Box>
  );
}

export default SignIn

const styles = StyleSheet.create({})