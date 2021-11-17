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
 * The BranchObject model module.
 * @module model/BranchObject
 * @version 1.2.0
 */
class BranchObject {
    /**
     * Constructs a new <code>BranchObject</code>.
     * @alias module:model/BranchObject
     */
    constructor() { 
        
        BranchObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BranchObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchObject} obj Optional instance to populate.
     * @return {module:model/BranchObject} The populated <code>BranchObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchObject();

            if (data.hasOwnProperty('b_id')) {
                obj['b_id'] = ApiClient.convertToType(data['b_id'], 'Number');
            }
            if (data.hasOwnProperty('b_name')) {
                obj['b_name'] = ApiClient.convertToType(data['b_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Branche - identifier
 * @member {Number} b_id
 */
BranchObject.prototype['b_id'] = undefined;

/**
 * Branche - full name
 * @member {String} b_name
 */
BranchObject.prototype['b_name'] = undefined;






export default BranchObject;

