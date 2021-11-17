# TpayComTechnicalDocumentation.CardsAPIApi

All URIs are relative to *https://docs.tpay.com/Proxy.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiCardsApiKeyCheckPost**](CardsAPIApi.md#apiCardsApiKeyCheckPost) | **POST** /api/cards/{api_key}/check | check
[**apiCardsApiKeyDeregisterPost**](CardsAPIApi.md#apiCardsApiKeyDeregisterPost) | **POST** /api/cards/{api_key}/deregister | deregister
[**apiCardsApiKeyPresalePost**](CardsAPIApi.md#apiCardsApiKeyPresalePost) | **POST** /api/cards/{api_key}/presale | presale
[**apiCardsApiKeyRefundPost**](CardsAPIApi.md#apiCardsApiKeyRefundPost) | **POST** /api/cards/{api_key}/refund | refund
[**apiCardsApiKeyRegisterSalePost**](CardsAPIApi.md#apiCardsApiKeyRegisterSalePost) | **POST** /api/cards/{api_key}/register_sale | register sale
[**apiCardsApiKeySalePost**](CardsAPIApi.md#apiCardsApiKeySalePost) | **POST** /api/cards/{api_key}/sale | sale
[**apiCardsApiKeySecuresalePost**](CardsAPIApi.md#apiCardsApiKeySecuresalePost) | **POST** /api/cards/{api_key}/securesale | secure sale
[**apiCardsApiKeyVisacheckoutFinishPost**](CardsAPIApi.md#apiCardsApiKeyVisacheckoutFinishPost) | **POST** /api/cards/{api_key}/visacheckout_finish | visacheckout finish
[**apiCardsApiKeyVisacheckoutPreparePost**](CardsAPIApi.md#apiCardsApiKeyVisacheckoutPreparePost) | **POST** /api/cards/{api_key}/visacheckout_prepare | visacheckout prepare



## apiCardsApiKeyCheckPost

> CheckResponse apiCardsApiKeyCheckPost(apiKey, opts)

check

Method, which can be used to ping our API server to establish a monitoring service on the Merchant system.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.CardsAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.CheckFields() // CheckFields | check method data
};
apiInstance.apiCardsApiKeyCheckPost(apiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The api key. | 
 **basicData** | [**CheckFields**](CheckFields.md)| check method data | [optional] 

### Return type

[**CheckResponse**](CheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiCardsApiKeyDeregisterPost

> Object apiCardsApiKeyDeregisterPost(apiKey, opts)

deregister

The method used to deregister client credit card token from Tpay and Merchant system.&lt;br/&gt;A client can also do it himself from the link in an email after payment.&lt;br/&gt;&lt;br/&gt;After successful deregistration Merchant will not be able anymore to charge client&#39;s card. Tpay system sends notification about this deregistration to merchant endpoint, defined in merchant panel settings.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;NOTICE:&lt;/b&gt; To test this method you need to generate client token and calculate sign with your own API access data.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.CardsAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.DeregisterFields() // DeregisterFields | Transaction data.
};
apiInstance.apiCardsApiKeyDeregisterPost(apiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The api key. | 
 **basicData** | [**DeregisterFields**](DeregisterFields.md)| Transaction data. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiCardsApiKeyPresalePost

> RegisterSaleResponse apiCardsApiKeyPresalePost(apiKey, opts)

presale

The method used to create a new sale for payment on demand. It can be called after receiving a notification with client registered token (cli_auth parameter). It can not be used if &#39;onetimer&#39; parameter was sent in register_sale or client has unregistered (by the link in an email sent by tpay.com after registering client’s credit card or by API).&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Additional information&lt;/b&gt; Please feel free to read detailed case study of &lt;a href&#x3D;\&quot;https://support.tpay.com/en/case-study/wdrozenie-platnosci-rekurencyjnych-cyklicznych\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Implementation of the recurrent payments&lt;/a&gt;

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.CardsAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.PresaleFields() // PresaleFields | Transaction data.
};
apiInstance.apiCardsApiKeyPresalePost(apiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The api key. | 
 **basicData** | [**PresaleFields**](PresaleFields.md)| Transaction data. | [optional] 

### Return type

[**RegisterSaleResponse**](RegisterSaleResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiCardsApiKeyRefundPost

> RefundResponse apiCardsApiKeyRefundPost(apiKey, opts)

refund

The method used to transfer money back to the client. The refund can reference to chosen sale (sale_auth) or directly to the client (cli_auth).&lt;br/&gt;&lt;br/&gt; In both cases, the amount is adjustable in parameter amount. If the only cli_auth is sent, the amount parameter is required. If sale_auth is passed amount and currency are not necessary - the system will take default values from the specified sale and make a full amount refund.&lt;br/&gt;If you pass the amount parameter and specific sale_auth, you can create more than one refund until the sum of all refunds reach the transaction amount. &lt;br&gt;&lt;br/&gt; In test mode this method has 50% probability of success and the status parameter is picked randomly. &lt;br/&gt;

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.CardsAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.RefundFields() // RefundFields | Transaction data.
};
apiInstance.apiCardsApiKeyRefundPost(apiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The api key. | 
 **basicData** | [**RefundFields**](RefundFields.md)| Transaction data. | [optional] 

### Return type

[**RefundResponse**](RefundResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiCardsApiKeyRegisterSalePost

> RegisterSaleResponse apiCardsApiKeyRegisterSalePost(apiKey, opts)

register sale

The method used to create sale initialisation in tpay.com system. The successful request returns sale_auth used to redirect a client to transaction panel. &lt;br&gt;&lt;br&gt;The parameter sale_auth can be used to redirect a client to payment transaction panel:  &lt;br&gt; &lt;b&gt; https://secure.tpay.com/cards/ &lt;/b&gt;&lt;br&gt; with argument sale_auth passed with the POST or GET method. &lt;br&gt;&lt;br&gt; &lt;b&gt;Test mode notice!&lt;/b&gt;&lt;br&gt; In test mode, the transaction panel offers multiple system answers. You can choose at the transaction panel (instead of making a real transaction) to accept or decline payment to test all paths. In production mode client will be directly redirected to payment gateway with credit card data form. &lt;br&gt; Notification about positive transaction status will be sent to result URL which is set in account settings. 

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.CardsAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.RegisterSaleFields() // RegisterSaleFields | Transaction data.
};
apiInstance.apiCardsApiKeyRegisterSalePost(apiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The api key. | 
 **basicData** | [**RegisterSaleFields**](RegisterSaleFields.md)| Transaction data. | [optional] 

### Return type

[**RegisterSaleResponse**](RegisterSaleResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiCardsApiKeySalePost

> SaleResponse apiCardsApiKeySalePost(apiKey, opts)

sale

The method used to execute created sale with presale method. Sale defined with sale_auth can be executed only once. If the method is called second time with the same parameters, the system returns actual sale status - in parameter status - done for correct payment and declined for rejected payment. In that case, client card is not charged the second time. &lt;br&gt;&lt;br&gt; Passed cli_auth has to match with cli_auth used while creating a sale in presale method. &lt;br&gt;&lt;br&gt;&lt;b&gt;Test mode notice!&lt;/b&gt; The method will return correct status with 50% probability. The same concerns declined status. In this case, reason value is also randomly picked.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.CardsAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.SaleFields() // SaleFields | Transaction data.
};
apiInstance.apiCardsApiKeySalePost(apiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The api key. | 
 **basicData** | [**SaleFields**](SaleFields.md)| Transaction data. | [optional] 

### Return type

[**SaleResponse**](SaleResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiCardsApiKeySecuresalePost

> SecuresaleResponse apiCardsApiKeySecuresalePost(apiKey, opts)

secure sale

 This method allows Merchant to host payment form on his website and perform sale without any client redirection to tpay.com  system. Securesale method supports 3D Secure validation which is an additional security layer for online credit and debit card transactions. This approach requires special security considerations. We support secure communication by encrypting card data (card number, validity date and cvv/cvs number) on the client side (javascript) with Merchant public RSA key and send it as one parameter (card) to our API gate. A valid SSL certificate on the Merchant domain is required. Application flow is presented below for clarification:&lt;br/&gt;&lt;br/&gt; 1. Generate webpage with your public RSA key in javascript&lt;br/&gt; 2. Before sending payment form, insert new input with encrypted card data using your public key and clear inputs with card data so only encrypted data will be sent and submit form. &lt;br/&gt; 3. In backend prepare parameters and send them with securesale method  &lt;br/&gt; 4. Inform client about payment result&lt;br/&gt; &lt;br/&gt; Card cypher is made from string&lt;br/&gt;&lt;br/&gt; card number|expiry date(MM/YY or MM/YYYY)|cvv or cvc|host  &lt;br/&gt;&lt;br/&gt; eg. \&quot;1234567891234567|05/17|123|https://merchantwebsite.com\&quot;  &lt;br/&gt;&lt;br/&gt; We have published code samples, libraries and instructions to give some insights on the process - see https://github.com/tpay-com/tpay-php . The library used in the example has a limit of 117 input characters for encryption.  &lt;br/&gt; &lt;b&gt;In production mode, this generated hash works only once and should always be generated even for the same card data.&lt;/b&gt;&lt;br/&gt;&lt;br/&gt; There are two ways for performing payment&lt;br/&gt;&lt;br/&gt; a)  &lt;b&gt;Pay by card without  3D- Secure.&lt;/b&gt; &lt;br/&gt; If input parameters are correct, request is processed correctly and the entered card does not have the 3D-Secure option enabled, method returns parameters in JSON format&lt;br/&gt;&lt;br/&gt; b)  &lt;b&gt;Pay by card with 3D-Secure.&lt;/b&gt; &lt;br/&gt;If input parameters are correct, the request is processed correctly and the card has enabled the 3D-Secure, the method returns the 3ds_url parameter in JSON format. &lt;br/&gt;&lt;br/&gt; An example 3ds URL is presented below &lt;br/&gt;&lt;br/&gt; https://secure.tpay.com/cards/?sale_auth&#x3D;2587bf3a98dfa699ef9d01eba38359b7 &lt;br/&gt;&lt;br/&gt; •  The best way to implement 3DS is to open a link to 3D-Secure authentication in a new window. If this method is used, parameter \&quot;enable_pow_url\&quot;  should be sent with value 1.  After a correct authorization, a customer will be redirected to the Merchant’s Site. Return URL is set in Merchant’s Panel or sent dynamically. &lt;br/&gt;&lt;br/&gt; •  Do not use an inline frame to implement the 3D-Secure authentication on Merchant’s Site. In this case, some banks can block 3DS authorisation. &lt;br/&gt;&lt;br/&gt; The parameters are sent with POST method. Merchant system has to respond to the notification by printing array in JSON format.&lt;br/&gt; See Card&#39;s notifications section.&lt;br/&gt;&lt;br/&gt; &lt;b&gt;Test mode notice!&lt;/b&gt;  &lt;br/&gt;In test mode, transaction panel offers the choice of system answer for transactions with 3D-Secure authentication. You can choose to accept or decline payment to test all paths.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Additional information&lt;/b&gt; Please feel free to read detailed case study of &lt;a href&#x3D;\&quot;https://support.tpay.com/en/case-study/wdrozenie-bramki-platnosci-kartami-na-stronie-sklepu\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Implementation of the card payment gateway at the store&#39;s website&lt;a/&gt;

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.CardsAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.SecuresaleFields() // SecuresaleFields | Transaction data.
};
apiInstance.apiCardsApiKeySecuresalePost(apiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The api key. | 
 **basicData** | [**SecuresaleFields**](SecuresaleFields.md)| Transaction data. | [optional] 

### Return type

[**SecuresaleResponse**](SecuresaleResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiCardsApiKeyVisacheckoutFinishPost

> SecuresaleResponse apiCardsApiKeyVisacheckoutFinishPost(apiKey, opts)

visacheckout finish

The Method used to finish Visa Checkout payment. &lt;br/&gt;&lt;br/&gt; Summary_data has format compliant with Visa Checkout Summary Payment Data. Its structure is described in Visa Checkout documentation at &lt;a href&#x3D;\&quot;https://developer.visa.com/products/visa_checkout/guides#extracting-consumer-data\&quot;&gt;extracting-consumer-data&lt;/a&gt;&lt;br&gt;&lt;br/&gt; The example table with this format can be found at &lt;a href&#x3D;\&quot;https://developer.visa.com/capabilities/visa_checkout/docs#pdfs_for_merchants_integrating_with_visa_checkout\&quot;&gt;Link&lt;/a&gt; &lt;br&gt;&lt;br&gt;When some data change between visacheckout_prepare and visacheckout_finish, you should send the modified data with the summary_data table. You can only send to tpay.com the data, which changes (i.e. only the amount ) but you need to send it in the summary_data JSON structure. &lt;br/&gt;Other fields if not changed don’t have to be sent.&lt;br/&gt; The response format is the same as in SecureSale method - see the method for more details.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;NOTICE:&lt;/b&gt; To use Visa Checkout methods, you need to have access to cards API at your account and pass Visa requirements (see Visa Checkout Integration section).

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.CardsAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.VcFinishFields() // VcFinishFields | Transaction data.
};
apiInstance.apiCardsApiKeyVisacheckoutFinishPost(apiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The api key. | 
 **basicData** | [**VcFinishFields**](VcFinishFields.md)| Transaction data. | [optional] 

### Return type

[**SecuresaleResponse**](SecuresaleResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiCardsApiKeyVisacheckoutPreparePost

> VcPrepareResponse apiCardsApiKeyVisacheckoutPreparePost(apiKey, opts)

visacheckout prepare

The method used to prepare Visa Checkout payment. &lt;br/&gt;&lt;br/&gt;&lt;b&gt;NOTICE:&lt;/b&gt; To use Visa Checkout methods, you need to have access to cards API at your account and pass Visa requirements (see Visa Checkout Integration section).

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.CardsAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.VcPrepareFields() // VcPrepareFields | Transaction data.
};
apiInstance.apiCardsApiKeyVisacheckoutPreparePost(apiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The api key. | 
 **basicData** | [**VcPrepareFields**](VcPrepareFields.md)| Transaction data. | [optional] 

### Return type

[**VcPrepareResponse**](VcPrepareResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

