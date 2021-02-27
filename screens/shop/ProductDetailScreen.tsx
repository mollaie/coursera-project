import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import { Product } from "../../models/product";
import * as cartActions from "../../store/actions/cart";
const ProductDetailScreen = (props: any) => {
  const productId = props.route.params.productId;
  const selectedProduct: Product = useSelector((state: any) =>
    state.products.availableProducts.find(
      (prod: Product) => prod.id === productId
    )
  );
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image source={{ uri: selectedProduct.imageUrl }} style={style.image} />
      <View style={style.actions}>
        <Button
          title="Add To Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
          color={Colors.primary}
        />
      </View>
      <Text style={style.price}>${selectedProduct.price}</Text>
      <Text style={style.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default ProductDetailScreen;
