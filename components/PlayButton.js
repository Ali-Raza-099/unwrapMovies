import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons"

export default function PlayButton({handlePress}) {
  return (
    <Pressable onPress={()=>handlePress()} style={styles.button}>
      <Icon name="play-outline" size={40} color={'#fff'}></Icon>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#4481fC",
        alignContent: "center",
        borderRadius: 50,
        width: 60,
        padding: 10
    }
})