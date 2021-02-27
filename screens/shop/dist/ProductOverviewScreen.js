"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var ProductItem_1 = require("../../components/ProductItem");
var Colors_1 = require("../../constants/Colors");
var cartActions = require("../../store/actions/cart");
var productsActions = require("../../store/actions/products");
var ProductsOverviewScreen = function (props) {
    var _a = react_1.useState(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = react_1.useState(false), isRefreshing = _b[0], setIsRefreshing = _b[1];
    var _c = react_1.useState(""), error = _c[0], setError = _c[1];
    var products = react_redux_1.useSelector(function (state) { return state.products.availableProducts; });
    var dispatch = react_redux_1.useDispatch();
    var loadProducts = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setError("");
                    setIsRefreshing(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, dispatch(productsActions.fetchProducts())];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    setError(err_1.message);
                    return [3 /*break*/, 4];
                case 4:
                    setIsRefreshing(false);
                    return [2 /*return*/];
            }
        });
    }); }, [dispatch, setIsLoading, setError]);
    react_1.useEffect(function () {
        var willFocusSub = props.navigation.addListener("willFocus", loadProducts);
        return function () {
            props.navigation.removeListener("willFocus", willFocusSub);
        };
    }, [loadProducts]);
    react_1.useEffect(function () {
        setIsLoading(true);
        loadProducts().then(function () {
            setIsLoading(false);
        });
    }, [dispatch, loadProducts]);
    var selectItemHandler = function (id, title) {
        props.navigation.navigate("ProductDetail", {
            productId: id,
            productTitle: title
        });
    };
    if (error.length > 0) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles.centered },
            react_1["default"].createElement(react_native_1.Text, null, "An error occurred!"),
            react_1["default"].createElement(react_native_1.Button, { title: "Try again", onPress: loadProducts, color: Colors_1["default"].primary })));
    }
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles.centered },
            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: Colors_1["default"].primary })));
    }
    if (!isLoading && products.length === 0) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles.centered },
            react_1["default"].createElement(react_native_1.Text, null, "No products found. Maybe start adding some!")));
    }
    return (react_1["default"].createElement(react_native_1.FlatList, { data: products, keyExtractor: function (item) { return item.id; }, renderItem: function (itemData) {
            var _a, _b, _c;
            return (
            // />
            react_1["default"].createElement(ProductItem_1["default"], { image: (_a = itemData === null || itemData === void 0 ? void 0 : itemData.item) === null || _a === void 0 ? void 0 : _a.imageUrl, title: (_b = itemData === null || itemData === void 0 ? void 0 : itemData.item) === null || _b === void 0 ? void 0 : _b.title, price: (_c = itemData === null || itemData === void 0 ? void 0 : itemData.item) === null || _c === void 0 ? void 0 : _c.price, onSelect: function () {
                    var _a, _b;
                    selectItemHandler((_a = itemData === null || itemData === void 0 ? void 0 : itemData.item) === null || _a === void 0 ? void 0 : _a.id, (_b = itemData === null || itemData === void 0 ? void 0 : itemData.item) === null || _b === void 0 ? void 0 : _b.title);
                } },
                react_1["default"].createElement(react_native_1.Button, { color: Colors_1["default"].primary, title: "View Details", onPress: function () {
                        var _a, _b;
                        selectItemHandler((_a = itemData === null || itemData === void 0 ? void 0 : itemData.item) === null || _a === void 0 ? void 0 : _a.id, (_b = itemData === null || itemData === void 0 ? void 0 : itemData.item) === null || _b === void 0 ? void 0 : _b.title);
                    } }),
                react_1["default"].createElement(react_native_1.Button, { color: Colors_1["default"].primary, title: "To Cart", onPress: function () {
                        dispatch(cartActions.addToCart(itemData === null || itemData === void 0 ? void 0 : itemData.item));
                    } })));
        } }));
};
var styles = react_native_1.StyleSheet.create({
    centered: { flex: 1, justifyContent: "center", alignItems: "center" }
});
exports["default"] = ProductsOverviewScreen;
