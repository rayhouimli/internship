
const { text } = require('express');
const fetch = require('node-fetch');
const id="DIN-22";

fetch('https://avaxia.atlassian.net/rest/api/3/issue/'+id+'/worklog', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'raed.houimli@avaxia-group.com:ATATT3xFfGF05MW0V9uIxAUzVqQY1Cb0a8Q2EhZb6lq_DSndp1bCfpB2LelaIMhMcJc7uPLb3b789KNZ8r1O55mrutxgmLLkA9pEXs6HQ7LfnEXhTSECxFRd1S0nVVTgZbWuMLTCCK3b1QSuEeSWbYgMREaA5DDwHu8lnH_tEfXjKJM8nyqmZjU=2412F3D5'
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
})
  .then(async response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    
    return  response.json();
   
    
  })
   
  .then(text => console.log(text))
  
  .catch(err => console.error(err));




  