import { Pokemon } from '../interfaces/pokemon';
import pokeApi from '../api/pokeApi';

export const getPokemonInfo = async (id: string) => {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
    return { id: data.id, name: data.name, sprites: data.sprites };
}