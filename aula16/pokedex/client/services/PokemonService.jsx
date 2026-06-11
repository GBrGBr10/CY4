import axios from "axios";

export async function listPokemonById(id) {
    const { data } = await axios.get(`http://localhost:9000/api/pokemon/${id}`);
    return data;
}

export async function listPokemon() {
 const { data } = await axios.get("http://localhost:9000/api/pokemon");
 return data;
}

export async function createPokemon(body) {
 const { data } = await axios.post("http://localhost:9000/api/pokemon", body);
 return data;
}

export async function getPokemon(id) {
    const { data } = await axios.get(`http://localhost:9000/api/pokemon/${id}`);
    return data;
}

export async function updatePokemon(id, body) {
    const { data } = await axios.patch(`http://localhost:9000/api/pokemon/${id}`, body);
    return data;
}