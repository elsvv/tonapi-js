"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftItemCollectionToJSON = exports.NftItemCollectionFromJSONTyped = exports.NftItemCollectionFromJSON = exports.instanceOfNftItemCollection = void 0;
/**
 * Check if a given object implements the NftItemCollection interface.
 */
function instanceOfNftItemCollection(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfNftItemCollection = instanceOfNftItemCollection;
function NftItemCollectionFromJSON(json) {
    return NftItemCollectionFromJSONTyped(json, false);
}
exports.NftItemCollectionFromJSON = NftItemCollectionFromJSON;
function NftItemCollectionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'name': json['name'],
    };
}
exports.NftItemCollectionFromJSONTyped = NftItemCollectionFromJSONTyped;
function NftItemCollectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'name': value.name,
    };
}
exports.NftItemCollectionToJSON = NftItemCollectionToJSON;