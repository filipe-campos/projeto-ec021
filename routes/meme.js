var Router = require('restify-router').Router
var wrap = require('../util/util').wrap
var authAPIService = require('../services/authAPIService')
var mongoose = require('mongoose')

require('../model/Meme')

var Meme = mongoose.model('Meme')
var routerInstance = new Router()

// Insert Meme
routerInstance.post('/meme', wrap(async function (req, res) {
	// Token validation
	const token = req.headers.token

	if (!token) {
		res.status(403)
		return res.json({ erro: "Token não fornecido" })
	}

	var response = await authAPIService.validateTokenAuthAPI(token)

	if (response.status != 200) {
		res.status(response.status)
		return res.json(response.data)
	}

	const titulo = req.body.titulo
	const descricao = req.body.descricao
	const ano = req.body.ano

	if (!titulo) {
		res.status(422)
		return res.json({ erro: { titulo: "não pode ser nulo" } })
	}

	if (!descricao) {
		res.status(422)
		return res.json({ erro: { descricao: "não pode ser nulo" } })
	}

	if (!ano) {
		res.status(422)
		return res.json({ erro: { ano: "não pode ser nulo" } })
	}

	var meme = new Meme({
		titulo: titulo,
		descricao: descricao,
		ano: ano
	})

	return meme.save().then(function () {
		return res.json(meme.toJSONFor())
	})

}))

// Update Meme
routerInstance.patch('/meme/:id', wrap(async function (req, res, next) {
	// Token validation
	const token = req.headers.token

	if (!token) {
		res.status(403)
		return res.json({ erro: "Token não fornecido" })
	}

	var response = await authAPIService.validateTokenAuthAPI(token)

	if (response.status != 200) {
		res.status(response.status)
		return res.json(response.data)
	}

	const titulo = req.body.titulo
	const descricao = req.body.descricao
	const ano = req.body.ano

	if (!titulo) {
		res.status(422)
		return res.json({ erro: { titulo: "não pode ser nulo" } })
	}

	if (!descricao) {
		res.status(422)
		return res.json({ erro: { descricao: "não pode ser nulo" } })
	}

	if (!ano) {
		res.status(422)
		return res.json({ erro: { ano: "não pode ser nulo" } })
	}

	newMemeAtt = {
		titulo: titulo,
		descricao: descricao,
		ano: ano
	}

	Meme.findByIdAndUpdate(req.params.id, newMemeAtt, {new: true}, function(err, meme) {

		if(meme === null) {
			res.status(404)
			return res.json({erro: 'Meme não encontrado.'})
		}

		return res.json(meme.toJSONFor())
	})

}))

// Get all Memes
routerInstance.get('/meme', wrap(async function (req, res, next) {
	// Token validation
	const token = req.headers.token

	if (!token) {
		res.status(403)
		return res.json({ erro: "Token não fornecido" })
	}

	var response = await authAPIService.validateTokenAuthAPI(token)

	if (response.status != 200) {
		res.status(response.status)
		return res.json(response.data)
	}

	Meme.find({}).then(function (memes) {
		return res.json(memes)
	}).catch(next)

}))


// Get one Meme
routerInstance.get('/meme/:id', wrap(async function (req, res, next) {
	// Token validation
	const token = req.headers.token

	if (!token) {
		res.status(403)
		return res.json({ erro: "Token não fornecido" })
	}

	var response = await authAPIService.validateTokenAuthAPI(token)

	if (response.status != 200) {
		res.status(response.status)
		return res.json(response.data)
	}

	Meme.findOne({ _id: req.params.id }).then(function (meme) {
		if(meme === null) {
			res.status(404)
			return res.json({erro: 'Meme não encontrado.'})
		}

		return res.json(meme)
	}).catch(next)

}))

// Delete one Meme
routerInstance.del('/meme', wrap(async function (req, res, next) {
	// Token validation
	const token = req.headers.token

	if (!token) {
		res.status(403)
		return res.json({ erro: "Token não fornecido" })
	}

	var response = await authAPIService.validateTokenAuthAPI(token)

	if (response.status != 200) {
		res.status(response.status)
		return res.json(response.data)
	}

	Meme.deleteOne({_id: req.body.id}).then(function () {
		res.status(200)
		return res.json({})
	}).catch(next)

	return res.json({})
}))

module.exports = routerInstance
