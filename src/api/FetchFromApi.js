const url = 'https://youtube-audio-video-download.p.rapidapi.com/geturl?video_url=https%3A%2F%2Fyoutu.be%2FdQw4w9WgXcQ';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '862e62bdf9msh055a7ae0a2fc0a9p1649a3jsn052ce58de202',
		'X-RapidAPI-Host': 'youtube-audio-video-download.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}