const Constants = {
    PORT: 5000,
    MONGODB_HOST: 'mongodb+srv://adauto:adauto@cluster0-rven8.mongodb.net/test?retryWrites=true&w=majority',
    MONGODB_DBNAME: 'ec021-av2-core'
}

const Routes = {
    AUTH_API_LOGIN: 'https://ec021-2019-2-av2-auth.herokuapp.com/auth/login',
    AUTH_API_VALITE_TOKEN: 'https://ec021-2019-2-av2-auth.herokuapp.com/auth/validateToken'
}

const wrap = function (fn) {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next)
	}
}

module.exports = {
    Constants,
    Routes,
    wrap
}