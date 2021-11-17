# TpayComTechnicalDocumentation.MasspaymentCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**Result**](Result.md) |  | [optional] 
**sum** | **Number** | Sum of transfers in the package | [optional] 
**count** | **Number** | Number of transfers defined in CSV file | [optional] 
**packId** | **Number** | ID of created pack using method create. | [optional] 
**referers** | **String** | Field visible if transfersID has been sent (see chap. \&quot;Exemplary CSV file\&quot;) in JSON format as following: ID in transfer : ID of transfers in tpay.com system. This allows tracking single transfers.  | [optional] 
**error** | [**MasspaymentErrCode**](MasspaymentErrCode.md) |  | [optional] 
**desc** | [**MasspaymentErrDesc**](MasspaymentErrDesc.md) |  | [optional] 


