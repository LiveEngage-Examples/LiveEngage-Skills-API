/*
 * This is an example on how you can find you base domain for the LiveEngage Skill API. To run this example
 * you will need to install request, and you will need to update the URL below with your LiveEngage account number.
 * 
 */

// run -  npm install request
var request = require('request');

/* The URL below is for the Read Only URL */
var url = "https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/accountConfigReadOnly/baseURI.json?version=1.0";
/* The URL below is for the Read/Write URL */
// var url = "https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/accountConfigReadWrite/baseURI.json?version=1.0";

request.get({
    url: url,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    }
}, function (e, r, b) {
    if (!e && r.statusCode == 200) {
        console.log(JSON.stringify(b));
    }
    else {
        console.log(e);
    }
});

/*
  Example Response:
	{
	 "service":"accountConfigReadOnly",
	 "account":"56072331",
	 "baseURI":"va-a.acr.liveperson.net"
  }
*/