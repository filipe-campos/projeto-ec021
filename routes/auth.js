var Router = require('restify-router').Router
var wrap = require('../util/util').wrap
var authAPIService = require('../services/authAPIService')
var routerInstance = new Router()

routerInstance.post('/auth/login', wrap(async function(req, res){
  const username = req.body.username
  const password = req.body.password

  if(!username){
    res.status(422)
    return res.json({errors: {username: "can't be blank"}})
  }

  if(!password){
    res.status(422)
    return res.json({errors: {password: "can't be blank"}})
  }

  var response = await authAPIService.loginAuthAPI(username, password)

  res.status(response.status)

  return res.json(response.data)
}))

module.exports = routerInstance