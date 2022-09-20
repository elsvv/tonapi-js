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
import * as runtime from '../runtime';
import { Auctions } from '../models';
/**
 * AuctionsApi - interface
 *
 * @export
 * @interface AuctionsApiInterface
 */
export interface AuctionsApiInterface {
    /**
     * Get all auctions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuctionsApiInterface
     */
    getAllAuctionsRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Auctions>>;
    /**
     * Get all auctions
     */
    getAllAuctions(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Auctions>;
}
/**
 *
 */
export declare class AuctionsApi extends runtime.BaseAPI implements AuctionsApiInterface {
    /**
     * Get all auctions
     */
    getAllAuctionsRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Auctions>>;
    /**
     * Get all auctions
     */
    getAllAuctions(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Auctions>;
}