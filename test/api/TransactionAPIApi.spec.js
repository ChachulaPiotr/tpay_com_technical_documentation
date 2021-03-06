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
    instance = new TpayComTechnicalDocumentation.TransactionAPIApi();
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

  describe('TransactionAPIApi', function() {
    describe('apiGwApiKeyChargebackAnyPost', function() {
      it('should call apiGwApiKeyChargebackAnyPost successfully', function(done) {
        //uncomment below and update the code to test apiGwApiKeyChargebackAnyPost
        //instance.apiGwApiKeyChargebackAnyPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiGwApiKeyChargebackStatusPost', function() {
      it('should call apiGwApiKeyChargebackStatusPost successfully', function(done) {
        //uncomment below and update the code to test apiGwApiKeyChargebackStatusPost
        //instance.apiGwApiKeyChargebackStatusPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiGwApiKeyChargebackTransactionPost', function() {
      it('should call apiGwApiKeyChargebackTransactionPost successfully', function(done) {
        //uncomment below and update the code to test apiGwApiKeyChargebackTransactionPost
        //instance.apiGwApiKeyChargebackTransactionPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiGwApiKeyTransactionBlikPost', function() {
      it('should call apiGwApiKeyTransactionBlikPost successfully', function(done) {
        //uncomment below and update the code to test apiGwApiKeyTransactionBlikPost
        //instance.apiGwApiKeyTransactionBlikPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiGwApiKeyTransactionCreatePost', function() {
      it('should call apiGwApiKeyTransactionCreatePost successfully', function(done) {
        //uncomment below and update the code to test apiGwApiKeyTransactionCreatePost
        //instance.apiGwApiKeyTransactionCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiGwApiKeyTransactionGetPost', function() {
      it('should call apiGwApiKeyTransactionGetPost successfully', function(done) {
        //uncomment below and update the code to test apiGwApiKeyTransactionGetPost
        //instance.apiGwApiKeyTransactionGetPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiGwApiKeyTransactionReportPost', function() {
      it('should call apiGwApiKeyTransactionReportPost successfully', function(done) {
        //uncomment below and update the code to test apiGwApiKeyTransactionReportPost
        //instance.apiGwApiKeyTransactionReportPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
