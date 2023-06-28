import { View, StyleSheet, Alert } from "react-native"
import OutlinedButton from "../ui/OutlinedButton"
import { Colors } from "../../constants/colors"
import { getCurrentPositionAsync , useForegroundPermissions, PermissionStatus} from "expo-location"

export default function LocationPicker(){
    const[locationPermissionInformation, requestPermission ] = useForegroundPermissions();

    async function verifyPermission(){
        if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();
    
            return permissionResponse.granted
        }
    
        if(locationPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert("Insufficient Permission", 'You need to grant access to location to use this app')
    
            return false
        }
    
        return true
        }

   async function locationHandler(){
    const hasPermission = await verifyPermission();

    if(!hasPermission){
        return;
    }

    const currentLocation = await getCurrentPositionAsync();
    console.log(currentLocation)
   }

    function mapHandler(){}
    return(
<View>
    <View style={ styles.mapPreview}></View>
    <View style = { styles.action}>
        <OutlinedButton icon='location' onPress={locationHandler}>Locate User</OutlinedButton>
        <OutlinedButton icon='map' onPress={mapHandler}>Pick on Map</OutlinedButton>
    </View>
</View>
    )
}

const styles = StyleSheet.create({
    action:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    mapPreview:{
        width:'100%',
        height: 200,
        marginVertical: 8,
        backgroundColor: Colors.primary100,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    }

})