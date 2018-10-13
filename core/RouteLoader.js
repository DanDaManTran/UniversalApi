const axios = require('axios');

module.exports = function(app){
  app.post('/dan', (req,res)=>{
    // console.log(req.body)
    return axios({
       method: req.body.method,
       url: req.body.url,
       headers: req.body.header
    })
    .then(result=>{
      let ret = {
        data: result.data,
      };

      // console.log(ret)
      return res.json(ret)
    })
    .catch(err=>{
      let error = {
          message: err.message || 'Something went wrong',
          response: {
              data: err.response.data || null,
          }
      };

      // console.log(error)
      res.status(400).json(error)
    });
  });
};
