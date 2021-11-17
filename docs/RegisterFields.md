# TpayComTechnicalDocumentation.RegisterFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Merchant email. Access data for Tpay.com account will be send on this email after registration. | 
**name** | **String** | Merchant&#39;s company name. | 
**nip** | **String** | Taxpayer identification number. | 
**regon** | **String** | National Business Registry Number. | [optional] 
**krsedg** | **String** | Entry number from National Court Register | [optional] 
**legalForm** | **String** | Legal Form Id received from &#39;inputs&#39; method. | 
**branche** | **Number** | Branche id received from &#39;inputs&#39; method. | 
**website** | **String** | Merchant&#39;s website | [optional] 
**phone** | **String** | Merchant phone number | 
**addressStreet** | **String** | Merchant&#39;s company street address. | 
**addressBlock** | **String** | Merchant&#39;s company block number. | 
**addressNr** | **String** | Merchant&#39;s company local number. | 
**addressCity** | **String** | Merchant&#39;s company city address. | 
**addressCode** | **String** | Merchant&#39;s company city postal code. | 
**createApi** | **Number** | Generate access for API transaction. Access data (api_key and  api_password) will be returned in response. | [optional] 
**offerCode** | **String** | Offer code dedicate for merchant and  generate by Sales Department. | [optional] 
**test** | **Number** | Parameter allows recieved an example response with merchant data without creating new account in Tpay.com system. Parameter is obligatory in initial stage of integration. | [optional] 
**apiPassword** | **String** | API password. | 


