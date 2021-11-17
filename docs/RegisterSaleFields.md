# TpayComTechnicalDocumentation.RegisterSaleFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | customer name | 
**email** | **String** | customer email | 
**desc** | **String** | transaction description | 
**amount** | **Number** | transaction amount casted to float | 
**apiPassword** | **String** | API password. | 
**sign** | **String** | Sign is calculated from cryptographic hash function set in Merchant’s Panel (default SHA-1): sha1(method + name + email + desc + amount + currency + order_id + onetimer + language + verification code) where + means concatenation with ampersand symbol. ie. name + email &#x3D; john done&amp;john.doe@example.com | 
**currency** | **Number** | transaction currency in ISO numeric format | [optional] [default to 985]
**onetimer** | [**Onetimer**](Onetimer.md) |  | [optional] 
**powUrl** | **String** | url to redirect customer in case of payment success | [optional] 
**powUrlBlad** | **String** | url to redirect customer in case of payment failure | [optional] 
**orderId** | **String** | merchant order ID used to recognise payment | [optional] 
**language** | [**Language**](Language.md) |  | [optional] 


