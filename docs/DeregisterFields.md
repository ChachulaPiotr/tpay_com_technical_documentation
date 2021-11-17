# TpayComTechnicalDocumentation.DeregisterFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cliAuth** | **String** | Client token | 
**language** | [**Language**](Language.md) |  | [optional] 
**apiPassword** | **String** | API password. | 
**sign** | **String** | Sign is calculated from cryptographic hash function set in Merchant’s Panel (default SHA-1): hash_alg (method + cli_auth + language + verification code) where + means concatenation with ampersand symbol. ie. cli_auth + language &#x3D; t59c2810d59285e3e0ee9d1f1eda1c2f4c554e24&amp;pl | 


