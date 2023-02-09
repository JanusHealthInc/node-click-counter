# Simple Node Click Counting Server
This is a simple node server that tracks the number of clicks passed to it from an API request.

## Dependencies
[Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

OR

[NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Build & Run
Build steps are available using Yarn or NPM for ease. Either will work and only one is needed. When the application is started it will be available at http://localhost:3000

### Yarn

``` sh
yarn install
yarn tsc
yarn start
```

### NPM

``` sh
npm install
npm run tsc
npm run start
```


## API

### Get click count
#### GET `/user/clicks`
This endpoint returns the total click count.

Response Body:

``` json
{
    "click_count": 5
}
```

### Add to click count
#### POST `/user/clicks`
This endpoint adds the given number in `click_count` to the servers total click count.

Response & Request Body:

``` json
{
    "click_count": 39
}
```


### Reset click count
#### GET `/user/clicks/reset`
This endpoint resets the total click count to 0. Mostly useful for debugging.

Response Body:

``` json
{
    "click_count": 0
}
```
