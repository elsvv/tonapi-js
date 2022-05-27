"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsToJSON = exports.TransactionsFromJSONTyped = exports.TransactionsFromJSON = void 0;
const Transaction_1 = require("./Transaction");
function TransactionsFromJSON(json) {
    return TransactionsFromJSONTyped(json, false);
}
exports.TransactionsFromJSON = TransactionsFromJSON;
function TransactionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactions': (json['transactions'].map(Transaction_1.TransactionFromJSON)),
    };
}
exports.TransactionsFromJSONTyped = TransactionsFromJSONTyped;
function TransactionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactions': (value.transactions.map(Transaction_1.TransactionToJSON)),
    };
}
exports.TransactionsToJSON = TransactionsToJSON;