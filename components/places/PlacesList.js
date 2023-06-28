import { FlatList, View, Text, StyleSheet } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

export default function PlacesList({places}){
    if(!places || places.length === 0){
        return (
            <View style = { styles.fallbackCOnatiner}>
                <Text style = { styles.fallbackText}>No Places added yet - start adding some!!</Text>
            </View>
        )
    }
    
    return(
        <FlatList 
        keyExtractor = {(item) => item.id} 
        data={places}  
        renderItem ={ (item) => <PlaceItem place={item}/>}/>
    )
   
}

const styles = StyleSheet.create({
    fallbackCOnatiner:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center'  
    },
    fallbackText:{
        fontSize:16, 
        color: Colors.primary200
    }
})