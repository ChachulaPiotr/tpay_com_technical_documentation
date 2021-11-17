# TpayComTechnicalDocumentation.VcFinishFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiPassword** | **String** | API password. | 
**summaryData** | **[Array]** | Modified summary_data parameter received from visacheckout_prepare. Can be used, when the total amount or other parameters changea in the order process. | [optional] 
**callId** | **String** | Visa Checkout Call Id | 
**language** | [**Language**](Language.md) |  | [optional] 
**sign** | **String** | Sign is calculated from cryptographic hash function set in Merchant’s Panel (default SHA-1): hash_alg (method + call_id + language + enable_pow_url + verification code) where + means concatenation. | 
**enablePowUrl** | **Number** | If parameter was sent, system will redirect a cutomer to the merchant site after payment. 1 – redirect Adress is set in Merchant Panel. | [optional] 


