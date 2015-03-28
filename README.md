# Blueagent
Bluebird + Superagent = A really cool Promise based HTTP request library  
  
## Download

The source is available for download from npm or here on github

    npm install blueagent
    
```js  
blueagent
  .get('http://someurl')
  .then(function (resp) {  
    console.log(resp.body);
  })
  .catch(function (err) {
    console.log(err);
  });  
```
