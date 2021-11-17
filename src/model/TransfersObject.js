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
 * The TransfersObject model module.
 * @module model/TransfersObject
 * @version 1.2.0
 */
class TransfersObject {
    /**
     * Constructs a new <code>TransfersObject</code>.
     * Each transfer object represents one transfer within specific transfers pack.
     * @alias module:model/TransfersObject
     */
    constructor() { 
        
        TransfersObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransfersObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransfersObject} obj Optional instance to populate.
     * @return {module:model/TransfersObject} The populated <code>TransfersObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransfersObject();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('auth_date')) {
                obj['auth_date'] = ApiClient.convertToType(data['auth_date'], 'String');
            }
            if (data.hasOwnProperty('acc_date')) {
                obj['acc_date'] = ApiClient.convertToType(data['acc_date'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('accnum')) {
                obj['accnum'] = ApiClient.convertToType(data['accnum'], 'String');
            }
            if (data.hasOwnProperty('rcv1')) {
                obj['rcv1'] = ApiClient.convertToType(data['rcv1'], 'String');
            }
            if (data.hasOwnProperty('rcv2')) {
                obj['rcv2'] = ApiClient.convertToType(data['rcv2'], 'String');
            }
            if (data.hasOwnProperty('rcv3')) {
                obj['rcv3'] = ApiClient.convertToType(data['rcv3'], 'String');
            }
            if (data.hasOwnProperty('rcv4')) {
                obj['rcv4'] = ApiClient.convertToType(data['rcv4'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('title1')) {
                obj['title1'] = ApiClient.convertToType(data['title1'], 'String');
            }
            if (data.hasOwnProperty('title2')) {
                obj['title2'] = ApiClient.convertToType(data['title2'], 'String');
            }
            if (data.hasOwnProperty('tr_id')) {
                obj['tr_id'] = ApiClient.convertToType(data['tr_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Date of creating payment
 * @member {String} date
 */
TransfersObject.prototype['date'] = undefined;

/**
 * Date of payment authorization (method authorize). Field can be empty.
 * @member {String} auth_date
 */
TransfersObject.prototype['auth_date'] = undefined;

/**
 * Date of posting payment
 * @member {String} acc_date
 */
TransfersObject.prototype['acc_date'] = undefined;

/**
 * Payment status
 * @member {module:model/TransfersObject.StatusEnum} status
 */
TransfersObject.prototype['status'] = undefined;

/**
 * Bank account number (format IBAN, 26 digits)
 * @member {String} accnum
 */
TransfersObject.prototype['accnum'] = undefined;

/**
 * Receiver name (first part)
 * @member {String} rcv1
 */
TransfersObject.prototype['rcv1'] = undefined;

/**
 * Receiver name (second part)
 * @member {String} rcv2
 */
TransfersObject.prototype['rcv2'] = undefined;

/**
 * Receiver name (third part)
 * @member {String} rcv3
 */
TransfersObject.prototype['rcv3'] = undefined;

/**
 * Receiver name (fourth part)
 * @member {String} rcv4
 */
TransfersObject.prototype['rcv4'] = undefined;

/**
 * transaction amount casted to float
 * @member {Number} amount
 */
TransfersObject.prototype['amount'] = undefined;

/**
 * Payment title (first part)
 * @member {String} title1
 */
TransfersObject.prototype['title1'] = undefined;

/**
 * Payment title (second part)
 * @member {String} title2
 */
TransfersObject.prototype['title2'] = undefined;

/**
 * Payment ID in tpay.com system
 * @member {Number} tr_id
 */
TransfersObject.prototype['tr_id'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
TransfersObject['StatusEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "auth"
     * @const
     */
    "auth": "auth",

    /**
     * value: "processed"
     * @const
     */
    "processed": "processed",

    /**
     * value: "done"
     * @const
     */
    "done": "done"
};



export default TransfersObject;

