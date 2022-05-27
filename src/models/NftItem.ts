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

import { exists, mapValues } from '../runtime';
import {
    AccountAddress,
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';

/**
 * 
 * @export
 * @interface NftItem
 */
export interface NftItem {
    /**
     * 
     * @type {string}
     * @memberof NftItem
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof NftItem
     */
    collectionAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof NftItem
     */
    index: number;
    /**
     * 
     * @type {boolean}
     * @memberof NftItem
     */
    init: boolean;
    /**
     * 
     * @type {any}
     * @memberof NftItem
     */
    metadata?: any | null;
    /**
     * 
     * @type {AccountAddress}
     * @memberof NftItem
     */
    owner?: AccountAddress;
    /**
     * 
     * @type {string}
     * @memberof NftItem
     */
    rawIndividualContent: string;
    /**
     * 
     * @type {boolean}
     * @memberof NftItem
     */
    verified: boolean;
}

export function NftItemFromJSON(json: any): NftItem {
    return NftItemFromJSONTyped(json, false);
}

export function NftItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'collectionAddress': !exists(json, 'collection_address') ? undefined : json['collection_address'],
        'index': json['index'],
        'init': json['init'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'owner': !exists(json, 'owner') ? undefined : AccountAddressFromJSON(json['owner']),
        'rawIndividualContent': json['raw_individual_content'],
        'verified': json['verified'],
    };
}

export function NftItemToJSON(value?: NftItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'collection_address': value.collectionAddress,
        'index': value.index,
        'init': value.init,
        'metadata': value.metadata,
        'owner': AccountAddressToJSON(value.owner),
        'raw_individual_content': value.rawIndividualContent,
        'verified': value.verified,
    };
}
