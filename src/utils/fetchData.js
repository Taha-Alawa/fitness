export const exerciseOptions = {
  method: 'GET',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': "553b23ba3cmsh6ef65ee8d7c24bep16e525jsn8937285933ca",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '553b23ba3cmsh6ef65ee8d7c24bep16e525jsn8937285933ca',
  },
};

export const fetchData = async(url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data
}