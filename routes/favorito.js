const { getFavoritos, getFavorito, postFavorito, patchFavorito, removeFavorito } = require("../controllers/favorito.js")
const { Router } = require("express")
const router = Router()


router.get('/', getFavoritos)
router.get('/:id', getFavorito)
router.post('/', postFavorito)
router.patch('/:id', patchFavorito)
router.delete('/:id', removeFavorito)

module.exports = router
