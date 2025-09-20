import axios from "axios";

const apiURL = "https://pokeapi.co/api/v2/pokemon/";

// Get pokemon list
export const getPokemonList = async ({ page = 1, limit = 20 } = {}) => {
  try {
    const offset = (page - 1) * limit;
    const url = `${apiURL}?offset=${offset}&limit=${limit}`;
    const res = await axios.get(url);
    return {
      results: res.data.results,
      next: res.data.next,
      previous: res.data.previous,
    };
  } catch (err) {
    console.error("Error fetching Pokemon list: ", err);
    throw err;
  }
};


// Get pokemon detail by ID
export const getPokemonDetail = async (id) => {
  try {
    const res = await axios.get(`${apiURL}${id}/`);
    return res.data;
  } catch (err) {
    console.error("Error fetching Pokemon detail: ", err);
    throw err;
  }
};
