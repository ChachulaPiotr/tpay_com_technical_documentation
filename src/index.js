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


import ApiClient from './ApiClient';
import ApiDataObject from './model/ApiDataObject';
import BlikAlias from './model/BlikAlias';
import BlikAliasResponse from './model/BlikAliasResponse';
import BlikFields from './model/BlikFields';
import BlikResponse from './model/BlikResponse';
import BranchObject from './model/BranchObject';
import CardsErrCode from './model/CardsErrCode';
import ChargebackStatus from './model/ChargebackStatus';
import CheckFields from './model/CheckFields';
import CheckResponse from './model/CheckResponse';
import CreateFields from './model/CreateFields';
import CreateResponse from './model/CreateResponse';
import DeregisterFields from './model/DeregisterFields';
import GetFields from './model/GetFields';
import GetResponse from './model/GetResponse';
import Language from './model/Language';
import LegalFormObject from './model/LegalFormObject';
import MasspaymentAuthorizeFields from './model/MasspaymentAuthorizeFields';
import MasspaymentAuthorizeResponse from './model/MasspaymentAuthorizeResponse';
import MasspaymentCreateFields from './model/MasspaymentCreateFields';
import MasspaymentCreateResponse from './model/MasspaymentCreateResponse';
import MasspaymentErrCode from './model/MasspaymentErrCode';
import MasspaymentErrDesc from './model/MasspaymentErrDesc';
import MasspaymentPacksFields from './model/MasspaymentPacksFields';
import MasspaymentPacksResponse from './model/MasspaymentPacksResponse';
import MasspaymentTransfersFields from './model/MasspaymentTransfersFields';
import MasspaymentTransfersResponse from './model/MasspaymentTransfersResponse';
import Onetimer from './model/Onetimer';
import PacksObject from './model/PacksObject';
import PaymentAttempts from './model/PaymentAttempts';
import PresaleFields from './model/PresaleFields';
import RefundAnyFields from './model/RefundAnyFields';
import RefundAnyResponse from './model/RefundAnyResponse';
import RefundFields from './model/RefundFields';
import RefundResponse from './model/RefundResponse';
import RefundStatusResponse from './model/RefundStatusResponse';
import RefundTransactionFields from './model/RefundTransactionFields';
import RegisterFields from './model/RegisterFields';
import RegisterSaleFields from './model/RegisterSaleFields';
import RegisterSaleResponse from './model/RegisterSaleResponse';
import RegistrationErrCodes from './model/RegistrationErrCodes';
import RegistrationInputFields from './model/RegistrationInputFields';
import RegistrationInputsResponse from './model/RegistrationInputsResponse';
import RegistrationRegisterResponse from './model/RegistrationRegisterResponse';
import ReportFields from './model/ReportFields';
import ReportResponse from './model/ReportResponse';
import Result from './model/Result';
import SaleFields from './model/SaleFields';
import SaleResponse from './model/SaleResponse';
import SecuresaleFields from './model/SecuresaleFields';
import SecuresaleResponse from './model/SecuresaleResponse';
import SellerDataObject from './model/SellerDataObject';
import TransactionErrorCodes from './model/TransactionErrorCodes';
import TransfersObject from './model/TransfersObject';
import VcFinishFields from './model/VcFinishFields';
import VcPrepareFields from './model/VcPrepareFields';
import VcPrepareResponse from './model/VcPrepareResponse';
import CardsAPIApi from './api/CardsAPIApi';
import MasspaymentsApi from './api/MasspaymentsApi';
import RegistrationApi from './api/RegistrationApi';
import TransactionAPIApi from './api/TransactionAPIApi';


/**
* _p_classchanges_disclaimer_Demo_transaction_masspayments_api_key_input_typetext_idtransaction_key_value75f86137a6635df826e3efe2e66f7c9a946fdde1_classui_form_control_label_fortransaction_key_styledisplay_none_idtr_api_labelCOPIED_labelbr_br__Demo_cards_api_key_input_typetext_idcards_key_valueba9a05faa697f9b43f39b84933ff168e373c6496_classui_form_control_label_forcards_key_styledisplay_none_idcards_api_labelCOPIED_labelbr_br__Demo_registration_api_key_input_typetext_idregistration_key_value6c0f5ef6e4d6877abad7fcfb3b5de117ad8b772d_classui_form_control_label_forregistration_key_styledisplay_none_idregistration_api_labelCOPIED_labelbr_br__The_terms_seller_and_merchant_are_used_interchangeably_and_they_both_refer_to_a_person_or_a_company_registered_at_tpay_com_to_accept_online_payments__br_Whenever_term_merchant_panel_is_used_it_refers_to_the_part_of_tpay_com_website_located_at_a_hrefhttps__secure_tpay_com_panel_target_blanksecure_tpay_com_panel_a__br_br_For_sandbox_purposes_use_merchant_demo_account_br_br__ID___1010_Password___demobr_br_Remember_that_this_is_a_shared_account_so_all_data_passed_through_will_be_publicly_visible__p.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TpayComTechnicalDocumentation = require('index'); // See note below*.
* var xxxSvc = new TpayComTechnicalDocumentation.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TpayComTechnicalDocumentation.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TpayComTechnicalDocumentation.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TpayComTechnicalDocumentation.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.2.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ApiDataObject model constructor.
     * @property {module:model/ApiDataObject}
     */
    ApiDataObject,

    /**
     * The BlikAlias model constructor.
     * @property {module:model/BlikAlias}
     */
    BlikAlias,

    /**
     * The BlikAliasResponse model constructor.
     * @property {module:model/BlikAliasResponse}
     */
    BlikAliasResponse,

    /**
     * The BlikFields model constructor.
     * @property {module:model/BlikFields}
     */
    BlikFields,

    /**
     * The BlikResponse model constructor.
     * @property {module:model/BlikResponse}
     */
    BlikResponse,

    /**
     * The BranchObject model constructor.
     * @property {module:model/BranchObject}
     */
    BranchObject,

    /**
     * The CardsErrCode model constructor.
     * @property {module:model/CardsErrCode}
     */
    CardsErrCode,

    /**
     * The ChargebackStatus model constructor.
     * @property {module:model/ChargebackStatus}
     */
    ChargebackStatus,

    /**
     * The CheckFields model constructor.
     * @property {module:model/CheckFields}
     */
    CheckFields,

    /**
     * The CheckResponse model constructor.
     * @property {module:model/CheckResponse}
     */
    CheckResponse,

    /**
     * The CreateFields model constructor.
     * @property {module:model/CreateFields}
     */
    CreateFields,

    /**
     * The CreateResponse model constructor.
     * @property {module:model/CreateResponse}
     */
    CreateResponse,

    /**
     * The DeregisterFields model constructor.
     * @property {module:model/DeregisterFields}
     */
    DeregisterFields,

    /**
     * The GetFields model constructor.
     * @property {module:model/GetFields}
     */
    GetFields,

    /**
     * The GetResponse model constructor.
     * @property {module:model/GetResponse}
     */
    GetResponse,

    /**
     * The Language model constructor.
     * @property {module:model/Language}
     */
    Language,

    /**
     * The LegalFormObject model constructor.
     * @property {module:model/LegalFormObject}
     */
    LegalFormObject,

    /**
     * The MasspaymentAuthorizeFields model constructor.
     * @property {module:model/MasspaymentAuthorizeFields}
     */
    MasspaymentAuthorizeFields,

    /**
     * The MasspaymentAuthorizeResponse model constructor.
     * @property {module:model/MasspaymentAuthorizeResponse}
     */
    MasspaymentAuthorizeResponse,

    /**
     * The MasspaymentCreateFields model constructor.
     * @property {module:model/MasspaymentCreateFields}
     */
    MasspaymentCreateFields,

    /**
     * The MasspaymentCreateResponse model constructor.
     * @property {module:model/MasspaymentCreateResponse}
     */
    MasspaymentCreateResponse,

    /**
     * The MasspaymentErrCode model constructor.
     * @property {module:model/MasspaymentErrCode}
     */
    MasspaymentErrCode,

    /**
     * The MasspaymentErrDesc model constructor.
     * @property {module:model/MasspaymentErrDesc}
     */
    MasspaymentErrDesc,

    /**
     * The MasspaymentPacksFields model constructor.
     * @property {module:model/MasspaymentPacksFields}
     */
    MasspaymentPacksFields,

    /**
     * The MasspaymentPacksResponse model constructor.
     * @property {module:model/MasspaymentPacksResponse}
     */
    MasspaymentPacksResponse,

    /**
     * The MasspaymentTransfersFields model constructor.
     * @property {module:model/MasspaymentTransfersFields}
     */
    MasspaymentTransfersFields,

    /**
     * The MasspaymentTransfersResponse model constructor.
     * @property {module:model/MasspaymentTransfersResponse}
     */
    MasspaymentTransfersResponse,

    /**
     * The Onetimer model constructor.
     * @property {module:model/Onetimer}
     */
    Onetimer,

    /**
     * The PacksObject model constructor.
     * @property {module:model/PacksObject}
     */
    PacksObject,

    /**
     * The PaymentAttempts model constructor.
     * @property {module:model/PaymentAttempts}
     */
    PaymentAttempts,

    /**
     * The PresaleFields model constructor.
     * @property {module:model/PresaleFields}
     */
    PresaleFields,

    /**
     * The RefundAnyFields model constructor.
     * @property {module:model/RefundAnyFields}
     */
    RefundAnyFields,

    /**
     * The RefundAnyResponse model constructor.
     * @property {module:model/RefundAnyResponse}
     */
    RefundAnyResponse,

    /**
     * The RefundFields model constructor.
     * @property {module:model/RefundFields}
     */
    RefundFields,

    /**
     * The RefundResponse model constructor.
     * @property {module:model/RefundResponse}
     */
    RefundResponse,

    /**
     * The RefundStatusResponse model constructor.
     * @property {module:model/RefundStatusResponse}
     */
    RefundStatusResponse,

    /**
     * The RefundTransactionFields model constructor.
     * @property {module:model/RefundTransactionFields}
     */
    RefundTransactionFields,

    /**
     * The RegisterFields model constructor.
     * @property {module:model/RegisterFields}
     */
    RegisterFields,

    /**
     * The RegisterSaleFields model constructor.
     * @property {module:model/RegisterSaleFields}
     */
    RegisterSaleFields,

    /**
     * The RegisterSaleResponse model constructor.
     * @property {module:model/RegisterSaleResponse}
     */
    RegisterSaleResponse,

    /**
     * The RegistrationErrCodes model constructor.
     * @property {module:model/RegistrationErrCodes}
     */
    RegistrationErrCodes,

    /**
     * The RegistrationInputFields model constructor.
     * @property {module:model/RegistrationInputFields}
     */
    RegistrationInputFields,

    /**
     * The RegistrationInputsResponse model constructor.
     * @property {module:model/RegistrationInputsResponse}
     */
    RegistrationInputsResponse,

    /**
     * The RegistrationRegisterResponse model constructor.
     * @property {module:model/RegistrationRegisterResponse}
     */
    RegistrationRegisterResponse,

    /**
     * The ReportFields model constructor.
     * @property {module:model/ReportFields}
     */
    ReportFields,

    /**
     * The ReportResponse model constructor.
     * @property {module:model/ReportResponse}
     */
    ReportResponse,

    /**
     * The Result model constructor.
     * @property {module:model/Result}
     */
    Result,

    /**
     * The SaleFields model constructor.
     * @property {module:model/SaleFields}
     */
    SaleFields,

    /**
     * The SaleResponse model constructor.
     * @property {module:model/SaleResponse}
     */
    SaleResponse,

    /**
     * The SecuresaleFields model constructor.
     * @property {module:model/SecuresaleFields}
     */
    SecuresaleFields,

    /**
     * The SecuresaleResponse model constructor.
     * @property {module:model/SecuresaleResponse}
     */
    SecuresaleResponse,

    /**
     * The SellerDataObject model constructor.
     * @property {module:model/SellerDataObject}
     */
    SellerDataObject,

    /**
     * The TransactionErrorCodes model constructor.
     * @property {module:model/TransactionErrorCodes}
     */
    TransactionErrorCodes,

    /**
     * The TransfersObject model constructor.
     * @property {module:model/TransfersObject}
     */
    TransfersObject,

    /**
     * The VcFinishFields model constructor.
     * @property {module:model/VcFinishFields}
     */
    VcFinishFields,

    /**
     * The VcPrepareFields model constructor.
     * @property {module:model/VcPrepareFields}
     */
    VcPrepareFields,

    /**
     * The VcPrepareResponse model constructor.
     * @property {module:model/VcPrepareResponse}
     */
    VcPrepareResponse,

    /**
    * The CardsAPIApi service constructor.
    * @property {module:api/CardsAPIApi}
    */
    CardsAPIApi,

    /**
    * The MasspaymentsApi service constructor.
    * @property {module:api/MasspaymentsApi}
    */
    MasspaymentsApi,

    /**
    * The RegistrationApi service constructor.
    * @property {module:api/RegistrationApi}
    */
    RegistrationApi,

    /**
    * The TransactionAPIApi service constructor.
    * @property {module:api/TransactionAPIApi}
    */
    TransactionAPIApi
};
