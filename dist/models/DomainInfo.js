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
exports.DomainInfoToJSON = exports.DomainInfoFromJSONTyped = exports.DomainInfoFromJSON = void 0;
const runtime_1 = require("../runtime");
const DomainInfoNftItem_1 = require("./DomainInfoNftItem");
function DomainInfoFromJSON(json) {
    return DomainInfoFromJSONTyped(json, false);
}
exports.DomainInfoFromJSON = DomainInfoFromJSON;
function DomainInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nftItem': !(0, runtime_1.exists)(json, 'nft_item') ? undefined : (0, DomainInfoNftItem_1.DomainInfoNftItemFromJSON)(json['nft_item']),
        'expiration': json['expiration'],
    };
}
exports.DomainInfoFromJSONTyped = DomainInfoFromJSONTyped;
function DomainInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nft_item': (0, DomainInfoNftItem_1.DomainInfoNftItemToJSON)(value.nftItem),
        'expiration': value.expiration,
    };
}
exports.DomainInfoToJSON = DomainInfoToJSON;