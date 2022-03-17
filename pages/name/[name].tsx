import { GetStaticPaths, NextPage, GetStaticProps } from 'next';
import { Layout } from '../../components/layouts/Layout';
import { Grid, Card, Text, Container } from '@nextui-org/react';
import Image from 'next/image';
import { Pokemon } from '../../interfaces';
import pokeApi from '../../api/pokeApi';
import { PokemonsList } from '../../interfaces/pokemon-list';
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props {
  pokemon: Pokemon;
}

const PokemonByName: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout
      title={pokemon.name}
    >
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{padding: '30px'}}>
            <Card.Body>
              <Card.Image 
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} 
                alt={ pokemon.name }
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
              <Text h1 transform='capitalize'> { pokemon.name } </Text>

              {/* <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >{
                isInFavorites ? 'En Favoritos' : 'Guardar en Favoritos'
              }</Button> */}
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container display='flex'>
                <Image 
                  src={pokemon.sprites.front_default}
                  alt="no Sprites"
                  width={100}
                  height={100}
                />

                <Image 
                  src={pokemon.sprites.back_default}
                  alt="no Sprites"
                  width={100}
                  height={100}
                />

                <Image 
                  src={pokemon.sprites.front_shiny}
                  alt="no Sprites"
                  width={100}
                  height={100}
                />

                <Image 
                  src={pokemon.sprites.back_shiny}
                  alt="no Sprites"
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>  
        </Grid>
      </Grid.Container>
    </Layout>
  )
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonsList>('/pokemon?limit=151');
  
  const paths = data.results.map((pokemon) => ({
    params: {
      name: pokemon.name
    }
  }));
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = ( params as { name: string } );
  const pokemon = await getPokemonInfo(name);

  return {
    props: {
      pokemon
    }
  }
}

export default PokemonByName;
