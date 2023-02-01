# @classapp-tech/iugu-node-lib

## Installation
Use the package manager node to install.

```bash
npm install @classapp-tech/iugu-node-lib
```

## Usage
Initialize the sdk using you API key, previously generated:

```bash
import Iugu, { IuguCustomer } from 'iugu-node-sdk'

Iugu.setApiKey('<YOUR API KEY>')
```
All methods follow the pattern Iugu._{resource}_._{method}_(_model_,_urlParams_)

```bash
const client: IuguCustomer = {
    name: 'John Doe',
    email: 'mail@domain.com'
}

const urlParams: Map<string, string> = new Map()
urlParams.set('id', '558958DB714B389EA6B1FF0A33D75505')

// You can use await
const resultClient : IuguCustomer = await Iugu.customers.update(client, urlParams)

// Or you can use .then
Iugu.customers.create(client, urlParams).then((cli: IuguCustomer) => {
    // On success
}).catch((error: Error) => {
    // On error
})
```
## Tests
To run the tests you need to create the file _iugu\_services.json_ inside _tests_ folder with the data below:

```bash
{
    "accountId": "<SUA ACCOUNT ID>",
    "apiKey": "<API KEY PREFERENCIALMENTE DE TESTES>",
    "clientId": "<UM CLIENT ID VÁLIDO>",
    "paymentMethodToken": "<<UM TOKEN DE FORMA DE PAGAMENTO VÁLIDO>>"
}
```

To run the tests execute:

`npm run test`

## More info
To find more information about requests and his parameters, access the documentation [dev.iugu.com/reference](https://dev.iugu.com/reference) for reference.

## Credits
- This library was created based on the [Vinícius Picanço](https://github.com/V1pi) repository.

## Keywords
iugu