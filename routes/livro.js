const { getLivros, getLivro, postLivro, patchLivro, removeLivro } = require("../controllers/livro.js")
const { Router } = require("express")
const router = Router()
// const livro = new controllerlivro()

/*router.get('/', (req, res) => {
    // const livros = livro.getLivros()
    // res.send(livros)
})*/

router.get('/', getLivros)
router.get('/:id', getLivro)
router.post('/', postLivro)
router.patch('/:id', patchLivro)
router.delete('/:id', removeLivro)

// router.patch('/', (req, res) => { res.send("Você fez uma requisição do tipo PATCH!!!") })
//router.delete('/', (req, res) => { res.send("Você fez uma requisição do tipo DELETE!!!") })

module.exports = router
