# TpayComTechnicalDocumentation.SecuresaleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_3dsUrl** | **String** |  | [optional] 
**result** | [**Result**](Result.md) |  | [optional] 
**testMode** | **String** | This parameter is present in response and included in sign calculation only when the merchant account is in test mode. | [optional] 
**saleAuth** | **String** | Transaction id in tpay.com system | [optional] 
**cliAuth** | **String** | Client token | [optional] 
**currency** | **Number** | transaction currency in ISO numeric format | [optional] [default to 985]
**amount** | **Number** | transaction amount casted to float | [optional] 
**date** | **String** | Date of payment | [optional] 
**status** | **String** |  | [optional] 
**reason** | **String** | Acquirer (Elavon / eService) rejection code - see \&quot;Card Payments Rejection Codes\&quot; for more details | [optional] 
**card** | **String** | Card number last 4 digits - for example ****1234 | [optional] 
**sign** | **String** | sign is calculated from cryptographic hash function set in Merchant panel (default SHA-1) hash_alg(test_mode + sale_auth + cli_auth + card + currency + amount + date + status + verification code)  | [optional] 
**errCode** | [**CardsErrCode**](CardsErrCode.md) |  | [optional] 
**errDesc** | **String** | Error code description if an error occurs or not present in response. - see \&quot;Card Payments Rejection Codes\&quot; for more details | [optional] 



## Enum: StatusEnum


* `correct` (value: `"correct"`)

* `declined` (value: `"declined"`)




