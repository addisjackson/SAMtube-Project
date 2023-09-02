const API_KEY = import.meta.env.VITE_BASE_API_KEY;
const API_URL = `https://www.googleapis.com/youtube/v3`;

export async function testAPI(maxResults = 8, query=""){
    console.log(API_KEY)
    if(query){
        return await fetch(`${API_URL}/search?part=snippet&key=${API_KEY}&maxResults=${maxResults}&q=${query}`);
    }
    return await fetch(`${API_URL}/search?part=snippet&key=${API_KEY}&maxResults=${maxResults}`);
}

//fetch to get single video stat.
export async function getStatistics(id = ""){
    if(id){
        return await fetch(`${API_URL}/videos?part=statistics&id=${id}&key=${API_KEY}`);
    }
}

