import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import Colors from "../../constants/Colors";
import * as CartAction from "../../store/actions/cart";
const CartScreen = (props: any) => {
  const cartTotsalAmount = useSelector((state: any) => state.cart.totalAmount);
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total :{" "}
          <Text style={styles.amount}>${cartTotsalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems.length > 0 ? false : true}
          onPress={() => {}}
        />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            productTitle={itemData.item.productTitle}
            sum={itemData.item.sum}
            onRemove={() => {
              dispatch(CartAction.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: Colors.primary,
  },
  amount: {},
});

export default CartScreen;
