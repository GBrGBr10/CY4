import { useQuery } from '@tanstack/react-query';
import { listPokemon } from '../../services/pokemonService';
import PokemonItem from '../componentes/PokemonItem';


export default function PokemonList() {
 const { data, isLoading, error } = useQuery({
   queryKey: ['pokemon'],
   queryFn: listPokemon,
 });


 if (isLoading) return <p>Carregando...</p>;
 if (error) return <p>Erro ao carregar pokémons</p>;


 return (
   <div>
     <h1>Lista de Pokémons</h1>
     <ul>
       {data.map((pokemon) => (
         <PokemonItem 
            key={pokemon._id}
            name={pokemon.name}
            level={pokemon.level}
            type={pokemon.type}
         />
       ))}
     </ul>
   </div>
 );
}