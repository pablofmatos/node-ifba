const fs = require("fs")

async function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

async function getLivroPorId(id) {
    const livros = await getTodosLivros()
    /*return livros.map(livro => {
        if (livro.id === id) {
            return livro
        }
    })*/
    return livros.find(livro => livro.id == id)
}

async function insereLivro(livroNovo) {
    const livros = getTodosLivros()
    livros.push(livroNovo)
    fs.writeFileSync("livros.json", JSON.stringify(livros))
}

async function modificaLivro(modificacoes, id) {
    let livrosAtuais = await getTodosLivros()
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = {
        ...livrosAtuais[indiceModificado], ...modificacoes
    }
    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
    return conteudoMudado
}

async function removePorId(id) {
    const livros = await getTodosLivros()
    // const livrosFiltrados = livros.filter(livro => livro.id !== id)
    const livrosFiltrados = livros.filter((livro) => {
        if (!livro || livro.id != id) {
            return livro
        }
    })    
    if (livros.length == livrosFiltrados.length) {
        return false
    } else {
        fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
        return true
    }
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    removePorId
}