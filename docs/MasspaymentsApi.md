# TpayComTechnicalDocumentation.MasspaymentsApi

All URIs are relative to *https://docs.tpay.com/Proxy.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiGwApiKeyMasspaymentAuthorizePost**](MasspaymentsApi.md#apiGwApiKeyMasspaymentAuthorizePost) | **POST** /api/gw/{api_key}/masspayment/authorize | authorize
[**apiGwApiKeyMasspaymentCreatePost**](MasspaymentsApi.md#apiGwApiKeyMasspaymentCreatePost) | **POST** /api/gw/{api_key}/masspayment/create | create
[**apiGwApiKeyMasspaymentPacksPost**](MasspaymentsApi.md#apiGwApiKeyMasspaymentPacksPost) | **POST** /api/gw/{api_key}/masspayment/packs | packs
[**apiGwApiKeyMasspaymentTransfersPost**](MasspaymentsApi.md#apiGwApiKeyMasspaymentTransfersPost) | **POST** /api/gw/{api_key}/masspayment/transfers | transfers



## apiGwApiKeyMasspaymentAuthorizePost

> MasspaymentAuthorizeResponse apiGwApiKeyMasspaymentAuthorizePost(apiKey, opts)

authorize

This method authorizes the processing of chosen pack of transfers.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.MasspaymentsApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.MasspaymentAuthorizeFields() // MasspaymentAuthorizeFields | Transaction data.
};
apiInstance.apiGwApiKeyMasspaymentAuthorizePost(apiKey, opts, (error, data, response) => {
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
 **basicData** | [**MasspaymentAuthorizeFields**](MasspaymentAuthorizeFields.md)| Transaction data. | [optional] 

### Return type

[**MasspaymentAuthorizeResponse**](MasspaymentAuthorizeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiGwApiKeyMasspaymentCreatePost

> MasspaymentCreateResponse apiGwApiKeyMasspaymentCreatePost(apiKey, opts)

create

This method adds a pack of transfers to the Tpay system. After executing a correct operation, you need to request authorize method to confirm payout processing. Transfers are being made once a day on workdays. You can find confirmation code in Merchant Panel, settings tab-&gt; notifications. Variable $seller_id is Merchant’s ID in tpay.com system. &lt;br/&gt;&lt;br/&gt; &lt;b&gt;Example CSV file&lt;/b&gt;&lt;br/&gt; Each line contains one transfer formatted as in the example below. Columns are separated by a semicolon. &lt;br/&gt; The file does not have a header.&lt;br/&gt;&lt;br/&gt; account number (26 digits);receiver (part 1) (35 characters);receiver (part 2) (35 characters);receiver (part 3) (35 characters);receiver (part 4) (35 characters);amount (dot or comma separator);title (part 1) (35 characters);title (part 2) (35 characters);Tpay transaction ID&lt;br/&gt;&lt;br/&gt; Place transfer receiver name in 1-4 receiver fields. Each field can be maximum 35 characters long.&lt;br/&gt; If receiver name is for example 40 characters long, you should put 35 in receiver 1 field, and 5 characters in receiver 2 field.&lt;br/&gt; The same rule is valid for title field. The transaction ID field is not required, whithout this field, the file format looks like this: &lt;br/&gt;&lt;br/&gt; account number (26 digits);receiver (part 1) (35 characters);receiver (part 2) (35 characters);receiver (part 3) (35 characters);receiver (part 4) (35 characters);amount (dot or comma separator);title (part 1) (35 characters);title (part 2) (35 characters);Transaction ID from merchant system&lt;br/&gt;&lt;br/&gt; Example CSV file can be downloaded from:&lt;br/&gt; &lt;a href&#x3D;\&quot;https://secure.tpay.com/partner/pliki/przyklad.csv\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Download&lt;/a&gt; 

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.MasspaymentsApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.MasspaymentCreateFields() // MasspaymentCreateFields | Transaction data.
};
apiInstance.apiGwApiKeyMasspaymentCreatePost(apiKey, opts, (error, data, response) => {
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
 **basicData** | [**MasspaymentCreateFields**](MasspaymentCreateFields.md)| Transaction data. | [optional] 

### Return type

[**MasspaymentCreateResponse**](MasspaymentCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiGwApiKeyMasspaymentPacksPost

> MasspaymentPacksResponse apiGwApiKeyMasspaymentPacksPost(apiKey, opts)

packs

This method allows browsing through created packages. If none of the parameters has been sent, all packages for the Merchant’s account will be returned. If any records exist, there will be pack objects in pack section representing respective transfer packages. You can send pack_id to browse contents of specific pack or send time range to browse all packages within time range

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.MasspaymentsApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.MasspaymentPacksFields() // MasspaymentPacksFields | Transaction data.
};
apiInstance.apiGwApiKeyMasspaymentPacksPost(apiKey, opts, (error, data, response) => {
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
 **basicData** | [**MasspaymentPacksFields**](MasspaymentPacksFields.md)| Transaction data. | [optional] 

### Return type

[**MasspaymentPacksResponse**](MasspaymentPacksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiGwApiKeyMasspaymentTransfersPost

> MasspaymentTransfersResponse apiGwApiKeyMasspaymentTransfersPost(apiKey, opts)

transfers

This method allows browsing through transfers within one package. Required parameters (besides those described in mass payments main description), at least 1 is obligatory. If any records exist, there will be transfer objects in transfers section representing several transfers.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.MasspaymentsApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.MasspaymentTransfersFields() // MasspaymentTransfersFields | Transaction data.
};
apiInstance.apiGwApiKeyMasspaymentTransfersPost(apiKey, opts, (error, data, response) => {
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
 **basicData** | [**MasspaymentTransfersFields**](MasspaymentTransfersFields.md)| Transaction data. | [optional] 

### Return type

[**MasspaymentTransfersResponse**](MasspaymentTransfersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

