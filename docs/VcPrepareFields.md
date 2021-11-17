# TpayComTechnicalDocumentation.VcPrepareFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiPassword** | **String** | API password. | 
**callId** | **String** | Visa Checkout Call Id | 
**language** | [**Language**](Language.md) |  | [optional] 
**sign** | **String** | Sign is calculated from cryptographic hash function set in Merchant’s Panel (default SHA-1): hash_alg (method + call_id + language + verification code) where + means concatenation. | 


