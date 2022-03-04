# Kit endpoint headers bug

* Clone the repo and run `npm install`
* Run `node src/server/app.cjs` to start the express backend server on port 5050. It will print out the headers of incoming requests.
* Run `npm run dev` to start kit
* Open the kit home page.

The express server will first print out the headers for the server-side request and you will see that they don't correspond to the original request from your browser. For me they only have this:

```
{
  accept: '*/*',
  'accept-encoding': 'gzip,deflate,br',
  connection: 'close',
  'user-agent': 'node-fetch',
  host: 'localhost:5050'
}
```

The same `fetch` will also be performed on the client in `onMount`, for comparison, so you will see a second set of headers from the client-side request.

For further illustration, the kit endpoint will set the session cookie `hello=world`. If you refresh you will see that it doesn't make it over to the express server either.
