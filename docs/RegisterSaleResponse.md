# TpayComTechnicalDocumentation.RegisterSaleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**Result**](Result.md) |  | [optional] 
**saleAuth** | **String** | Transaction id in tpay.com system | [optional] 
**sign** | **String** | Sign is calculated from cryptographic hash function set in Merchant’s Panel (default SHA-1): sha1(sale_auth + verification code) where + means concatenation. | [optional] 
**errCode** | [**CardsErrCode**](CardsErrCode.md) |  | [optional] 
**errDesc** | **String** | Error code description if an error occurs or not present in response. - see \&quot;Card Payments Rejection Codes\&quot; for more details | [optional] 


