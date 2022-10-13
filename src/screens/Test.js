import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from "react-native-image-picker"
import { TouchableOpacity } from 'react-native-gesture-handler'

const test = () => {

    //const [image, setImage] = useState({uri:""})
    const [image, setImage] = useState("")
    let uri = "file:///data/user/0/com.friendozz/cache/rn_image_picker_lib_temp_dade7f38-fef8-45f9-8acb-c5b2ca83a811.jpg"
    
    const openImage = () => {
        ImagePicker.launchImageLibrary({mediaType:'photo'}, (resp)=>{
            if(resp.didCancel){
                console.log("User Cancelled")
            }
            
            // let source = {
            //     uri:resp.uri
            // }
            //console.log(resp)
            setImage(resp.assets[0].uri)
        })
    }
    console.log(image)
  return (
    <View w={"100%"} h={"100%"} style={{display:"flex", justifyContent: 'center', backgroundColor:"pink"}}>
        <TouchableOpacity>
            <Text onPress={()=>openImage()} style={{textAlign:"center", fontSize:30}}>Upload Image</Text>
        </TouchableOpacity>
        {image!==""&&
            <View>
                <Image source={{"uri":uri}} style={{width:100, height:100}}/>
                <Text>i'm image</Text>
            </View>
        } 
    </View>
  )
  
}

export default test

const styles = StyleSheet.create({})