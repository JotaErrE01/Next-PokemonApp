import { Layout } from '../../components/layouts/Layout';
import { NoFavorites, FavoritePokemons } from '../../components/ui';
import { useEffect, useState } from 'react';
import { getPokemons } from '../../utils';

const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(getPokemons());    
  }, []);

  return (
    <Layout title='Pokemons Favoritos'>
      {
        favoritePokemons.length === 0 ? 
          <NoFavorites />
        :
          <FavoritePokemons favoritePokemons={favoritePokemons} />
      }
    </Layout>
  )
};

export default Favorites;
