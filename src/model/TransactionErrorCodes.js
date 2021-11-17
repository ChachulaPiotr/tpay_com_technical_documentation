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
* Enum class TransactionErrorCodes.
* @enum {}
* @readonly
*/
export default class TransactionErrorCodes {
    
        /**
         * value: "ERR99"
         * @const
         */
        "ERR99" = "ERR99";

    
        /**
         * value: "ERR98"
         * @const
         */
        "ERR98" = "ERR98";

    
        /**
         * value: "ERR97"
         * @const
         */
        "ERR97" = "ERR97";

    
        /**
         * value: "ERR96"
         * @const
         */
        "ERR96" = "ERR96";

    
        /**
         * value: "ERR85"
         * @const
         */
        "ERR85" = "ERR85";

    
        /**
         * value: "ERR84"
         * @const
         */
        "ERR84" = "ERR84";

    
        /**
         * value: "ERR82"
         * @const
         */
        "ERR82" = "ERR82";

    
        /**
         * value: "ERR63"
         * @const
         */
        "ERR63" = "ERR63";

    
        /**
         * value: "ERR62"
         * @const
         */
        "ERR62" = "ERR62";

    
        /**
         * value: "ERR61"
         * @const
         */
        "ERR61" = "ERR61";

    
        /**
         * value: "ERR55"
         * @const
         */
        "ERR55" = "ERR55";

    
        /**
         * value: "ERR54"
         * @const
         */
        "ERR54" = "ERR54";

    
        /**
         * value: "ERR53"
         * @const
         */
        "ERR53" = "ERR53";

    
        /**
         * value: "ERR52"
         * @const
         */
        "ERR52" = "ERR52";

    
        /**
         * value: "ERR51"
         * @const
         */
        "ERR51" = "ERR51";

    
        /**
         * value: "ERR45"
         * @const
         */
        "ERR45" = "ERR45";

    
        /**
         * value: "ERR44"
         * @const
         */
        "ERR44" = "ERR44";

    
        /**
         * value: "ERR43"
         * @const
         */
        "ERR43" = "ERR43";

    
        /**
         * value: "ERR42"
         * @const
         */
        "ERR42" = "ERR42";

    
        /**
         * value: "ERR41"
         * @const
         */
        "ERR41" = "ERR41";

    
        /**
         * value: "ERR32"
         * @const
         */
        "ERR32" = "ERR32";

    
        /**
         * value: "ERR31"
         * @const
         */
        "ERR31" = "ERR31";

    

    /**
    * Returns a <code>TransactionErrorCodes</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TransactionErrorCodes} The enum <code>TransactionErrorCodes</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

