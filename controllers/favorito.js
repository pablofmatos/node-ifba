const { getTodosFavoritos, getFavoritoPorId, insereFavorito, modificaFavorito, removePorId } = require("../services/favorito.js")
const SERVER_ERROR = 500
const NOT_FOUND = 404
const UNPROCESSED_ENTITY = 422
const CREATED = 201

async function getFavoritos(req, res) {
    try {
        const favoritos = await getTodosFavoritos()
        res.send(favoritos)
    } catch (error) {
        res.status(SERVER_ERROR).json({ error: error.message })
    }
}

async function getFavorito(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const favorito = await getFavoritoPorId(id)
            if (!favorito) {
                res.status(NOT_FOUND).json({ error: error.message })
                res.send("Favorito não encontrado!!!")
            } else {
                res.send(favorito)
            }
        } else {
            res.status(UNPROCESSED_ENTITY).json({ error: error.message })
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(SERVER_ERROR).json({ error: error.message })
    }
}

async function postFavorito(req, res) {
    try {
        if (req.body.nome) {
            const favoritoNovo = req.body
            await insereFavorito(favoritoNovo)
            res.status(CREATED)
            res.send("Favorito inserido com sucesso!!!")
        } else {
            res.status(UNPROCESSED_ENTITY).json({ error: error.message })
            res.send("O campo nome é obrigatório!!!")
        }
    } catch (error) {
        res.status(SERVER_ERROR).json({ error: error.message })
    }
}

async function patchFavorito(req, res) {
    try {
        const id = parseInt(req.params.id)
        const body = req.body
        const favorito = await modificaFavorito(body, id)
        res.send(favorito)
        res.send("Favorito atualizado com sucesso!!!")
    } catch (error) {
        res.status(SERVER_ERROR).json({ error: error.message })
    }
}

async function removeFavorito(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const favorito = await removePorId(id)
            if (!favorito) {
                res.status(NOT_FOUND).json({ error: error.message })
                res.send("Favorito não encontrado!!!")
            } else {
                res.send(favorito)
            }
        }
    } catch (error) {
        res.status(SERVER_ERROR).json({ error: error.message })
    }
}

module.exports = {
    getFavoritos,
    getFavorito,
    postFavorito,
    patchFavorito,
    removeFavorito
}