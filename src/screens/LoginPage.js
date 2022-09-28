import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Box } from '@react-native-material/core'
import React, { useState } from 'react'
import MaterialTabs from 'react-native-material-tabs';

const Login = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (e) => {
    setSelectedTab(e);
  }
  return(
    <Box w={"100%"} h={"100%"}>
        <Box w={"100%"} h={"8%"} style={{display:"flex", flexDirection:"row", backgroundColor:"black", alignItems:"center"}}>
            <Image
                style={{ width:18 , height:18, margin: 10 }}
                source={require("../assets/leftarrow.png")}
            />
            <Text style={{color:"white", fontSize:20}}>Log In</Text>
        </Box>
        <Box>
            <MaterialTabs
              items={["Phone Number", "Email"]}
              selectedIndex={selectedTab}
              onChange={(e)=>handleChange(e)}
              barColor="#ffffff"
              inactiveTextColor="#000000"
              indicatorColor="#009DF5"
              activeTextColor="#000000"
            />
        </Box>

        {selectedTab===0?(
          <Box style={{margin:18}}>
            <Text>Enter a valid Phone number and password to login to your account</Text>
            <Box style={{marginBottom:25, marginTop:40}}>
              <Text style={{color:"black", fontSize:18}}>Phone Number</Text>
              <TextInput
                style={{ height: 40, backgroundColor:"#B9B3B3", padding: 10, borderRadius:10 }}
                  placeholder="Phone Number"
              />
            </Box>
            <Box>
              <Text style={{color:"black", fontSize:18}}>Password</Text>
              <TextInput
                style={{ height: 40, backgroundColor:"#B9B3B3", padding: 10, borderRadius:10 }}
                  placeholder="Minimum 6 characters"
                  secureTextEntry={true}
              />
            </Box>
          </Box>
        ):(
          <Box style={{margin:18}}>
            <Text>Enter a valid E-Mail Id and password to login to your account</Text>
            <Box style={{marginBottom:25, marginTop:40}}>
              <Text style={{color:"black", fontSize:18}}>E-Mail</Text>
              <TextInput
                style={{ height: 40, backgroundColor:"#B9B3B3", padding: 10, borderRadius:10 }}
                  placeholder="Phone Number"
              />
            </Box>
            <Box>
              <Text style={{color:"black", fontSize:18}}>Password</Text>
              <TextInput
                style={{ height: 40, backgroundColor:"#B9B3B3", padding: 10, borderRadius:10 }}
                  placeholder="Minimum 6 characters"
                  secureTextEntry={true}
              />
            </Box>
          </Box>
        )}
        <Box>
          <Text style={{textAlign:"center", color:"black"}}>Forget Password?</Text>
          <Text style={{margin:18, fontSize:12}}>By Signing up, you agree to our Terms & Conditions, Privacy</Text>
        </Box>

        <Box style={{marginTop:280, marginLeft:230, backgroundColor:"#009DF5", height: 40, width: 140, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:10}}>
          <Text onPress={()=>navigation.navigate("PostScreen")} style={{color:"black", fontSize:17}}>Log In</Text>
        </Box>
    </Box>
  );
}

export default Login

const styles = StyleSheet.create({})