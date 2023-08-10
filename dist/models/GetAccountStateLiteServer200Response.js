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
exports.GetAccountStateLiteServer200ResponseToJSON = exports.GetAccountStateLiteServer200ResponseFromJSONTyped = exports.GetAccountStateLiteServer200ResponseFromJSON = exports.instanceOfGetAccountStateLiteServer200Response = void 0;
const BlockRaw_1 = require("./BlockRaw");
/**
 * Check if a given object implements the GetAccountStateLiteServer200Response interface.
 */
function instanceOfGetAccountStateLiteServer200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "shardblk" in value;
    isInstance = isInstance && "shardProof" in value;
    isInstance = isInstance && "proof" in value;
    isInstance = isInstance && "state" in value;
    return isInstance;
}
exports.instanceOfGetAccountStateLiteServer200Response = instanceOfGetAccountStateLiteServer200Response;
function GetAccountStateLiteServer200ResponseFromJSON(json) {
    return GetAccountStateLiteServer200ResponseFromJSONTyped(json, false);
}
exports.GetAccountStateLiteServer200ResponseFromJSON = GetAccountStateLiteServer200ResponseFromJSON;
function GetAccountStateLiteServer200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': (0, BlockRaw_1.BlockRawFromJSON)(json['id']),
        'shardblk': (0, BlockRaw_1.BlockRawFromJSON)(json['shardblk']),
        'shardProof': json['shard_proof'],
        'proof': json['proof'],
        'state': json['state'],
    };
}
exports.GetAccountStateLiteServer200ResponseFromJSONTyped = GetAccountStateLiteServer200ResponseFromJSONTyped;
function GetAccountStateLiteServer200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': (0, BlockRaw_1.BlockRawToJSON)(value.id),
        'shardblk': (0, BlockRaw_1.BlockRawToJSON)(value.shardblk),
        'shard_proof': value.shardProof,
        'proof': value.proof,
        'state': value.state,
    };
}
exports.GetAccountStateLiteServer200ResponseToJSON = GetAccountStateLiteServer200ResponseToJSON;