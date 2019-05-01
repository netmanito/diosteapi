# Diosteapi

npm init
npm install elasticsearch --save
npm install get-json --save
npm install yargs --save

## Usage

```
var client=require ('./connection.js');
var argv = require('yargs').argv;
```

## Queries

* quote - random quote
* quote $word
* quote $author
* quote $id 
* addquote - add quote
* delquote $id - delete quote 

```
node query2.js --search="culo"
```
