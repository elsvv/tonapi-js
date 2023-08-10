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
import type { GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBack } from './GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBack';
import type { GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward } from './GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward';
/**
 *
 * @export
 * @interface GetRawBlockProof200ResponseStepsInner
 */
export interface GetRawBlockProof200ResponseStepsInner {
    /**
     *
     * @type {GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBack}
     * @memberof GetRawBlockProof200ResponseStepsInner
     */
    liteServerBlockLinkBack: GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBack;
    /**
     *
     * @type {GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward}
     * @memberof GetRawBlockProof200ResponseStepsInner
     */
    liteServerBlockLinkForward: GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward;
}
/**
 * Check if a given object implements the GetRawBlockProof200ResponseStepsInner interface.
 */
export declare function instanceOfGetRawBlockProof200ResponseStepsInner(value: object): boolean;
export declare function GetRawBlockProof200ResponseStepsInnerFromJSON(json: any): GetRawBlockProof200ResponseStepsInner;
export declare function GetRawBlockProof200ResponseStepsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawBlockProof200ResponseStepsInner;
export declare function GetRawBlockProof200ResponseStepsInnerToJSON(value?: GetRawBlockProof200ResponseStepsInner | null): any;