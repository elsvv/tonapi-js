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
exports.GetRawShardBlockProof200ResponseLinksInnerToJSON = exports.GetRawShardBlockProof200ResponseLinksInnerFromJSONTyped = exports.GetRawShardBlockProof200ResponseLinksInnerFromJSON = exports.instanceOfGetRawShardBlockProof200ResponseLinksInner = void 0;
const BlockRaw_1 = require("./BlockRaw");
/**
 * Check if a given object implements the GetRawShardBlockProof200ResponseLinksInner interface.
 */
function instanceOfGetRawShardBlockProof200ResponseLinksInner(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "proof" in value;
    return isInstance;
}
exports.instanceOfGetRawShardBlockProof200ResponseLinksInner = instanceOfGetRawShardBlockProof200ResponseLinksInner;
function GetRawShardBlockProof200ResponseLinksInnerFromJSON(json) {
    return GetRawShardBlockProof200ResponseLinksInnerFromJSONTyped(json, false);
}
exports.GetRawShardBlockProof200ResponseLinksInnerFromJSON = GetRawShardBlockProof200ResponseLinksInnerFromJSON;
function GetRawShardBlockProof200ResponseLinksInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': (0, BlockRaw_1.BlockRawFromJSON)(json['id']),
        'proof': json['proof'],
    };
}
exports.GetRawShardBlockProof200ResponseLinksInnerFromJSONTyped = GetRawShardBlockProof200ResponseLinksInnerFromJSONTyped;
function GetRawShardBlockProof200ResponseLinksInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': (0, BlockRaw_1.BlockRawToJSON)(value.id),
        'proof': value.proof,
    };
}
exports.GetRawShardBlockProof200ResponseLinksInnerToJSON = GetRawShardBlockProof200ResponseLinksInnerToJSON;