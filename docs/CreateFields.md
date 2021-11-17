# TpayComTechnicalDocumentation.CreateFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Merchant ID in Tpay.com system | 
**amount** | **Number** | Transaction amount. Please always send the amount with two decimal places like 10.00 | 
**description** | **String** | Transaction description | 
**crc** | **String** | Auxiliary parameter to identify the transaction on the merchant side. We do recommend to encode your crc value in base64. The exact value of crc used to create transaction will be returned in tpay payment notification as tr_crc parameter. | [optional] 
**md5sum** | **String** | md5 sum calculated from id.&#39;&amp;&#39;.amount.&#39;&amp;&#39;.crc.&#39;&amp;&#39;.security_code where dots means concatenation (security code can be found in merchant panel). | 
**group** | **Number** | Transaction group number see the \&quot;id\&quot; element in https://secure.tpay.com/groups-{id}0.js . For example https://secure.tpay.com/groups-10100.js or https://secure.tpay.com/groups-10100.js?json | 
**resultUrl** | **String** | Merchant endpoint for payment notification | [optional] 
**resultEmail** | **String** | Email address where notification after payment will be sent (overrides defined in merchant panel). You can add more addresses by comma concatenation. | [optional] 
**merchantDescription** | **String** | Name of merchant displayed in transaction panel (overrides defined in merchant panel) | [optional] 
**customDescription** | **String** | Additional info to be displayed in transaction panel (overrides defined in merchant panel) | [optional] 
**returnUrl** | **String** | url to redirect customer in case of payment success | [optional] 
**returnErrorUrl** | **String** | url to redirect customer in case of payment failure | [optional] 
**language** | **String** | Customer language | [optional] [default to &#39;pl&#39;]
**email** | **String** | customer email | 
**name** | **String** | customer name | 
**address** | **String** | customer address (parameter is empty if this field was not send with create method) | [optional] 
**city** | **String** | customer city (parameter is empty if this field was not send with create method) | [optional] 
**zip** | **String** | customer postal code (parameter is empty if this field was not send with create method) | [optional] 
**country** | **String** | Two letters - see ISO 3166-1 document | [optional] 
**phone** | **String** | customer phone number (parameter is empty if this field was not send with create method) | [optional] 
**acceptTos** | **Number** | Acceptance of Tpay.com regulations done by customer on Merchant site | [optional] 
**apiPassword** | **String** | API password. | 



## Enum: LanguageEnum


* `pl` (value: `"pl"`)

* `en` (value: `"en"`)

* `de` (value: `"de"`)




