
const url = 'https://www.breakingbadapi.com/api/characters';

const Api = {
    getAllCharacters : async ()=> {
        const res = await fetch(url);
        const json = await res.json();
        return json;
      }
};

export default Api;