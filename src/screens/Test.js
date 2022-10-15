import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { Box } from '@react-native-material/core'
import React, { useState } from 'react'
import * as ImagePicker from "react-native-image-picker"
import { TouchableOpacity } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage'
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const test = () => {

    //const [image, setImage] = useState({uri:""})
    const [image, setImage] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [hide, setHide] = useState(false)
    let uri = "file:///data/user/0/com.friendozz/cache/rn_image_picker_lib_temp_dade7f38-fef8-45f9-8acb-c5b2ca83a811.jpg"
    

    const openImage = () => {
        ImagePicker.launchImageLibrary({mediaType:'photo'}, async(resp)=>{
            if(resp.didCancel){
                console.log("User Cancelled")
            }
            
            // let source = {
            //     uri:resp.uri
            // }
            //console.log(resp)
            setImage(resp.assets[0].uri)
            const imageRef = storage().ref(`${"images"}/${"test.png"}`)
            await imageRef.putFile(image, { contentType: 'image/jpg'}).catch((error) => { throw error })
            const url = await imageRef.getDownloadURL().catch((error) => { throw error });
            setImageUrl(url)
        })
    }
    console.log(image)

    const uploadImage = async() => {
        const imageRef = storage().ref(`${"images"}/${"test.png"}`)
        await imageRef.putFile(image, { contentType: 'image/jpg'}).catch((error) => { throw error })
        const url = await imageRef.getDownloadURL().catch((error) => { throw error });
        setImageUrl(url)
    }

    const handleGoogleSignIn = () => {
        GoogleSignin.configure({androidClientId:"575088401064-tg0qo7r5l3g16mbl3grppt9b13g5b11o.apps.googleusercontent.com", webClientId:"575088401064-thesf1mi4s67mvd2vf856geo25341hfn.apps.googleusercontent.com"})
        GoogleSignin.hasPlayServices().then((response)=>{
            if(response){
                GoogleSignin.signIn().then((userInfo)=>{
                    console.log(JSON.stringify(userInfo))
                }).catch((e)=>{
                    console.log(JSON.stringify(e))
                })
            }
        })
    }
  return (
    <Box w={"100%"} h={"100%"} style={{display:"flex", justifyContent: 'space-between'}}>
        <TouchableOpacity>
            <Text onPress={()=>openImage()} style={{textAlign:"center", fontSize:30}}>Upload Image</Text>
        </TouchableOpacity>
            <View>
                <Image source={{"uri":"https://firebasestorage.googleapis.com/v0/b/friendozz.appspot.com/o/images%2Ftest.png?alt=media&token=95119999-e8d5-48a9-9f93-a6580ed7886f"}} style={{width:100, height:100}}/>
                <Text onPress={()=>setHide(false)} style={{fontSize:30}}>Upload Image</Text>
            </View>
        
        <Box  w={"100%"} style={{transform: hide?[{ translateY:350 }]:[{ translateY:0 }], height:350, backgroundColor:"pink"}}>
            <Text onPress={()=>setHide(true)} style={{fontSize:30}}>Post</Text>
        </Box>

        <Button title='GoogleSignIn' onPress={()=>handleGoogleSignIn()}/>
    
    </Box>
  )
  
}

export default test

const styles = StyleSheet.create({})