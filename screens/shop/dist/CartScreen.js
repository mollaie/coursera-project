"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var CartItem_1 = require("../../components/CartItem");
var Colors_1 = require("../../constants/Colors");
var CartAction = require("../../store/actions/cart");
var CartScreen = function (props) {
    var cartTotsalAmount = react_redux_1.useSelector(function (state) { return state.cart.totalAmount; });
    var cartItems = react_redux_1.useSelector(function (state) { return state.cart.items; });
    var dispatch = react_redux_1.useDispatch();
    return (react_1["default"].createElement(react_native_1.View, { style: styles.screen },
        react_1["default"].createElement(react_native_1.View, { style: styles.summary },
            react_1["default"].createElement(react_native_1.Text, { style: styles.summaryText },
                "Total :",
                " ",
                react_1["default"].createElement(react_native_1.Text, { style: styles.amount },
                    "$",
                    cartTotsalAmount.toFixed(2))),
            react_1["default"].createElement(react_native_1.Button, { color: Colors_1["default"].accent, title: "Order Now", disabled: cartItems.length > 0 ? false : true, onPress: function () { } })),
        react_1["default"].createElement(react_native_1.FlatList, { data: cartItems, keyExtractor: function (item) { return item.productId; }, renderItem: function (itemData) { return (react_1["default"].createElement(CartItem_1["default"], { quantity: itemData.item.quantity, productTitle: itemData.item.productTitle, sum: itemData.item.sum, onRemove: function () {
                    dispatch(CartAction.removeFromCart(itemData.item.productId));
                } })); } })));
};
var styles = react_native_1.StyleSheet.create({
    screen: {
        margin: 20
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
        backgroundColor: "white"
    },
    summaryText: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
        color: Colors_1["default"].primary
    },
    amount: {}
});
exports["default"] = CartScreen;
