# UniversalApi
---
This repo is boiler codes for people who only has front-end skills and need a proxy server to help bypass CORS issues.

Steps to getting this set up, after cloning this repo.

Run: `npm install`

After the node_module, you write all your front-end codes in the public directory. When you want to run the the server, run `node index.js`. This will create url routes with endpoints correlating to your **.html** files. For the **index.html** this will be your home page.

For the api routes that give you CORS issues. You would do a **POST** call to the `/dan` route. You will pass in an object for that has relivant to the api you are trying to call. The object should look like:
```
{
	"method": [method],
	"url": [url],
	"headers": {
	    [header property]: [header value]
		"contentType": "application/json"
	}
}
```

This route will return data or throw err accordingly.
