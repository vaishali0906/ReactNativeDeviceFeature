import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Icons({icon, size, color, onPress}){
    return (
        <Pressable 
        onPress={onPress}
        style = {({pressed}) => [styles.container, pressed && styles.pressed]}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:'center',
        
        padding:8
    },
    pressed:{
        opacity:0.7
    }
})
