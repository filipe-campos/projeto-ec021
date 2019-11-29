var axios = require('axios')
const routes = require('../util/util').Routes

async function loginAuthAPI(username, password) {
    const data = {
        'username': username,
        'password': password
    }

    return await axios.post(routes.AUTH_API_LOGIN, data)
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error.response
    })
}

async function validateTokenAuthAPI(token){
    const data = {}
    
    const config = {
        headers: {
          'token': token
        }
      }

    return await axios.post(routes.AUTH_API_VALITE_TOKEN, data, config)
    .then((response) => {
        return response
    })
    .catch((error) => {        
        return error.response
    })
}

module.exports = {
    loginAuthAPI,
    validateTokenAuthAPI
}