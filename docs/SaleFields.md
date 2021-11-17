# TpayComTechnicalDocumentation.SaleFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cliAuth** | **String** | Client token | 
**saleAuth** | **String** | Transaction id in tpay.com system | 
**apiPassword** | **String** | API password. | 
**sign** | **String** | Request sign is calculated from cryptographic hash function set in Merchant’s Panel (default SHA-1): hash_alg (method + cli_auth + sale_auth + verification code); where + means concatenation with ampersand symbol. ie. name + email &#x3D; john done&amp;john.doe@example.com. Passed cli_auth has to match with cli_auth used while creating sale in presale method.  | 


