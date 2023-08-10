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
exports.GetStateLiteServer200ResponseToJSON = exports.GetStateLiteServer200ResponseFromJSONTyped = exports.GetStateLiteServer200ResponseFromJSON = exports.instanceOfGetStateLiteServer200Response = void 0;
const BlockRaw_1 = require("./BlockRaw");
/**
 * Check if a given object implements the GetStateLiteServer200Response interface.
 */
function instanceOfGetStateLiteServer200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "rootHash" in value;
    isInstance = isInstance && "fileHash" in value;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfGetStateLiteServer200Response = instanceOfGetStateLiteServer200Response;
function GetStateLiteServer200ResponseFromJSON(json) {
    return GetStateLiteServer200ResponseFromJSONTyped(json, false);
}
exports.GetStateLiteServer200ResponseFromJSON = GetStateLiteServer200ResponseFromJSON;
function GetStateLiteServer200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': (0, BlockRaw_1.BlockRawFromJSON)(json['id']),
        'rootHash': json['root_hash'],
        'fileHash': json['file_hash'],
        'data': json['data'],
    };
}
exports.GetStateLiteServer200ResponseFromJSONTyped = GetStateLiteServer200ResponseFromJSONTyped;
function GetStateLiteServer200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': (0, BlockRaw_1.BlockRawToJSON)(value.id),
        'root_hash': value.rootHash,
        'file_hash': value.fileHash,
        'data': value.data,
    };
}
exports.GetStateLiteServer200ResponseToJSON = GetStateLiteServer200ResponseToJSON;