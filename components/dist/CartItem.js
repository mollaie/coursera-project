"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var Colors_1 = require("../constants/Colors");
var CartItem = function (props) {
    return (react_1["default"].createElement(react_native_1.View, { style: styles.cardItem },
        react_1["default"].createElement(react_native_1.Text, { style: styles.itemData },
            react_1["default"].createElement(react_native_1.Text, { style: styles.mainText },
                props.quantity,
                " "),
            react_1["default"].createElement(react_native_1.Text, { style: styles.mainText }, props.productTitle)),
        react_1["default"].createElement(react_native_1.View, { style: styles.itemData },
            react_1["default"].createElement(react_native_1.Text, { style: styles.mainText },
                "$",
                props.sum.toFixed(2)),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: props.onRemove, style: styles.deleteButton },
                react_1["default"].createElement(vector_icons_1.Ionicons, { name: "ios-trash", size: 23, color: "red" })))));
};
var styles = react_native_1.StyleSheet.create({
    cardItem: {
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8,
        borderRadius: 10,
        backgroundColor: Colors_1["default"].light
    },
    itemData: {
        flexDirection: "row",
        alignItems: "center"
    },
    mainText: {
        fontFamily: "open-sans-bold",
        color: "#888",
        fontSize: 16,
        marginLeft: 20
    },
    deleteButton: {
        marginLeft: 20
    }
});
exports["default"] = CartItem;
