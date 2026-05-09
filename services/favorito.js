const fs = require("fs")

async function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

async function getFavoritoPorId(id) {
    const favoritos = await getTodosFavoritos()
    return favoritos.find(favorito => favorito.id == id)
}

async function insereFavorito(favoritoNovo) {
    const favoritos = getTodosFavoritos()
    favoritos.push(favoritoNovo)
    fs.writeFileSync("favoritos.json", JSON.stringify(favoritos))
}

async function modificaFavorito(modificacoes, id) {
    let favoritosAtuais = await getTodosFavoritos()
    const indiceModificado = favoritosAtuais.findIndex(favorito => favorito.id === id)
    const conteudoMudado = {
        ...favoritosAtuais[indiceModificado], ...modificacoes
    }
    favoritosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("favoritos.json", JSON.stringify(favoritosAtuais))
    return conteudoMudado
}

async function removePorId(id) {
    const favoritos = await getTodosFavoritos()
    const favoritosFiltrados = favoritos.filter((favorito) => {
        if (!favorito || favorito.id != id) {
            return favorito
        }
    })    
    if (favoritos.length == favoritosFiltrados.length) {
        return false
    } else {
        fs.writeFileSync("favoritos.json", JSON.stringify(favoritosFiltrados))
        return true
    }
}

module.exports = {
    getTodosFavoritos,
    getFavoritoPorId,
    insereFavorito,
    modificaFavorito,
    removePorId
}