# TpayComTechnicalDocumentation.RefundFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cliAuth** | **String** | Client token | [optional] 
**saleAuth** | **String** | Transaction id in tpay.com system | [optional] 
**desc** | **String** |  | 
**currency** | **Number** | transaction currency in ISO numeric format | [optional] [default to 985]
**amount** | **Number** | transaction amount casted to float | [optional] 
**language** | [**Language**](Language.md) |  | [optional] 
**apiPassword** | **String** | API password. | 
**sign** | **String** | Sign is calculated from cryptographic hash function set in Merchant’s Panel (default SHA-1): hash_alg (method + cli_auth + sale_auth + desc + amount + currency + language + verification code); where + means concatenation with ampersand symbol. ie. currency + language &#x3D; 985&amp;pl | 


