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
import BlikAlias from './BlikAlias';

/**
 * The BlikFields model module.
 * @module model/BlikFields
 * @version 1.2.0
 */
class BlikFields {
    /**
     * Constructs a new <code>BlikFields</code>.
     * @alias module:model/BlikFields
     * @param title {String} Transaction title
     * @param apiPassword {String} API password.
     */
    constructor(title, apiPassword) { 
        
        BlikFields.initialize(this, title, apiPassword);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, apiPassword) { 
        obj['title'] = title;
        obj['api_password'] = apiPassword;
    }

    /**
     * Constructs a <code>BlikFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlikFields} obj Optional instance to populate.
     * @return {module:model/BlikFields} The populated <code>BlikFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlikFields();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('api_password')) {
                obj['api_password'] = ApiClient.convertToType(data['api_password'], 'String');
            }
            if (data.hasOwnProperty('alias')) {
                obj['alias'] = ApiClient.convertToType(data['alias'], [BlikAlias]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Transaction title
 * @member {String} title
 */
BlikFields.prototype['title'] = undefined;

/**
 * 6 digit code generated in customer bank mobile app (required if customer does not have registered alias or when customer does not want to pay by regietered device). BLIK code contains only digits but can start with zero or multiple zeroes, so you must not cast this variable to int.
 * @member {String} code
 */
BlikFields.prototype['code'] = undefined;

/**
 * API password.
 * @member {String} api_password
 */
BlikFields.prototype['api_password'] = undefined;

/**
 * Mandatory field when creating oneClick transactions, optional for standart Blik transactions with 6 digit code. In case of alias registration attempt you can send only 1 alias per 1 request.
 * @member {Array.<module:model/BlikAlias>} alias
 */
BlikFields.prototype['alias'] = undefined;

/**
 * Transaction type. 0 - WEB mode (default value). 1 - POS mode dedicated for payment terminals
 * @member {Number} type
 */
BlikFields.prototype['type'] = undefined;






export default BlikFields;

