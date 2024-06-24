const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd422f88e17msh3e105602ae855f4p16d701jsn4cd091a93d7b',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getApi =()=>{
    try {
        const response = fetch(url, options);
        response.then((e)=>{
            let reslut = e.json();
            reslut.then((res)=>{
                console.log(res);
            })
        })
        
    } catch (error) {
        console.log(error);
    }
}

getApi();