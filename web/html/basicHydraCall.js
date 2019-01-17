const Hydra = require('ory-hydra-sdk');

Hydra.ApiClient.instance.basePath = 'http://localhost:4445';

// API Usage

const hydra = new Hydra.AdminAPI();

hydra.listOAuth2Clients((error,data,response)=>{
    if(error){
        //a network error occurred
        throw error;
    }else if(response.statusCode < 200 || response.statusCode >=400){
        throw new Error('Consent endpoint gave status code ' + response.statusCode + ', but status code 200 was expected.')
    }
    console.log(response); // a list of OAuth2 clients.
});