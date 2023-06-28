import { useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors"
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

export default function PlaceForm(){
    const[enteredText, setEnteredText] = useState()

    function onChangeTextHandler(enteredText){
        setEnteredText(enteredText)
    }

return(
    <ScrollView style = { styles.form}>
    <View>
    <Text style = { styles.label}>Title</Text>
    <TextInput  style = { styles.input}
    onChangeText={onChangeTextHandler} value={ enteredText}/>
    <ImagePicker  />
    <LocationPicker />
    </View>
</ScrollView>
)
}

const styles = StyleSheet.create({
    form:{
        flex:1,
        padding:24
    },
    label:{
        fontWeight:'bold',
        marginBottom:16,
        color:Colors.primary500
    },
    input:{
        marginVertical: 8,
        paddingHorizontal:4,
        paddingVertical: 8,
        fontSize:16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth:2,
        backgroundColor: Colors.primary100
    }
})