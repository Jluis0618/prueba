const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cca6f0f47fmsh8ac82c6f592944ep10ab53jsna8f8cc425a5a',
		'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com'
	}
};


fetch('https://open-weather-map27.p.rapidapi.com/weather', options)
.then(res => res.json)
.then(data =>{
    console.log(data)
})

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(res => res.json)
// .then(response =>{
//     console.log(response)
// })
