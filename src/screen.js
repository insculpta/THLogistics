import React from "react";
import { TouchableOpacity, StyleSheet,Text, Platform, Image,View, Dimensions, ScrollView,ImageBackground, FlatList, SafeAreaView } from 'react-native';
 //import { NavigationContainer } from '@react-navigation/native';
//import { FontAwesome5 } from '@expo/vector-icons'

export default class Screen extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity 
                        style = {{alignItems:"flex-start", margin:16}}
                        onPress = {this.props.navigation.openDrawer}
                    ><Text>Open</Text></TouchableOpacity>
                    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <Text style={styles.text}>{this.props.name} screen</Text>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF"
    },
    text:{
        color: "#161924",
        fontSize:20,
        fontWeight:500,
    }
});