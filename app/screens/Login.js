import React  from "react";
import { View,Text } from "react-native";
import CustomButton from "../config/Components/CustomButton";
import AppTextInput from "../config/Components/AppTextInput"
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";



export default function Login()
{
  const navigation = useNavigation();

    return(
        <View style={{ marginTop:100 , margin:5}}> 
        <AppTextInput />
        <AppTextInput iconName={"form-textbox-password"}/>
        <CustomButton title="Login" onPress ={()=> navigation.navigate("Listings")}/>
        </View>
    )

}