import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute, Route } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import HeaderButton from "../components/UI/HeaderButton";
import ProductsOverviewScreen from "../screens/shop/ProductOverviewScreen";
import CartScreen from "../screens/shop/CartScreen";
import AuthScreen from "../screens/user/AuthScreen";

const getHeaderTitle = (route: Partial<Route<string>>) => {
  const routeName = route.name ?? "Default";

  switch (routeName) {
    case "Default":
      return "New Default";
    case "ProductDetail":
      const params: any = route.params;
      return params?.productTitle;
    case "Cart":
      return "Cart";
  }
};

const Stack = createStackNavigator();
const ProductsNavigator = (props: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.light,
      }}
    >
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={({ navigation }) => ({
          headerTitle: "Login",
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
            textAlign: "center",
          },
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={({ navigation }) => ({
          headerTitle: "All Products",
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
            textAlign: "center",
          },
          headerBackTitleVisible: false,
          gestureEnabled: false,
          headerRight: (p) => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName="ios-cart"
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              />
            </HeaderButtons>
          ),
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route, navigation }) => ({
          headerTitle: getHeaderTitle(route),
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
            textAlign: "center",
          },
          headerBackTitleStyle: {
            fontFamily: "open-sans",
          },
          headerBackTitleVisible: false,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName="ios-cart"
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              />
            </HeaderButtons>
          ),
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={({ route, navigation }) => ({
          headerTitle: getHeaderTitle(route),
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
            textAlign: "center",
          },
          headerBackTitleStyle: {
            fontFamily: "open-sans",
          },
          headerBackTitleVisible: false,
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
export default ProductsNavigator;
