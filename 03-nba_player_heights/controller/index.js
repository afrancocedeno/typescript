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
// axios to make request
var axios_1 = require("axios");
var url = "https://mach-eight.uc.r.appspot.com/";
/**
 * getData - function that retrieves data from the url
 * @returns - array with the information of all nba players
 */
var getData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1["default"].get(url)];
            case 1:
                result = _a.sent();
                data = [result.data.values];
                return [2 /*return*/, data];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * currentHeight - function that travers all data
 *
 * @param data
 */
var currentHeight = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var referenceH, index, remainH, peerIndex, firstPlayer, secondPlayer, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                referenceH = +process.argv[2];
                index = 0;
                _a.label = 1;
            case 1:
                if (!(index < data[0].length)) return [3 /*break*/, 4];
                remainH = referenceH - data[0][index].h_in;
                return [4 /*yield*/, searchPairHeight(remainH, data)];
            case 2:
                peerIndex = _a.sent();
                if (peerIndex) {
                    firstPlayer = data[0][index].first_name + " " + data[0][index].last_name;
                    secondPlayer = data[0][peerIndex].first_name + " " + data[0][peerIndex].last_name;
                    console.log("-", firstPlayer + "\t\t" + secondPlayer);
                }
                _a.label = 3;
            case 3:
                index++;
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 6];
            case 5:
                error_2 = _a.sent();
                console.error(error_2);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
/**
 * searchPairHeight - looks for the pair player to match the height
 * @param requestH
 * @param data
 * @returns
 */
var searchPairHeight = function (requestH, data) { return __awaiter(void 0, void 0, void 0, function () {
    var index;
    return __generator(this, function (_a) {
        // traverse the data until number found
        for (index = 0; index < data[0].length; index++) {
            // match casted as number type
            if (+data[0][index].h_in === +requestH) {
                return [2 /*return*/, index];
            }
        }
        return [2 /*return*/];
    });
}); };
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, fooBar;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getData()];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, currentHeight(data)];
            case 2:
                fooBar = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
start();
