import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled2 = ({
  navigation
}) => {
  return <View style={_styles.ENGSWrGO}>
      <Pressable onPress={() => navigation.navigate("Untitled3")} style={_styles.dOGYSRGY}><Text style={_styles.hyBRfOvM}>Lorem ipsum…</Text></Pressable></View>;
};

export default Untitled2;

const _styles = StyleSheet.create({
  ENGSWrGO: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  hyBRfOvM: {
    left: 133,
    top: 99,
    position: "absolute",
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  dOGYSRGY: {
    position: "unset"
  }
});