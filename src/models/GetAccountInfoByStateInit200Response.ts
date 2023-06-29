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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetAccountInfoByStateInit200Response
 */
export interface GetAccountInfoByStateInit200Response {
    /**
     * 
     * @type {string}
     * @memberof GetAccountInfoByStateInit200Response
     */
    publicKey: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountInfoByStateInit200Response
     */
    address: string;
}

/**
 * Check if a given object implements the GetAccountInfoByStateInit200Response interface.
 */
export function instanceOfGetAccountInfoByStateInit200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "publicKey" in value;
    isInstance = isInstance && "address" in value;

    return isInstance;
}

export function GetAccountInfoByStateInit200ResponseFromJSON(json: any): GetAccountInfoByStateInit200Response {
    return GetAccountInfoByStateInit200ResponseFromJSONTyped(json, false);
}

export function GetAccountInfoByStateInit200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAccountInfoByStateInit200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'publicKey': json['public_key'],
        'address': json['address'],
    };
}

export function GetAccountInfoByStateInit200ResponseToJSON(value?: GetAccountInfoByStateInit200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'public_key': value.publicKey,
        'address': value.address,
    };
}
