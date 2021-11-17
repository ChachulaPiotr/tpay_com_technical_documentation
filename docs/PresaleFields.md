# TpayComTechnicalDocumentation.PresaleFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desc** | **String** | transaction description | 
**cliAuth** | **String** | Client token | 
**amount** | **Number** | transaction amount casted to float | 
**apiPassword** | **String** | API password. | 
**sign** | **String** | Sign is calculated from cryptographic hash function set in Merchant’s Panel (default SHA-1): hash_alg (method + cli_auth + desc + amount + currency + order_id + language + verification code) where + means concatenation with ampersand symbol. ie. amount + currency &#x3D; 10.99&amp;985 | 
**currency** | **Number** | transaction currency in ISO numeric format | [optional] [default to 985]
**orderId** | **String** | merchant order ID used to recognise payment | [optional] 
**language** | [**Language**](Language.md) |  | [optional] 


