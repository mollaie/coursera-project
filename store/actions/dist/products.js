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
exports.updateProduct = exports.createProduct = exports.deleteProduct = exports.fetchProducts = exports.SET_PRODUCTS = exports.UPDATE_PRODUCT = exports.CREATE_PRODUCT = exports.DELETE_PRODUCT = void 0;
var firebaseConfig_1 = require("../../config/firebaseConfig");
var product_1 = require("../../models/product");
exports.DELETE_PRODUCT = "DELETE_PRODUCT";
exports.CREATE_PRODUCT = "CREATE_PRODUCT";
exports.UPDATE_PRODUCT = "UPDATE_PRODUCT";
exports.SET_PRODUCTS = "SET_PRODUCTS";
exports.fetchProducts = function () {
    return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
        var userId, response, resData, loadedProducts, key, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = getState().auth.userId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://coursera-shop-default-rtdb.firebaseio.com/Products.json")];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Something went wrong!");
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    resData = _a.sent();
                    loadedProducts = [];
                    for (key in resData) {
                        loadedProducts.push(new product_1.Product(key, resData[key].ownerId, resData[key].title, resData[key].imageUrl, resData[key].description, resData[key].price));
                    }
                    dispatch({
                        type: exports.SET_PRODUCTS,
                        products: loadedProducts,
                        userProducts: loadedProducts.filter(function (prod) { return prod.ownerId === userId; })
                    });
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.log("error", err_1);
                    // send to custom analytics server
                    throw err_1;
                case 5: return [2 /*return*/];
            }
        });
    }); };
};
exports.deleteProduct = function (productId) {
    return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
        var token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = getState().auth.token;
                    return [4 /*yield*/, fetch(firebaseConfig_1.firebaseConfig.databaseURL + "/products/" + productId + ".json?auth=" + token, {
                            method: "DELETE"
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Something went wrong!");
                    }
                    dispatch({ type: exports.DELETE_PRODUCT, pid: productId });
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.createProduct = function (title, description, imageUrl, price) {
    return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
        var token, userId, response, resData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = getState().auth.token;
                    userId = getState().auth.userId;
                    return [4 /*yield*/, fetch(firebaseConfig_1.firebaseConfig.databaseURL + "/products.json?auth=" + token, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                title: title,
                                description: description,
                                imageUrl: imageUrl,
                                price: price,
                                ownerId: userId
                            })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    resData = _a.sent();
                    dispatch({
                        type: exports.CREATE_PRODUCT,
                        productData: {
                            id: resData.name,
                            title: title,
                            description: description,
                            imageUrl: imageUrl,
                            price: price,
                            ownerId: userId
                        }
                    });
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.updateProduct = function (id, title, description, imageUrl) {
    return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
        var token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = getState().auth.token;
                    return [4 /*yield*/, fetch(firebaseConfig_1.firebaseConfig.databaseURL + "/products/" + id + ".json?auth=" + token, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                title: title,
                                description: description,
                                imageUrl: imageUrl
                            })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Something went wrong!");
                    }
                    dispatch({
                        type: exports.UPDATE_PRODUCT,
                        pid: id,
                        productData: {
                            title: title,
                            description: description,
                            imageUrl: imageUrl
                        }
                    });
                    return [2 /*return*/];
            }
        });
    }); };
};
