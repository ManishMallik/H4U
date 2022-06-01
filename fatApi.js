const fatSecretAPI = new require('fatsecret')('My Key', 'Secret');
const express = new require('express');
const app = express();

fatSecretAPI.method('foods.search', {
    search_expression: 'Coffiest',
    max_results: 10
  })
  .then(function(results) {
    console.log(results.foods.food);
  })
  .catch(err => console.error(err));

app.get('/foods/search', async (req, res, next) => {
    try{
        const results = await fatSecretAPI.method('foods.search', {
            search_expression: req.query.expression,
            page_number: req.query.page,
            max_results: 10
        });
        res.json(results);
    } catch(e){

    }
});
