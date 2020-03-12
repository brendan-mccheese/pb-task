# Number Converter API

The code in this repo contains an API that will take a number and convert it into words. Examples of this 
are:

- 100 => one hundred
- 1001 => one thousand and one
- 2233 => two thousand two hundred and thirty three 

## Implementation

The API is wired up using Express. The code is ES6 and transpiled by babel.

There is a single endpoint `GET /convert-number` which takes a parameter `number` e.g. in curl: 

``
curl http://localhost:3000/convert-number?number=1234
``

The API returns a JSON response containing a result property e.g.

```
{
  "result": "one thousand and thirty four"
}
```

The conversion is done in a algorithm located in `/src/convert-numbers-to-string.js`.

The API guards against invalid numbers and missing parameters.

## Usage

First `yarn` in the repo to install dependencies. Then start the API with `yarn start` which will launch nodemon
and run the api.

Running `yarn test` will run the jest tests. There are unit tests for the conversion algorithm and supertest
is used to test the API from the top-down.

## Limitations

- The API doesn't support numbers >= 1 trillion
- The big numbers could be made more readable with commas 
