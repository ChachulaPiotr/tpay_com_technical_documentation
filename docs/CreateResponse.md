# TpayComTechnicalDocumentation.CreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**Result**](Result.md) |  | 
**err** | [**TransactionErrorCodes**](TransactionErrorCodes.md) |  | [optional] 
**title** | **String** | Transaction title | [optional] 
**amount** | **Number** | transaction amount casted to float | [optional] 
**accountNumber** | **Number** | bank account number (only for manual bank transfers) | [optional] 
**online** | **Number** | Booking payments online indicator | [optional] 
**url** | **String** | Link to transaction (for redirecting to payment) | [optional] 
**desc** | **String** | optional field, contains names of invalid fields. | [optional] 


