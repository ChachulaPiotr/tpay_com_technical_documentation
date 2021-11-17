# TpayComTechnicalDocumentation.RegistrationApi

All URIs are relative to *https://docs.tpay.com/Proxy.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiGwApiKeyRegistrationInputsPost**](RegistrationApi.md#apiGwApiKeyRegistrationInputsPost) | **POST** /api/gw/{api_key}/registration/inputs | inputs
[**apiGwApiKeyRegistrationRegisterPost**](RegistrationApi.md#apiGwApiKeyRegistrationRegisterPost) | **POST** /api/gw/{api_key}/registration/register | register



## apiGwApiKeyRegistrationInputsPost

> RegistrationInputsResponse apiGwApiKeyRegistrationInputsPost(apiKey, opts)

inputs

This method returns branches list and legal forms list which are available in Tpay.com. These data are required to correctly merchant registration. Branch id and legal form id should be sent in register method.

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.RegistrationApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'basicData': new TpayComTechnicalDocumentation.RegistrationInputFields() // RegistrationInputFields | Registration inputs.
};
apiInstance.apiGwApiKeyRegistrationInputsPost(apiKey, opts, (error, data, response) => {
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
 **basicData** | [**RegistrationInputFields**](RegistrationInputFields.md)| Registration inputs. | [optional] 

### Return type

[**RegistrationInputsResponse**](RegistrationInputsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## apiGwApiKeyRegistrationRegisterPost

> RegistrationRegisterResponse apiGwApiKeyRegistrationRegisterPost(apiKey, opts)

register

This method allows register new account in Tpay.com system. In response, the method returns data which can be used to generate new transactions. Optionally method returns access data for API transactions

### Example

```javascript
import TpayComTechnicalDocumentation from 'tpay_com_technical_documentation';

let apiInstance = new TpayComTechnicalDocumentation.RegistrationApi();
let apiKey = "apiKey_example"; // String | The api key.
let opts = {
  'registrtationRegisterData': new TpayComTechnicalDocumentation.RegisterFields() // RegisterFields | Register data
};
apiInstance.apiGwApiKeyRegistrationRegisterPost(apiKey, opts, (error, data, response) => {
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
 **registrtationRegisterData** | [**RegisterFields**](RegisterFields.md)| Register data | [optional] 

### Return type

[**RegistrationRegisterResponse**](RegistrationRegisterResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

