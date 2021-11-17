# TpayComTechnicalDocumentation.GetResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**Result**](Result.md) |  | [optional] 
**status** | **String** |  | [optional] 
**errorCode** | **String** | Depending on setting in merchant panel, error_code may be different than none for correct status, when acceptance of overpays and surcharges has been set. | [optional] 
**startTime** | **String** | Transaction creation time | [optional] 
**paymentTime** | **String** | Date of payment or empty for pending transactions | [optional] 
**chargebackTime** | **String** | Date of payment refund or empty for not refunded transactions | [optional] 
**channel** | **Number** | Payment channel ID can be recognised in merchant panel (your offer section) | [optional] 
**testMode** | **String** | Returns 1 if transaction was in test mode | [optional] 
**amount** | **Number** | transaction amount casted to float | [optional] 
**amountPaid** | **Number** | The amount paid by customer | [optional] 
**name** | **String** | customer name | [optional] 
**email** | **String** | customer email | [optional] 
**address** | **String** | customer address (parameter is empty if this field was not send with create method) | [optional] 
**code** | **String** | customer postal code (parameter is empty if this field was not send with create method) | [optional] 
**city** | **String** | customer city (parameter is empty if this field was not send with create method) | [optional] 
**phone** | **String** | customer phone number (parameter is empty if this field was not send with create method) | [optional] 
**country** | **String** | Two letters - see ISO 3166-1 document | [optional] 
**err** | [**TransactionErrorCodes**](TransactionErrorCodes.md) |  | [optional] 
**paymentAttempts** | [**[PaymentAttempts]**](PaymentAttempts.md) | List of payment attempts. Currently is returned only for BLIK payment method | [optional] 



## Enum: StatusEnum


* `correct` (value: `"correct"`)

* `paid` (value: `"paid"`)

* `pending` (value: `"pending"`)

* `error` (value: `"error"`)

* `chargeback` (value: `"chargeback"`)





## Enum: ErrorCodeEnum


* `none` (value: `"none"`)

* `overpay` (value: `"overpay"`)

* `surcharge` (value: `"surcharge"`)





## Enum: TestModeEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)




