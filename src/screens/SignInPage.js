import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Box } from '@react-native-material/core'
import React, { useState } from 'react'
import MaterialTabs from 'react-native-material-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignIn = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (e) => {
    setSelectedTab(e);
  }
  return (
    <Box w={"100%"} h={"100%"}>
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
          <Box style={{ marginBottom: 25, marginTop: 40, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Box>
              <Text style={{ color: "black", fontSize: 18 }}>First Name</Text>
              <TextInput
                style={{ height: 40, width: 175, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                placeholder="First Name"
              />
            </Box>
            <Box>
              <Text style={{ color: "black", fontSize: 18 }}>Last Name</Text>
              <TextInput
                style={{ height: 40, width: 175, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                placeholder="Last Name"
              />
            </Box>
          </Box>
          <Box style={{ marginBottom: 25 }}>
            <Text style={{ color: "black", fontSize: 18 }}>Phone Number</Text>
            <TextInput
              style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
              placeholder="Phone Number"
            />
          </Box>
          <Box>
            <Text style={{ color: "black", fontSize: 18 }}>Password</Text>
            <TextInput
              style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
              placeholder="Minimum 6 characters"
              secureTextEntry={true}
            />
          </Box>
        </Box>
      ) : (
        <Box style={{ margin: 18 }}>
          <Text style={{ color: "black" }}>Enter a valid E-Mail Id and password to set your account</Text>
          <Text style={{ color: "black" }}>If You have an account ? <Text onPress={() => navigation.navigate("LoginScreen")} style={{ color: "black", fontWeight: "bold" }}>Login</Text></Text>
          <Box style={{ marginBottom: 25, marginTop: 40, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Box>
              <Text style={{ color: "black", fontSize: 18 }}>First Name</Text>
              <TextInput
                style={{ height: 40, width: 175, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                placeholder="First Name"
              />
            </Box>
            <Box>
              <Text style={{ color: "black", fontSize: 18 }}>Last Name</Text>
              <TextInput
                style={{ height: 40, width: 175, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
                placeholder="Last Name"
              />
            </Box>
          </Box>
          <Box style={{ marginBottom: 25 }}>
            <Text style={{ color: "black", fontSize: 18 }}>Email</Text>
            <TextInput
              style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
              placeholder="valid Email"
            />
          </Box>
          <Box>
            <Text style={{ color: "black", fontSize: 18 }}>Password</Text>
            <TextInput
              style={{ height: 40, backgroundColor: "#B9B3B3", padding: 10, borderRadius: 10 }}
              placeholder="Minimum 6 characters"
              secureTextEntry={true}
            />
          </Box>
        </Box>
      )}
      <Box>
        <Text style={{ margin: 18, fontSize: 12, color: "black" }}>By Signing up, you agree to our Terms & Conditions, Privacy</Text>
      </Box>

      <Box style={{ marginTop: 200, marginLeft: 200, backgroundColor: "#009DF5", height: 40, width: 170, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
        <Text style={{ color: "black", fontSize: 17, fontWeight: "500" }}>Create an account</Text>
      </Box>
    </Box>
  );
}

export default SignIn

const styles = StyleSheet.create({})