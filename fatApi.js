const fatSecretAPI = new require('fatsecret')('64fed318c0ef40dab5568f3561478262', '3e66579ce09a45848c832a35c531dc27');
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