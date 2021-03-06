/**
 * Tpay.com Technical Documentation
 *  <p class=\"changes-disclaimer\"> Demo transaction/masspayments api key: <input type=\"text\" id=\"transaction_key\" value=\"75f86137a6635df826e3efe2e66f7c9a946fdde1\" class=\"ui-form-control\"/><label for=\"transaction_key\" style=\"display: none;\" id=\"tr_api_label\">COPIED!</label><br/><br/> Demo cards api key: <input type=\"text\" id=\"cards_key\" value=\"ba9a05faa697f9b43f39b84933ff168e373c6496\" class=\"ui-form-control\"/><label for=\"cards_key\" style=\"display: none;\" id=\"cards_api_label\">COPIED!</label><br/><br/> Demo registration api key: <input type=\"text\" id=\"registration_key\" value=\"6c0f5ef6e4d6877abad7fcfb3b5de117ad8b772d\" class=\"ui-form-control\"/><label for=\"registration_key\" style=\"display: none;\" id=\"registration_api_label\">COPIED!</label><br/><br/> The terms seller and merchant are used interchangeably and they both refer to a person or a company registered at tpay.com to accept online payments. <br/> Whenever term merchant panel is used it refers to the part of tpay.com website located at <a href=\"https://secure.tpay.com/panel\" target=\"_blank\">secure.tpay.com/panel</a>. <br/><br/> For sandbox purposes use merchant demo account <br/><br/> ID - 1010, Password - demo<br/><br/>Remember that this is a shared account, so all data passed through will be publicly visible.</p>
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: pt@tpay.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SellerDataObject model module.
 * @module model/SellerDataObject
 * @version 1.2.0
 */
class SellerDataObject {
    /**
     * Constructs a new <code>SellerDataObject</code>.
     * @alias module:model/SellerDataObject
     */
    constructor() { 
        
        SellerDataObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SellerDataObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SellerDataObject} obj Optional instance to populate.
     * @return {module:model/SellerDataObject} The populated <code>SellerDataObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SellerDataObject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('confirmationCode')) {
                obj['confirmationCode'] = ApiClient.convertToType(data['confirmationCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Merchant Identifier
 * @member {Number} id
 */
SellerDataObject.prototype['id'] = undefined;

/**
 * Merchant's company name
 * @member {String} name
 */
SellerDataObject.prototype['name'] = undefined;

/**
 * Merchant's security code which is required for calculate md5sum during creating transaction
 * @member {String} confirmationCode
 */
SellerDataObject.prototype['confirmationCode'] = undefined;






export default SellerDataObject;

