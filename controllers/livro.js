/*class livro {
    getLivros(req, res) {
        try {
            // throw new Error("Ocorreu um erro no banco de dados")
            res.send("Olá mundo!!!")
        } catch (error) {
            res.status(SERVER_ERROR)
            res.send(error.message)
        }
    }
}
module.exports = livro
*/

const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, removePorId } = require("../services/livro.js")
const SERVER_ERROR = 500
const NOT_FOUND = 404
const UNPROCESSED_ENTITY = 422
const CREATED = 201

async function getLivros(req, res) {
    try {
        // throw new Error("Ocorreu um erro no banco de dados")
        // res.send("Olá mundo!!!")
        //const livros = JSON.parse(fs.readFileSync("livros.json"))
        const livros = await getTodosLivros()
        res.send(livros)
    } catch (error) {
        // res.status(SERVER_ERROR)
        // res.send(error.message)        
        res.status(SERVER_ERROR).json({ error: error.message })
    }
}

async function getLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const livro = await getLivroPorId(id)
            // console.log(livro)
            if (!livro) {
                res.status(NOT_FOUND).json({ error: error.message })
                res.send("Livro não encontrado!!!")
            } else {
                res.send(livro)
            }
        } else {
            res.status(UNPROCESSED_ENTITY).json({ error: error.message })
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(SERVER_ERROR).json({ error: error.message })
    }
}

async function postLivro(req, res) {
    try {
        if (req.body.nome) {
            const livroNovo = req.body
            await insereLivro(livroNovo)
            res.status(CREATED)
            res.send("Livro inserido com sucesso!!!")
        } else {
            res.status(UNPROCESSED_ENTITY).json({ error: error.message })
            res.send("O campo nome é obrigatório!!!")
        }
    } catch (error) {
        res.status(SERVER_ERROR).json({ error: error.message })
    }
}

async function patchLivro(req, res) {
    try {
        const id = parseInt(req.params.id)
        const body = req.body
        const livro = await modificaLivro(body, id)
        res.send(livro)
        res.send("Livro atualizado com sucesso!!!")
    } catch (error) {
        res.status(SERVER_ERROR).json({ error: error.message })
    }
}

async function removeLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const livro = await removePorId(id)
            //console.log(livro)
            if (!livro) {
                res.status(NOT_FOUND).json({ error: error.message })
                res.send("Livro não encontrado!!!")
            } else {
                res.send(livro)
            }
        }
    } catch (error) {
        res.status(SERVER_ERROR).json({ error: error.message })
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    removeLivro
}