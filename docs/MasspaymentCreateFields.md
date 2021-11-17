# TpayComTechnicalDocumentation.MasspaymentCreateFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**csv** | **String** | Transfers list encoded with base64. Format has been described in metchod description | 
**apiPassword** | **String** | API password. | 
**sign** | **String** | Checksum to verify parameters received from Merchant. Generated according to outline below using SHA1 function: SHA1(seller_id + transfers list (before encrypting in base64) + Merchant confirmation code) Implementing checksum in PHP: sha1($seller_id. $csv . $confirmation_code)  | 


