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
import { JettonSimpleTransfer } from './JettonSimpleTransfer';
/**
 *
 * @export
 * @interface JettonHistory
 */
export interface JettonHistory {
    /**
     *
     * @type {Array<JettonSimpleTransfer>}
     * @memberof JettonHistory
     */
    history: Array<JettonSimpleTransfer>;
}
export declare function JettonHistoryFromJSON(json: any): JettonHistory;
export declare function JettonHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonHistory;
export declare function JettonHistoryToJSON(value?: JettonHistory | null): any;