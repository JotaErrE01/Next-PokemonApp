
const toggleFavorite = (id: number) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if(favorites.includes(id)){
        favorites = favorites.filter(pokeID => pokeID !== id);
    }else{
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInFavorites = (id: number): boolean => {
    // Revisar si estoy en el navegador o en el servidor
    // if(typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}

const getPokemons = (): number[] => JSON.parse(localStorage.getItem('favorites') || '[]');

export {
    toggleFavorite,
    existInFavorites,
    getPokemons
}
