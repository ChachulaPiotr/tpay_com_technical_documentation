# TpayComTechnicalDocumentation.TransactionAPIApi

All URIs are relative to *https://docs.tpay.com/Proxy.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiGwApiKeyChargebackAnyPost**](TransactionAPIApi.md#apiGwApiKeyChargebackAnyPost) | **POST** /api/gw/{api_key}/chargeback/any | any
[**apiGwApiKeyChargebackStatusPost**](TransactionAPIApi.md#apiGwApiKeyChargebackStatusPost) | **POST** /api/gw/{api_key}/chargeback/status | status
[**apiGwApiKeyChargebackTransactionPost**](TransactionAPIApi.md#apiGwApiKeyChargebackTransactionPost) | **POST** /api/gw/{api_key}/chargeback/transaction | transaction
[**apiGwApiKeyTransactionBlikPost**](TransactionAPIApi.md#apiGwApiKeyTransactionBlikPost) | **POST** /api/gw/{api_key}/transaction/blik | blik
[**apiGwApiKeyTransactionCreatePost**](TransactionAPIApi.md#apiGwApiKeyTransactionCreatePost) | **POST** /api/gw/{api_key}/transaction/create | create
[**apiGwApiKeyTransactionGetPost**](TransactionAPIApi.md#apiGwApiKeyTransactionGetPost) | **POST** /api/gw/{api_key}/transaction/get | get
[**apiGwApiKeyTransactionReportPost**](TransactionAPIApi.md#apiGwApiKeyTransactionReportPost) | **POST** /api/gw/{api_key}/transaction/report | report



## apiGwApiKeyChargebackAnyPost

> RefundAnyResponse apiGwApiKeyChargebackAnyPost(apiKey, opts)

any

The method used to refund part of the transaction amount. &lt;br/&gt;&lt;br/&gt;&lt;b&gt;NOTICE:&lt;/b&gt; This method works only in production mode!&lt;br/&gt;To test this method, you need to create the transaction in production mode with your own API access.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.TransactionAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'refundAnyData': new TpayComTechnicalDocumentation.RefundAnyFields() // RefundAnyFields | Request body.
};
apiInstance.apiGwApiKeyChargebackAnyPost(apiKey, opts, (error, data, response) => {
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
 **refundAnyData** | [**RefundAnyFields**](RefundAnyFields.md)| Request body. | [optional] 

### Return type

[**RefundAnyResponse**](RefundAnyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiGwApiKeyChargebackStatusPost

> RefundStatusResponse apiGwApiKeyChargebackStatusPost(apiKey, opts)

status

The method used to check transaction refunds statuses.&lt;br/&gt;Some refunds statuses may be not available immediately after calling refund methods due to gathering refund details process.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.TransactionAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'refundTransactionData': new TpayComTechnicalDocumentation.RefundTransactionFields() // RefundTransactionFields | Request body.
};
apiInstance.apiGwApiKeyChargebackStatusPost(apiKey, opts, (error, data, response) => {
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
 **refundTransactionData** | [**RefundTransactionFields**](RefundTransactionFields.md)| Request body. | [optional] 

### Return type

[**RefundStatusResponse**](RefundStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiGwApiKeyChargebackTransactionPost

> RefundAnyResponse apiGwApiKeyChargebackTransactionPost(apiKey, opts)

transaction

The method used to refund full transaction amount. You can get transaction title from &#39;create&#39; method when generating the transaction.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;NOTICE:&lt;/b&gt; This method works only in production mode!&lt;br/&gt;To test this method, you need to create the transaction in production mode with your own API access.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.TransactionAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'refundTransactionData': new TpayComTechnicalDocumentation.RefundTransactionFields() // RefundTransactionFields | Request body.
};
apiInstance.apiGwApiKeyChargebackTransactionPost(apiKey, opts, (error, data, response) => {
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
 **refundTransactionData** | [**RefundTransactionFields**](RefundTransactionFields.md)| Request body. | [optional] 

### Return type

[**RefundAnyResponse**](RefundAnyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiGwApiKeyTransactionBlikPost

> BlikResponse apiGwApiKeyTransactionBlikPost(apiKey, opts)

blik

This method allows sending a BLIK code in direct communication between merchant and BLIK system. In ‘create’ method you should set 150 as a value for parameter ‘group’, this is a BLIK payment channel. Method returns parameter ‘result’ equal to 1 which means that payment popup has been successfully displayed at customer mobile application. After accepting payment by the customer, tpay.com system sends a standard notification to merchant&#39;s endpoint declared in wyn_url parameter (this parameter should be sent in &#39;create&#39; method.)&lt;br/&gt;&lt;br/&gt;&lt;b&gt;NOTICE:&lt;/b&gt; to test this method, you need to create the transaction with &#39;create&#39; method and replace title parameter value with the returned title.&lt;br/&gt;Blik method works with the specific set of parameters depending on payment type case. Please see BLIK workflow section.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.TransactionAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'blikData': new TpayComTechnicalDocumentation.BlikFields() // BlikFields | Request body.
};
apiInstance.apiGwApiKeyTransactionBlikPost(apiKey, opts, (error, data, response) => {
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
 **blikData** | [**BlikFields**](BlikFields.md)| Request body. | [optional] 

### Return type

[**BlikResponse**](BlikResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiGwApiKeyTransactionCreatePost

> CreateResponse apiGwApiKeyTransactionCreatePost(apiKey, opts)

create

This method allows you to prepare transaction for a customer. The method returns transaction title required for other API methods and redirection link for a customer.&lt;br/&gt;This method also returns account details for manual money transfers.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.TransactionAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.CreateFields() // CreateFields | Transaction data.
};
apiInstance.apiGwApiKeyTransactionCreatePost(apiKey, opts, (error, data, response) => {
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
 **basicData** | [**CreateFields**](CreateFields.md)| Transaction data. | [optional] 

### Return type

[**CreateResponse**](CreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiGwApiKeyTransactionGetPost

> GetResponse apiGwApiKeyTransactionGetPost(apiKey, opts)

get

This method allows you to get all information about the transaction by sending previously generated title.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.TransactionAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'getData': new TpayComTechnicalDocumentation.GetFields() // GetFields | Request body.
};
apiInstance.apiGwApiKeyTransactionGetPost(apiKey, opts, (error, data, response) => {
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
 **getData** | [**GetFields**](GetFields.md)| Request body. | [optional] 

### Return type

[**GetResponse**](GetResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiGwApiKeyTransactionReportPost

> ReportResponse apiGwApiKeyTransactionReportPost(apiKey, opts)

report

This method returns payments report for the declared time range, generated in CSV format (semicolon separators) and encoded in base64 - the same format as in merchant panel. If you like to arrange result as an associative array, you can use the ready &lt;a href&#x3D;\&quot;https://github.com/tpay-com/tpay-php/blob/master/tpayLibs/examples/TransactionReportsApi.php\&quot; target&#x3D;\&quot;_blank\&quot;&gt;script&lt;/a&gt; from Tpay PHP library.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.TransactionAPIApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'reportData': new TpayComTechnicalDocumentation.ReportFields() // ReportFields | Request body.
};
apiInstance.apiGwApiKeyTransactionReportPost(apiKey, opts, (error, data, response) => {
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
 **reportData** | [**ReportFields**](ReportFields.md)| Request body. | [optional] 

### Return type

[**ReportResponse**](ReportResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

