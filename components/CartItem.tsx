import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CartItem = (props: any) => {
  return (
    <View style={styles.cardItem}>
      <Text style={styles.itemData}>
        <Text style={styles.mainText}>{props.quantity} </Text>
        <Text style={styles.mainText}>{props.productTitle}</Text>
      </Text>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${props.sum.toFixed(2)}</Text>
        <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
          <Ionicons name="ios-trash" size={23} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: Colors.light,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainText: {
    fontFamily: "open-sans-bold",
    color: "#888",
    fontSize: 16,
    marginLeft: 20,
  },

  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;
