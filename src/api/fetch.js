const API_KEY = import.meta.env.VITE_BASE_API_KEY;
const API_URL = `https://www.googleapis.com/youtube/v3`;

export default async function testAPI(maxResults = 8, query=""){
    console.log(API_KEY)
    if(query){
        return await fetch(`${API_URL}/search?part=snippet&key=${API_KEY}&maxResults=${maxResults}&q=${query}`);
    }
    return await fetch(`${API_URL}/search?part=snippet&key=${API_KEY}&maxResults=${maxResults}`);
}



https://youtube.googleapis.com/youtube/v3/commentThreads?key=[YOUR_API_KEY]