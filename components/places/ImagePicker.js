import { View,Text, Image, StyleSheet } from "react-native";
import { PermissionStatus, launchCameraAsync } from "expo-image-picker";
import { useCameraPermissions } from "expo-image-picker";
import { Alert } from "react-native";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

export default function ImagePicker(){
    const[pickedImage, setPickedImage] = useState();

    //Code only for IOS
    const[cameraPermissionInformation, requestPermission] = useCameraPermissions();

     //Code only for IOS
   async function verifyPermission(){
    if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
        const permissionResponse = await requestPermission();

        return permissionResponse.granted
    }

    if(cameraPermissionInformation.status === PermissionStatus.DENIED){
        Alert.alert("Insufficient Permission", 'You need to grant access to camera to use this app')

        return false
    }

    return true
    }

    async function onButtonClick(){
        const hasPermission = verifyPermission()
         //Code only for IOS
         if(!hasPermission){
            return
         }
      const captureImage = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16,9],
        quality:0.5
      })
      setPickedImage(captureImage.uri)
    }

    let imagePreview = <Text>No image taken yet!!</Text>

    if(pickedImage){
      imagePreview =  <Image  style= {styles.image} source={{ uri : pickedImage}} />
    }

    return(
        <View>
            <View style = { styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlinedButton icon='camera' onPress={onButtonClick}>Take Image</OutlinedButton>
        </View>
    )

}

const styles = StyleSheet.create({
    imagePreview:{
        width:'100%',
        height: 200,
        marginVertical: 8,
        backgroundColor: Colors.primary100,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:'100%'
    }
})