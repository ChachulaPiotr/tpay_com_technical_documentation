# TpayComTechnicalDocumentation.RefundResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**Result**](Result.md) |  | 
**testMode** | **String** | This parameter is present in response and included in sign calculation only when the merchant account is in test mode. | [optional] 
**saleAuth** | **String** | Transaction id in tpay.com system | 
**saleRef** | **String** |  | [optional] 
**currency** | **Number** | transaction currency in ISO numeric format | [default to 985]
**amount** | **Number** | transaction amount casted to float | 
**date** | **String** | Date of payment | [optional] 
**status** | **String** |  | 
**reason** | **String** | Acquirer (Elavon / eService) rejection code - see \&quot;Card Payments Rejection Codes\&quot; for more details | [optional] 
**sign** | **String** | Response sign &#x3D; hash_alg(test_mode + sale_auth + sale_ref + order_id + cli_auth + card + currency + amount + date + status + reason + verification code).  | 
**card** | **String** |  | [optional] 
**cliAuth** | **String** | Client token | [optional] 
**errCode** | [**CardsErrCode**](CardsErrCode.md) |  | [optional] 



## Enum: StatusEnum


* `correct` (value: `"correct"`)

* `declined` (value: `"declined"`)




