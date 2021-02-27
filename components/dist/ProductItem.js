"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Card_1 = require("./UI/Card");
var ProductItem = function (props) {
    return (react_1["default"].createElement(Card_1["default"], { style: styles.product },
        react_1["default"].createElement(react_native_1.View, { style: styles.touchable },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: props.onSelect },
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.View, { style: styles.imageContainer },
                        react_1["default"].createElement(react_native_1.Image, { style: styles.image, source: { uri: props === null || props === void 0 ? void 0 : props.image } })),
                    react_1["default"].createElement(react_native_1.View, { style: styles.details },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.title }, props === null || props === void 0 ? void 0 : props.title),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.price },
                            "$", props === null || props === void 0 ? void 0 :
                            props.price)),
                    react_1["default"].createElement(react_native_1.View, { style: styles.actions }, props.children))))));
};
var styles = react_native_1.StyleSheet.create({
    product: {
        height: 300,
        margin: 20
    },
    touchable: {
        borderRadius: 10,
        overflow: "hidden"
    },
    imageContainer: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    details: {
        alignItems: "center",
        height: "17%",
        padding: 10
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
        marginVertical: 2
    },
    price: {
        fontFamily: "open-sans",
        fontSize: 14,
        color: "#888"
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "23%",
        paddingHorizontal: 20
    }
});
exports["default"] = ProductItem;
