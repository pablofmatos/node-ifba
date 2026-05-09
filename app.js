const express = require("express")
const app = express()
app.use(express.json()) // para habilitar o uso do req.body em formato JSON

const port = 8000
const rotalivro = require("./routes/livro.js")
const rotafavorito = require("./routes/favorito.js")

app.use('/livros', rotalivro)
app.use('/favoritos', rotafavorito)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
