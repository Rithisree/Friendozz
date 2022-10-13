import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from "react-native-image-picker"
import { TouchableOpacity } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage'

const test = () => {

    //const [image, setImage] = useState({uri:""})
    const [image, setImage] = useState("")
    const [imageUrl, setImageUrl] = useState("")
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

    const uploadImage = async() => {
        const imageRef = storage().ref(`${"images"}/${"test.png"}`)
        await imageRef.putFile(image, { contentType: 'image/jpg'}).catch((error) => { throw error })
        const url = await imageRef.getDownloadURL().catch((error) => { throw error });
        setImageUrl(url)
    }
  return (
    <View w={"100%"} h={"100%"} style={{display:"flex", justifyContent: 'center', backgroundColor:"pink"}}>
        <TouchableOpacity>
            <Text onPress={()=>openImage()} style={{textAlign:"center", fontSize:30}}>Upload Image</Text>
        </TouchableOpacity>
            <View>
                <Image source={{"uri":"https://firebasestorage.googleapis.com/v0/b/friendozz.appspot.com/o/images%2Ftest.png?alt=media&token=95119999-e8d5-48a9-9f93-a6580ed7886f"}} style={{width:100, height:100}}/>
                <Text onPress={()=>uploadImage()} style={{fontSize:30}}>Upload Image</Text>
            </View>
    </View>
  )
  
}

export default test

const styles = StyleSheet.create({})