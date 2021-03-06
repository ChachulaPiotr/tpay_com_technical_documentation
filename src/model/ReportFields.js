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
 * The ReportFields model module.
 * @module model/ReportFields
 * @version 1.2.0
 */
class ReportFields {
    /**
     * Constructs a new <code>ReportFields</code>.
     * @alias module:model/ReportFields
     * @param fromDate {String} start range of generated report
     * @param toDate {String} end range of generated report
     * @param apiPassword {String} API password.
     */
    constructor(fromDate, toDate, apiPassword) { 
        
        ReportFields.initialize(this, fromDate, toDate, apiPassword);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fromDate, toDate, apiPassword) { 
        obj['from_date'] = fromDate;
        obj['to_date'] = toDate;
        obj['api_password'] = apiPassword;
    }

    /**
     * Constructs a <code>ReportFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportFields} obj Optional instance to populate.
     * @return {module:model/ReportFields} The populated <code>ReportFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportFields();

            if (data.hasOwnProperty('from_date')) {
                obj['from_date'] = ApiClient.convertToType(data['from_date'], 'String');
            }
            if (data.hasOwnProperty('to_date')) {
                obj['to_date'] = ApiClient.convertToType(data['to_date'], 'String');
            }
            if (data.hasOwnProperty('api_password')) {
                obj['api_password'] = ApiClient.convertToType(data['api_password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * start range of generated report
 * @member {String} from_date
 */
ReportFields.prototype['from_date'] = undefined;

/**
 * end range of generated report
 * @member {String} to_date
 */
ReportFields.prototype['to_date'] = undefined;

/**
 * API password.
 * @member {String} api_password
 */
ReportFields.prototype['api_password'] = undefined;






export default ReportFields;

