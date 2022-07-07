import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  const { page, pokemons, isLoading } = useSelector( state => state.pokemons );
  
  const distpatch = useDispatch();

  useEffect(() => {
  
    distpatch( getPokemons( page ) );
    
  }, [])

  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
        <span>
          {
            isLoading ? 'Cargando...' : 'Resultados'
          }
        </span>
        <ul>
            {
              pokemons.map( ({ name, url }) => (
                <li key={ url }> { name } </li>
              ))
            }
        </ul>
        <button 
          disabled={ isLoading } 
          onClick={ () =>  distpatch( getPokemons( page ) ) }
        >
          Next
        </button>
    </>
  )
}
