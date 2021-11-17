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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TpayComTechnicalDocumentation);
  }
}(this, function(expect, TpayComTechnicalDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SecuresaleResponse', function() {
    it('should create an instance of SecuresaleResponse', function() {
      // uncomment below and update the code to test SecuresaleResponse
      //var instane = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be.a(TpayComTechnicalDocumentation.SecuresaleResponse);
    });

    it('should have the property _3dsUrl (base name: "3ds_url")', function() {
      // uncomment below and update the code to test the property _3dsUrl
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property result (base name: "result")', function() {
      // uncomment below and update the code to test the property result
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property testMode (base name: "test_mode")', function() {
      // uncomment below and update the code to test the property testMode
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property saleAuth (base name: "sale_auth")', function() {
      // uncomment below and update the code to test the property saleAuth
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property cliAuth (base name: "cli_auth")', function() {
      // uncomment below and update the code to test the property cliAuth
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property card (base name: "card")', function() {
      // uncomment below and update the code to test the property card
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property sign (base name: "sign")', function() {
      // uncomment below and update the code to test the property sign
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property errCode (base name: "err_code")', function() {
      // uncomment below and update the code to test the property errCode
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

    it('should have the property errDesc (base name: "err_desc")', function() {
      // uncomment below and update the code to test the property errDesc
      //var instance = new TpayComTechnicalDocumentation.SecuresaleResponse();
      //expect(instance).to.be();
    });

  });

}));